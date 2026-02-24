module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/supabase/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://roefufuidkrlmqgmddbx.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvZWZ1ZnVpZGtybG1xZ21kZGJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0NDk4NzIsImV4cCI6MjA4NzAyNTg3Mn0.5YkU5JVGnX8dNiK_BJN5eRXPAwmEZyU_Z2ZWQv9kTjs"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // The `setAll` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing sessions.
                }
            }
        }
    });
}
}),
"[project]/src/app/api/admin/stats/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
        // Get authenticated user
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No autorizado'
            }, {
                status: 401
            });
        }
        // Get user's tenant_id
        const { data: userData, error: userError } = await supabase.from('users').select('tenant_id').eq('id', user.id).single();
        if (userError || !userData?.tenant_id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Usuario sin restaurante asociado'
            }, {
                status: 400
            });
        }
        const tenantId = userData.tenant_id;
        // Get current date info
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
        const weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay()).toISOString();
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
        // Parallel queries for all stats
        const [ordersTodayResult, ordersWeekResult, ordersMonthResult, revenueTodayResult, revenueWeekResult, revenueMonthResult, ordersByStatusResult, topDishesResult, recentOrdersResult, ordersLast7DaysResult] = await Promise.all([
            // Orders count today
            supabase.from('orders').select('id', {
                count: 'exact',
                head: true
            }).eq('tenant_id', tenantId).gte('created_at', todayStart),
            // Orders count this week
            supabase.from('orders').select('id', {
                count: 'exact',
                head: true
            }).eq('tenant_id', tenantId).gte('created_at', weekStart),
            // Orders count this month
            supabase.from('orders').select('id', {
                count: 'exact',
                head: true
            }).eq('tenant_id', tenantId).gte('created_at', monthStart),
            // Revenue today
            supabase.from('orders').select('total').eq('tenant_id', tenantId).gte('created_at', todayStart).in('payment_status', [
                'paid',
                'pending'
            ]),
            // Revenue this week
            supabase.from('orders').select('total').eq('tenant_id', tenantId).gte('created_at', weekStart).in('payment_status', [
                'paid',
                'pending'
            ]),
            // Revenue this month
            supabase.from('orders').select('total').eq('tenant_id', tenantId).gte('created_at', monthStart).in('payment_status', [
                'paid',
                'pending'
            ]),
            // Orders by status
            supabase.from('orders').select('status').eq('tenant_id', tenantId),
            // Top 5 dishes
            supabase.from('order_items').select(`
                    dish_name,
                    quantity,
                    total_price,
                    dish_id,
                    orders!inner(tenant_id)
                `).eq('orders.tenant_id', tenantId).order('quantity', {
                ascending: false
            }).limit(10),
            // Recent orders
            supabase.from('orders').select(`
                    id,
                    order_number,
                    customer_name,
                    total,
                    status,
                    created_at,
                    order_items(count)
                `).eq('tenant_id', tenantId).order('created_at', {
                ascending: false
            }).limit(5),
            // Orders per day (last 7 days)
            supabase.from('orders').select('created_at, total').eq('tenant_id', tenantId).gte('created_at', new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6).toISOString())
        ]);
        // Calculate revenue
        const calculateRevenue = (result)=>{
            return result.data?.reduce((sum, order)=>sum + (Number(order.total) || 0), 0) || 0;
        };
        // Calculate orders by status
        const byStatus = {
            pending: 0,
            confirmed: 0,
            preparing: 0,
            ready: 0,
            delivered: 0,
            cancelled: 0
        };
        ordersByStatusResult.data?.forEach((order)=>{
            if (order.status in byStatus) {
                byStatus[order.status]++;
            }
        });
        // Calculate top dishes
        const dishSales = {};
        topDishesResult.data?.forEach((item)=>{
            const name = item.dish_name;
            if (!dishSales[name]) {
                dishSales[name] = {
                    name,
                    quantity: 0,
                    revenue: 0
                };
            }
            dishSales[name].quantity += item.quantity;
            dishSales[name].revenue += Number(item.total_price) || 0;
        });
        const topDishes = Object.values(dishSales).sort((a, b)=>b.quantity - a.quantity).slice(0, 5);
        // Calculate orders per day (last 7 days)
        const ordersPerDay = [];
        for(let i = 6; i >= 0; i--){
            const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const dayStart = date.toISOString();
            const dayEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1).toISOString();
            const dayOrders = ordersLast7DaysResult.data?.filter((o)=>{
                const orderDate = o.created_at;
                return orderDate >= dayStart && orderDate < dayEnd;
            }) || [];
            ordersPerDay.push({
                date: dateStr,
                count: dayOrders.length,
                revenue: dayOrders.reduce((sum, o)=>sum + (Number(o.total) || 0), 0)
            });
        }
        // Format recent orders
        const recentOrders = recentOrdersResult.data?.map((order)=>({
                id: order.id,
                order_number: order.order_number,
                customer_name: order.customer_name,
                total: order.total,
                status: order.status,
                created_at: order.created_at,
                items_count: order.order_items?.[0]?.count || 0
            })) || [];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            orderStats: {
                totalToday: ordersTodayResult.count || 0,
                totalWeek: ordersWeekResult.count || 0,
                totalMonth: ordersMonthResult.count || 0,
                revenueToday: calculateRevenue(revenueTodayResult),
                revenueWeek: calculateRevenue(revenueWeekResult),
                revenueMonth: calculateRevenue(revenueMonthResult),
                byStatus,
                pending: byStatus.pending,
                confirmed: byStatus.confirmed,
                preparing: byStatus.preparing,
                ready: byStatus.ready,
                delivered: byStatus.delivered,
                cancelled: byStatus.cancelled
            },
            topDishes,
            recentOrders,
            ordersPerDay
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Error interno del servidor'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f3ff3d64._.js.map