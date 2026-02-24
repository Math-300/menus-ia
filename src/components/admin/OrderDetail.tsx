'use client';

import React, { useState } from 'react';
import {
    X,
    User,
    Phone,
    Mail,
    MapPin,
    Clock,
    CreditCard,
    ChefHat,
    CheckCircle,
    AlertCircle,
    Package,
    Truck,
    Ban
} from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import {
    Order,
    OrderStatus,
    statusColors,
    statusLabels,
    paymentStatusColors,
    paymentStatusLabels,
    statusOrder,
    formatCurrency,
    formatOrderDate,
    getRelativeTime,
    getNextStatus,
} from '@/hooks/useOrders';

interface OrderDetailProps {
    order: Order | null;
    isOpen: boolean;
    onClose: () => void;
    onUpdateStatus: (id: string, status: OrderStatus) => Promise<Order | null>;
    currency?: string;
}

const statusIcons: Record<OrderStatus, React.ReactNode> = {
    pending: <Clock className="w-4 h-4" />,
    confirmed: <CheckCircle className="w-4 h-4" />,
    preparing: <ChefHat className="w-4 h-4" />,
    ready: <Package className="w-4 h-4" />,
    delivered: <Truck className="w-4 h-4" />,
    cancelled: <Ban className="w-4 h-4" />,
};

