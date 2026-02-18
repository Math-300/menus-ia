
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Sparkles, BrainCircuit, Wine } from 'lucide-react';
import { chatWithConcierge } from '../../services/geminiService';
import { ChatMessage } from '../../types';

interface ChatBotProps {
    searchQuery?: string;
    activeCategory?: string;
}

export const ChatBot: React.FC<ChatBotProps> = ({ searchQuery = '', activeCategory = 'all' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Hint State
  const [currentHint, setCurrentHint] = useState("");
  const [showHint, setShowHint] = useState(false);
  
  // Ref for auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // Ref for click-outside detection
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Default General Hints
  const GENERAL_HINTS = [
      "¿Qué vino recomiendas?",
      "¿Tienen opciones veganas?",
      "¿Qué es popular hoy?",
      "¿Ingredientes del chef?"
  ];

  // 0. CLICK OUTSIDE TO CLOSE
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && chatContainerRef.current && !chatContainerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // 1. CONTEXT AWARENESS LOGIC
  useEffect(() => {
    if (isOpen) return;

    let contextHint = "";

    if (searchQuery && searchQuery.length > 2) {
        const topics = [
            `¿Buscas el mejor maridaje para "${searchQuery}"?`,
            `¿"${searchQuery}" tiene alérgenos?`,
            `¿Cuál es el mejor "${searchQuery}"?`,
            `¿Hay "${searchQuery}" para compartir?`
        ];
        contextHint = topics[Math.floor(Math.random() * topics.length)];
    } else if (activeCategory !== 'all') {
        switch (activeCategory) {
            case 'drinks': contextHint = "¿Buscas algo dulce o seco?"; break;
            case 'burgers': contextHint = "¿Término de la carne?"; break;
            case 'desserts': contextHint = "¿Café para acompañar?"; break;
            case 'starters': contextHint = "¿Algo rápido para empezar?"; break;
            default: contextHint = `¿Sugerencias de ${activeCategory}?`;
        }
    }

    if (contextHint) {
        setCurrentHint(contextHint);
        setShowHint(true);
        const timer = setTimeout(() => setShowHint(false), 6000); 
        return () => clearTimeout(timer);
    }

  }, [searchQuery, activeCategory, isOpen]);

  // 2. BACKGROUND CYCLE
  useEffect(() => {
      const hintInterval = setInterval(() => {
          if (!isOpen && !searchQuery) {
            const nextHint = GENERAL_HINTS[Math.floor(Math.random() * GENERAL_HINTS.length)];
            setCurrentHint(nextHint);
            setShowHint(true);
            setTimeout(() => setShowHint(false), 5000); 
          }
      }, 20000); 

      if (!searchQuery) {
          setTimeout(() => {
              setCurrentHint(GENERAL_HINTS[0]);
              setShowHint(true);
              setTimeout(() => setShowHint(false), 5000);
          }, 3000);
      }

      return () => clearInterval(hintInterval);
  }, [isOpen, searchQuery]); 

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    let contextualMessage = userMsg.text;
    if (searchQuery) {
        contextualMessage += ` [Contexto del usuario: Está buscando "${searchQuery}" en el menú]`;
    }

    // Default to thinking=false for speed in concierge mode
    const responseText = await chatWithConcierge(contextualMessage, history, false);
    
    const botMsg: ChatMessage = { 
      id: (Date.now() + 1).toString(), 
      role: 'model', 
      text: responseText
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleHintClick = () => {
      setIsOpen(true);
      setShowHint(false);
      setInput(currentHint);
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-[55] flex flex-col items-end gap-2 pointer-events-none">
            {/* Proactive Hint Bubble */}
            <div 
                onClick={handleHintClick}
                className={`
                bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-3 rounded-2xl rounded-br-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-xs font-medium tracking-wide mb-1 transition-all duration-500 transform cursor-pointer pointer-events-auto hover:bg-white/20 hover:scale-105 active:scale-95
                ${showHint ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}
            `}>
                <div className="flex items-center gap-2">
                    <Sparkles size={12} className="text-brand-primary shrink-0" />
                    <span>{currentHint}</span>
                </div>
            </div>

            <button 
            onClick={() => { setIsOpen(true); setShowHint(false); }}
            className="pointer-events-auto bg-black/60 backdrop-blur-xl border border-white/20 text-white p-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-105 hover:bg-white/20 transition-all group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-brand-primary/20 blur-xl group-hover:bg-brand-primary/40 transition-colors"></div>
                <Sparkles size={24} className="relative z-10 group-hover:text-brand-primary transition-colors" />
            </button>
        </div>
      )}

      {isOpen && (
        <div 
            ref={chatContainerRef}
            className={`
                fixed z-[55] bg-black/90 backdrop-blur-2xl rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden border border-white/10 animate-slide-up
                w-[95vw] md:w-96 h-[600px] max-h-[80vh]
                bottom-4 
                left-0 right-0 mx-auto md:mx-0 md:left-auto md:right-6
            `}
        >
          {/* Elegant Header - Cleaned up */}
          <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
            <div>
                <h3 className="font-serif italic text-2xl text-white">Concierge</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> En Línea
                </p>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area - Added no-scrollbar */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar bg-gradient-to-b from-transparent to-black/20">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10 shadow-glow">
                    <Wine className="text-white/40" size={24} />
                </div>
                <p className="font-serif italic text-white text-lg mb-2">A su servicio.</p>
                <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">
                    {searchQuery 
                        ? `Veo que buscas "${searchQuery}". ¿En qué puedo ayudarte con eso?` 
                        : "Pregunte por maridajes, ingredientes o dietas especiales."
                    }
                </p>
              </div>
            )}
            
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-2xl p-4 text-sm font-light leading-relaxed shadow-lg backdrop-blur-md ${
                    msg.role === 'user' 
                      ? 'bg-brand-primary/90 text-white rounded-tr-sm border border-brand-primary/50' 
                      : 'bg-white/10 text-gray-100 rounded-tl-sm border border-white/10'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 rounded-tl-sm">
                  <div className="flex space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="relative flex items-center">
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu consulta..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-light"
                />
                <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2.5 bg-brand-primary text-white rounded-full disabled:opacity-50 disabled:bg-gray-700 hover:bg-brand-primary/80 transition-all shadow-lg"
                >
                <Send size={16} />
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
