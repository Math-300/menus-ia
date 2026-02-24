import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET /api/admin/dishes - List all dishes for the current tenant
export async function GET(request: NextRequest) {
    try {
        const supabase = await createClient();
        const { searchParams } = new URL(request.url);
        const category_id = searchParams.get('category_id');
        const available = searchParams.get('available');

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

        // Build query
        let query = supabase
            .from('dishes')
            .select(`
                *,
                categories (id, name, slug)
            `)
            .eq('tenant_id', userData.tenant_id)
            .order('created_at', { ascending: false });

        // Apply filters
        if (category_id) {
            query = query.eq('category_id', category_id);
        }
        if (available !== null && available !== undefined) {
            query = query.eq('available', available === 'true');
        }

        const { data: dishes, error: dishesError } = await query;

        if (dishesError) {
            console.error('Error fetching dishes:', dishesError);
            return NextResponse.json(
                { error: 'Error al obtener platos' },
                { status: 500 }
            );
        }

        return NextResponse.json({ dishes });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}

// POST /api/admin/dishes - Create a new dish
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

        const {
            name,
            description,
            price,
            image_url,
            category_id,
            available,
            dietary,
            is_popular,
            is_chef_choice,
            is_new,
        } = body;

        // Validate required fields
        if (!name || price === undefined) {
            return NextResponse.json(
                { error: 'Nombre y precio son requeridos' },
                { status: 400 }
            );
        }

        // Create dish
        const { data: dish, error: createError } = await supabase
            .from('dishes')
            .insert({
                tenant_id: userData.tenant_id,
                name,
                description: description || null,
                price,
                image_url: image_url || null,
                category_id: category_id || null,
                available: available !== undefined ? available : true,
                dietary: dietary || [],
                is_popular: is_popular || false,
                is_chef_choice: is_chef_choice || false,
                is_new: is_new || false,
            })
            .select(`
                *,
                categories (id, name, slug)
            `)
            .single();

        if (createError) {
            console.error('Error creating dish:', createError);
            return NextResponse.json(
                { error: 'Error al crear plato' },
                { status: 500 }
            );
        }

        return NextResponse.json({ dish }, { status: 201 });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