export function OrderDetail({
    order,
    isOpen,
    onClose,
    onUpdateStatus,
    currency = '$'
}: OrderDetailProps) {
    const [updating, setUpdating] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<OrderStatus | null>(null);

    if (!order) return null;

    const handleStatusChange = async (newStatus: OrderStatus) => {
        setUpdating(true);
        setSelectedStatus(newStatus);
        try {
            await onUpdateStatus(order.id, newStatus);
        } finally {
            setUpdating(false);
            setSelectedStatus(null);
        }
    };

    const nextStatus = getNextStatus(order.status);
    const currentIndex = statusOrder.indexOf(order.status);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-white/10">
                {/* Header */}
                <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-white/10 p-4 flex items-center justify-between z-10">
                    <div>
                        <h2 className="text-xl font-bold text-white">
                            Orden #{order.order_number}
                        </h2>
                        <p className="text-sm text-gray-400">
                            {formatOrderDate(order.created_at)} · {getRelativeTime(order.created_at)}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

                <div className="p-4 space-y-6">
                    {/* Status Timeline */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h3 className="text-sm font-medium text-gray-400 mb-4">Estado del Pedido</h3>
                        <div className="flex items-center justify-between">
                            {statusOrder.map((status, index) => {
                                const isActive = index <= currentIndex && order.status !== 'cancelled';
                                const isCurrent = status === order.status;
                                const isCancelled = order.status === 'cancelled';

                                return (
                                    <div key={status} className="flex flex-col items-center flex-1">
                                        <div
                                            className={`
                                                w-10 h-10 rounded-full flex items-center justify-center
                                                ${isCurrent && !isCancelled
                                                    ? 'bg-brand-primary text-white ring-4 ring-brand-primary/30'
                                                    : isActive && !isCancelled
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-white/10 text-gray-500'
                                                }
                                                transition-all
                                            `}
                                        >
                                            {statusIcons[status]}
                                        </div>
                                        <span className={`
                                            text-xs mt-2 text-center
                                            ${isCurrent && !isCancelled
                                                ? 'text-white font-medium'
                                                : isActive && !isCancelled
                                                    ? 'text-green-400'
                                                    : 'text-gray-500'
                                            }
                                        `}>
                                            {statusLabels[status]}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {order.status === 'cancelled' && (
                            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-red-400" />
                                <span className="text-red-400 text-sm">Este pedido fue cancelado</span>
                            </div>
                        )}
                    </div>

                    {/* Customer Info */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h3 className="text-sm font-medium text-gray-400 mb-3">Información del Cliente</h3>
                        <div className="space-y-2">
                            {order.customer_name && (
                                <div className="flex items-center gap-3 text-gray-300">
                                    <User className="w-4 h-4 text-gray-500" />
                                    <span>{order.customer_name}</span>
                                </div>
                            )}
                            {order.table_number && (
                                <div className="flex items-center gap-3 text-gray-300">
                                    <MapPin className="w-4 h-4 text-gray-500" />
                                    <span>Mesa {order.table_number}</span>
                                </div>
                            )}
                            {order.customer_phone && (
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Phone className="w-4 h-4 text-gray-500" />
                                    <span>{order.customer_phone}</span>
                                </div>
                            )}
                            {order.customer_email && (
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Mail className="w-4 h-4 text-gray-500" />
                                    <span>{order.customer_email}</span>
                                </div>
                            )}
                            {!order.customer_name && !order.table_number && !order.customer_phone && !order.customer_email && (
                                <p className="text-gray-500 text-sm">Sin información de cliente</p>
                            )}
                        </div>
                    </div>

                    {/* Order Items */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h3 className="text-sm font-medium text-gray-400 mb-3">Items del Pedido</h3>
                        <div className="space-y-3">
                            {order.order_items?.map((item) => (
                                <div key={item.id} className="flex justify-between items-start py-2 border-b border-white/5 last:border-0">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-medium">{item.quantity}x</span>
                                            <span className="text-gray-200">{item.dish_name}</span>
                                        </div>
                                        {item.selected_options && item.selected_options.length > 0 && (
                                            <div className="mt-1 ml-6">
                                                {item.selected_options.map((opt, i) => (
                                                    <span key={i} className="text-xs text-gray-500">
                                                        + {opt.optionName} {opt.price > 0 && `(+${formatCurrency(opt.price, currency)})`}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        {item.notes && (
                                            <p className="text-xs text-yellow-400/80 mt-1 ml-6">
                                                📝 {item.notes}
                                            </p>
                                        )}
                                    </div>
                                    <span className="text-gray-300 font-medium">
                                        {formatCurrency(item.total_price, currency)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h3 className="text-sm font-medium text-gray-400 mb-3">Resumen de Pago</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between text-gray-300">
                                <span>Subtotal</span>
                                <span>{formatCurrency(order.subtotal, currency)}</span>
                            </div>
                            {order.tax > 0 && (
                                <div className="flex justify-between text-gray-300">
                                    <span>Impuestos</span>
                                    <span>{formatCurrency(order.tax, currency)}</span>
                                </div>
                            )}
                            <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-white/10">
                                <span>Total</span>
                                <span>{formatCurrency(order.total, currency)}</span>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-gray-500" />
                            <span className={`text-sm px-2 py-1 rounded-full ${paymentStatusColors[order.payment_status]}`}>
                                {paymentStatusLabels[order.payment_status]}
                            </span>
                        </div>
                    </div>

                    {/* Notes */}
                    {order.notes && (
                        <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30">
                            <h3 className="text-sm font-medium text-yellow-400 mb-2">Notas del Pedido</h3>
                            <p className="text-gray-300">{order.notes}</p>
                        </div>
                    )}

                    {/* Action Buttons */}
                    {order.status !== 'cancelled' && order.status !== 'delivered' && (
                        <div className="flex flex-wrap gap-2">
                            {nextStatus && (
                                <button
                                    onClick={() => handleStatusChange(nextStatus)}
                                    disabled={updating}
                                    className={`
                                        flex-1 py-3 px-4 rounded-xl font-medium
                                        bg-brand-primary text-white
                                        hover:bg-brand-primary/80 transition-colors
                                        disabled:opacity-50 disabled:cursor-not-allowed
                                        flex items-center justify-center gap-2
                                    `}
                                >
                                    {updating && selectedStatus === nextStatus ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            {statusIcons[nextStatus]}
                                            Marcar como {statusLabels[nextStatus]}
                                        </>
                                    )}
                                </button>
                            )}
                            <button
                                onClick={() => handleStatusChange('cancelled')}
                                disabled={updating}
                                className={`
                                    py-3 px-4 rounded-xl font-medium
                                    bg-red-500/20 text-red-400 border border-red-500/30
                                    hover:bg-red-500/30 transition-colors
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                `}
                            >
                                {updating && selectedStatus === 'cancelled' ? (
                                    <div className="w-5 h-5 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin" />
                                ) : (
                                    'Cancelar'
                                )}
                            </button>
                        </div>
                    )}

                    {/* Quick Status Change */}
                    {order.status !== 'cancelled' && order.status !== 'delivered' && (
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <h3 className="text-sm font-medium text-gray-400 mb-3">Cambio Rápido de Estado</h3>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(statusLabels).map(([status, label]) => (
                                    <button
                                        key={status}
                                        onClick={() => handleStatusChange(status as OrderStatus)}
                                        disabled={updating || status === order.status}
                                        className={`
                                            px-3 py-2 rounded-lg text-sm font-medium
                                            ${status === order.status
                                                ? statusColors[status as OrderStatus] + ' ring-2 ring-white/20'
                                                : 'bg-white/10 text-gray-400 hover:text-white hover:bg-white/20'
                                            }
                                            transition-all disabled:opacity-50 disabled:cursor-not-allowed
                                            flex items-center gap-1.5
                                        `}
                                    >
                                        {statusIcons[status as OrderStatus]}
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
}
