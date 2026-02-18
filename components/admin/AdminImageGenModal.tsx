import React from 'react';
import { Image as ImageIcon, X, AlertCircle, Loader2, Wand2, Edit3 } from 'lucide-react';

interface AdminImageGenModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: string;
  setPrompt: (val: string) => void;
  size: "1K" | "2K" | "4K";
  setSize: (val: "1K" | "2K" | "4K") => void;
  generatedImg: string | null;
  loadingId: string | null;
  onGenerate: () => void;
  hasApiKey: boolean;
  editInstruction: string;
  setEditInstruction: (val: string) => void;
  onEdit: () => void;
}

export const AdminImageGenModal: React.FC<AdminImageGenModalProps> = ({
  isOpen, onClose, prompt, setPrompt, size, setSize, generatedImg, loadingId, onGenerate, hasApiKey, editInstruction, setEditInstruction, onEdit
}) => {
  if (!isOpen) return null;

  const SIZES: ("1K" | "2K" | "4K")[] = ['1K', '2K', '4K'];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] flex items-center justify-center p-4 animate-fade-in">
        <div className="bg-gray-900/90 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10 h-[650px]">
            {/* Left Panel - Controls */}
            <div className="w-full md:w-5/12 p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col overflow-y-auto bg-black/20">
                <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-2">
                            <ImageIcon size={24} className="text-brand-primary" />
                            <h3 className="font-serif font-bold text-2xl text-white">AI Studio</h3>
                        </div>
                        <span className="text-[10px] font-bold bg-gradient-to-r from-brand-primary to-orange-500 text-white px-2 py-0.5 rounded shadow-lg uppercase tracking-wider">Gemini Pro</span>
                </div>
                
                <div className="space-y-6 flex-1">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Prompt Engineering (Descripción)</label>
                        <textarea 
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm h-32 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary outline-none resize-none text-gray-200 placeholder-gray-600 transition-all"
                            placeholder="Ej: Una toma cinematográfica de una hamburguesa Wagyu con queso derretido, iluminación oscura y elegante, resolución 4k..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Resolución</label>
                        <div className="grid grid-cols-3 gap-2">
                            {SIZES.map((s) => (
                                <button 
                                    key={s}
                                    onClick={() => setSize(s)}
                                    className={`py-3 rounded-xl text-xs font-bold border transition-all ${size === s ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'}`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {!hasApiKey && (
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 flex items-start gap-3">
                            <AlertCircle className="text-yellow-500 shrink-0" size={18} />
                            <div>
                                <p className="text-xs text-yellow-500 font-bold mb-1">Facturación Requerida</p>
                                <p className="text-xs text-yellow-200/70">Para generar en 4K con Veo/Imagen, conecta tu facturación en la nube.</p>
                                <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="text-[10px] underline text-yellow-500 mt-1 block">Ver Precios</a>
                            </div>
                        </div>
                    )}

                    <button 
                        onClick={onGenerate}
                        disabled={loadingId === 'gen-img' || !prompt}
                        className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(249,65,68,0.4)] hover:bg-brand-primary/90 disabled:opacity-50 disabled:shadow-none transition-all flex items-center justify-center gap-2 uppercase tracking-wide text-sm mt-2"
                    >
                            {loadingId === 'gen-img' ? <Loader2 className="animate-spin" /> : <Wand2 />}
                            {hasApiKey ? 'Generar Asset' : 'Conectar y Generar'}
                    </button>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Refinamiento Mágico</label>
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            disabled={!generatedImg}
                            placeholder="Añadir vapor, ajustar luz..."
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary text-white placeholder-gray-600 disabled:opacity-30"
                            value={editInstruction}
                            onChange={(e) => setEditInstruction(e.target.value)}
                        />
                        <button 
                            onClick={onEdit}
                            disabled={!generatedImg || loadingId === 'edit-img' || !editInstruction}
                            className="bg-purple-600 text-white px-4 rounded-xl hover:bg-purple-500 disabled:opacity-50 transition-colors shadow-lg shadow-purple-900/50"
                        >
                            <Edit3 size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Panel - Preview */}
            <div className="w-full md:w-7/12 bg-black/40 p-8 flex flex-col relative">
                <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/20 transition-all z-10"><X size={24} /></button>
                
                <div className="flex-1 flex items-center justify-center border-2 border-dashed border-white/10 rounded-2xl m-2 relative overflow-hidden group">
                    {loadingId === 'gen-img' || loadingId === 'edit-img' ? (
                        <div className="text-center">
                            <div className="relative w-20 h-20 mx-auto mb-6">
                                <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
                                <div className="absolute inset-0 border-4 border-brand-primary rounded-full border-t-transparent animate-spin"></div>
                            </div>
                            <h4 className="font-serif font-bold text-2xl text-white mb-2">Creando Magia...</h4>
                            <p className="text-sm text-gray-400">Sintetizando píxeles con Gemini Vision</p>
                        </div>
                    ) : generatedImg ? (
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                            <img src={generatedImg} alt="Generated" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
                            <div className="absolute bottom-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold shadow-xl hover:bg-gray-200">Descargar</button>
                                <button className="bg-brand-primary text-white px-6 py-2 rounded-full text-xs font-bold shadow-xl hover:bg-red-600">Guardar</button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-gray-600 text-center">
                            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
                                <ImageIcon size={40} className="opacity-50" />
                            </div>
                            <p className="font-serif text-lg font-medium text-gray-400">Lienzo Vacío</p>
                            <p className="text-sm text-gray-600 mt-2 max-w-xs mx-auto">Ingresa un prompt para generar assets culinarios de alta fidelidad.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};
