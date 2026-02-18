import React, { useState, useEffect } from 'react';
import { Wand2, Image as ImageIcon, Loader2 } from 'lucide-react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { useAdminAI } from '../hooks/useAdminAI';

// Sub-components
import { AdminSidebar } from '../components/admin/AdminSidebar';
import { AdminMetrics } from '../components/admin/AdminMetrics';
import { AdminMenuTable } from '../components/admin/AdminMenuTable';
import { AdminImageGenModal } from '../components/admin/AdminImageGenModal';

export const AdminDashboard: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>(MENU_ITEMS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Image Generation UI State
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const [imgPrompt, setImgPrompt] = useState('');
  const [imgSize, setImgSize] = useState<"1K" | "2K" | "4K">("1K");
  
  // Auth State
  const [hasApiKey, setHasApiKey] = useState(false);

  // Check for existing key on mount
  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio && window.aistudio.hasSelectedApiKey) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (hasKey) setHasApiKey(true);
      }
    };
    checkKey();
  }, []);

  const handleConnectBilling = async () => {
    try {
      if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
        await window.aistudio.openSelectKey();
        setHasApiKey(true);
      } else {
        console.warn("AI Studio helper not found.");
        // Fallback for dev environments without the wrapper
        setHasApiKey(true);
      }
    } catch (error) {
      console.error("Failed to connect billing:", error);
    }
  };

  // AI Hook
  const {
      loadingId,
      analyzing,
      healthScore,
      generatedImg,
      editInstruction,
      setEditInstruction,
      handleGenerateDescription,
      handleGenerateImage,
      handleEditImage,
      handleMenuAnalysis
  } = useAdminAI(items, setItems, hasApiKey, handleConnectBilling);

  return (
    <div className="min-h-screen text-gray-100 font-sans flex relative overflow-hidden bg-gray-900">
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover grayscale opacity-20" 
            alt="Admin Background"
        />
        <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm"></div>
      </div>

      <AdminSidebar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        hasApiKey={hasApiKey} 
        onConnectBilling={handleConnectBilling} 
      />

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto relative z-10 pt-16 md:pt-0">
        <div className="max-w-7xl mx-auto p-6 md:p-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div>
                    <h2 className="text-4xl font-serif font-bold text-white mb-2">Catálogo de Menú</h2>
                    <p className="text-gray-400 font-light">Orquesta tu oferta culinaria con precisión de IA.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button 
                        onClick={handleMenuAnalysis}
                        disabled={analyzing}
                        className="flex-1 md:flex-none justify-center flex items-center space-x-2 bg-white/5 border border-white/10 text-gray-200 px-5 py-3 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all disabled:opacity-50 font-medium backdrop-blur-md"
                    >
                        {analyzing ? <Loader2 className="animate-spin text-purple-400" size={18} /> : <Wand2 size={18} className="text-purple-400" />}
                        <span>Analizar Menú</span>
                    </button>
                    <button 
                        onClick={() => setIsImgModalOpen(true)}
                        className="flex-1 md:flex-none justify-center flex items-center space-x-2 bg-brand-primary text-white px-6 py-3 rounded-xl hover:bg-brand-primary/80 shadow-[0_0_20px_rgba(249,65,68,0.4)] transition-all font-bold tracking-wide"
                    >
                        <ImageIcon size={18} />
                        <span>AI Studio</span>
                    </button>
                </div>
            </header>

            <AdminMetrics items={items} />

            {/* AI Insight Box */}
            {healthScore && (
                <div className="mb-10 bg-gradient-to-r from-purple-900/40 to-black/40 backdrop-blur-md p-8 rounded-3xl border border-purple-500/30 animate-fade-in relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity"><Wand2 size={120} className="text-purple-500" /></div>
                    <h3 className="font-serif font-bold text-2xl mb-6 text-white flex items-center gap-3"><Wand2 size={24} className="text-purple-400" /> Insights del Chef IA</h3>
                    <div className="flex flex-col md:flex-row gap-10 relative z-10">
                        <div className="text-center">
                            <div className="w-24 h-24 rounded-full border-4 border-purple-500/30 flex items-center justify-center bg-black/40 shadow-xl">
                                <span className="text-4xl font-serif font-bold text-purple-400">{healthScore.score}</span>
                            </div>
                            <div className="text-[10px] font-bold text-purple-300 uppercase tracking-widest mt-3">Salud del Menú</div>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-gray-300 mb-3 uppercase tracking-wide">Sugerencias de Optimización</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {healthScore.suggestions?.map((s: string, i: number) => (
                                    <li key={i} className="text-sm text-gray-300 bg-purple-500/10 p-3 rounded-lg border border-purple-500/20 flex items-start gap-2">
                                        <span className="text-purple-400 mt-1">•</span> {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <AdminMenuTable 
                items={items} 
                loadingId={loadingId} 
                onGenerateDescription={handleGenerateDescription} 
            />
        </div>
      </main>

      <AdminImageGenModal 
        isOpen={isImgModalOpen}
        onClose={() => setIsImgModalOpen(false)}
        prompt={imgPrompt}
        setPrompt={setImgPrompt}
        size={imgSize}
        setSize={setImgSize}
        generatedImg={generatedImg}
        loadingId={loadingId}
        onGenerate={() => handleGenerateImage(imgPrompt, imgSize)}
        hasApiKey={hasApiKey}
        editInstruction={editInstruction}
        setEditInstruction={setEditInstruction}
        onEdit={handleEditImage}
      />
    </div>
  );
};