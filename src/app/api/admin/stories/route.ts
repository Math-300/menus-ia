import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET /api/admin/stories - List all stories for the current tenant
export async function GET(request: NextRequest) {
    try {
        const supabase = await createClient();
        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type');
        const is_active = searchParams.get('is_active');

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
            .from('stories')
            .select(`
                *,
                dishes (id, name, price, image_url)
            `)
            .eq('tenant_id', userData.tenant_id)
            .order('created_at', { ascending: false });

        // Apply filters
        if (type) {
            query = query.eq('type', type);
        }
        if (is_active !== null && is_active !== undefined) {
            query = query.eq('is_active', is_active === 'true');
        }

        const { data: stories, error: storiesError } = await query;

        if (storiesError) {
            console.error('Error fetching stories:', storiesError);
            return NextResponse.json(
                { error: 'Error al obtener stories' },
                { status: 500 }
            );
        }

        return NextResponse.json({ stories });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}

// POST /api/admin/stories - Create a new story
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
            title,
            type,
            image_url,
            video_url,
            linked_dish_id,
            is_active,
            expires_at,
        } = body;

        // Validate required fields
        if (!title || !type) {
            return NextResponse.json(
                { error: 'Título y tipo son requeridos' },
                { status: 400 }
            );
        }

        // Validate type
        const validTypes = ['dish', 'promo', 'chef', 'event'];
        if (!validTypes.includes(type)) {
            return NextResponse.json(
                { error: 'Tipo inválido. Debe ser: dish, promo, chef o event' },
                { status: 400 }
            );
        }

        // Create story
        const { data: story, error: createError } = await supabase
            .from('stories')
            .insert({
                tenant_id: userData.tenant_id,
                title,
                type,
                image_url: image_url || null,
                video_url: video_url || null,
                linked_dish_id: linked_dish_id || null,
                is_active: is_active !== undefined ? is_active : true,
                expires_at: expires_at || null,
                view_count: 0,
            })
            .select(`
                *,
                dishes (id, name, price, image_url)
            `)
            .single();

        if (createError) {
            console.error('Error creating story:', createError);
            return NextResponse.json(
                { error: 'Error al crear story' },
                { status: 500 }
            );
        }

        return NextResponse.json({ story }, { status: 201 });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
