'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Story } from '@/types';

interface StoryViewerProps {
    stories: Story[];
    initialStoryId: string;
    onClose: () => void;
    onAction: (linkedItemId: string) => void;
}

export const StoryViewer: React.FC<StoryViewerProps> = ({ stories, initialStoryId, onClose, onAction }) => {
    // Encuentra el índice inicial basado en el ID
    const startIndex = stories.findIndex(s => s.id === initialStoryId);

    const [currentIndex, setCurrentIndex] = useState(startIndex !== -1 ? startIndex : 0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Referencia para saber si el componente está montado
    const activeStory = stories[currentIndex];

    // --- NAVIGATION LOGIC ---

    const handleNext = useCallback(() => {
        if (currentIndex < stories.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setProgress(0);
        } else {
            onClose(); // Cierra si es la última historia
        }
    }, [currentIndex, stories.length, onClose]);

    const handlePrev = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setProgress(0);
        } else {
            // Si es la primera, reiniciar progreso
            setProgress(0);
        }
    }, [currentIndex]);

    // --- TIMER ENGINE ---

    useEffect(() => {
        if (isPaused) return;

        const intervalTime = 20; // ms per tick (smoother 50fps)
        const totalDuration = 5000; // 5 segundos por historia
        const increment = (intervalTime / totalDuration) * 100;

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    handleNext();
                    return 0;
                }
                return prev + increment;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [currentIndex, isPaused, handleNext]);

    // --- KEYBOARD SUPPORT ---
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') onClose();
            if (e.key === ' ') { // Space to pause/resume logic could go here
                setIsPaused(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handlePrev, onClose]);

    if (!activeStory) return null;

    return (
        <div
            className="fixed inset-0 z-[70] bg-black flex flex-col animate-fade-in touch-none select-none"
            onContextMenu={(e) => e.preventDefault()} // Prevents right-click/long-press menu
        >

            {/* BACKGROUND BLUR (Optional aesthetic) */}
            <div className="absolute inset-0 z-0 opacity-40 blur-3xl scale-125">
                <img src={activeStory.image} className="w-full h-full object-cover" alt="" />
            </div>

            {/* MAIN IMAGE */}
            <div className="absolute inset-0 z-10 bg-black">
                <img
                    key={activeStory.id} // Key change forces animation restart
                    src={activeStory.image}
                    className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${isPaused ? 'scale-100' : 'scale-110'}`}
                    alt={activeStory.title}
                />
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none"></div>
            </div>

            {/* UI OVERLAY (Safe Area) */}
            <div className="relative z-20 flex-1 flex flex-col justify-between pb-10 pt-4 px-4 pointer-events-none">

                {/* HEADER: Progress Bars & Close */}
                <div className="flex flex-col gap-4 pointer-events-auto">
                    {/* Segmented Progress Bar */}
                    <div className="flex gap-1.5 h-1">
                        {stories.map((story, index) => (
                            <div key={story.id} className="flex-1 bg-white/20 rounded-full overflow-hidden h-full backdrop-blur-sm">
                                <div
                                    className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                    style={{
                                        width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%',
                                        transition: index === currentIndex ? 'width 20ms linear' : 'none'
                                    }}
                                ></div>
                            </div>
                        ))}
                    </div>

                    {/* Top Controls */}
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-white/20 p-0.5">
                                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                                    <img src={activeStory.image} className="w-full h-full object-cover" alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white drop-shadow-md leading-tight">{activeStory.title}</p>
                                <p className="text-[10px] text-gray-300 uppercase tracking-widest drop-shadow-md">
                                    {activeStory.type === 'dish' ? 'Plato Destacado' : activeStory.type === 'chef' ? 'Backstage' : 'Promo'}
                                </p>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white active:scale-90">
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* FOOTER: CTA */}
                <div className="text-center pointer-events-auto pb-8 md:pb-6 relative z-30">
                    {/* Only show CTA if it's a dish or promo AND has a linked Item */}
                    {(activeStory.linkedItemId) && (
                        <div className="animate-slide-up">
                            <button
                                onClick={() => onAction(activeStory.linkedItemId!)}
                                className="group bg-white/10 backdrop-blur-xl border border-white/30 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-xl flex items-center gap-3 mx-auto active:scale-95"
                            >
                                {activeStory.type === 'dish' ? 'Ver Plato' : 'Ver Detalles'}
                                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-[9px] text-white/50 mt-4 uppercase tracking-widest font-medium animate-pulse">
                                {isPaused ? 'Pausado' : 'Mantén presionado para pausar'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* INVISIBLE TOUCH ZONES (The "Instagram" Interaction) */}
            <div className="absolute inset-0 z-15 flex">
                {/* Left Zone (Prev) - 30% width */}
                <div
                    className="w-[30%] h-full cursor-pointer active:opacity-10 transition-opacity bg-white/0 hover:bg-white/[0.02]"
                    onClick={handlePrev}
                    onMouseDown={() => setIsPaused(true)}
                    onMouseUp={() => setIsPaused(false)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                ></div>

                {/* Right Zone (Next) - 70% width */}
                <div
                    className="w-[70%] h-full cursor-pointer active:opacity-10 transition-opacity bg-white/0 hover:bg-white/[0.02]"
                    onClick={handleNext}
                    onMouseDown={() => setIsPaused(true)}
                    onMouseUp={() => setIsPaused(false)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                ></div>
            </div>
        </div>
    );
};
