'use client';

import { useState } from 'react';
import { MenuItem } from '@/types';

export const useCart = () => {
    const [selection, setSelection] = useState<MenuItem[]>([]);

    const addToCart = (newItem: MenuItem) => {
        setSelection(prev => {
            // 1. Prepare signature for the new item
            // CRITICAL FIX: Use full ID instead of split('-')[0] to prevent collisions between distinct items like "burger-special" and "burger-classic"
            const incomingId = newItem.id;
            const incomingOptsSignature = JSON.stringify(
                newItem.selectedOptions?.sort((a, b) => a.optionName.localeCompare(b.optionName)) || []
            );

            // 2. Search for an IDENTICAL item in the cart (Same ID + Same Options)
            const existingIndex = prev.findIndex(existing => {
                const existingId = existing.id;
                const existingOptsSignature = JSON.stringify(
                    existing.selectedOptions?.sort((a, b) => a.optionName.localeCompare(b.optionName)) || []
                );
                return existingId === incomingId && existingOptsSignature === incomingOptsSignature;
            });

            // 3. MERGE or APPEND
            if (existingIndex >= 0) {
                const updatedCart = [...prev];
                const existingItem = updatedCart[existingIndex];
                const quantityToAdd = newItem.quantity || 1;
                const newQuantity = (existingItem.quantity || 1) + quantityToAdd;

                // Recalculate finalPrice based on the unit price stored in the item
                // Note: We trust existingItem.price is the correct unit price (base + modifiers)
                const unitPrice = existingItem.price;

                updatedCart[existingIndex] = {
                    ...existingItem,
                    quantity: newQuantity,
                    finalPrice: unitPrice * newQuantity
                };
                return updatedCart;
            } else {
                // Ensure defaults for direct Quick-Adds
                const itemToAdd = {
                    ...newItem,
                    quantity: newItem.quantity || 1,
                    finalPrice: newItem.finalPrice || newItem.price, // Trust pre-calculated finalPrice if available, else base
                    selectedOptions: newItem.selectedOptions || []
                };
                return [...prev, itemToAdd];
            }
        });
    };

    const updateQuantity = (index: number, newQuantity: number) => {
        if (newQuantity < 1) return;
        setSelection(prev => {
            const updated = [...prev];
            const item = updated[index];
            const unitPrice = item.price;
            updated[index] = {
                ...item,
                quantity: newQuantity,
                finalPrice: unitPrice * newQuantity
            };
            return updated;
        });
    };

    const removeFromCart = (index: number) => {
        setSelection(prev => prev.filter((_, i) => i !== index));
    };

    const clearCart = () => {
        setSelection([]);
    };

    return {
        selection,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart
    };
};
