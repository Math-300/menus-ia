'use client';

import React from 'react';

export const DinerFooter: React.FC = () => {
  return (
    <footer className="pt-12 pb-32 px-6 text-center animate-fade-in opacity-60">
      <div className="w-8 h-8 mx-auto bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6">
        <span className="font-serif italic font-bold text-brand-primary">M</span>
      </div>
      <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-2">Experiencia Culinaria</p>
      <p className="text-[10px] text-gray-600 font-serif italic">Designed by MenuOS AI</p>
    </footer>
  );
};
