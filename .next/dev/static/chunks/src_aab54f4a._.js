(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useOrders.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency,
    "formatOrderDate",
    ()=>formatOrderDate,
    "getNextStatus",
    ()=>getNextStatus,
    "getRelativeTime",
    ()=>getRelativeTime,
    "paymentStatusColors",
    ()=>paymentStatusColors,
    "paymentStatusLabels",
    ()=>paymentStatusLabels,
    "statusColors",
    ()=>statusColors,
    "statusLabels",
    ()=>statusLabels,
    "statusOrder",
    ()=>statusOrder,
    "useOrders",
    ()=>useOrders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useOrders(initialFilters) {
    _s();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [statsLoading, setStatsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pagination, setPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        page: 1,
        limit: 50,
        total: 0,
        totalPages: 0
    });
    const [currentFilters, setCurrentFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFilters || {});
    const fetchOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOrders.useCallback[fetchOrders]": async (filters)=>{
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
                const data_0 = await response.json();
                setOrders(data_0.orders || []);
                setPagination(data_0.pagination || {
                    page: 1,
                    limit: 50,
                    total: 0,
                    totalPages: 0
                });
                setCurrentFilters(finalFilters);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido');
            } finally{
                setLoading(false);
            }
        }
    }["useOrders.useCallback[fetchOrders]"], [
        currentFilters
    ]);
    const getOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOrders.useCallback[getOrder]": async (id)=>{
            setLoading(true);
            setError(null);
            try {
                const response_0 = await fetch(`/api/admin/orders/${id}`);
                if (!response_0.ok) {
                    const data_1 = await response_0.json();
                    throw new Error(data_1.error || 'Error al obtener pedido');
                }
                const data_2 = await response_0.json();
                return data_2.order;
            } catch (err_0) {
                setError(err_0 instanceof Error ? err_0.message : 'Error desconocido');
                return null;
            } finally{
                setLoading(false);
            }
        }
    }["useOrders.useCallback[getOrder]"], []);
    const updateOrderStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOrders.useCallback[updateOrderStatus]": async (id_0, status)=>{
            setLoading(true);
            setError(null);
            try {
                const response_1 = await fetch(`/api/admin/orders/${id_0}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status
                    })
                });
                if (!response_1.ok) {
                    const data_3 = await response_1.json();
                    throw new Error(data_3.error || 'Error al actualizar pedido');
                }
                const data_4 = await response_1.json();
                const updatedOrder = data_4.order;
                // Update local state
                setOrders({
                    "useOrders.useCallback[updateOrderStatus]": (prev)=>prev.map({
                            "useOrders.useCallback[updateOrderStatus]": (o)=>o.id === id_0 ? updatedOrder : o
                        }["useOrders.useCallback[updateOrderStatus]"])
                }["useOrders.useCallback[updateOrderStatus]"]);
                // Refresh stats after status change
                fetchOrderStats();
                return updatedOrder;
            } catch (err_1) {
                setError(err_1 instanceof Error ? err_1.message : 'Error desconocido');
                return null;
            } finally{
                setLoading(false);
            }
        }
    }["useOrders.useCallback[updateOrderStatus]"], []);
    const fetchOrderStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOrders.useCallback[fetchOrderStats]": async ()=>{
            setStatsLoading(true);
            try {
                const response_2 = await fetch('/api/admin/stats');
                if (!response_2.ok) {
                    const data_5 = await response_2.json();
                    throw new Error(data_5.error || 'Error al obtener estadísticas');
                }
                const data_6 = await response_2.json();
                setStats(data_6.orderStats || null);
            } catch (err_2) {
                console.error('Error fetching order stats:', err_2);
            } finally{
                setStatsLoading(false);
            }
        }
    }["useOrders.useCallback[fetchOrderStats]"], []);
    const refreshOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOrders.useCallback[refreshOrders]": async ()=>{
            await fetchOrders(currentFilters);
        }
    }["useOrders.useCallback[refreshOrders]"], [
        fetchOrders,
        currentFilters
    ]);
    // Auto-fetch on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOrders.useEffect": ()=>{
            fetchOrders();
            fetchOrderStats();
        }
    }["useOrders.useEffect"], []); // eslint-disable-line react-hooks/exhaustive-deps
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
        refreshOrders
    };
}
_s(useOrders, "74wo2tN5CP9YlqqAVGI1BSnvp2g=");
const statusColors = {
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    confirmed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    preparing: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    ready: 'bg-green-500/20 text-green-400 border-green-500/30',
    delivered: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    cancelled: 'bg-red-500/20 text-red-400 border-red-500/30'
};
const statusLabels = {
    pending: 'Pendiente',
    confirmed: 'Confirmado',
    preparing: 'Preparando',
    ready: 'Listo',
    delivered: 'Entregado',
    cancelled: 'Cancelado'
};
const paymentStatusColors = {
    pending: 'bg-yellow-500/20 text-yellow-400',
    paid: 'bg-green-500/20 text-green-400',
    failed: 'bg-red-500/20 text-red-400',
    refunded: 'bg-purple-500/20 text-purple-400'
};
const paymentStatusLabels = {
    pending: 'Pendiente',
    paid: 'Pagado',
    failed: 'Fallido',
    refunded: 'Reembolsado'
};
const statusOrder = [
    'pending',
    'confirmed',
    'preparing',
    'ready',
    'delivered'
];
function getNextStatus(currentStatus) {
    const currentIndex = statusOrder.indexOf(currentStatus);
    if (currentIndex === -1 || currentIndex === statusOrder.length - 1) {
        return null;
    }
    return statusOrder[currentIndex + 1];
}
function formatCurrency(amount, currency = '$') {
    return `${currency}${amount.toLocaleString('es-CO', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })}`;
}
function formatOrderDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('es-CO', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
    });
}
function getRelativeTime(dateString) {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Modal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "9dff98d5a7b54716e5b3b4c83a338a29bf60f85845f9f21355e2e5e8f224bab2") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dff98d5a7b54716e5b3b4c83a338a29bf60f85845f9f21355e2e5e8f224bab2";
    }
    const { isOpen, onClose, children, title, variant: t1 } = t0;
    const variant = t1 === undefined ? "default" : t1;
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    let t3;
    if ($[1] !== isOpen || $[2] !== onClose) {
        t2 = ()=>{
            const handleOutsideClick = (event)=>{
                if (modalRef.current && !modalRef.current.contains(event.target)) {
                    onClose();
                }
            };
            if (isOpen) {
                document.addEventListener("mousedown", handleOutsideClick);
                document.body.style.overflow = "hidden";
            }
            return ()=>{
                document.removeEventListener("mousedown", handleOutsideClick);
                document.body.style.overflow = "unset";
            };
        };
        t3 = [
            isOpen,
            onClose
        ];
        $[1] = isOpen;
        $[2] = onClose;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!isOpen) {
        return null;
    }
    const isImmersive = variant === "immersive";
    const t4 = `
            bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-t-[2.5rem] md:rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl transform transition-all animate-slide-up h-[90vh] md:h-auto md:max-h-[90vh] flex flex-col
            ${isImmersive ? "p-0" : "p-0 md:p-6"} 
        `;
    const t5 = `
            flex justify-between items-center absolute top-0 left-0 right-0 z-20 pointer-events-none
            ${isImmersive ? "p-6 bg-gradient-to-b from-black/60 to-transparent" : "p-6 bg-transparent"}
        `;
    let t6;
    if ($[5] !== title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-serif italic text-white/90 drop-shadow-md",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = title;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            size: 20,
            className: "group-hover:rotate-90 transition-transform duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== onClose) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "pointer-events-auto p-2.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-white shadow-lg group",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = onClose;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t5 || $[11] !== t6 || $[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t5;
        $[11] = t6;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== children) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto overscroll-contain no-scrollbar",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = children;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10 || $[17] !== t4 || $[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-6 animate-fade-in",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: modalRef,
                className: t4,
                children: [
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Modal.tsx",
                lineNumber: 113,
                columnNumber: 151
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t10;
        $[17] = t4;
        $[18] = t9;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    return t11;
};
_s(Modal, "iXNJws+mDn9J+ZcpHudMXHGV85c=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/OrderDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderDetail",
    ()=>OrderDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-client] (ecmascript) <export default as ChefHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useOrders.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const statusIcons = {
    pending: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/src/components/admin/OrderDetail.tsx",
        lineNumber: 15,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    confirmed: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/src/components/admin/OrderDetail.tsx",
        lineNumber: 16,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    preparing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/src/components/admin/OrderDetail.tsx",
        lineNumber: 17,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    ready: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/src/components/admin/OrderDetail.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    delivered: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/src/components/admin/OrderDetail.tsx",
        lineNumber: 19,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    cancelled: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/src/components/admin/OrderDetail.tsx",
        lineNumber: 20,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0))
};
function OrderDetail({ order, isOpen, onClose, onUpdateStatus, currency = '$' }) {
    _s();
    const [updating, setUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!order) return null;
    const handleStatusChange = async (newStatus)=>{
        setUpdating(true);
        setSelectedStatus(newStatus);
        try {
            await onUpdateStatus(order.id, newStatus);
        } finally{
            setUpdating(false);
            setSelectedStatus(null);
        }
    };
    const nextStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextStatus"])(order.status);
    const currentIndex = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusOrder"].indexOf(order.status);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: isOpen,
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-white/10 p-4 flex items-center justify-between z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-white",
                                    children: [
                                        "Orden #",
                                        order.order_number
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatOrderDate"])(order.created_at),
                                        " · ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelativeTime"])(order.created_at)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                lineNumber: 57,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 rounded-xl p-4 border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium text-gray-400 mb-4",
                                    children: "Estado del Pedido"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusOrder"].map((status, index)=>{
                                        const isActive = index <= currentIndex && order.status !== 'cancelled';
                                        const isCurrent = status === order.status;
                                        const isCancelled = order.status === 'cancelled';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `
                                                w-10 h-10 rounded-full flex items-center justify-center
                                                ${isCurrent && !isCancelled ? 'bg-brand-primary text-white ring-4 ring-brand-primary/30' : isActive && !isCancelled ? 'bg-green-500 text-white' : 'bg-white/10 text-gray-500'}
                                                transition-all
                                            `,
                                                    children: statusIcons[status]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `
                                            text-xs mt-2 text-center
                                            ${isCurrent && !isCancelled ? 'text-white font-medium' : isActive && !isCancelled ? 'text-green-400' : 'text-gray-500'}
                                        `,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusLabels"][status]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, status, true, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 70,
                                            columnNumber: 22
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this),
                                order.status === 'cancelled' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-5 h-5 text-red-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 89,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-400 text-sm",
                                            children: "Este pedido fue cancelado"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 90,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 88,
                                    columnNumber: 58
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 rounded-xl p-4 border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium text-gray-400 mb-3",
                                    children: "Información del Cliente"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        order.customer_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-4 h-4 text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: order.customer_name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 98,
                                            columnNumber: 53
                                        }, this),
                                        order.table_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-4 h-4 text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Mesa ",
                                                        order.table_number
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 102,
                                            columnNumber: 52
                                        }, this),
                                        order.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-4 h-4 text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: order.customer_phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 106,
                                            columnNumber: 54
                                        }, this),
                                        order.customer_email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "w-4 h-4 text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: order.customer_email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 110,
                                            columnNumber: 54
                                        }, this),
                                        !order.customer_name && !order.table_number && !order.customer_phone && !order.customer_email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm",
                                            children: "Sin información de cliente"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 114,
                                            columnNumber: 127
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 rounded-xl p-4 border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium text-gray-400 mb-3",
                                    children: "Items del Pedido"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: order.order_items?.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start py-2 border-b border-white/5 last:border-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white font-medium",
                                                                    children: [
                                                                        item.quantity,
                                                                        "x"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                                    lineNumber: 125,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-200",
                                                                    children: item.dish_name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                                    lineNumber: 126,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 41
                                                        }, this),
                                                        item.selected_options && item.selected_options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 ml-6",
                                                            children: item.selected_options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: [
                                                                        "+ ",
                                                                        opt.optionName,
                                                                        " ",
                                                                        opt.price > 0 && `(+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(opt.price, currency)})`
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 88
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 103
                                                        }, this),
                                                        item.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-yellow-400/80 mt-1 ml-6",
                                                            children: [
                                                                "📝 ",
                                                                item.notes
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 56
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-300 font-medium",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.total_price, currency)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 122,
                                            columnNumber: 61
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 rounded-xl p-4 border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium text-gray-400 mb-3",
                                    children: "Resumen de Pago"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Subtotal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(order.subtotal, currency)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 148,
                                            columnNumber: 29
                                        }, this),
                                        order.tax > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Impuestos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(order.tax, currency)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 152,
                                            columnNumber: 47
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-white font-bold text-lg pt-2 border-t border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(order.total, currency)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 156,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 147,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                            className: "w-4 h-4 text-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 163,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm px-2 py-1 rounded-full ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paymentStatusColors"][order.payment_status]}`,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paymentStatusLabels"][order.payment_status]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 164,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 162,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, this),
                        order.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium text-yellow-400 mb-2",
                                    children: "Notas del Pedido"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 172,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300",
                                    children: order.notes
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 173,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                            lineNumber: 171,
                            columnNumber: 37
                        }, this),
                        order.status !== 'cancelled' && order.status !== 'delivered' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                nextStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleStatusChange(nextStatus),
                                    disabled: updating,
                                    className: `
                                        flex-1 py-3 px-4 rounded-xl font-medium
                                        bg-brand-primary text-white
                                        hover:bg-brand-primary/80 transition-colors
                                        disabled:opacity-50 disabled:cursor-not-allowed
                                        flex items-center justify-center gap-2
                                    `,
                                    children: updating && selectedStatus === nextStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                        lineNumber: 185,
                                        columnNumber: 82
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            statusIcons[nextStatus],
                                            "Marcar como ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusLabels"][nextStatus]
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 178,
                                    columnNumber: 44
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleStatusChange('cancelled'),
                                    disabled: updating,
                                    className: `
                                    py-3 px-4 rounded-xl font-medium
                                    bg-red-500/20 text-red-400 border border-red-500/30
                                    hover:bg-red-500/30 transition-colors
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                `,
                                    children: updating && selectedStatus === 'cancelled' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                        lineNumber: 196,
                                        columnNumber: 79
                                    }, this) : 'Cancelar'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 190,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                            lineNumber: 177,
                            columnNumber: 86
                        }, this),
                        order.status !== 'cancelled' && order.status !== 'delivered' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 rounded-xl p-4 border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium text-gray-400 mb-3",
                                    children: "Cambio Rápido de Estado"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 202,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusLabels"]).map(([status_0, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleStatusChange(status_0),
                                            disabled: updating || status_0 === order.status,
                                            className: `
                                            px-3 py-2 rounded-lg text-sm font-medium
                                            ${status_0 === order.status ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusColors"][status_0] + ' ring-2 ring-white/20' : 'bg-white/10 text-gray-400 hover:text-white hover:bg-white/20'}
                                            transition-all disabled:opacity-50 disabled:cursor-not-allowed
                                            flex items-center gap-1.5
                                        `,
                                            children: [
                                                statusIcons[status_0],
                                                label
                                            ]
                                        }, status_0, true, {
                                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                            lineNumber: 204,
                                            columnNumber: 90
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                                    lineNumber: 203,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/OrderDetail.tsx",
                            lineNumber: 201,
                            columnNumber: 86
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/OrderDetail.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/OrderDetail.tsx",
            lineNumber: 45,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/OrderDetail.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
_s(OrderDetail, "5bd1TOR3nMjYfawr08PRdInpCo8=");
_c = OrderDetail;
var _c;
__turbopack_context__.k.register(_c, "OrderDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTenant.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTenant",
    ()=>useTenant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useTenant() {
    _s();
    const [tenant, setTenant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchTenant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTenant.useCallback[fetchTenant]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/api/admin/tenant');
                if (!response.ok) {
                    const data = await response.json();
                    throw new Error(data.error || 'Error al obtener configuración');
                }
                const data_0 = await response.json();
                setTenant(data_0.tenant);
                setUserRole(data_0.userRole);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido');
            } finally{
                setLoading(false);
            }
        }
    }["useTenant.useCallback[fetchTenant]"], []);
    const updateTenant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTenant.useCallback[updateTenant]": async (formData)=>{
            setLoading(true);
            setError(null);
            try {
                const response_0 = await fetch('/api/admin/tenant', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (!response_0.ok) {
                    const data_1 = await response_0.json();
                    throw new Error(data_1.error || 'Error al actualizar configuración');
                }
                const data_2 = await response_0.json();
                const updatedTenant = data_2.tenant;
                setTenant(updatedTenant);
                return updatedTenant;
            } catch (err_0) {
                setError(err_0 instanceof Error ? err_0.message : 'Error desconocido');
                return null;
            } finally{
                setLoading(false);
            }
        }
    }["useTenant.useCallback[updateTenant]"], []);
    // Auto-fetch on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTenant.useEffect": ()=>{
            fetchTenant();
        }
    }["useTenant.useEffect"], [
        fetchTenant
    ]);
    return {
        tenant,
        userRole,
        loading,
        error,
        fetchTenant,
        updateTenant
    };
}
_s(useTenant, "ZObIc9S3UGSY0CzzoPgky8NJiKI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/orders/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrdersManagementPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-client] (ecmascript) <export default as ChefHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useOrders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$OrderDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/OrderDetail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTenant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTenant.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function OrdersManagementPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(165);
    if ($[0] !== "fdf17062a3e7a96a23c11bcb0fbd38ff4cb4737b47238853b94c3d049084a8b0") {
        for(let $i = 0; $i < 165; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fdf17062a3e7a96a23c11bcb0fbd38ff4cb4737b47238853b94c3d049084a8b0";
    }
    const { orders, loading, error, stats, pagination, fetchOrders, updateOrderStatus, refreshOrders } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrders"])();
    const { tenant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTenant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTenant"])();
    const currency = tenant?.currency || "$";
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedOrder, setSelectedOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dateFilter, setDateFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t0;
    let t1;
    if ($[1] !== dateFilter || $[2] !== fetchOrders || $[3] !== filterStatus) {
        t0 = ({
            "OrdersManagementPage[useEffect()]": ()=>{
                const filters = {};
                if (filterStatus !== "all") {
                    filters.status = filterStatus;
                }
                const now = new Date();
                if (dateFilter === "today") {
                    filters.from = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
                } else {
                    if (dateFilter === "week") {
                        filters.from = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7).toISOString();
                    } else {
                        if (dateFilter === "month") {
                            filters.from = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
                        }
                    }
                }
                fetchOrders(filters);
            }
        })["OrdersManagementPage[useEffect()]"];
        t1 = [
            filterStatus,
            dateFilter,
            fetchOrders
        ];
        $[1] = dateFilter;
        $[2] = fetchOrders;
        $[3] = filterStatus;
        $[4] = t0;
        $[5] = t1;
    } else {
        t0 = $[4];
        t1 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let handleUpdateStatus;
    let selectedOrderData;
    let t10;
    let t11;
    let t12;
    let t13;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[6] !== currency || $[7] !== dateFilter || $[8] !== error || $[9] !== filterStatus || $[10] !== loading || $[11] !== orders || $[12] !== refreshOrders || $[13] !== searchQuery || $[14] !== selectedOrder || $[15] !== stats?.confirmed || $[16] !== stats?.delivered || $[17] !== stats?.pending || $[18] !== stats?.preparing || $[19] !== stats?.ready || $[20] !== stats?.revenueToday || $[21] !== updateOrderStatus) {
        let t14;
        if ($[36] !== searchQuery) {
            t14 = ({
                "OrdersManagementPage[orders.filter()]": (order)=>{
                    if (!searchQuery) {
                        return true;
                    }
                    const query = searchQuery.toLowerCase();
                    return order.order_number.toLowerCase().includes(query) || order.customer_name?.toLowerCase().includes(query) || order.table_number?.toLowerCase().includes(query);
                }
            })["OrdersManagementPage[orders.filter()]"];
            $[36] = searchQuery;
            $[37] = t14;
        } else {
            t14 = $[37];
        }
        const filteredOrders = orders.filter(t14);
        let t15;
        if ($[38] !== selectedOrder || $[39] !== updateOrderStatus) {
            t15 = ({
                "OrdersManagementPage[handleUpdateStatus]": async (id, status)=>{
                    const result = await updateOrderStatus(id, status);
                    if (result) {
                        if (selectedOrder === id) {}
                    }
                    return result;
                }
            })["OrdersManagementPage[handleUpdateStatus]"];
            $[38] = selectedOrder;
            $[39] = updateOrderStatus;
            $[40] = t15;
        } else {
            t15 = $[40];
        }
        handleUpdateStatus = t15;
        let t16;
        if ($[41] !== orders || $[42] !== selectedOrder) {
            t16 = orders.find({
                "OrdersManagementPage[orders.find()]": (o)=>o.id === selectedOrder
            }["OrdersManagementPage[orders.find()]"]) || null;
            $[41] = orders;
            $[42] = selectedOrder;
            $[43] = t16;
        } else {
            t16 = $[43];
        }
        selectedOrderData = t16;
        t8 = "space-y-6";
        let t17;
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white",
                        children: "Pedidos"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/orders/page.tsx",
                        lineNumber: 135,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mt-1",
                        children: "Gestiona los pedidos recibidos"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/orders/page.tsx",
                        lineNumber: 135,
                        columnNumber: 76
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this);
            $[44] = t17;
        } else {
            t17 = $[44];
        }
        let t18;
        if ($[45] !== refreshOrders) {
            t18 = ({
                "OrdersManagementPage[<button>.onClick]": ()=>refreshOrders()
            })["OrdersManagementPage[<button>.onClick]"];
            $[45] = refreshOrders;
            $[46] = t18;
        } else {
            t18 = $[46];
        }
        const t19 = `w-4 h-4 ${loading ? "animate-spin" : ""}`;
        let t20;
        if ($[47] !== t19) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                className: t19
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 153,
                columnNumber: 13
            }, this);
            $[47] = t19;
            $[48] = t20;
        } else {
            t20 = $[48];
        }
        if ($[49] !== loading || $[50] !== t18 || $[51] !== t20) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                children: [
                    t17,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: t18,
                        disabled: loading,
                        className: "flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-gray-300 transition-colors disabled:opacity-50",
                        children: [
                            t20,
                            "Actualizar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/orders/page.tsx",
                        lineNumber: 160,
                        columnNumber: 101
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 160,
                columnNumber: 12
            }, this);
            $[49] = loading;
            $[50] = t18;
            $[51] = t20;
            $[52] = t9;
        } else {
            t9 = $[52];
        }
        const t21 = stats?.pending || 0;
        let t22;
        if ($[53] !== t21) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-yellow-400",
                children: t21
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 171,
                columnNumber: 13
            }, this);
            $[53] = t21;
            $[54] = t22;
        } else {
            t22 = $[54];
        }
        let t23;
        if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-400",
                children: "Pendientes"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 179,
                columnNumber: 13
            }, this);
            $[55] = t23;
        } else {
            t23 = $[55];
        }
        let t24;
        if ($[56] !== t22) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 border border-white/10 rounded-xl p-4",
                children: [
                    t22,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 186,
                columnNumber: 13
            }, this);
            $[56] = t22;
            $[57] = t24;
        } else {
            t24 = $[57];
        }
        const t25 = stats?.confirmed || 0;
        let t26;
        if ($[58] !== t25) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-blue-400",
                children: t25
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, this);
            $[58] = t25;
            $[59] = t26;
        } else {
            t26 = $[59];
        }
        let t27;
        if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-400",
                children: "Confirmados"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 203,
                columnNumber: 13
            }, this);
            $[60] = t27;
        } else {
            t27 = $[60];
        }
        let t28;
        if ($[61] !== t26) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 border border-white/10 rounded-xl p-4",
                children: [
                    t26,
                    t27
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 210,
                columnNumber: 13
            }, this);
            $[61] = t26;
            $[62] = t28;
        } else {
            t28 = $[62];
        }
        const t29 = stats?.preparing || 0;
        let t30;
        if ($[63] !== t29) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-orange-400",
                children: t29
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 219,
                columnNumber: 13
            }, this);
            $[63] = t29;
            $[64] = t30;
        } else {
            t30 = $[64];
        }
        let t31;
        if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-400",
                children: "Preparando"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 227,
                columnNumber: 13
            }, this);
            $[65] = t31;
        } else {
            t31 = $[65];
        }
        let t32;
        if ($[66] !== t30) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 border border-white/10 rounded-xl p-4",
                children: [
                    t30,
                    t31
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 234,
                columnNumber: 13
            }, this);
            $[66] = t30;
            $[67] = t32;
        } else {
            t32 = $[67];
        }
        const t33 = stats?.ready || 0;
        let t34;
        if ($[68] !== t33) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-green-400",
                children: t33
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 243,
                columnNumber: 13
            }, this);
            $[68] = t33;
            $[69] = t34;
        } else {
            t34 = $[69];
        }
        let t35;
        if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-400",
                children: "Listos"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 251,
                columnNumber: 13
            }, this);
            $[70] = t35;
        } else {
            t35 = $[70];
        }
        let t36;
        if ($[71] !== t34) {
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 border border-white/10 rounded-xl p-4",
                children: [
                    t34,
                    t35
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 258,
                columnNumber: 13
            }, this);
            $[71] = t34;
            $[72] = t36;
        } else {
            t36 = $[72];
        }
        const t37 = stats?.delivered || 0;
        let t38;
        if ($[73] !== t37) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-gray-400",
                children: t37
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 267,
                columnNumber: 13
            }, this);
            $[73] = t37;
            $[74] = t38;
        } else {
            t38 = $[74];
        }
        let t39;
        if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-400",
                children: "Entregados"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 275,
                columnNumber: 13
            }, this);
            $[75] = t39;
        } else {
            t39 = $[75];
        }
        let t40;
        if ($[76] !== t38) {
            t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 border border-white/10 rounded-xl p-4",
                children: [
                    t38,
                    t39
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 282,
                columnNumber: 13
            }, this);
            $[76] = t38;
            $[77] = t40;
        } else {
            t40 = $[77];
        }
        const t41 = stats?.revenueToday || 0;
        let t42;
        if ($[78] !== currency || $[79] !== t41) {
            t42 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(t41, currency);
            $[78] = currency;
            $[79] = t41;
            $[80] = t42;
        } else {
            t42 = $[80];
        }
        let t43;
        if ($[81] !== t42) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-white",
                children: t42
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 300,
                columnNumber: 13
            }, this);
            $[81] = t42;
            $[82] = t43;
        } else {
            t43 = $[82];
        }
        let t44;
        if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
            t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-400",
                children: "Ventas Hoy"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 308,
                columnNumber: 13
            }, this);
            $[83] = t44;
        } else {
            t44 = $[83];
        }
        let t45;
        if ($[84] !== t43) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 border border-white/10 rounded-xl p-4",
                children: [
                    t43,
                    t44
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 315,
                columnNumber: 13
            }, this);
            $[84] = t43;
            $[85] = t45;
        } else {
            t45 = $[85];
        }
        if ($[86] !== t24 || $[87] !== t28 || $[88] !== t32 || $[89] !== t36 || $[90] !== t40 || $[91] !== t45) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4",
                children: [
                    t24,
                    t28,
                    t32,
                    t36,
                    t40,
                    t45
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 322,
                columnNumber: 13
            }, this);
            $[86] = t24;
            $[87] = t28;
            $[88] = t32;
            $[89] = t36;
            $[90] = t40;
            $[91] = t45;
            $[92] = t10;
        } else {
            t10 = $[92];
        }
        let t46;
        if ($[93] === Symbol.for("react.memo_cache_sentinel")) {
            t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 335,
                columnNumber: 13
            }, this);
            $[93] = t46;
        } else {
            t46 = $[93];
        }
        let t47;
        if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
            t47 = ({
                "OrdersManagementPage[<input>.onChange]": (e)=>setSearchQuery(e.target.value)
            })["OrdersManagementPage[<input>.onChange]"];
            $[94] = t47;
        } else {
            t47 = $[94];
        }
        let t48;
        if ($[95] !== searchQuery) {
            t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1",
                children: [
                    t46,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Buscar por orden, cliente o mesa...",
                        value: searchQuery,
                        onChange: t47,
                        className: "w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary/50"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/orders/page.tsx",
                        lineNumber: 351,
                        columnNumber: 51
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 351,
                columnNumber: 13
            }, this);
            $[95] = searchQuery;
            $[96] = t48;
        } else {
            t48 = $[96];
        }
        let t49;
        if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
            t49 = ({
                "OrdersManagementPage[<button>.onClick]": ()=>setDateFilter("today")
            })["OrdersManagementPage[<button>.onClick]"];
            $[97] = t49;
        } else {
            t49 = $[97];
        }
        const t50 = `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${dateFilter === "today" ? "bg-brand-primary text-white" : "bg-white/10 text-gray-400 hover:text-white"}`;
        let t51;
        if ($[98] !== t50) {
            t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t49,
                className: t50,
                children: "Hoy"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 369,
                columnNumber: 13
            }, this);
            $[98] = t50;
            $[99] = t51;
        } else {
            t51 = $[99];
        }
        let t52;
        if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
            t52 = ({
                "OrdersManagementPage[<button>.onClick]": ()=>setDateFilter("week")
            })["OrdersManagementPage[<button>.onClick]"];
            $[100] = t52;
        } else {
            t52 = $[100];
        }
        const t53 = `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${dateFilter === "week" ? "bg-brand-primary text-white" : "bg-white/10 text-gray-400 hover:text-white"}`;
        let t54;
        if ($[101] !== t53) {
            t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t52,
                className: t53,
                children: "Semana"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 387,
                columnNumber: 13
            }, this);
            $[101] = t53;
            $[102] = t54;
        } else {
            t54 = $[102];
        }
        let t55;
        if ($[103] === Symbol.for("react.memo_cache_sentinel")) {
            t55 = ({
                "OrdersManagementPage[<button>.onClick]": ()=>setDateFilter("month")
            })["OrdersManagementPage[<button>.onClick]"];
            $[103] = t55;
        } else {
            t55 = $[103];
        }
        const t56 = `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${dateFilter === "month" ? "bg-brand-primary text-white" : "bg-white/10 text-gray-400 hover:text-white"}`;
        let t57;
        if ($[104] !== t56) {
            t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t55,
                className: t56,
                children: "Mes"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 405,
                columnNumber: 13
            }, this);
            $[104] = t56;
            $[105] = t57;
        } else {
            t57 = $[105];
        }
        let t58;
        if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
            t58 = ({
                "OrdersManagementPage[<button>.onClick]": ()=>setDateFilter("all")
            })["OrdersManagementPage[<button>.onClick]"];
            $[106] = t58;
        } else {
            t58 = $[106];
        }
        const t59 = `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${dateFilter === "all" ? "bg-brand-primary text-white" : "bg-white/10 text-gray-400 hover:text-white"}`;
        let t60;
        if ($[107] !== t59) {
            t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t58,
                className: t59,
                children: "Todo"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 423,
                columnNumber: 13
            }, this);
            $[107] = t59;
            $[108] = t60;
        } else {
            t60 = $[108];
        }
        let t61;
        if ($[109] !== t51 || $[110] !== t54 || $[111] !== t57 || $[112] !== t60) {
            t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    t51,
                    t54,
                    t57,
                    t60
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 431,
                columnNumber: 13
            }, this);
            $[109] = t51;
            $[110] = t54;
            $[111] = t57;
            $[112] = t60;
            $[113] = t61;
        } else {
            t61 = $[113];
        }
        if ($[114] !== t48 || $[115] !== t61) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-4",
                children: [
                    t48,
                    t61
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 441,
                columnNumber: 13
            }, this);
            $[114] = t48;
            $[115] = t61;
            $[116] = t11;
        } else {
            t11 = $[116];
        }
        let t62;
        if ($[117] === Symbol.for("react.memo_cache_sentinel")) {
            t62 = ({
                "OrdersManagementPage[<button>.onClick]": ()=>setFilterStatus("all")
            })["OrdersManagementPage[<button>.onClick]"];
            $[117] = t62;
        } else {
            t62 = $[117];
        }
        const t63 = `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filterStatus === "all" ? "bg-brand-primary text-white" : "bg-white/10 text-gray-400 hover:text-white"}`;
        let t64;
        if ($[118] !== t63) {
            t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t62,
                className: t63,
                children: "Todos"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 460,
                columnNumber: 13
            }, this);
            $[118] = t63;
            $[119] = t64;
        } else {
            t64 = $[119];
        }
        let t65;
        if ($[120] === Symbol.for("react.memo_cache_sentinel")) {
            t65 = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusLabels"]);
            $[120] = t65;
        } else {
            t65 = $[120];
        }
        let t66;
        if ($[121] !== filterStatus) {
            t66 = t65.map({
                "OrdersManagementPage[(anonymous)()]": (t67)=>{
                    const [status_0, label] = t67;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "OrdersManagementPage[(anonymous)() > <button>.onClick]": ()=>setFilterStatus(status_0)
                        }["OrdersManagementPage[(anonymous)() > <button>.onClick]"],
                        className: `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filterStatus === status_0 ? "bg-brand-primary text-white" : "bg-white/10 text-gray-400 hover:text-white"}`,
                        children: label
                    }, status_0, false, {
                        fileName: "[project]/src/app/admin/orders/page.tsx",
                        lineNumber: 478,
                        columnNumber: 18
                    }, this);
                }
            }["OrdersManagementPage[(anonymous)()]"]);
            $[121] = filterStatus;
            $[122] = t66;
        } else {
            t66 = $[122];
        }
        if ($[123] !== t64 || $[124] !== t66) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    t64,
                    t66
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 489,
                columnNumber: 13
            }, this);
            $[123] = t64;
            $[124] = t66;
            $[125] = t12;
        } else {
            t12 = $[125];
        }
        if ($[126] !== error) {
            t13 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-5 h-5 text-red-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/orders/page.tsx",
                        lineNumber: 497,
                        columnNumber: 117
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-400",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/orders/page.tsx",
                        lineNumber: 497,
                        columnNumber: 165
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 497,
                columnNumber: 22
            }, this);
            $[126] = error;
            $[127] = t13;
        } else {
            t13 = $[127];
        }
        t7 = "bg-white/5 border border-white/10 rounded-xl overflow-hidden";
        t6 = "overflow-x-auto";
        t4 = "w-full";
        if ($[128] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                className: "bg-white/5 border-b border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
                            children: "Orden #"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 507,
                            columnNumber: 71
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
                            children: "Cliente"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 507,
                            columnNumber: 178
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
                            children: "Items"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 507,
                            columnNumber: 285
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
                            children: "Total"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 507,
                            columnNumber: 390
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
                            children: "Estado"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 507,
                            columnNumber: 495
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
                            children: "Hora"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 507,
                            columnNumber: 601
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
                            children: "Acciones"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 507,
                            columnNumber: 705
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/orders/page.tsx",
                    lineNumber: 507,
                    columnNumber: 67
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 507,
                columnNumber: 12
            }, this);
            $[128] = t5;
        } else {
            t5 = $[128];
        }
        t2 = "divide-y divide-white/5";
        t3 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 7,
                className: "px-4 py-12 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "w-8 h-8 text-gray-500 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 513,
                            columnNumber: 125
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "Cargando pedidos..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 513,
                            columnNumber: 185
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/orders/page.tsx",
                    lineNumber: 513,
                    columnNumber: 75
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 513,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/orders/page.tsx",
            lineNumber: 513,
            columnNumber: 20
        }, this) : filteredOrders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 7,
                className: "px-4 py-12 text-center text-gray-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                            className: "w-12 h-12 text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 513,
                            columnNumber: 405
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "No hay pedidos"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 513,
                            columnNumber: 452
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs",
                            children: "Los pedidos aparecerán aquí cuando los clientes realicen órdenes"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 513,
                            columnNumber: 473
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/orders/page.tsx",
                    lineNumber: 513,
                    columnNumber: 355
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/orders/page.tsx",
                lineNumber: 513,
                columnNumber: 290
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/orders/page.tsx",
            lineNumber: 513,
            columnNumber: 286
        }, this) : filteredOrders.map({
            "OrdersManagementPage[filteredOrders.map()]": (order_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    className: "hover:bg-white/5 transition-colors cursor-pointer",
                    onClick: {
                        "OrdersManagementPage[filteredOrders.map() > <tr>.onClick]": ()=>setSelectedOrder(order_0.id)
                    }["OrdersManagementPage[filteredOrders.map() > <tr>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-4 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-medium",
                                        children: [
                                            "#",
                                            order_0.order_number
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/orders/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 138
                                    }, this),
                                    order_0.table_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs bg-white/10 px-2 py-0.5 rounded text-gray-400",
                                        children: [
                                            "Mesa ",
                                            order_0.table_number
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/orders/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 234
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/orders/page.tsx",
                                lineNumber: 516,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 516,
                            columnNumber: 71
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-200",
                                    children: order_0.customer_name || "Sin nombre"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/orders/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 378
                                }, this),
                                order_0.customer_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: order_0.customer_phone
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/orders/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 481
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 516,
                            columnNumber: 352
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-300",
                                    children: [
                                        order_0.order_items?.length || 0,
                                        " items"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/orders/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 582
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: [
                                        order_0.order_items?.slice(0, 2).map(_OrdersManagementPageFilteredOrdersMapAnonymous).join(", "),
                                        order_0.order_items && order_0.order_items.length > 2 && "..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/orders/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 659
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 516,
                            columnNumber: 556
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-4 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-medium",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(order_0.total, currency)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/orders/page.tsx",
                                lineNumber: 516,
                                columnNumber: 897
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 516,
                            columnNumber: 871
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-4 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusColors"][order_0.status]}`,
                                children: [
                                    order_0.status === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/orders/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 1187
                                    }, this),
                                    order_0.status === "confirmed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/orders/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 1252
                                    }, this),
                                    order_0.status === "preparing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/orders/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 1323
                                    }, this),
                                    order_0.status === "ready" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/orders/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 1386
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusLabels"][order_0.status]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/orders/page.tsx",
                                lineNumber: 516,
                                columnNumber: 1017
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 516,
                            columnNumber: 991
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-4 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-300 text-sm",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelativeTime"])(order_0.created_at)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/orders/page.tsx",
                                lineNumber: 516,
                                columnNumber: 1486
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 516,
                            columnNumber: 1460
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "px-4 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "OrdersManagementPage[filteredOrders.map() > <button>.onClick]": (e_0)=>{
                                        e_0.stopPropagation();
                                        setSelectedOrder(order_0.id);
                                    }
                                }["OrdersManagementPage[filteredOrders.map() > <button>.onClick]"],
                                className: "p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/orders/page.tsx",
                                    lineNumber: 521,
                                    columnNumber: 173
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/orders/page.tsx",
                                lineNumber: 516,
                                columnNumber: 1599
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 516,
                            columnNumber: 1573
                        }, this)
                    ]
                }, order_0.id, true, {
                    fileName: "[project]/src/app/admin/orders/page.tsx",
                    lineNumber: 514,
                    columnNumber: 64
                }, this)
        }["OrdersManagementPage[filteredOrders.map()]"]);
        $[6] = currency;
        $[7] = dateFilter;
        $[8] = error;
        $[9] = filterStatus;
        $[10] = loading;
        $[11] = orders;
        $[12] = refreshOrders;
        $[13] = searchQuery;
        $[14] = selectedOrder;
        $[15] = stats?.confirmed;
        $[16] = stats?.delivered;
        $[17] = stats?.pending;
        $[18] = stats?.preparing;
        $[19] = stats?.ready;
        $[20] = stats?.revenueToday;
        $[21] = updateOrderStatus;
        $[22] = handleUpdateStatus;
        $[23] = selectedOrderData;
        $[24] = t10;
        $[25] = t11;
        $[26] = t12;
        $[27] = t13;
        $[28] = t2;
        $[29] = t3;
        $[30] = t4;
        $[31] = t5;
        $[32] = t6;
        $[33] = t7;
        $[34] = t8;
        $[35] = t9;
    } else {
        handleUpdateStatus = $[22];
        selectedOrderData = $[23];
        t10 = $[24];
        t11 = $[25];
        t12 = $[26];
        t13 = $[27];
        t2 = $[28];
        t3 = $[29];
        t4 = $[30];
        t5 = $[31];
        t6 = $[32];
        t7 = $[33];
        t8 = $[34];
        t9 = $[35];
    }
    let t14;
    if ($[129] !== t2 || $[130] !== t3) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/app/admin/orders/page.tsx",
            lineNumber: 571,
            columnNumber: 11
        }, this);
        $[129] = t2;
        $[130] = t3;
        $[131] = t14;
    } else {
        t14 = $[131];
    }
    let t15;
    if ($[132] !== t14 || $[133] !== t4 || $[134] !== t5) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: t4,
            children: [
                t5,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/orders/page.tsx",
            lineNumber: 580,
            columnNumber: 11
        }, this);
        $[132] = t14;
        $[133] = t4;
        $[134] = t5;
        $[135] = t15;
    } else {
        t15 = $[135];
    }
    let t16;
    if ($[136] !== t15 || $[137] !== t6) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/app/admin/orders/page.tsx",
            lineNumber: 590,
            columnNumber: 11
        }, this);
        $[136] = t15;
        $[137] = t6;
        $[138] = t16;
    } else {
        t16 = $[138];
    }
    let t17;
    if ($[139] !== fetchOrders || $[140] !== loading || $[141] !== pagination.limit || $[142] !== pagination.page || $[143] !== pagination.total || $[144] !== pagination.totalPages) {
        t17 = pagination.totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-4 py-3 border-t border-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-gray-500",
                    children: [
                        "Mostrando ",
                        (pagination.page - 1) * pagination.limit + 1,
                        " - ",
                        Math.min(pagination.page * pagination.limit, pagination.total),
                        " de ",
                        pagination.total
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/orders/page.tsx",
                    lineNumber: 599,
                    columnNumber: 126
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "OrdersManagementPage[<button>.onClick]": ()=>fetchOrders({
                                        page: pagination.page - 1
                                    })
                            }["OrdersManagementPage[<button>.onClick]"],
                            disabled: pagination.page === 1 || loading,
                            className: "p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-4 h-4 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/orders/page.tsx",
                                lineNumber: 603,
                                columnNumber: 209
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 599,
                            columnNumber: 344
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-3 py-1 text-gray-400",
                            children: [
                                pagination.page,
                                " / ",
                                pagination.totalPages
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 603,
                            columnNumber: 267
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "OrdersManagementPage[<button>.onClick]": ()=>fetchOrders({
                                        page: pagination.page + 1
                                    })
                            }["OrdersManagementPage[<button>.onClick]"],
                            disabled: pagination.page === pagination.totalPages || loading,
                            className: "p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/orders/page.tsx",
                                lineNumber: 607,
                                columnNumber: 229
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/orders/page.tsx",
                            lineNumber: 603,
                            columnNumber: 359
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/orders/page.tsx",
                    lineNumber: 599,
                    columnNumber: 316
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/orders/page.tsx",
            lineNumber: 599,
            columnNumber: 40
        }, this);
        $[139] = fetchOrders;
        $[140] = loading;
        $[141] = pagination.limit;
        $[142] = pagination.page;
        $[143] = pagination.total;
        $[144] = pagination.totalPages;
        $[145] = t17;
    } else {
        t17 = $[145];
    }
    let t18;
    if ($[146] !== t16 || $[147] !== t17 || $[148] !== t7) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/orders/page.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[146] = t16;
        $[147] = t17;
        $[148] = t7;
        $[149] = t18;
    } else {
        t18 = $[149];
    }
    const t19 = !!selectedOrder;
    let t20;
    if ($[150] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "OrdersManagementPage[<OrderDetail>.onClose]": ()=>setSelectedOrder(null)
        })["OrdersManagementPage[<OrderDetail>.onClose]"];
        $[150] = t20;
    } else {
        t20 = $[150];
    }
    let t21;
    if ($[151] !== currency || $[152] !== handleUpdateStatus || $[153] !== selectedOrderData || $[154] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$OrderDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderDetail"], {
            order: selectedOrderData,
            isOpen: t19,
            onClose: t20,
            onUpdateStatus: handleUpdateStatus,
            currency: currency
        }, void 0, false, {
            fileName: "[project]/src/app/admin/orders/page.tsx",
            lineNumber: 640,
            columnNumber: 11
        }, this);
        $[151] = currency;
        $[152] = handleUpdateStatus;
        $[153] = selectedOrderData;
        $[154] = t19;
        $[155] = t21;
    } else {
        t21 = $[155];
    }
    let t22;
    if ($[156] !== t10 || $[157] !== t11 || $[158] !== t12 || $[159] !== t13 || $[160] !== t18 || $[161] !== t21 || $[162] !== t8 || $[163] !== t9) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t10,
                t11,
                t12,
                t13,
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/orders/page.tsx",
            lineNumber: 651,
            columnNumber: 11
        }, this);
        $[156] = t10;
        $[157] = t11;
        $[158] = t12;
        $[159] = t13;
        $[160] = t18;
        $[161] = t21;
        $[162] = t8;
        $[163] = t9;
        $[164] = t22;
    } else {
        t22 = $[164];
    }
    return t22;
}
_s(OrdersManagementPage, "Nw8Em4iqEjLRbuCyBFhJRy6Lqyk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOrders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrders"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTenant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTenant"]
    ];
});
_c = OrdersManagementPage;
function _OrdersManagementPageFilteredOrdersMapAnonymous(i) {
    return i.dish_name;
}
var _c;
__turbopack_context__.k.register(_c, "OrdersManagementPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_aab54f4a._.js.map