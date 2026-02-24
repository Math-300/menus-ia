'use client';

import React, { useState, useEffect } from 'react';
import {
    Search,
    RefreshCw,
    Eye,
    ChevronLeft,
    ChevronRight,
    Clock,
    ChefHat,
    Package,
    CheckCircle,
    AlertCircle,
    Filter
} from 'lucide-react';
import { useOrders, OrderStatus, statusColors, statusLabels, formatCurrency, getRelativeTime } from '@/hooks/useOrders';
import { OrderDetail } from '@/components/admin/OrderDetail';
import { useTenant } from '@/hooks/useTenant';

export default function OrdersManagementPage() {
    const {
        orders,
        loading,
        error,
        stats,
        pagination,
        fetchOrders,
        updateOrderStatus,
        refreshOrders
    } = useOrders();

    const { tenant } = useTenant();
    const currency = tenant?.currency || '$';

    const [filterStatus, setFilterStatus] = useState<OrderStatus | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
    const [dateFilter, setDateFilter] = useState<'today' | 'week' | 'month' | 'all'>('all');

    // Apply filters
    useEffect(() => {
        const filters: {
            status?: OrderStatus;
            from?: string;
            to?: string;
        } = {};

        if (filterStatus !== 'all') {
            filters.status = filterStatus;
        }

        const now = new Date();
        if (dateFilter === 'today') {
            filters.from = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
        } else if (dateFilter === 'week') {
            filters.from = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7).toISOString();
        } else if (dateFilter === 'month') {
            filters.from = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
        }

        fetchOrders(filters);
    }, [filterStatus, dateFilter, fetchOrders]);

    // Filter orders by search query
    const filteredOrders = orders.filter(order => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            order.order_number.toLowerCase().includes(query) ||
            order.customer_name?.toLowerCase().includes(query) ||
            order.table_number?.toLowerCase().includes(query)
        );
    });

    const handleUpdateStatus = async (id: string, status: OrderStatus) => {
        const result = await updateOrderStatus(id, status);
        if (result) {
            // Update selected order if it's the one being viewed
            if (selectedOrder === id) {
                // The order in the list is already updated by the hook
            }
        }
        return result;
    };

    const selectedOrderData = orders.find(o => o.id === selectedOrder) || null;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Pedidos</h1>
                    <p className="text-gray-400 mt-1">Gestiona los pedidos recibidos</p>
                </div>
                <button
                    onClick={() => refreshOrders()}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 transition-colors disabled:opacity-50"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    Actualizar
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-yellow-400">{stats?.pending || 0}</div>
                    <div className="text-xs text-gray-400">Pendientes</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-400">{stats?.confirmed || 0}</div>
                    <div className="text-xs text-gray-400">Confirmados</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-400">{stats?.preparing || 0}</div>
                    <div className="text-xs text-gray-400">Preparando</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400">{stats?.ready || 0}</div>
                    <div className="text-xs text-gray-400">Listos</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-gray-400">{stats?.delivered || 0}</div>
                    <div className="text-xs text-gray-400">Entregados</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">{formatCurrency(stats?.revenueToday || 0, currency)}</div>
                    <div className="text-xs text-gray-400">Ventas Hoy</div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Buscar por orden, cliente o mesa..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary/50"
                    />
                </div>

                {/* Date Filter */}
                <div className="flex gap-2">
                    <button
                        onClick={() => setDateFilter('today')}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${dateFilter === 'today'
                                ? 'bg-brand-primary text-white'
                                : 'bg-white/10 text-gray-400 hover:text-white'
                            }`}
                    >
                        Hoy
                    </button>
                    <button
                        onClick={() => setDateFilter('week')}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${dateFilter === 'week'
                                ? 'bg-brand-primary text-white'
                                : 'bg-white/10 text-gray-400 hover:text-white'
                            }`}
                    >
                        Semana
                    </button>
                    <button
                        onClick={() => setDateFilter('month')}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${dateFilter === 'month'
                                ? 'bg-brand-primary text-white'
                                : 'bg-white/10 text-gray-400 hover:text-white'
                            }`}
                    >
                        Mes
                    </button>
                    <button
                        onClick={() => setDateFilter('all')}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${dateFilter === 'all'
                                ? 'bg-brand-primary text-white'
                                : 'bg-white/10 text-gray-400 hover:text-white'
                            }`}
                    >
                        Todo
                    </button>
                </div>
            </div>

            {/* Status Filter Pills */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setFilterStatus('all')}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filterStatus === 'all'
                            ? 'bg-brand-primary text-white'
                            : 'bg-white/10 text-gray-400 hover:text-white'
                        }`}
                >
                    Todos
                </button>
                {Object.entries(statusLabels).map(([status, label]) => (
                    <button
                        key={status}
                        onClick={() => setFilterStatus(status as OrderStatus)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filterStatus === status
                                ? 'bg-brand-primary text-white'
                                : 'bg-white/10 text-gray-400 hover:text-white'
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400">{error}</span>
                </div>
            )}

            {/* Orders Table */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Orden #
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Cliente
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Items
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Total
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Estado
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Hora
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                <tr>
                                    <td colSpan={7} className="px-4 py-12 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <RefreshCw className="w-8 h-8 text-gray-500 animate-spin" />
                                            <p className="text-gray-500">Cargando pedidos...</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredOrders.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-4 py-12 text-center text-gray-500">
                                        <div className="flex flex-col items-center gap-3">
                                            <Package className="w-12 h-12 text-gray-600" />
                                            <p>No hay pedidos</p>
                                            <p className="text-xs">Los pedidos aparecerán aquí cuando los clientes realicen órdenes</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                filteredOrders.map((order) => (
                                    <tr
                                        key={order.id}
                                        className="hover:bg-white/5 transition-colors cursor-pointer"
                                        onClick={() => setSelectedOrder(order.id)}
                                    >
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-white font-medium">#{order.order_number}</span>
                                                {order.table_number && (
                                                    <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-gray-400">
                                                        Mesa {order.table_number}
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="text-gray-200">{order.customer_name || 'Sin nombre'}</div>
                                            {order.customer_phone && (
                                                <div className="text-xs text-gray-500">{order.customer_phone}</div>
                                            )}
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="text-gray-300">
                                                {order.order_items?.length || 0} items
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {order.order_items?.slice(0, 2).map(i => i.dish_name).join(', ')}
                                                {order.order_items && order.order_items.length > 2 && '...'}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="text-white font-medium">
                                                {formatCurrency(order.total, currency)}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[order.status]}`}>
                                                {order.status === 'pending' && <Clock className="w-3 h-3" />}
                                                {order.status === 'confirmed' && <CheckCircle className="w-3 h-3" />}
                                                {order.status === 'preparing' && <ChefHat className="w-3 h-3" />}
                                                {order.status === 'ready' && <Package className="w-3 h-3" />}
                                                {statusLabels[order.status]}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="text-gray-300 text-sm">
                                                {getRelativeTime(order.created_at)}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedOrder(order.id);
                                                }}
                                                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
                        <div className="text-sm text-gray-500">
                            Mostrando {((pagination.page - 1) * pagination.limit) + 1} - {Math.min(pagination.page * pagination.limit, pagination.total)} de {pagination.total}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => fetchOrders({ page: pagination.page - 1 })}
                                disabled={pagination.page === 1 || loading}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-4 h-4 text-gray-400" />
                            </button>
                            <span className="px-3 py-1 text-gray-400">
                                {pagination.page} / {pagination.totalPages}
                            </span>
                            <button
                                onClick={() => fetchOrders({ page: pagination.page + 1 })}
                                disabled={pagination.page === pagination.totalPages || loading}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Order Detail Modal */}
            <OrderDetail
                order={selectedOrderData}
                isOpen={!!selectedOrder}
                onClose={() => setSelectedOrder(null)}
                onUpdateStatus={handleUpdateStatus}
                currency={currency}
            />
        </div>
    );
}
