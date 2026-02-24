'use client';

import React from 'react';
import { Story } from '@/types';
import { Sparkles } from 'lucide-react';

interface StoryRailProps {
  stories: Story[];
  onViewStory: (story: Story) => void;
  onOpenBrand: () => void;
}

export const StoryRail: React.FC<StoryRailProps> = ({ stories, onViewStory, onOpenBrand }) => {
  return (
    <div className="flex gap-4 md:gap-6 overflow-x-auto px-5 md:px-8 py-6 no-scrollbar snap-x-mandatory scroll-pl-5 md:scroll-pl-8">

      {/* Brand / "Our Story" Highlight */}
      <div
        onClick={onOpenBrand}
        className="flex flex-col items-center gap-2.5 cursor-pointer shrink-0 snap-start group"
      >
        {/* Container for the Ring */}
        <div className="relative w-[76px] h-[76px] md:w-[84px] md:h-[84px] flex items-center justify-center">
          {/* Rotating Dashed Border */}
          <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-brand-primary/40 group-hover:border-brand-primary transition-colors duration-500 animate-[spin_10s_linear_infinite]"></div>

          {/* Inner Circle */}
          <div className="relative w-[66px] h-[66px] md:w-[74px] md:h-[74px] rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all shadow-lg overflow-hidden">
            {/* Subtle Shine */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="font-serif font-bold text-2xl md:text-3xl italic text-brand-primary">M</span>

            {/* Badge */}
            <div className="absolute bottom-1 right-1 bg-brand-primary text-white rounded-full p-1 shadow-sm border border-black/50 z-10">
              <Sparkles size={10} fill="currentColor" />
            </div>
          </div>
        </div>
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">MenuOS</span>
      </div>

      {stories.map((story, index) => (
        <div
          key={story.id}
          className="flex flex-col items-center gap-2.5 cursor-pointer shrink-0 snap-start group"
          onClick={() => onViewStory(story)}
        >
          {/* Ring Container */}
          <div className="relative w-[76px] h-[76px] md:w-[84px] md:h-[84px] flex items-center justify-center">

            {/* Unviewed Gradient Ring - High End Look */}
            {!story.viewed ? (
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-primary via-orange-500 to-brand-primary p-[2px] animate-[spin_4s_linear_infinite]">
                <div className="w-full h-full bg-black rounded-full"></div>
              </div>
            ) : (
              /* Viewed Ring (Subtle) */
              <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 transition-colors"></div>
            )}

            {/* Image Wrapper (Insets the image to show the ring) */}
            <div className={`
                absolute inset-[5px] rounded-full overflow-hidden transition-all duration-300 ease-out border bg-gray-900
                ${!story.viewed
                ? 'border-black group-hover:inset-[3px]' // Expands slightly on hover if unviewed
                : 'border-transparent opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0'
              }
            `}>
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading={index < 4 ? "eager" : "lazy"}
                // @ts-ignore
                fetchPriority={index < 2 ? "high" : "auto"}
                decoding="async"
              />
            </div>
          </div>

          <span className={`text-[10px] md:text-xs uppercase tracking-widest truncate max-w-[80px] text-center transition-colors ${!story.viewed ? 'text-white font-bold' : 'text-gray-500 font-medium group-hover:text-gray-300'}`}>
            {story.title}
          </span>
        </div>
      ))}
    </div>
  );
};
