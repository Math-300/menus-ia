import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET /api/admin/categories - List all categories for the current tenant
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

        // Fetch categories for the tenant
        const { data: categories, error: categoriesError } = await supabase
            .from('categories')
            .select('*')
            .eq('tenant_id', userData.tenant_id)
            .order('display_order', { ascending: true });

        if (categoriesError) {
            console.error('Error fetching categories:', categoriesError);
            return NextResponse.json(
                { error: 'Error al obtener categorías' },
                { status: 500 }
            );
        }

        return NextResponse.json({ categories });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}

// POST /api/admin/categories - Create a new category
export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient();
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

        const { name, slug, image_url, display_order, is_active } = body;

        // Validate required fields
        if (!name || !slug) {
            return NextResponse.json(
                { error: 'Nombre y slug son requeridos' },
                { status: 400 }
            );
        }

        // Create category
        const { data: category, error: createError } = await supabase
            .from('categories')
            .insert({
                tenant_id: userData.tenant_id,
                name,
                slug,
                image_url: image_url || null,
                display_order: display_order || 0,
                is_active: is_active !== undefined ? is_active : true,
            })
            .select()
            .single();

        if (createError) {
            console.error('Error creating category:', createError);
            return NextResponse.json(
                { error: 'Error al crear categoría' },
                { status: 500 }
            );
        }

        return NextResponse.json({ category }, { status: 201 });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
