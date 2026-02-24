'use client';

import { useState, useCallback, useEffect } from 'react';

// Types based on Supabase schema
export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export interface OrderItem {
    id: string;
    order_id: string;
    dish_id: string | null;
    dish_name: string;
    quantity: number;
    unit_price: number;
    total_price: number;
    notes: string | null;
    selected_options: Array<{
        groupName: string;
        optionName: string;
        price: number;
    }>;
    created_at: string;
}

export interface Order {
    id: string;
    tenant_id: string;
    order_number: string;
    table_number: string | null;
    customer_name: string | null;
    customer_phone: string | null;
    customer_email: string | null;
    status: OrderStatus;
    payment_status: PaymentStatus;
    subtotal: number;
    tax: number;
    total: number;
    notes: string | null;
    wompi_transaction_id: string | null;
    created_at: string;
    updated_at: string;
    order_items?: OrderItem[];
}

export interface OrderStats {
    totalToday: number;
    totalWeek: number;
    totalMonth: number;
    revenueToday: number;
    revenueWeek: number;
    revenueMonth: number;
    byStatus: Record<OrderStatus, number>;
    pending: number;
    confirmed: number;
    preparing: number;
    ready: number;
    delivered: number;
    cancelled: number;
}

export interface OrdersFilters {
    status?: OrderStatus;
    payment_status?: PaymentStatus;
    from?: string;
    to?: string;
    page?: number;
    limit?: number;
}

interface UseOrdersReturn {
    orders: Order[];
    loading: boolean;
    error: string | null;
    stats: OrderStats | null;
    statsLoading: boolean;
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
    fetchOrders: (filters?: OrdersFilters) => Promise<void>;
    getOrder: (id: string) => Promise<Order | null>;
    updateOrderStatus: (id: string, status: OrderStatus) => Promise<Order | null>;
    fetchOrderStats: () => Promise<void>;
    refreshOrders: () => Promise<void>;
}

export function useOrders(initialFilters?: OrdersFilters): UseOrdersReturn {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [stats, setStats] = useState<OrderStats | null>(null);
    const [statsLoading, setStatsLoading] = useState(false);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 50,
        total: 0,
        totalPages: 0,
    });
    const [currentFilters, setCurrentFilters] = useState<OrdersFilters>(initialFilters || {});

    const fetchOrders = useCallback(async (filters?: OrdersFilters) => {
        setLoading(true);
        setError(null);
        try {
            const params = new URLSearchParams();
            const finalFilters = filters || currentFilters;

            if (finalFilters.status) {
                params.append('status', finalFilters.status);
            }
            if (finalFilters.payment_status) {
                params.append('payment_status', finalFilters.payment_status);
            }
            if (finalFilters.from) {
                params.append('from', finalFilters.from);
            }
            if (finalFilters.to) {
                params.append('to', finalFilters.to);
            }
            if (finalFilters.page) {
                params.append('page', String(finalFilters.page));
            }
            if (finalFilters.limit) {
                params.append('limit', String(finalFilters.limit));
            }

            const queryString = params.toString();
            const url = `/api/admin/orders${queryString ? `?${queryString}` : ''}`;

            const response = await fetch(url);
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener pedidos');
            }
            const data = await response.json();
            setOrders(data.orders || []);
            setPagination(data.pagination || {
                page: 1,
                limit: 50,
                total: 0,
                totalPages: 0,
            });
            setCurrentFilters(finalFilters);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    }, [currentFilters]);

    const getOrder = useCallback(async (id: string): Promise<Order | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/admin/orders/${id}`);
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener pedido');
            }
            const data = await response.json();
            return data.order;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const updateOrderStatus = useCallback(async (id: string, status: OrderStatus): Promise<Order | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/admin/orders/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status }),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al actualizar pedido');
            }
            const data = await response.json();
            const updatedOrder = data.order;

            // Update local state
            setOrders(prev => prev.map(o => o.id === id ? updatedOrder : o));

            // Refresh stats after status change
            fetchOrderStats();

            return updatedOrder;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchOrderStats = useCallback(async () => {
        setStatsLoading(true);
        try {
            const response = await fetch('/api/admin/stats');
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener estadísticas');
            }
            const data = await response.json();
            setStats(data.orderStats || null);
        } catch (err) {
            console.error('Error fetching order stats:', err);
        } finally {
            setStatsLoading(false);
        }
    }, []);

    const refreshOrders = useCallback(async () => {
        await fetchOrders(currentFilters);
    }, [fetchOrders, currentFilters]);

    // Auto-fetch on mount
    useEffect(() => {
        fetchOrders();
        fetchOrderStats();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return {
        orders,
        loading,
        error,
        stats,
        statsLoading,
        pagination,
        fetchOrders,
        getOrder,
        updateOrderStatus,
        fetchOrderStats,
        refreshOrders,
    };
}

// Utility functions for status display
export const statusColors: Record<OrderStatus, string> = {
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    confirmed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    preparing: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    ready: 'bg-green-500/20 text-green-400 border-green-500/30',
    delivered: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export const statusLabels: Record<OrderStatus, string> = {
    pending: 'Pendiente',
    confirmed: 'Confirmado',
    preparing: 'Preparando',
    ready: 'Listo',
    delivered: 'Entregado',
    cancelled: 'Cancelado',
};

export const paymentStatusColors: Record<PaymentStatus, string> = {
    pending: 'bg-yellow-500/20 text-yellow-400',
    paid: 'bg-green-500/20 text-green-400',
    failed: 'bg-red-500/20 text-red-400',
    refunded: 'bg-purple-500/20 text-purple-400',
};

export const paymentStatusLabels: Record<PaymentStatus, string> = {
    pending: 'Pendiente',
    paid: 'Pagado',
    failed: 'Fallido',
    refunded: 'Reembolsado',
};

// Status progression for timeline
export const statusOrder: OrderStatus[] = ['pending', 'confirmed', 'preparing', 'ready', 'delivered'];

// Helper to get next status
export function getNextStatus(currentStatus: OrderStatus): OrderStatus | null {
    const currentIndex = statusOrder.indexOf(currentStatus);
    if (currentIndex === -1 || currentIndex === statusOrder.length - 1) {
        return null;
    }
    return statusOrder[currentIndex + 1];
}

// Helper to format currency
export function formatCurrency(amount: number, currency: string = '$'): string {
    return `${currency}${amount.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

// Helper to format date
export function formatOrderDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString('es-CO', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
    });
}

// Helper to get relative time
export function getRelativeTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Ahora';
    if (diffMins < 60) return `Hace ${diffMins} min`;
    if (diffHours < 24) return `Hace ${diffHours}h`;
    if (diffDays === 1) return 'Ayer';
    if (diffDays < 7) return `Hace ${diffDays} días`;
    return formatOrderDate(dateString);
}
