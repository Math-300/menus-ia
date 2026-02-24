'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { MenuItem } from '@/types';
import { Trash2, Receipt, ArrowRight, Plus, Minus } from 'lucide-react';
import { formatCurrency } from '@/lib/utils/format';

interface OrderSummaryModalProps {
    isOpen: boolean;
    onClose: () => void;
    selection: MenuItem[];
    onRemoveItem: (index: number) => void;
    onUpdateQuantity: (index: number, quantity: number) => void;
    onConfirmOrder: () => void;
    currencySymbol?: string;
    isLoading?: boolean;
}

export const OrderSummaryModal: React.FC<OrderSummaryModalProps> = ({
    isOpen,
    onClose,
    selection,
    onRemoveItem,
    onUpdateQuantity,
    onConfirmOrder,
    currencySymbol = '$',
    isLoading = false
}) => {
    const subtotal = selection.reduce((acc, item) => {
        return acc + (item.finalPrice || (item.price * (item.quantity || 1)));
    }, 0);

    const tax = subtotal * 0.08; // 8% Impoconsumo
    const total = subtotal + tax;

    const handlePay = () => {
        onConfirmOrder();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title=" " variant="default">
            <div className="px-6 pb-6">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                        <Receipt className="text-gray-400" />
                    </div>
                    <h2 className="text-3xl font-serif text-white italic">Tu Cuenta</h2>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Revisa tus elecciones</p>
                </div>

                {/* Order List */}
                <div className="space-y-4 mb-8 max-h-[40vh] overflow-y-auto no-scrollbar">
                    {selection.length === 0 ? (
                        <p className="text-center text-gray-500 py-8 text-sm">No has seleccionado nada aún.</p>
                    ) : (
                        selection.map((item, idx) => (
                            <div key={`${item.id}-${idx}`} className="flex justify-between items-start bg-white/5 p-4 rounded-xl border border-white/5 group">
                                {/* Left: Info */}
                                <div className="flex-1 pr-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-white font-medium text-lg leading-tight">{item.name}</span>
                                    </div>

                                    {/* Modifiers List */}
                                    {item.selectedOptions && item.selectedOptions.length > 0 && (
                                        <div className="pl-0 space-y-1 mt-2 mb-2">
                                            {item.selectedOptions.map((opt, i) => (
                                                <div key={i} className="text-[10px] text-gray-400 flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-brand-primary"></div>
                                                    <span>{opt.optionName}</span>
                                                    {opt.price > 0 && <span className="text-white/60">+{currencySymbol}{formatCurrency(opt.price)}</span>}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right: Controls & Price */}
                                <div className="flex flex-col items-end gap-3">
                                    <span className="text-white font-serif font-medium text-lg">
                                        {currencySymbol}{formatCurrency(item.finalPrice || 0)}
                                    </span>

                                    <div className="flex items-center bg-black/40 rounded-lg border border-white/10 p-1">
                                        <button
                                            onClick={() => {
                                                if ((item.quantity || 1) > 1) {
                                                    onUpdateQuantity(idx, (item.quantity || 1) - 1);
                                                } else {
                                                    onRemoveItem(idx);
                                                }
                                            }}
                                            className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                                        >
                                            {(item.quantity || 1) > 1 ? <Minus size={14} /> : <Trash2 size={14} className="text-red-400" />}
                                        </button>
                                        <span className="w-8 text-center text-sm font-bold text-white tabular-nums">{item.quantity || 1}</span>
                                        <button
                                            onClick={() => onUpdateQuantity(idx, (item.quantity || 1) + 1)}
                                            className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Totals */}
                {selection.length > 0 && (
                    <div className="border-t border-dashed border-white/10 pt-6 space-y-2 mb-8">
                        <div className="flex justify-between text-xs text-gray-400">
                            <span>Subtotal</span>
                            <span>{currencySymbol} {formatCurrency(subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                            <span>Impoconsumo (8%)</span>
                            <span>{currencySymbol} {formatCurrency(tax)}</span>
                        </div>
                        <div className="flex justify-between text-xl font-serif text-white italic pt-2 mt-2 border-t border-white/5">
                            <span>Total</span>
                            <span>{currencySymbol} {formatCurrency(total)}</span>
                        </div>
                    </div>
                )}

                {/* Action Button */}
                <button
                    onClick={handlePay}
                    disabled={selection.length === 0 || isLoading}
                    className={`
                w-full py-4 rounded-xl font-bold text-xs tracking-[0.15em] uppercase shadow-xl transition-all relative overflow-hidden
                bg-brand-primary text-white hover:bg-brand-primary/90
                disabled:opacity-50 disabled:cursor-not-allowed
            `}
                >
                    {isLoading ? (
                        <span className="animate-pulse">Procesando Orden...</span>
                    ) : (
                        <div className="flex items-center justify-center gap-2">
                            Confirmar Pedido <ArrowRight size={14} />
                        </div>
                    )}
                </button>
            </div>
        </Modal>
    );
};
