import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

interface OrderItem {
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

interface CreateOrderRequest {
    tenant_slug: string;
    customer_name: string;
    customer_phone?: string;
    customer_email?: string;
    items: OrderItem[];
    total: number;
    notes?: string;
}

/**
 * POST /api/public/orders
 * Crear nuevo pedido desde el diner
 */
export async function POST(request: NextRequest) {
    try {
        const body: CreateOrderRequest = await request.json();

        // Validar campos requeridos
        if (!body.tenant_slug) {
            return NextResponse.json(
                { error: 'Slug del restaurante es requerido' },
                { status: 400 }
            );
        }

        if (!body.customer_name || body.customer_name.trim().length < 2) {
            return NextResponse.json(
                { error: 'Nombre del cliente es requerido' },
                { status: 400 }
            );
        }

        if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
            return NextResponse.json(
                { error: 'El pedido debe tener al menos un item' },
                { status: 400 }
            );
        }

        if (body.total <= 0) {
            return NextResponse.json(
                { error: 'El total del pedido debe ser mayor a 0' },
                { status: 400 }
            );
        }

        const supabase = await createClient();

        // 1. Obtener el tenant por slug
        const { data: tenant, error: tenantError } = await supabase
            .from('tenants')
            .select('id, name')
            .eq('slug', body.tenant_slug)
            .single();

        if (tenantError || !tenant) {
            return NextResponse.json(
                { error: 'Restaurante no encontrado' },
                { status: 404 }
            );
        }

        // 2. Validar que los platos existan y estén disponibles
        const dishIds = body.items.filter(item => item.dish_id).map(item => item.dish_id);

        if (dishIds.length > 0) {
            const { data: dishes, error: dishesError } = await supabase
                .from('dishes')
                .select('id, name, price, available')
                .in('id', dishIds)
                .eq('tenant_id', tenant.id);

            if (dishesError) {
                console.error('Error validating dishes:', dishesError);
                return NextResponse.json(
                    { error: 'Error al validar platos' },
                    { status: 500 }
                );
            }

            // Verificar disponibilidad
            const unavailableDishes = dishes?.filter(d => !d.available) || [];
            if (unavailableDishes.length > 0) {
                return NextResponse.json(
                    {
                        error: 'Algunos platos no están disponibles',
                        unavailableItems: unavailableDishes.map(d => d.name)
                    },
                    { status: 400 }
                );
            }
        }

        // 3. Crear el pedido
        const { data: order, error: orderError } = await supabase
            .from('orders')
            .insert({
                tenant_id: tenant.id,
                customer_name: body.customer_name.trim(),
                customer_phone: body.customer_phone?.trim() || null,
                customer_email: body.customer_email?.trim() || null,
                status: 'pending',
                total: body.total,
                payment_status: 'pending',
                payment_method: null,
                payment_id: null,
                notes: body.notes?.trim() || null
            })
            .select()
            .single();

        if (orderError) {
            console.error('Error creating order:', orderError);
            return NextResponse.json(
                { error: 'Error al crear el pedido' },
                { status: 500 }
            );
        }

        // 4. Crear los items del pedido
        const orderItems = body.items.map(item => ({
            order_id: order.id,
            dish_id: item.dish_id || null,
            dish_name: item.dish_name,
            quantity: item.quantity,
            unit_price: item.unit_price,
            total_price: item.total_price,
            notes: item.notes || null,
            selected_options: item.selected_options || null
        }));

        const { error: itemsError } = await supabase
            .from('order_items')
            .insert(orderItems);

        if (itemsError) {
            console.error('Error creating order items:', itemsError);
            // Intentar eliminar el pedido si fallan los items
            await supabase.from('orders').delete().eq('id', order.id);
            return NextResponse.json(
                { error: 'Error al crear items del pedido' },
                { status: 500 }
            );
        }

        // 5. Retornar confirmación
        return NextResponse.json({
            success: true,
            order: {
                id: order.id,
                status: order.status,
                total: order.total,
                createdAt: order.created_at,
                restaurantName: tenant.name
            }
        }, { status: 201 });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
