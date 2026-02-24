import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

interface RouteParams {
    params: Promise<{ id: string }>;
}

// GET /api/admin/categories/[id] - Get a single category
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

        // Fetch category
        const { data: category, error: categoryError } = await supabase
            .from('categories')
            .select('*')
            .eq('id', id)
            .eq('tenant_id', userData.tenant_id)
            .single();

        if (categoryError) {
            if (categoryError.code === 'PGRST116') {
                return NextResponse.json(
                    { error: 'Categoría no encontrada' },
                    { status: 404 }
                );
            }
            console.error('Error fetching category:', categoryError);
            return NextResponse.json(
                { error: 'Error al obtener categoría' },
                { status: 500 }
            );
        }

        return NextResponse.json({ category });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}

// PUT /api/admin/categories/[id] - Update a category
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

        // Verify category belongs to tenant
        const { data: existingCategory, error: checkError } = await supabase
            .from('categories')
            .select('id')
            .eq('id', id)
            .eq('tenant_id', userData.tenant_id)
            .single();

        if (checkError || !existingCategory) {
            return NextResponse.json(
                { error: 'Categoría no encontrada' },
                { status: 404 }
            );
        }

        // Build update object with only provided fields
        const updateData: Record<string, unknown> = {};
        if (body.name !== undefined) updateData.name = body.name;
        if (body.slug !== undefined) updateData.slug = body.slug;
        if (body.image_url !== undefined) updateData.image_url = body.image_url;
        if (body.display_order !== undefined) updateData.display_order = body.display_order;
        if (body.is_active !== undefined) updateData.is_active = body.is_active;

        // Update category
        const { data: category, error: updateError } = await supabase
            .from('categories')
            .update(updateData)
            .eq('id', id)
            .eq('tenant_id', userData.tenant_id)
            .select()
            .single();

        if (updateError) {
            console.error('Error updating category:', updateError);
            return NextResponse.json(
                { error: 'Error al actualizar categoría' },
                { status: 500 }
            );
        }

        return NextResponse.json({ category });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}

// DELETE /api/admin/categories/[id] - Delete a category
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

        // Check if category has dishes
        const { data: dishes, error: dishesError } = await supabase
            .from('dishes')
            .select('id')
            .eq('category_id', id)
            .limit(1);

        if (dishesError) {
            console.error('Error checking dishes:', dishesError);
            return NextResponse.json(
                { error: 'Error al verificar platos asociados' },
                { status: 500 }
            );
        }

        if (dishes && dishes.length > 0) {
            return NextResponse.json(
                { error: 'No se puede eliminar la categoría porque tiene platos asociados' },
                { status: 400 }
            );
        }

        // Delete category
        const { error: deleteError } = await supabase
            .from('categories')
            .delete()
            .eq('id', id)
            .eq('tenant_id', userData.tenant_id);

        if (deleteError) {
            console.error('Error deleting category:', deleteError);
            return NextResponse.json(
                { error: 'Error al eliminar categoría' },
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
