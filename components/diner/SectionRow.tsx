
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MenuItem } from '../../types';
import { DishCard } from './DishCard';

interface SectionRowProps {
    title: string;
    items: MenuItem[];
    onItemClick: (i: MenuItem) => void;
    currency?: string;
}

export const SectionRow: React.FC<SectionRowProps> = ({ title, items, onItemClick, currency = '$' }) => {
    if (items.length === 0) return null;
    return (
        <section className="py-8 border-b border-white/5">
            <div className="px-6 flex justify-between items-end mb-6">
                <h2 className="text-3xl font-serif italic text-white/90">{title}</h2>
                <button className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2 hover:text-white transition-colors group pb-1 border-b border-transparent hover:border-white">
                    Ver Todo <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="flex space-x-6 overflow-x-auto pb-8 px-6 no-scrollbar snap-x-mandatory scroll-pl-6">
                {items.map(item => (
                    <DishCard key={item.id} item={item} onClick={onItemClick} layout="vertical" className="w-64 snap-start" currency={currency} />
                ))}
            </div>
        </section>
    );
};
