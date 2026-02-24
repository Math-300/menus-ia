import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET /api/admin/orders - List all orders for the current tenant
export async function GET(request: NextRequest) {
    try {
        const supabase = await createClient();
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const payment_status = searchParams.get('payment_status');
        const from = searchParams.get('from');
        const to = searchParams.get('to');
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '50');

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

        // Calculate offset
        const offset = (page - 1) * limit;

        // Build query
        let query = supabase
            .from('orders')
            .select(`
                *,
                order_items (
                    id,
                    dish_name,
                    quantity,
                    unit_price,
                    total_price,
                    notes,
                    selected_options
                )
            `, { count: 'exact' })
            .eq('tenant_id', userData.tenant_id)
            .order('created_at', { ascending: false })
            .range(offset, offset + limit - 1);

        // Apply filters
        if (status) {
            query = query.eq('status', status);
        }
        if (payment_status) {
            query = query.eq('payment_status', payment_status);
        }
        if (from) {
            query = query.gte('created_at', from);
        }
        if (to) {
            query = query.lte('created_at', to);
        }

        const { data: orders, error: ordersError, count } = await query;

        if (ordersError) {
            console.error('Error fetching orders:', ordersError);
            return NextResponse.json(
                { error: 'Error al obtener pedidos' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            orders,
            pagination: {
                page,
                limit,
                total: count || 0,
                totalPages: Math.ceil((count || 0) / limit),
            },
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
