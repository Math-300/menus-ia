
import React, { useEffect } from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div 
      className={`
        fixed top-24 left-1/2 transform -translate-x-1/2 z-[70] transition-all duration-300 pointer-events-none
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
      `}
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] text-white px-6 py-3 rounded-full flex items-center gap-3">
        <div className="bg-green-500 rounded-full p-0.5">
            <Check size={12} className="text-black stroke-[3]" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-shadow">{message}</span>
      </div>
    </div>
  );
};
