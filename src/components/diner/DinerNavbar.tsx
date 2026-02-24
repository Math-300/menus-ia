'use client';

import React, { useState } from 'react';
import { Search, X, TrendingUp, Tag } from 'lucide-react';
import { CATEGORIES } from '@/lib/constants';

interface DinerNavbarProps {
    scrolled: boolean;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategory: string;
    setSelectedCategory: (id: string) => void;
}

export const DinerNavbar: React.FC<DinerNavbarProps> = ({
    scrolled,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory
}) => {
    const [isFocused, setIsFocused] = useState(false);

    // Updated Tags to match Mock Data and LatAm context
    const QUICK_TAGS = ['Popular', 'Picante', 'Premium', 'Vegetariano', 'Nuevo', 'Vino'];

    // Handle clicking a tag
    const handleTagClick = (tag: string) => {
        setSearchQuery(tag);
        // Keep focus logic smooth
        setTimeout(() => setIsFocused(false), 100);
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled ? 'bg-[#030712]/80 backdrop-blur-2xl pt-2 pb-2 border-b border-white/5 shadow-2xl' : 'pt-1 pb-1 bg-transparent'}`}>
            <div className="px-6">
                {/* Search Bar Container - Tightened margins for compact feel */}
                <div className={`relative group transition-all duration-500 ease-out ${scrolled ? 'mb-1' : 'mb-2'}`}>

                    {/* Input Wrapper */}
                    <div className="relative z-20">
                        <div className={`absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none z-10 transition-colors duration-300 ${isFocused ? 'text-brand-primary' : 'text-white/30'}`}>
                            <Search size={14} strokeWidth={2.5} />
                        </div>
                        <input
                            type="text"
                            placeholder={isFocused ? "Busca 'Trufa', 'Picante'..." : "Buscar en la colección..."}
                            value={searchQuery}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`
                    w-full text-white placeholder-white/20 rounded-full py-3.5 pl-12 pr-4 text-xs font-medium tracking-wide
                    focus:outline-none transition-all duration-500 backdrop-blur-md relative z-0
                    ${isFocused
                                    ? 'bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] ring-1 ring-white/10'
                                    : 'bg-white/5 border-white/5 border hover:bg-white/10 hover:border-white/10'}
                `}
                        />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery('')} className="absolute right-4 top-3.5 text-white/40 hover:text-white transition-colors z-10">
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    {/* Power Search Suggestions - Accordion Animation */}
                    <div className={`
                overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                ${isFocused && !searchQuery ? 'max-h-20 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
            `}>
                        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 pl-1">
                            <div className="flex items-center gap-1.5 text-[8px] font-bold text-gray-500 uppercase tracking-widest mr-2 shrink-0">
                                <TrendingUp size={10} className="text-brand-primary" /> Tendencias
                            </div>
                            {QUICK_TAGS.map(tag => (
                                <button
                                    key={tag}
                                    onMouseDown={(e) => e.preventDefault()} // Critical: Prevents blur before click
                                    onClick={() => handleTagClick(tag)}
                                    className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-[9px] font-medium tracking-wide text-gray-300 hover:text-white transition-all backdrop-blur-md group"
                                >
                                    <Tag size={8} className="opacity-40 group-hover:text-brand-primary transition-colors" /> {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Categories - Minimalist Pills */}
                <div className={`
            flex space-x-3 overflow-x-auto pb-1 no-scrollbar snap-x-mandatory scroll-pl-6 mask-fade-right 
            transition-all duration-500 ease-out will-change-transform
            ${isFocused ? 'opacity-20 blur-[2px] scale-[0.98] origin-top' : 'opacity-100 blur-0 scale-100 origin-top'}
         `}>
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`
                    px-5 py-2 rounded-full text-[9px] font-bold tracking-[0.2em] whitespace-nowrap transition-all duration-300 snap-start border backdrop-blur-md
                    ${selectedCategory === 'all'
                                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                                : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'}
                `}
                    >
                        TODOS
                    </button>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`
                    px-5 py-2 rounded-full text-[9px] font-bold tracking-[0.2em] whitespace-nowrap transition-all duration-300 snap-start border backdrop-blur-md
                    ${selectedCategory === cat.id
                                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                                    : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'}
                `}
                        >
                            {cat.name.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};
