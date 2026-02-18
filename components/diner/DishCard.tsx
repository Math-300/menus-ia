
import React from 'react';
import { MenuItem } from '../../types';
import { Plus, ChevronRight } from 'lucide-react';
import { formatCurrency } from '../../utils/format';

interface DishCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
  onAdd?: (item: MenuItem) => void;
  layout?: 'vertical' | 'horizontal';
  className?: string;
  currency?: string;
}

export const DishCard: React.FC<DishCardProps> = ({ 
  item, 
  onClick, 
  onAdd, 
  layout = 'vertical', 
  className = '', 
  currency = '$'
}) => {
  const isHorizontal = layout === 'horizontal';

  // LOGIC FIX: Check if item has required modifiers
  const hasRequiredModifiers = item.modifiers?.some(group => group.minSelection > 0);

  // Quick Add Handler
  const handleQuickAdd = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent opening modal
      
      // If it has required modifiers, we MUST open the modal instead of adding directly
      if (hasRequiredModifiers) {
          onClick(item);
          return;
      }

      if (onAdd && item.available) onAdd(item);
  };

  if (isHorizontal) {
    return (
      <div 
        onClick={() => onClick(item)}
        className={`group flex items-center gap-4 py-4 border-b border-dashed border-white/10 hover:bg-white/[0.03] transition-all cursor-pointer rounded-xl px-2 -mx-2 ${className}`}
      >
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-900 shadow-lg">
           <img 
            src={item.image} 
            alt={item.name} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            loading="lazy"
            decoding="async"
          />
        </div>
        
        <div className="flex-1 min-w-0 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-1">
                <h3 className="font-serif text-lg text-white font-medium italic truncate pr-2 group-hover:text-brand-primary transition-colors">{item.name}</h3>
                <span className="font-sans text-sm font-bold text-white tracking-wide">{currency} {formatCurrency(item.price)}</span>
            </div>
            <p className="text-[10px] text-gray-500 line-clamp-1 font-medium tracking-[0.1em] uppercase mb-2">{item.description}</p>
            
            {/* Horizontal specific: Quick action hint */}
            <div className="flex items-center justify-between mt-1">
                <div className="flex gap-1">
                    {item.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[8px] border border-white/10 text-gray-500 px-1.5 py-0.5 rounded-md uppercase tracking-wider">{tag}</span>
                    ))}
                </div>
                {item.available && (
                    <button 
                        onClick={handleQuickAdd}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all active:scale-90
                            ${hasRequiredModifiers 
                                ? 'border-white/10 text-white/50 hover:bg-white hover:text-black' // Opens detail
                                : 'border-white/20 text-white/50 hover:bg-brand-primary hover:border-brand-primary hover:text-white' // Adds directly
                            }
                        `}
                    >
                        {hasRequiredModifiers ? <ChevronRight size={14} /> : <Plus size={14} />}
                    </button>
                )}
            </div>
        </div>
      </div>
    );
  }

  // Vertical Layout (Gallery Style)
  return (
    <div 
      onClick={() => onClick(item)}
      className={`group relative flex flex-col flex-shrink-0 cursor-pointer ${className}`}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-gray-900 shadow-2xl ring-1 ring-white/5 transition-all duration-500 group-hover:shadow-brand-primary/10 group-hover:ring-white/20">
        <img 
          src={item.image} 
          alt={item.name} 
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
          loading="lazy"
          decoding="async"
        />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40"></div>

        {/* Floating Price Pill */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg z-10">
             <span className="text-xs font-medium text-white tracking-widest">{currency} {formatCurrency(item.price)}</span>
        </div>

         {/* Badges */}
         <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {item.popular && <span className="w-fit text-[8px] font-bold uppercase tracking-widest text-black bg-white/90 backdrop-blur px-2 py-1 rounded-lg shadow-lg">Popular</span>}
            {item.chefChoice && <span className="w-fit text-[8px] font-bold uppercase tracking-widest text-white bg-brand-primary/90 backdrop-blur px-2 py-1 rounded-lg shadow-lg">Chef's</span>}
        </div>
      </div>
      
      <div className="mt-5 px-2 text-center transition-transform duration-500 group-hover:-translate-y-1">
        <p className="text-[9px] text-brand-primary uppercase tracking-[0.3em] font-bold mb-2 opacity-80">{item.category}</p>
        <h3 className="text-xl font-serif text-white leading-none italic group-hover:text-brand-primary transition-colors">{item.name}</h3>
      </div>
    </div>
  );
};
