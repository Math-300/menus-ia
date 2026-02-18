
import React from 'react';
import { LayoutDashboard, CheckCircle, DollarSign } from 'lucide-react';
import { MenuItem } from '../../types';
import { formatCurrency } from '../../utils/format';

interface AdminMetricsProps {
  items: MenuItem[];
}

export const AdminMetrics: React.FC<AdminMetricsProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
            <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Total Items</p>
                <p className="text-3xl font-serif font-medium text-white">{items.length}</p>
            </div>
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/20"><LayoutDashboard size={24} /></div>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
            <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Activos</p>
                <p className="text-3xl font-serif font-medium text-white">{items.filter(i => i.available).length}</p>
            </div>
            <div className="p-3 bg-green-500/20 text-green-400 rounded-xl border border-green-500/20"><CheckCircle size={24} /></div>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
            <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Ingresos (Est)</p>
                {/* Default to COP/es-CO for admin view */}
                <p className="text-3xl font-serif font-medium text-white">$ {formatCurrency(2450000)}</p>
            </div>
            <div className="p-3 bg-orange-500/20 text-brand-primary rounded-xl border border-orange-500/20"><DollarSign size={24} /></div>
        </div>
    </div>
  );
};
