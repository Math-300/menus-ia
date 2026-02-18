
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  variant?: 'default' | 'immersive';
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, variant = 'default' }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isImmersive = variant === 'immersive';

  return (
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-6 animate-fade-in">
      <div 
        ref={modalRef}
        className={`
            bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-t-[2.5rem] md:rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl transform transition-all animate-slide-up h-[90vh] md:h-auto md:max-h-[90vh] flex flex-col
            ${isImmersive ? 'p-0' : 'p-0 md:p-6'} 
        `}
      >
        {/* Header */}
        <div className={`
            flex justify-between items-center absolute top-0 left-0 right-0 z-20 pointer-events-none
            ${isImmersive ? 'p-6 bg-gradient-to-b from-black/60 to-transparent' : 'p-6 bg-transparent'}
        `}>
          <h3 className="text-lg font-serif italic text-white/90 drop-shadow-md">{title}</h3>
          
          <button onClick={onClose} className="pointer-events-auto p-2.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-white shadow-lg group">
            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto overscroll-contain no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};
