
import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { MenuItem, Story, Category, RestaurantConfig } from '../types';
import { useMenuFilter } from '../hooks/useMenuFilter';
import { useCart } from '../hooks/useCart';
import { getRecommendations } from '../services/geminiService';
import { generateWhatsAppLink } from '../utils/whatsapp';

// Components
import { StoryRail } from '../components/diner/StoryRail';
import { DishCard } from '../components/diner/DishCard';
import { HeroSection } from '../components/diner/HeroSection';
import { DinerHeader } from '../components/diner/DinerHeader';
import { DinerNavbar } from '../components/diner/DinerNavbar';
import { DinerFooter } from '../components/diner/DinerFooter';
import { StoryViewer } from '../components/diner/StoryViewer';
import { SectionRow } from '../components/diner/SectionRow';
import { DishDetailModal } from '../components/diner/DishDetailModal';
import { SelectionDock } from '../components/diner/SelectionDock';
import { OrderSummaryModal } from '../components/diner/OrderSummaryModal'; 
import { Toast } from '../components/ui/Toast';
import { CardSkeleton } from '../components/ui/Skeleton';
import { Modal } from '../components/ui/Modal';
import { Clock, MapPin, Globe, BrainCircuit } from 'lucide-react';

// Lazy Load ChatBot
const ChatBot = React.lazy(() => import('../components/diner/ChatBot').then(module => ({ default: module.ChatBot })));

interface DinerHomeProps {
  config: RestaurantConfig;
  menuItems: MenuItem[];
  stories: Story[];
  categories: Category[];
}

