'use client';

import React from 'react';
import { RestaurantConfig } from '@/types';
import { Info, Clock, MapPin } from 'lucide-react';

interface DinerHeaderProps {
  config: RestaurantConfig;
  onOpenInfo: () => void;
}

export const DinerHeader: React.FC<DinerHeaderProps> = ({ config, onOpenInfo }) => {
  return (
    <div className="relative w-full h-44 md:h-52 overflow-hidden shadow-2xl z-20 group">

      {/* 1. BACKGROUND IMAGE (Representative) */}
      <img
        src={config.coverImage}
        alt="Restaurant Cover"
        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[3s] group-hover:scale-105"
      />

      {/* 2. GRADIENT OVERLAY (Contrast for text) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent"></div>

      {/* 3. CONTENT ROW (Bottom Aligned) */}
      <div className="absolute bottom-0 left-0 w-full p-5 md:px-8 pb-4 flex items-end gap-4">

        {/* A. LOGO (Left Bottom) */}
        <div className="relative shrink-0">
          <div className="w-14 h-14 rounded-full border-2 border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden">
            {config.logo ? (
              <img src={config.logo} className="w-full h-full object-cover" alt="Logo" />
            ) : (
              <span className="font-serif italic font-bold text-2xl text-brand-primary">
                {config.name.charAt(0)}
              </span>
            )}
          </div>
          {/* Open Status Indicator Dot on Logo */}
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#030712] rounded-full"></div>
        </div>

        {/* B. INFO (Name & Status) */}
        <div className="flex-1 min-w-0 mb-0.5">
          <h1 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight drop-shadow-md truncate">
            {config.name}
          </h1>

          <div className="flex items-center gap-3 mt-1 text-xs font-medium text-gray-300">
            <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-[4px] backdrop-blur-sm border border-emerald-400/20">
              <Clock size={10} strokeWidth={3} />
              <span className="uppercase tracking-wider text-[9px] font-bold">Abierto</span>
            </span>
            <span className="w-0.5 h-0.5 rounded-full bg-gray-500"></span>
            <span className="flex items-center gap-1 opacity-80 truncate">
              <MapPin size={10} />
              <span className="uppercase tracking-wider text-[9px]">Bogotá</span>
            </span>
          </div>
        </div>

        {/* C. INFO BUTTON (Right Bottom) */}
        <button
          onClick={onOpenInfo}
          className="mb-1 p-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white/80 hover:bg-white/20 hover:text-white transition-all active:scale-95 shadow-lg"
          aria-label="Información del restaurante"
        >
          <Info size={18} />
        </button>
      </div>
    </div>
  );
};
