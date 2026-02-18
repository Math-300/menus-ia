
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { MenuItem } from '../../types';
import { formatCurrency } from '../../utils/format';

interface SelectionDockProps {
  selection: MenuItem[];
  onViewOrder: () => void;
  currency?: string;
}

export const SelectionDock: React.FC<SelectionDockProps> = ({ 
  selection, 
  onViewOrder, 
  currency = '$'
}) => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation when selection count changes
  useEffect(() => {
    if (selection.length > 0) {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 300);
        return () => clearTimeout(timer);
    }
  }, [selection.length]);

  if (selection.length === 0) return null;

  // Calculate total using finalPrice (which includes quantity and extras)
  const total = selection.reduce((acc, item) => {
      const itemTotal = item.finalPrice || (item.price * (item.quantity || 1));
      return acc + itemTotal;
  }, 0);

  return (
    // Added padding-right to avoid collision with the ChatBot button (bottom-right)
    <div className="fixed bottom-6 left-6 right-6 md:right-32 z-40 animate-slide-up pointer-events-none">
      <div 
        onClick={onViewOrder}
        className={`
            pointer-events-auto max-w-md mx-auto md:mx-0 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-2 pr-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center justify-between cursor-pointer group hover:bg-white/15 transition-all duration-300
            ${animate ? 'scale-105 bg-white/20' : 'scale-100'}
        `}
      >
        <div className="flex items-center gap-4">
            <div className={`
                bg-brand-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-transform
                ${animate ? 'scale-110' : 'group-hover:scale-105'}
            `}>
                {selection.length}
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Tu Selección</span>
                <span className="text-white font-serif italic text-lg leading-none">{currency} {formatCurrency(total)}</span>
            </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white pr-2">
            <span>Revisar</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight size={14} />
            </div>
        </div>
      </div>
    </div>
  );
};
