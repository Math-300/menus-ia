
import React, { useState, useEffect, Suspense } from 'react';
import { DinerHome } from './pages/DinerHome';
import { applyTheme } from './utils/theme';
import { RESTAURANT_DB } from './data/mockData';
import { RestaurantData } from './types';
import { Loader2, Ghost } from 'lucide-react';

// Lazy load Admin
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard').then(module => ({ default: module.AdminDashboard })));

// 404 Component
const NotFoundScreen = () => (
    <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center text-white p-6 text-center">
        <Ghost size={64} className="text-white/20 mb-6" />
        <h1 className="text-3xl font-serif italic mb-2">Restaurante no encontrado</h1>
        <p className="text-gray-500 text-sm max-w-xs">La experiencia digital que buscas no está disponible o la URL es incorrecta.</p>
        <div className="mt-8 flex gap-4">
            <a href="#/r/demo-grill" className="text-xs font-bold uppercase tracking-widest text-brand-primary border border-brand-primary/30 px-4 py-2 rounded-lg hover:bg-brand-primary/10">Ir a Demo Grill</a>
            <a href="#/r/sushi-master" className="text-xs font-bold uppercase tracking-widest text-brand-primary border border-brand-primary/30 px-4 py-2 rounded-lg hover:bg-brand-primary/10">Ir a Sushi</a>
        </div>
    </div>
);

// Loading Component
const LoadingScreen = () => (
  <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center text-white z-[9999]">
      <div className="flex flex-col items-center gap-6">
          <div className="relative w-16 h-16">
             <div className="absolute inset-0 border-t-2 border-brand-primary rounded-full animate-spin"></div>
             <div className="absolute inset-2 border-r-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="font-serif italic text-2xl tracking-wider">MenuOS</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 animate-pulse">Cargando Experiencia</span>
          </div>
      </div>
  </div>
);

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');
  
  // State for Multi-tenancy
  const [restaurantData, setRestaurantData] = useState<RestaurantData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    const handleRoute = () => {
        const hash = window.location.hash || '#/';
        setRoute(hash);
        
        // --- ROUTING LOGIC ---
        
        // 1. Admin Route
        if (hash.startsWith('#/admin')) {
            setIsLoading(false);
            return;
        }

        // 2. Restaurant Routes: #/r/:slug or #/restaurante/:slug
        let slug = 'demo-grill'; // Default fallback
        const match = hash.match(/#\/(r|restaurante)\/([a-zA-Z0-9-]+)/);
        
        if (match && match[2]) {
            slug = match[2];
        } else if (hash !== '#/' && !hash.startsWith('#/r/')) {
            // Unknown route format
            setIs404(true);
            setIsLoading(false);
            return;
        }

        // 3. Fetch Data (Simulation)
        setIsLoading(true);
        // Simulate network delay for realism
        setTimeout(() => {
            const data = RESTAURANT_DB[slug];
            if (data) {
                setRestaurantData(data);
                applyTheme(data.config.theme); // <--- THEME ENGINE TRIGGER
                setIs404(false);
            } else {
                setIs404(true);
            }
            setIsLoading(false);
        }, 600);
    };

    handleRoute(); // Initial load
    window.addEventListener('hashchange', handleRoute);
    return () => window.removeEventListener('hashchange', handleRoute);
  }, []);

  if (route.startsWith('#/admin')) {
      return (
        <Suspense fallback={<LoadingScreen />}>
            <AdminDashboard />
        </Suspense>
      );
  }

  if (isLoading) return <LoadingScreen />;
  if (is404 || !restaurantData) return <NotFoundScreen />;

  return (
    <Suspense fallback={<LoadingScreen />}>
        <DinerHome 
            config={restaurantData.config}
            menuItems={restaurantData.menu}
            stories={restaurantData.stories}
            categories={restaurantData.categories}
        />
    </Suspense>
  );
};

export default App;