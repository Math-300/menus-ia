"use client";

import { useState, useEffect } from 'react';
import {
    TrendingUp,
    ShoppingBag,
    DollarSign,
    Clock,
    ChefHat,
    Package,
    CheckCircle,
    ArrowUpRight,
    ArrowDownRight,
    RefreshCw,
    Eye
} from 'lucide-react';
import Link from 'next/link';
import { useTenant } from '@/hooks/useTenant';
import { formatCurrency } from '@/hooks/useOrders';

interface OrderStats {
    totalToday: number;
    totalWeek: number;
    totalMonth: number;
    revenueToday: number;
    revenueWeek: number;
    revenueMonth: number;
    byStatus: Record<string, number>;
    pending: number;
    confirmed: number;
    preparing: number;
    ready: number;
    delivered: number;
    cancelled: number;
}

interface TopDish {
    name: string;
    quantity: number;
    revenue: number;
}

interface RecentOrder {
    id: string;
    order_number: string;
    customer_name: string | null;
    total: number;
    status: string;
    created_at: string;
    items_count: number;
}

interface OrdersPerDay {
    date: string;
    count: number;
    revenue: number;
}

interface DashboardStats {
    orderStats: OrderStats;
    topDishes: TopDish[];
    recentOrders: RecentOrder[];
    ordersPerDay: OrdersPerDay[];
}

