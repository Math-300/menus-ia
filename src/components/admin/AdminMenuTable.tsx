'use client';

import React from 'react';
import { Wand2, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { MenuItem } from '@/types';
import { formatCurrency } from '@/lib/utils/format';

interface AdminMenuTableProps {
    items: MenuItem[];
    loadingId: string | null;
    onGenerateDescription: (item: MenuItem) => void;
}

export const AdminMenuTable: React.FC<AdminMenuTableProps> = ({ items, loadingId, onGenerateDescription }) => {
    return (
        <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10">
                        <tr>
                            <th className="p-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Detalle del Ítem</th>
                            <th className="p-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Categoría</th>
                            <th className="p-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Precio</th>
                            <th className="p-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Herramientas IA</th>
                            <th className="p-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {items.map(item => (
                            <tr key={item.id} className="group hover:bg-white/5 transition-colors">
                                <td className="p-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="h-14 w-14 rounded-xl bg-gray-800 overflow-hidden shadow-lg border border-white/10 group-hover:border-brand-primary/50 transition-colors">
                                            <img src={item.image} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div>
                                            <div className="font-serif font-medium text-lg text-white group-hover:text-brand-primary transition-colors">{item.name}</div>
                                            <div className="text-xs text-gray-500 truncate max-w-[150px] md:max-w-[250px] mt-1 font-light">{item.description}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-6">
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-bold text-gray-300 capitalize border border-white/10">
                                        {item.category}
                                    </span>
                                </td>
                                {/* Default formatter used */}
                                <td className="p-6 font-serif font-bold text-white text-lg">$ {formatCurrency(item.price)}</td>
                                <td className="p-6">
                                    <button
                                        onClick={() => onGenerateDescription(item)}
                                        disabled={loadingId === item.id}
                                        className="text-xs flex items-center space-x-1.5 text-purple-400 hover:text-white bg-purple-500/10 hover:bg-purple-500/40 border border-purple-500/30 px-3 py-2 rounded-lg transition-all font-bold uppercase tracking-wide"
                                    >
                                        {loadingId === item.id ? <Loader2 className="animate-spin" size={12} /> : <Wand2 size={12} />}
                                        <span>Reescribir</span>
                                    </button>
                                </td>
                                <td className="p-6">
                                    <div className="flex items-center">
                                        {item.available
                                            ? <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide flex items-center gap-1"><CheckCircle size={10} /> Activo</span>
                                            : <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide flex items-center gap-1"><AlertCircle size={10} /> Agotado</span>
                                        }
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
