import React from 'react';
import { LayoutDashboard, Image as ImageIcon, TrendingUp, LogOut, Menu as MenuIcon, X, CreditCard, CheckCircle } from 'lucide-react';

interface AdminSidebarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  hasApiKey: boolean;
  onConnectBilling: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  hasApiKey, 
  onConnectBilling 
}) => {
  return (
    <>
      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-black/50 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 z-50">
          <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center font-bold text-white font-serif italic">M</div>
               <span className="font-serif font-bold text-lg">MenuOS</span>
          </div>
          <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-gray-300">
              <MenuIcon />
          </button>
      </div>

      {/* SIDEBAR */}
      <aside className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-black/80 backdrop-blur-xl border-r border-white/10 flex flex-col transition-transform duration-300
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          md:relative
      `}>
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
           <div className="flex items-center gap-3">
               <div className="w-9 h-9 bg-brand-primary rounded-xl flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(249,65,68,0.5)] font-serif italic text-xl">M</div>
               <div>
                   <h1 className="text-xl font-serif font-bold tracking-tight text-white leading-none">MenuOS</h1>
                   <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">Panel de Control</span>
               </div>
           </div>
           <button onClick={() => setMobileMenuOpen(false)} className="md:hidden text-gray-400"><X /></button>
        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-2">
            <div className="px-3 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Gestión</div>
            <a href="#" className="flex items-center space-x-3 bg-brand-primary/20 text-brand-primary border border-brand-primary/30 p-3 rounded-xl font-medium transition-all shadow-[0_0_10px_rgba(249,65,68,0.2)]">
                <LayoutDashboard size={20} />
                <span>Catálogo de Menú</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-colors">
                <ImageIcon size={20} />
                <span>Estudio Multimedia</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-colors">
                <TrendingUp size={20} />
                <span>Rendimiento</span>
            </a>
            
            <div className="mt-8 px-3 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Sistema</div>
            {!hasApiKey ? (
                <button onClick={onConnectBilling} className="w-full flex items-center space-x-3 text-yellow-500 hover:text-yellow-400 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 p-3 rounded-xl transition-colors text-left animate-pulse">
                    <CreditCard size={20} />
                    <span className="text-sm font-bold">Conectar Facturación</span>
                </button>
            ) : (
                <div className="w-full flex items-center space-x-3 text-green-500 bg-green-500/10 border border-green-500/20 p-3 rounded-xl">
                    <CheckCircle size={20} />
                    <span className="text-sm font-bold">Facturación Activa</span>
                </div>
            )}
        </nav>
        
        <div className="p-4 border-t border-white/10 bg-black/40">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
                <div>
                    <div className="text-sm font-bold text-white">Chef Admin</div>
                    <div className="text-xs text-gray-400">admin@menuos.com</div>
                </div>
            </div>
            <button className="flex items-center space-x-3 text-gray-400 hover:text-red-400 w-full p-2 rounded-lg hover:bg-white/5 transition-colors text-sm">
                <LogOut size={16} />
                <span>Cerrar Sesión</span>
            </button>
        </div>
      </aside>
    </>
  );
};