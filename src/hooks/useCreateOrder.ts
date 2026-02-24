'use client';

import { useState, useCallback } from 'react';
import { MenuItem } from '@/types';

export interface OrderItem {
    dish_id: string | null;
    dish_name: string;
    quantity: number;
    unit_price: number;
    total_price: number;
    notes?: string;
    selected_options?: Array<{
        groupName: string;
        optionName: string;
        price: number;
    }>;
}

export interface CreateOrderData {
    tenant_slug: string;
    customer_name: string;
    customer_phone?: string;
    customer_email?: string;
    items: OrderItem[];
    total: number;
    notes?: string;
}

export interface CreatedOrder {
    id: string;
    status: string;
    total: number;
    createdAt: string;
    restaurantName: string;
}

interface UseCreateOrderReturn {
    order: CreatedOrder | null;
    loading: boolean;
    error: string | null;
    success: boolean;
    createOrder: (orderData: CreateOrderData) => Promise<CreatedOrder | null>;
    resetState: () => void;
}

// Helper para convertir MenuItem del carrito a OrderItem
export function menuItemToOrderItem(item: MenuItem, notes?: string): OrderItem {
    return {
        dish_id: item.id,
        dish_name: item.name,
        quantity: item.quantity || 1,
        unit_price: item.price,
        total_price: item.finalPrice || (item.price * (item.quantity || 1)),
        notes: notes,
        selected_options: item.selectedOptions?.map(opt => ({
            groupName: opt.groupName,
            optionName: opt.optionName,
            price: opt.price
        }))
    };
}

export function useCreateOrder(): UseCreateOrderReturn {
    const [order, setOrder] = useState<CreatedOrder | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const createOrder = useCallback(async (orderData: CreateOrderData): Promise<CreatedOrder | null> => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch('/api/public/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al crear pedido');
            }

            if (data.success && data.order) {
                setOrder(data.order);
                setSuccess(true);
                return data.order;
            }

            throw new Error('Respuesta inesperada del servidor');
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
            setError(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const resetState = useCallback(() => {
        setOrder(null);
        setError(null);
        setSuccess(false);
        setLoading(false);
    }, []);

    return {
        order,
        loading,
        error,
        success,
        createOrder,
        resetState,
    };
}
