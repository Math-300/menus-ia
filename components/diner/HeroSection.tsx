import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { MenuItem } from '../../types';

interface HeroSectionProps {
    item: MenuItem;
    onClick: (item: MenuItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ item, onClick }) => {
    return (
        <section className="px-6 animate-fade-in mb-8">
            <div 
                onClick={() => onClick(item)}
                // CHANGED: aspect-[3/4] -> aspect-[4/3] for mobile. Much better for visibility of content below.
                className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 shadow-2xl"
            >
                <img 
                    src={item.image} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80" 
                    alt="Hero" 
                    loading="eager"
                    // @ts-ignore
                    fetchPriority="high"
                />
                
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 md:top-8 md:right-8">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-3 py-1.5 md:px-5 md:py-2 flex items-center gap-2 shadow-lg">
                        <Star size={10} className="text-brand-primary fill-brand-primary" /> 
                        <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-white">Elección del Chef</span>
                    </div>
                </div>

                {/* Content - Adjusted padding and text size for smaller container */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white flex flex-col justify-end h-full">
                    <h2 className="text-3xl md:text-6xl font-serif italic mb-2 md:mb-4 text-white/95 leading-none tracking-tight">{item.name}</h2>
                    <p className="text-gray-300 line-clamp-2 mb-4 md:mb-8 font-light text-xs md:text-sm tracking-wide max-w-lg opacity-80">{item.description}</p>
                    
                    <div>
                        <div className="inline-flex items-center gap-3 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b border-white/30 pb-1 group-hover:border-brand-primary transition-colors">
                            Explorar <ArrowRight size={12} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};