import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

interface RouteParams {
    params: Promise<{ id: string }>;
}

// GET /api/admin/dishes/[id] - Get a single dish with modifiers
export async function GET(
    request: NextRequest,
    { params }: RouteParams
) {
    try {
        const supabase = await createClient();
        const { id } = await params;

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

        // Fetch dish with category and modifiers
        const { data: dish, error: dishError } = await supabase
            .from('dishes')
            .select(`
                *,
                categories (id, name, slug),
                dish_option_groups (
                    id,
                    name,
                    min_selections,
                    max_selections,
                    display_order,
                    dish_options (
                        id,
                        name,
                        price,
                        available
                    )
                )
            `)
            .eq('id', id)
            .eq('tenant_id', userData.tenant_id)
            .single();

        if (dishError) {
            if (dishError.code === 'PGRST116') {
                return NextResponse.json(
                    { error: 'Plato no encontrado' },
                    { status: 404 }
                );
            }
            console.error('Error fetching dish:', dishError);
            return NextResponse.json(
                { error: 'Error al obtener plato' },
                { status: 500 }
            );
        }

        return NextResponse.json({ dish });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}

// PUT /api/admin/dishes/[id] - Update a dish
export async function PUT(
    request: NextRequest,
    { params }: RouteParams
) {
    try {
        const supabase = await createClient();
        const { id } = await params;
        const body = await request.json();

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

        // Verify dish belongs to tenant
        const { data: existingDish, error: checkError } = await supabase
            .from('dishes')
            .select('id')
            .eq('id', id)
            .eq('tenant_id', userData.tenant_id)
            .single();

        if (checkError || !existingDish) {
            return NextResponse.json(
                { error: 'Plato no encontrado' },
                { status: 404 }
            );
        }

        // Build update object with only provided fields
        const updateData: Record<string, unknown> = {};
        if (body.name !== undefined) updateData.name = body.name;
        if (body.description !== undefined) updateData.description = body.description;
        if (body.price !== undefined) updateData.price = body.price;
        if (body.image_url !== undefined) updateData.image_url = body.image_url;
        if (body.category_id !== undefined) updateData.category_id = body.category_id;
        if (body.available !== undefined) updateData.available = body.available;
        if (body.dietary !== undefined) updateData.dietary = body.dietary;
        if (body.is_popular !== undefined) updateData.is_popular = body.is_popular;
        if (body.is_chef_choice !== undefined) updateData.is_chef_choice = body.is_chef_choice;
        if (body.is_new !== undefined) updateData.is_new = body.is_new;

        // Update dish
        const { data: dish, error: updateError } = await supabase
            .from('dishes')
            .update(updateData)
            .eq('id', id)
            .eq('tenant_id', userData.tenant_id)
            .select(`
                *,
                categories (id, name, slug)
            `)
            .single();

        if (updateError) {
            console.error('Error updating dish:', updateError);
            return NextResponse.json(
                { error: 'Error al actualizar plato' },
                { status: 500 }
            );
        }

        return NextResponse.json({ dish });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}

// DELETE /api/admin/dishes/[id] - Delete a dish
export async function DELETE(
    request: NextRequest,
    { params }: RouteParams
) {
    try {
        const supabase = await createClient();
        const { id } = await params;

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

        // Delete dish (cascade will handle option groups and options)
        const { error: deleteError } = await supabase
            .from('dishes')
            .delete()
            .eq('id', id)
            .eq('tenant_id', userData.tenant_id);

        if (deleteError) {
            console.error('Error deleting dish:', deleteError);
            return NextResponse.json(
                { error: 'Error al eliminar plato' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