export default function AdminDashboard() {
    const { tenant } = useTenant();
    const currency = tenant?.currency || '$';

    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchStats = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/admin/stats');
            if (!response.ok) {
                throw new Error('Error al cargar estadísticas');
            }
            const data = await response.json();
            setStats(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    // Calculate max for chart
    const maxOrders = Math.max(...(stats?.ordersPerDay?.map(d => d.count) || [1]));
    const maxRevenue = Math.max(...(stats?.ordersPerDay?.map(d => d.revenue) || [1]));

    // Format date for chart
    const formatChartDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric' });
    };

    // Get relative time
    const getRelativeTime = (dateString: string): string => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);

        if (diffMins < 1) return 'Ahora';
        if (diffMins < 60) return `Hace ${diffMins} min`;
        if (diffHours < 24) return `Hace ${diffHours}h`;
        return date.toLocaleDateString('es-CO', { day: 'numeric', month: 'short' });
    };

    const statusColors: Record<string, string> = {
        pending: 'bg-yellow-500',
        confirmed: 'bg-blue-500',
        preparing: 'bg-orange-500',
        ready: 'bg-green-500',
        delivered: 'bg-gray-500',
        cancelled: 'bg-red-500',
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                    <p className="text-gray-400 mt-1">Resumen de tu restaurante</p>
                </div>
                <button
                    onClick={fetchStats}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 transition-colors disabled:opacity-50"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    Actualizar
                </button>
            </div>

            {/* Error */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400">
                    {error}
                </div>
            )}

            {/* Main Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Orders Today */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center justify-between">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <ShoppingBag className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-xs text-gray-500">Hoy</span>
                    </div>
                    <div className="mt-4">
                        <div className="text-3xl font-bold text-white">
                            {loading ? '-' : stats?.orderStats.totalToday || 0}
                        </div>
                        <div className="text-sm text-gray-400">Pedidos hoy</div>
                    </div>
                </div>

                {/* Revenue Today */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center justify-between">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                            <DollarSign className="w-5 h-5 text-green-400" />
                        </div>
                        <span className="text-xs text-gray-500">Hoy</span>
                    </div>
                    <div className="mt-4">
                        <div className="text-3xl font-bold text-white">
                            {loading ? '-' : formatCurrency(stats?.orderStats.revenueToday || 0, currency)}
                        </div>
                        <div className="text-sm text-gray-400">Ingresos hoy</div>
                    </div>
                </div>

                {/* Orders Week */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center justify-between">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-purple-400" />
                        </div>
                        <span className="text-xs text-gray-500">Semana</span>
                    </div>
                    <div className="mt-4">
                        <div className="text-3xl font-bold text-white">
                            {loading ? '-' : stats?.orderStats.totalWeek || 0}
                        </div>
                        <div className="text-sm text-gray-400">Pedidos semana</div>
                    </div>
                </div>

                {/* Revenue Month */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center justify-between">
                        <div className="p-2 bg-orange-500/20 rounded-lg">
                            <DollarSign className="w-5 h-5 text-orange-400" />
                        </div>
                        <span className="text-xs text-gray-500">Mes</span>
                    </div>
                    <div className="mt-4">
                        <div className="text-3xl font-bold text-white">
                            {loading ? '-' : formatCurrency(stats?.orderStats.revenueMonth || 0, currency)}
                        </div>
                        <div className="text-sm text-gray-400">Ingresos mes</div>
                    </div>
                </div>
            </div>

            {/* Status Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 text-center">
                    <Clock className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-yellow-400">{stats?.orderStats.pending || 0}</div>
                    <div className="text-xs text-gray-400">Pendientes</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-400">{stats?.orderStats.confirmed || 0}</div>
                    <div className="text-xs text-gray-400">Confirmados</div>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
                    <ChefHat className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-400">{stats?.orderStats.preparing || 0}</div>
                    <div className="text-xs text-gray-400">Preparando</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                    <Package className="w-5 h-5 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-400">{stats?.orderStats.ready || 0}</div>
                    <div className="text-xs text-gray-400">Listos</div>
                </div>
                <div className="bg-gray-500/10 border border-gray-500/30 rounded-xl p-4 text-center">
                    <Package className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-400">{stats?.orderStats.delivered || 0}</div>
                    <div className="text-xs text-gray-400">Entregados</div>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                    <Package className="w-5 h-5 text-red-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-red-400">{stats?.orderStats.cancelled || 0}</div>
                    <div className="text-xs text-gray-400">Cancelados</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Orders Chart */}
                <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-white mb-4">Pedidos últimos 7 días</h3>
                    {loading ? (
                        <div className="h-48 flex items-center justify-center">
                            <RefreshCw className="w-8 h-8 text-gray-500 animate-spin" />
                        </div>
                    ) : (
                        <div className="h-48 flex items-end gap-2">
                            {stats?.ordersPerDay?.map((day, index) => (
                                <div key={day.date} className="flex-1 flex flex-col items-center gap-2">
                                    <div className="w-full flex flex-col items-center">
                                        <span className="text-xs text-gray-400 mb-1">
                                            {formatCurrency(day.revenue, currency)}
                                        </span>
                                        <div
                                            className="w-full bg-brand-primary/80 rounded-t transition-all hover:bg-brand-primary"
                                            style={{
                                                height: `${Math.max((day.count / maxOrders) * 120, 8)}px`,
                                            }}
                                            title={`${day.count} pedidos`}
                                        />
                                    </div>
                                    <span className="text-xs text-gray-500">{formatChartDate(day.date)}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Top Dishes */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-white mb-4">Top 5 Platos</h3>
                    {loading ? (
                        <div className="h-48 flex items-center justify-center">
                            <RefreshCw className="w-8 h-8 text-gray-500 animate-spin" />
                        </div>
                    ) : stats?.topDishes?.length === 0 ? (
                        <div className="h-48 flex items-center justify-center text-gray-500">
                            Sin datos aún
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {stats?.topDishes?.map((dish, index) => (
                                <div key={dish.name} className="flex items-center gap-3">
                                    <div className={`
                                        w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                                        ${index === 0 ? 'bg-yellow-500/20 text-yellow-400' :
                                            index === 1 ? 'bg-gray-400/20 text-gray-400' :
                                                index === 2 ? 'bg-orange-500/20 text-orange-400' :
                                                    'bg-white/10 text-gray-500'}
                                    `}>
                                        {index + 1}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-white truncate">{dish.name}</div>
                                        <div className="text-xs text-gray-500">
                                            {dish.quantity} vendidos · {formatCurrency(dish.revenue, currency)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-white/10">
                    <h3 className="text-lg font-semibold text-white">Pedidos Recientes</h3>
                    <Link
                        href="/admin/orders"
                        className="text-sm text-brand-primary hover:text-brand-primary/80 flex items-center gap-1"
                    >
                        Ver todos <Eye className="w-4 h-4" />
                    </Link>
                </div>

                {loading ? (
                    <div className="p-8 flex items-center justify-center">
                        <RefreshCw className="w-8 h-8 text-gray-500 animate-spin" />
                    </div>
                ) : stats?.recentOrders?.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                        No hay pedidos recientes
                    </div>
                ) : (
                    <div className="divide-y divide-white/5">
                        {stats?.recentOrders?.map((order) => (
                            <Link
                                key={order.id}
                                href={`/admin/orders?id=${order.id}`}
                                className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-2 h-2 rounded-full ${statusColors[order.status] || 'bg-gray-500'}`} />
                                    <div>
                                        <div className="text-white font-medium">#{order.order_number}</div>
                                        <div className="text-sm text-gray-500">
                                            {order.customer_name || 'Sin nombre'} · {order.items_count} items
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-white font-medium">
                                        {formatCurrency(order.total, currency)}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {getRelativeTime(order.created_at)}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                    href="/admin/menu"
                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors flex items-center gap-4"
                >
                    <div className="p-3 bg-brand-primary/20 rounded-lg">
                        <ShoppingBag className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                        <div className="text-white font-medium">Gestionar Menú</div>
                        <div className="text-sm text-gray-500">Agregar o editar platos</div>
                    </div>
                </Link>

                <Link
                    href="/admin/stories"
                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors flex items-center gap-4"
                >
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                        <div className="text-white font-medium">Stories</div>
                        <div className="text-sm text-gray-500">Crear promociones</div>
                    </div>
                </Link>

                <Link
                    href="/admin/branding"
                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors flex items-center gap-4"
                >
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                        <DollarSign className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                        <div className="text-white font-medium">Branding</div>
                        <div className="text-sm text-gray-500">Personalizar tu menú</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
