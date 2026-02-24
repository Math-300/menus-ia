import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

interface RouteParams {
    params: Promise<{ id: string }>;
}

// GET /api/admin/stories/[id] - Get a single story
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

        // Fetch story
        const { data: story, error: storyError } = await supabase
            .from('stories')
            .select(`
                *,
                dishes (id, name, price, image_url)
            `)
            .eq('id', id)
            .eq('tenant_id', userData.tenant_id)
            .single();

        if (storyError) {
            if (storyError.code === 'PGRST116') {
                return NextResponse.json(
                    { error: 'Story no encontrado' },
                    { status: 404 }
                );
            }
            console.error('Error fetching story:', storyError);
            return NextResponse.json(
                { error: 'Error al obtener story' },
                { status: 500 }
            );
        }

        return NextResponse.json({ story });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}

// PUT /api/admin/stories/[id] - Update a story
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

        // Verify story belongs to tenant
        const { data: existingStory, error: checkError } = await supabase
            .from('stories')
            .select('id')
            .eq('id', id)
            .eq('tenant_id', userData.tenant_id)
            .single();

        if (checkError || !existingStory) {
            return NextResponse.json(
                { error: 'Story no encontrado' },
                { status: 404 }
            );
        }

        // Build update object with only provided fields
        const updateData: Record<string, unknown> = {};
        if (body.title !== undefined) updateData.title = body.title;
        if (body.type !== undefined) updateData.type = body.type;
        if (body.image_url !== undefined) updateData.image_url = body.image_url;
        if (body.video_url !== undefined) updateData.video_url = body.video_url;
        if (body.linked_dish_id !== undefined) updateData.linked_dish_id = body.linked_dish_id;
        if (body.is_active !== undefined) updateData.is_active = body.is_active;
        if (body.expires_at !== undefined) updateData.expires_at = body.expires_at;

        // Update story
        const { data: story, error: updateError } = await supabase
            .from('stories')
            .update(updateData)
            .eq('id', id)
            .eq('tenant_id', userData.tenant_id)
            .select(`
                *,
                dishes (id, name, price, image_url)
            `)
            .single();

        if (updateError) {
            console.error('Error updating story:', updateError);
            return NextResponse.json(
                { error: 'Error al actualizar story' },
                { status: 500 }
            );
        }

        return NextResponse.json({ story });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}

// DELETE /api/admin/stories/[id] - Delete a story
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

        // Delete story
        const { error: deleteError } = await supabase
            .from('stories')
            .delete()
            .eq('id', id)
            .eq('tenant_id', userData.tenant_id);

        if (deleteError) {
            console.error('Error deleting story:', deleteError);
            return NextResponse.json(
                { error: 'Error al eliminar story' },
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
