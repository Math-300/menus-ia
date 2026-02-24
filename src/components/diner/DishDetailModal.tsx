'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Modal } from '@/components/ui/Modal';
import { MenuItem } from '@/types';
import { Plus, Minus, Flame, Leaf, WheatOff, Check, Share2, Heart, Wine, ChefHat, CheckCircle2, Sparkles, Coffee, Beer } from 'lucide-react';
import { formatCurrency } from '@/lib/utils/format';

interface DishDetailModalProps {
    item: MenuItem | null;
    menuItems: MenuItem[];
    onClose: () => void;
    onAdd: (item: MenuItem) => void;
    isLiked: boolean;
    onToggleLike: () => void;
    currency?: string;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
    item,
    menuItems,
    onClose,
    onAdd,
    isLiked,
    onToggleLike,
    currency = '$'
}) => {
    const [quantity, setQuantity] = useState(1);
    const [selections, setSelections] = useState<Record<string, string[]>>({});
    const [isPairingSelected, setIsPairingSelected] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    // --- MOTOR DE INTELIGENCIA DE UPSELL (Validado v2) ---
    const smartRecommendation = useMemo(() => {
        if (!item) return null;

        // A. Búsqueda Exacta (Nivel 1)
        if (item.pairing) {
            // Filtrar palabras cortas para evitar falsos positivos con "de", "con", "el"
            const searchTerms = item.pairing.toLowerCase().split(' ').filter(w => w.length > 3);
            const foundItem = menuItems.find(i =>
                i.available && // Solo sugerir si está disponible
                searchTerms.some(term => i.name.toLowerCase().includes(term))
            );

            if (foundItem) return { item: foundItem, type: 'match', label: 'Maridaje Perfecto' };

            // Si no existe, crear VIRTUAL ITEM (Nivel 2)
            // FIX CRÍTICO: Usamos guión bajo (_) en el ID para evitar que useCart lo agrupe incorrectamente
            return {
                item: {
                    id: `pairing_${item.id}`, // ID Único vinculado al padre
                    name: item.pairing,
                    price: 24000, // Precio realista para Bebida Premium
                    image: '',
                    category: 'drinks',
                    tags: ['Recomendado'],
                    description: 'Selección especial del Sommelier',
                    available: true
                } as MenuItem,
                type: 'virtual',
                label: 'Recomendación del Chef'
            };
        }

        // B. Deducción Contextual (Nivel 3 - "Inteligencia")
        let categoryTarget = 'drinks';
        let label = 'Para Acompañar';
        let searchTerm = ''; // Opcional: refinar búsqueda dentro de categoría

        if (item.category === 'desserts') {
            // Si es postre, buscar cafés o digestivos primero
            categoryTarget = 'drinks'; // Asumiendo que cafés están en drinks o categoría propia
            searchTerm = 'café';
            label = 'Perfecto con Café';
        } else if (item.category === 'burgers' || item.category === 'mains') {
            categoryTarget = 'drinks';
            label = 'Mejora tu Experiencia';
        } else if (item.category === 'starters') {
            // Si es entrada, quizás sugerir otra entrada para compartir o bebida ligera
            categoryTarget = 'drinks';
            label = 'Para Empezar';
        }

        // Buscar el mejor candidato disponible
        const fallbackItem = menuItems
            .filter(i =>
                i.available &&
                (i.category === categoryTarget || i.category === 'drinks') &&
                (searchTerm ? i.name.toLowerCase().includes(searchTerm) : true) &&
                i.id !== item.id // No sugerirse a sí mismo
            )
            // Ordenar por: Tiene Tag 'Popular' > Precio más alto (Upsell)
            .sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || b.price - a.price)[0];

        if (fallbackItem) return { item: fallbackItem, type: 'context', label: label };

        return null;
    }, [item, menuItems]);

    // Reset al abrir
    useEffect(() => {
        if (item) {
            setQuantity(1);
            setSelections({});
            setIsPairingSelected(false);
            setIsAdded(false);
        }
    }, [item]);

    // Cálculo de Precios
    const unitPrice = useMemo(() => {
        if (!item) return 0;
        let total = item.price;
        if (item.modifiers) {
            item.modifiers.forEach(group => {
                const groupSelections = selections[group.id] || [];
                groupSelections.forEach(optId => {
                    const option = group.options.find(o => o.id === optId);
                    if (option) total += option.price;
                });
            });
        }
        return total;
    }, [item, selections]);

    const upsellPrice = (isPairingSelected && smartRecommendation) ? smartRecommendation.item.price : 0;
    // Lógica de Bundle: 1 Plato Principal + 1 Bebida Sugerida
    const totalDisplayPrice = (unitPrice * quantity) + upsellPrice;

    const isValid = useMemo(() => {
        if (!item || !item.modifiers) return true;
        return item.modifiers.every(group => {
            const currentCount = (selections[group.id] || []).length;
            return currentCount >= group.minSelection;
        });
    }, [item, selections]);

    // Handlers
    const toggleSelection = (groupId: string, optionId: string, max: number) => {
        setSelections(prev => {
            const current = prev[groupId] || [];
            const isSelected = current.includes(optionId);
            if (max === 1) return { ...prev, [groupId]: [optionId] }; // Radio behavior
            if (isSelected) return { ...prev, [groupId]: current.filter(id => id !== optionId) };
            if (current.length >= max) return prev;
            return { ...prev, [groupId]: [...current, optionId] };
        });
    };

    const handleAdd = () => {
        if (item && isValid) {
            // 1. Agregar Main Item
            const selectedOptionsList: any[] = [];
            if (item.modifiers) {
                item.modifiers.forEach(group => {
                    (selections[group.id] || []).forEach(optId => {
                        const opt = group.options.find(o => o.id === optId);
                        if (opt) selectedOptionsList.push({ groupName: group.name, optionName: opt.name, price: opt.price });
                    });
                });
            }

            onAdd({
                ...item,
                price: unitPrice,
                quantity: quantity,
                selectedOptions: selectedOptionsList,
                finalPrice: unitPrice * quantity
            });

            // 2. Agregar Upsell (Si fue seleccionado)
            if (isPairingSelected && smartRecommendation) {
                onAdd({
                    ...smartRecommendation.item,
                    quantity: 1, // Siempre 1 por bundle
                    finalPrice: smartRecommendation.item.price
                });
            }

            setIsAdded(true);
            setTimeout(() => { if (item) onClose(); }, 800);
        }
    };

    // Helper UI Icons
    const getUpsellIcon = (itemName: string) => {
        const lower = itemName.toLowerCase();
        if (lower.includes('caf') || lower.includes('coffee') || lower.includes('espresso')) return <Coffee size={24} strokeWidth={1.5} />;
        if (lower.includes('cerveza') || lower.includes('beer') || lower.includes('lager') || lower.includes('stout')) return <Beer size={24} strokeWidth={1.5} />;
        return <Wine size={24} strokeWidth={1.5} />;
    };

    return (
        <Modal isOpen={!!item} onClose={onClose} title=" " variant="immersive">
            {item && (
                <div className="bg-[#050505] min-h-full flex flex-col relative pb-32">

                    {/* HERO IMAGE */}
                    <div className="relative h-[45vh] w-full shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30"></div>
                        <div className="absolute top-0 left-0 p-6 pt-12 flex gap-3 w-full justify-between items-start pointer-events-auto">
                            <button onClick={onToggleLike} className={`w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center transition-all shadow-xl active:scale-90 ${isLiked ? 'bg-brand-primary border-brand-primary text-white' : 'bg-black/30 border-white/10 text-white hover:bg-white hover:text-black'}`}>
                                <Heart size={18} className={isLiked ? "fill-white" : ""} />
                            </button>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="px-6 -mt-12 relative z-10 flex-1">
                        <div className="flex flex-col mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                {item.popular && <span className="text-[9px] font-bold bg-white text-black px-2 py-0.5 rounded-sm uppercase tracking-wider shadow-[0_0_10px_rgba(255,255,255,0.4)]">Popular</span>}
                                <span className="text-[9px] font-bold text-brand-primary border border-brand-primary/30 bg-brand-primary/5 px-2 py-0.5 rounded uppercase tracking-wider">{item.category}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-white italic leading-[0.9] mb-4 tracking-tight">{item.name}</h2>
                            <p className="text-gray-300 text-sm font-light leading-relaxed opacity-90">{item.description}</p>
                        </div>

                        {/* MODIFIERS */}
                        {item.modifiers && item.modifiers.map(group => (
                            <div key={group.id} className="mb-8 animate-fade-in">
                                <div className="flex justify-between items-end mb-4 border-b border-white/5 pb-2">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">{group.name}</h3>
                                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${group.minSelection > 0 ? 'bg-brand-primary/20 text-brand-primary' : 'bg-white/10 text-gray-400'}`}>
                                        {group.minSelection > 0 ? 'Requerido' : 'Opcional'}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    {group.options.map(option => {
                                        const isSelected = (selections[group.id] || []).includes(option.id);
                                        return (
                                            <div key={option.id} onClick={() => toggleSelection(group.id, option.id, group.maxSelection)}
                                                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-300 active:scale-[0.99] ${isSelected ? 'bg-white/[0.08] border-brand-primary/50 shadow-lg' : 'bg-white/[0.03] border-transparent hover:bg-white/[0.06]'}`}>
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${isSelected ? 'bg-brand-primary border-brand-primary text-white scale-110' : 'border-gray-600'}`}>
                                                        {isSelected && <Check size={12} strokeWidth={4} />}
                                                    </div>
                                                    <span className={`text-sm ${isSelected ? 'text-white font-medium' : 'text-gray-400 font-light'}`}>{option.name}</span>
                                                </div>
                                                {option.price > 0 && <span className="text-xs font-bold text-white bg-black/40 px-2 py-1 rounded">+{currency}{formatCurrency(option.price)}</span>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}

                        {/* --- SMART UPSELL UI --- */}
                        {smartRecommendation && (
                            <div className="mt-10 mb-8 animate-slide-up">
                                <div className="flex items-center gap-2 mb-4 pl-1">
                                    <Sparkles size={14} className="text-brand-primary animate-pulse" />
                                    <h3 className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">{smartRecommendation.label}</h3>
                                </div>

                                <div
                                    onClick={() => setIsPairingSelected(!isPairingSelected)}
                                    className={`
                                relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer group
                                ${isPairingSelected
                                            ? 'bg-brand-primary/10 border-brand-primary shadow-[0_0_30px_rgba(var(--color-brand-primary),0.15)]'
                                            : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.05]'
                                        }
                            `}
                                >
                                    <div className="flex items-center p-4 gap-5 relative z-10">
                                        {/* Visual Asset */}
                                        <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500 relative overflow-hidden ${isPairingSelected ? 'border-brand-primary bg-black' : 'border-white/10 bg-white/5'}`}>
                                            {smartRecommendation.item.image ? (
                                                <img src={smartRecommendation.item.image} className="w-full h-full object-cover opacity-90" alt="" />
                                            ) : (
                                                <div className={`transition-colors ${isPairingSelected ? 'text-brand-primary' : 'text-gray-500'}`}>
                                                    {getUpsellIcon(smartRecommendation.item.name)}
                                                </div>
                                            )}
                                            {/* Animation overlay */}
                                            {isPairingSelected && <div className="absolute inset-0 bg-brand-primary/20 animate-pulse"></div>}
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start">
                                                <p className={`text-lg font-serif italic truncate pr-2 transition-colors ${isPairingSelected ? 'text-white' : 'text-gray-300'}`}>
                                                    {smartRecommendation.item.name}
                                                </p>
                                                <span className={`text-xs font-bold px-2 py-1 rounded border transition-colors ${isPairingSelected ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white/10 text-white border-transparent'}`}>
                                                    +{currency}{formatCurrency(smartRecommendation.item.price)}
                                                </span>
                                            </div>
                                            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider line-clamp-1">
                                                {smartRecommendation.item.description || "Complemento ideal sugerido"}
                                            </p>
                                        </div>

                                        {/* Radio Indicator */}
                                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${isPairingSelected ? 'border-brand-primary' : 'border-gray-600'}`}>
                                            <div className={`w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_10px_currentColor] transition-all duration-300 ${isPairingSelected ? 'scale-100' : 'scale-0'}`} />
                                        </div>
                                    </div>

                                    {/* Background Glow Effect on Select */}
                                    <div className={`absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-transparent transition-opacity duration-500 ${isPairingSelected ? 'opacity-100' : 'opacity-0'}`}></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ACTION FOOTER */}
                    <div className="fixed bottom-0 left-0 right-0 p-4 pb-6 md:p-6 bg-[#050505]/95 backdrop-blur-xl border-t border-white/10 z-50">
                        <div className="max-w-2xl mx-auto flex gap-4 h-14">
                            {/* Quantity Stepper */}
                            <div className="flex items-center bg-white/5 rounded-2xl border border-white/10 px-1 shrink-0 h-full">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-full flex items-center justify-center text-white hover:text-brand-primary active:scale-75 transition-all"><Minus size={20} /></button>
                                <span className="w-8 text-center font-bold text-xl text-white tabular-nums">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-full flex items-center justify-center text-white hover:text-brand-primary active:scale-75 transition-all"><Plus size={20} /></button>
                            </div>

                            {/* Add Button */}
                            <button
                                onClick={handleAdd}
                                disabled={!isValid || isAdded}
                                className={`
                            flex-1 h-full rounded-2xl font-bold text-xs tracking-[0.15em] uppercase shadow-2xl transition-all flex items-center justify-between px-8 transform active:scale-[0.98]
                            ${isAdded ? 'bg-green-500 text-white border-green-500' : isValid ? 'bg-white text-black hover:bg-brand-primary hover:text-white hover:border-brand-primary' : 'bg-gray-800 text-gray-500 cursor-not-allowed border-white/5 border'}
                        `}
                            >
                                {isAdded ? (
                                    <div className="w-full flex justify-center items-center gap-3 animate-fade-in"><CheckCircle2 size={24} /> <span>Listo</span></div>
                                ) : (
                                    <>
                                        <div className="flex flex-col items-start leading-none gap-1">
                                            <span className="text-sm font-black">{isValid ? 'Agregar' : 'Elige Opciones'}</span>
                                            {isPairingSelected && <span className="text-[9px] font-normal normal-case opacity-70 tracking-normal">+ {smartRecommendation?.item.name}</span>}
                                        </div>
                                        <span className="text-2xl font-serif italic font-medium">{currency}{formatCurrency(totalDisplayPrice)}</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </Modal>
    );
};
