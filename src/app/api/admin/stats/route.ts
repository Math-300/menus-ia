import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET /api/admin/stats - Get dashboard statistics
export async function GET() {
    try {
        const supabase = await createClient();

        // Get authenticated user
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json(
                { error: 'No autorizado' },
                { status: 401 }
            );
        }

        // Get user's tenant_id
        const { data: userData, error: userError } = await supabase
            .from('users')
            .select('tenant_id')
            .eq('id', user.id)
            .single();

        if (userError || !userData?.tenant_id) {
            return NextResponse.json(
                { error: 'Usuario sin restaurante asociado' },
                { status: 400 }
            );
        }

        const tenantId = userData.tenant_id;

        // Get current date info
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
        const weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay()).toISOString();
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

        // Parallel queries for all stats
        const [
            ordersTodayResult,
            ordersWeekResult,
            ordersMonthResult,
            revenueTodayResult,
            revenueWeekResult,
            revenueMonthResult,
            ordersByStatusResult,
            topDishesResult,
            recentOrdersResult,
            ordersLast7DaysResult,
        ] = await Promise.all([
            // Orders count today
            supabase
                .from('orders')
                .select('id', { count: 'exact', head: true })
                .eq('tenant_id', tenantId)
                .gte('created_at', todayStart),

            // Orders count this week
            supabase
                .from('orders')
                .select('id', { count: 'exact', head: true })
                .eq('tenant_id', tenantId)
                .gte('created_at', weekStart),

            // Orders count this month
            supabase
                .from('orders')
                .select('id', { count: 'exact', head: true })
                .eq('tenant_id', tenantId)
                .gte('created_at', monthStart),

            // Revenue today
            supabase
                .from('orders')
                .select('total')
                .eq('tenant_id', tenantId)
                .gte('created_at', todayStart)
                .in('payment_status', ['paid', 'pending']),

            // Revenue this week
            supabase
                .from('orders')
                .select('total')
                .eq('tenant_id', tenantId)
                .gte('created_at', weekStart)
                .in('payment_status', ['paid', 'pending']),

            // Revenue this month
            supabase
                .from('orders')
                .select('total')
                .eq('tenant_id', tenantId)
                .gte('created_at', monthStart)
                .in('payment_status', ['paid', 'pending']),

            // Orders by status
            supabase
                .from('orders')
                .select('status')
                .eq('tenant_id', tenantId),

            // Top 5 dishes
            supabase
                .from('order_items')
                .select(`
                    dish_name,
                    quantity,
                    total_price,
                    dish_id,
                    orders!inner(tenant_id)
                `)
                .eq('orders.tenant_id', tenantId)
                .order('quantity', { ascending: false })
                .limit(10),

            // Recent orders
            supabase
                .from('orders')
                .select(`
                    id,
                    order_number,
                    customer_name,
                    total,
                    status,
                    created_at,
                    order_items(count)
                `)
                .eq('tenant_id', tenantId)
                .order('created_at', { ascending: false })
                .limit(5),

            // Orders per day (last 7 days)
            supabase
                .from('orders')
                .select('created_at, total')
                .eq('tenant_id', tenantId)
                .gte('created_at', new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6).toISOString()),
        ]);

        // Calculate revenue
        const calculateRevenue = (result: { data: { total: number }[] | null }) => {
            return result.data?.reduce((sum, order) => sum + (Number(order.total) || 0), 0) || 0;
        };

        // Calculate orders by status
        const byStatus = {
            pending: 0,
            confirmed: 0,
            preparing: 0,
            ready: 0,
            delivered: 0,
            cancelled: 0,
        };
        ordersByStatusResult.data?.forEach(order => {
            if (order.status in byStatus) {
                byStatus[order.status as keyof typeof byStatus]++;
            }
        });

        // Calculate top dishes
        const dishSales: Record<string, { name: string; quantity: number; revenue: number }> = {};
        topDishesResult.data?.forEach(item => {
            const name = item.dish_name;
            if (!dishSales[name]) {
                dishSales[name] = { name, quantity: 0, revenue: 0 };
            }
            dishSales[name].quantity += item.quantity;
            dishSales[name].revenue += Number(item.total_price) || 0;
        });
        const topDishes = Object.values(dishSales)
            .sort((a, b) => b.quantity - a.quantity)
            .slice(0, 5);

        // Calculate orders per day (last 7 days)
        const ordersPerDay: { date: string; count: number; revenue: number }[] = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const dayStart = date.toISOString();
            const dayEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1).toISOString();

            const dayOrders = ordersLast7DaysResult.data?.filter(o => {
                const orderDate = o.created_at;
                return orderDate >= dayStart && orderDate < dayEnd;
            }) || [];

            ordersPerDay.push({
                date: dateStr,
                count: dayOrders.length,
                revenue: dayOrders.reduce((sum, o) => sum + (Number(o.total) || 0), 0),
            });
        }

        // Format recent orders
        const recentOrders = recentOrdersResult.data?.map(order => ({
            id: order.id,
            order_number: order.order_number,
            customer_name: order.customer_name,
            total: order.total,
            status: order.status,
            created_at: order.created_at,
            items_count: (order.order_items as { count: number }[])?.[0]?.count || 0,
        })) || [];

        return NextResponse.json({
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
                cancelled: byStatus.cancelled,
            },
            topDishes,
            recentOrders,
            ordersPerDay,
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