export const DinerHome: React.FC<DinerHomeProps> = ({ config, menuItems, stories, categories }) => {
  // State for UI interactions
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [viewingStoryId, setViewingStoryId] = useState<string | null>(null); // Changed to ID
  const [showInfo, setShowInfo] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  
  // Feedback State
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  // Cart Logic (Refactored to Hook)
  const { selection, addToCart, updateQuantity, removeFromCart, clearCart } = useCart();
  
  // Favorites State (Session Persistence)
  const [likedItemIds, setLikedItemIds] = useState<Set<string>>(new Set());
  
  // Recommendation State
  const [recommendedItems, setRecommendedItems] = useState<MenuItem[]>([]);
  const [isRecLoading, setIsRecLoading] = useState(false);

  // Custom Hook for Logic
  const { 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery, 
    filteredItems 
  } = useMenuFilter(menuItems); 

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize Default Recommendations
  useEffect(() => {
      const defaultMix = menuItems.filter(i => i.new || i.popular).sort(() => 0.5 - Math.random()).slice(0, 4);
      setRecommendedItems(defaultMix);
  }, [menuItems]);

  // AI Recommendation Logic
  useEffect(() => {
      if (selection.length > 0 && selection.length % 2 !== 0) { 
          const fetchRecs = async () => {
             setIsRecLoading(true);
             const likedNames = selection.map(i => i.name);
             const allNames = menuItems.map(i => i.name);
             
             await new Promise(r => setTimeout(r, 800)); 

             const recNames = await getRecommendations(likedNames, allNames);
             
             if (recNames && recNames.length > 0) {
                 const recs = menuItems.filter(i => recNames.includes(i.name));
                 if (recs.length > 0) {
                    setRecommendedItems(recs);
                 }
             }
             setIsRecLoading(false);
          };
          fetchRecs();
      }
  }, [selection, menuItems]);

  // Handlers
  const handleToggleLike = (itemId: string) => {
      setLikedItemIds(prev => {
          const next = new Set(prev);
          if (next.has(itemId)) {
              next.delete(itemId);
          } else {
              next.add(itemId);
          }
          return next;
      });
  };

  const handleAddToSelection = (newItem: MenuItem) => {
      addToCart(newItem);
      setToastMessage(`${newItem.name} agregado`);
      setToastVisible(true);
  };

  const handleConfirmOrder = () => {
      // 1. Generate Link
      const link = generateWhatsAppLink(selection, config.name, config.currency);
      
      // 2. Open in new tab (Mobile app usually)
      window.open(link, '_blank');

      // 3. Clear cart and show confirmation
      clearCart();
      setToastMessage("¡Abriendo WhatsApp para enviar!");
      setToastVisible(true);
  };

  // NEW: Handler for Story CTA
  const handleStoryAction = (linkedItemId: string) => {
      const item = menuItems.find(i => i.id === linkedItemId);
      if (item) {
          setViewingStoryId(null); // Close story
          setTimeout(() => setSelectedItem(item), 300); // Open modal with slight delay for smoothness
      }
  };

  // Derived Data for Sections
  const popularItems = useMemo(() => menuItems.filter(i => i.popular), [menuItems]);
  const chefItems = useMemo(() => menuItems.filter(i => i.chefChoice), [menuItems]);
  const activeCategoryName = useMemo(() => categories.find(c => c.id === selectedCategory)?.name, [selectedCategory, categories]);

  return (
    <div className="min-h-screen relative text-gray-100 font-sans selection:bg-brand-primary selection:text-white">
      
      {/* --- NEXT-GEN GLASSMORPHISM BACKGROUND SYSTEM --- */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#030712]">
        
        {/* 1. Base Atmospheric Image */}
        {/* Using a high-res, moody interior shot. Scale-105 prevents blur bleeding at edges. */}
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80" 
                className="w-full h-full object-cover opacity-60 blur-[2px] scale-105 transform transition-transform duration-[20s] hover:scale-110" 
                alt="Ambience"
            />
        </div>

        {/* 2. Spotlight Gradient (Radial) */}
        {/* This creates a vignette effect: brighter in center, dark at edges to frame content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(3,7,18,0.5)_50%,_rgba(3,7,18,0.95)_100%)]"></div>

        {/* 3. Noise Texture (Film Grain) */}
        {/* Adds tactile feel to the glass */}
        <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay pointer-events-none"></div>

        {/* 4. Brand Ambient Glow */}
        {/* Subtle color bleeding to brand the atmosphere without overwhelming */}
        <div className="absolute -top-[10%] left-[20%] w-[60vw] h-[60vw] bg-brand-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[5000ms]"></div>
        
      </div>

      {/* --- MAIN CONTENT LAYER --- */}
      <div className="relative z-10">
        <DinerHeader config={config} onOpenInfo={() => setShowInfo(true)} /> 
        
        <DinerNavbar 
            scrolled={scrolled}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
        />

        <main className="pt-2">
            
            {/* 1. STORIES with Info Handler */}
            {!searchQuery && selectedCategory === 'all' && (
              <section className="pl-1 animate-fade-in">
                <StoryRail 
                    stories={stories} 
                    onViewStory={(story) => setViewingStoryId(story.id)} 
                    onOpenBrand={() => setShowInfo(true)} 
                />
              </section>
            )}

            {/* 2. HERO DISH */}
            {!searchQuery && selectedCategory === 'all' && menuItems.length > 0 && (
                <HeroSection item={menuItems[0]} onClick={setSelectedItem} />
            )}

            {/* 3. SEARCH RESULTS */}
            {searchQuery && (
                <section className="px-6 animate-fade-in pt-4 pb-20">
                    <h2 className="text-sm font-light text-gray-400 mb-8 uppercase tracking-[0.2em]">Resultados para "{searchQuery}"</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {filteredItems.map(item => (
                            <DishCard 
                                key={item.id} 
                                item={item} 
                                onClick={setSelectedItem} 
                                onAdd={handleAddToSelection} 
                                layout="horizontal" 
                                currency={config.currency}
                            />
                        ))}
                        {filteredItems.length === 0 && (
                             <div className="text-center py-12 opacity-50">
                                 <p className="font-serif italic text-xl">Sin resultados</p>
                                 <p className="text-xs mt-2 uppercase tracking-widest">Intenta otra búsqueda</p>
                             </div>
                        )}
                    </div>
                </section>
            )}

            {/* 4. DEFAULT HOME VIEW */}
            {!searchQuery && selectedCategory === 'all' && (
              <div className="space-y-8 animate-fade-in">
                
                {/* Personalization Section "Para Ti" */}
                <div className="relative border-b border-white/5 pb-2">
                      <div className="px-6 flex justify-between items-end mb-4">
                        <div className="flex items-center gap-2">
                             <h2 className="text-3xl font-serif italic text-white/90">Para ti</h2>
                             {isRecLoading && <BrainCircuit size={14} className="text-brand-primary animate-pulse" />}
                        </div>
                        <span className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                             {isRecLoading ? 'Personalizando...' : 'Basado en tu gusto'}
                        </span>
                      </div>
                      
                      <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {isRecLoading ? (
                              <>
                                <CardSkeleton />
                                <CardSkeleton />
                              </>
                          ) : (
                              recommendedItems.slice(0, 4).map(item => (
                                <DishCard 
                                    key={`rec-${item.id}`} 
                                    item={item} 
                                    onClick={setSelectedItem} 
                                    onAdd={handleAddToSelection}
                                    layout="horizontal" 
                                    currency={config.currency}
                                />
                              ))
                          )}
                      </div>
                </div>

                <SectionRow title="Tendencias" items={popularItems} onItemClick={setSelectedItem} currency={config.currency} />
                <SectionRow title="Selección del Chef" items={chefItems} onItemClick={setSelectedItem} currency={config.currency} />
                
                <section className="px-6 pb-8">
                    <div className="flex items-center justify-center mb-16 mt-12">
                        <div className="h-px bg-white/5 w-full"></div>
                        <span className="shrink-0 px-6 text-[10px] font-bold tracking-[0.4em] text-gray-600 uppercase">La Colección</span>
                        <div className="h-px bg-white/5 w-full"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
                       {menuItems.map(item => (
                           <DishCard key={item.id} item={item} onClick={setSelectedItem} layout="vertical" className="w-full" currency={config.currency} />
                       ))}
                    </div>
                </section>

                <DinerFooter />
              </div>
            )}
            
            {/* 5. CATEGORY FILTERED VIEW */}
            {!searchQuery && selectedCategory !== 'all' && (
               <section className="px-6 animate-fade-in pb-20">
                   <div className="py-12 text-center">
                       <h2 className="text-5xl font-serif italic text-white capitalize tracking-tight mb-3">{activeCategoryName}</h2>
                       <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em]">Selección Curada</p>
                   </div>
                   <div className="grid grid-cols-1 gap-4">
                        {filteredItems.map(item => (
                            <DishCard 
                                key={item.id} 
                                item={item} 
                                onClick={setSelectedItem} 
                                onAdd={handleAddToSelection} 
                                layout="horizontal" 
                                currency={config.currency}
                            />
                        ))}
                   </div>
                   <DinerFooter />
               </section> 
            )}
        </main>
      </div>

      {/* 3. OVERLAYS */}
      <Toast 
         message={toastMessage} 
         isVisible={toastVisible} 
         onClose={() => setToastVisible(false)} 
      />

      {/* UX IMPROVEMENT: Hide Selection Dock if Summary Modal is active */}
      {!showOrderSummary && (
          <SelectionDock 
            selection={selection} 
            onViewOrder={() => setShowOrderSummary(true)} 
            currency={config.currency}
          />
      )}

      <Suspense fallback={null}>
        <ChatBot 
            searchQuery={searchQuery}
            activeCategory={selectedCategory}
        />
      </Suspense>

      <DishDetailModal 
        item={selectedItem}
        menuItems={menuItems}
        onClose={() => setSelectedItem(null)} 
        onAdd={handleAddToSelection}
        isLiked={selectedItem ? likedItemIds.has(selectedItem.id) : false}
        onToggleLike={() => selectedItem && handleToggleLike(selectedItem.id)}
        currency={config.currency}
      />

      <OrderSummaryModal
        isOpen={showOrderSummary}
        onClose={() => setShowOrderSummary(false)}
        selection={selection}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onConfirmOrder={handleConfirmOrder}
        currencySymbol={config.currency}
      />
      
      <Modal isOpen={showInfo} onClose={() => setShowInfo(false)} title="Sobre la Casa">
            <div className="p-6">
                <div className="text-center mb-8">
                     <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-primary/20 shadow-[0_0_30px_rgba(var(--color-brand-primary),0.2)]">
                        {config.logo ? <img src={config.logo} className="w-full h-full object-cover rounded-full" alt="" /> : <span className="font-serif text-3xl italic text-brand-primary font-bold">{config.name.charAt(0)}</span>}
                     </div>
                     <h2 className="text-3xl font-serif text-white mb-2 italic">{config.name}</h2>
                     <p className="text-xs text-gray-400 uppercase tracking-widest">{config.tagline}</p>
                </div>

                <div className="space-y-4 bg-white/5 rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <Clock size={14} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Horario</p>
                            <p>Abierto • Cierra a las 11:00 PM</p>
                        </div>
                    </div>
                    <div className="h-px bg-white/5 w-full"></div>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                         <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <MapPin size={14} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Ubicación</p>
                            <p>Calle Principal 123, Zona Gourmet</p>
                        </div>
                    </div>
                    <div className="h-px bg-white/5 w-full"></div>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                         <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <Globe size={14} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Sitio Web</p>
                            <p className="text-brand-primary underline cursor-pointer">www.menuos.com</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500 italic font-serif leading-relaxed px-4">
                        "Una experiencia culinaria diseñada para deleitar los sentidos, fusionando tradición e innovación en cada plato."
                    </p>
                </div>
            </div>
      </Modal>

      {viewingStoryId && (
          <StoryViewer 
            stories={stories} 
            initialStoryId={viewingStoryId} 
            onClose={() => setViewingStoryId(null)}
            onAction={handleStoryAction} 
          />
      )}
    </div>
  );
};
