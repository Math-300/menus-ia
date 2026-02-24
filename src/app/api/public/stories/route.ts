import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

/**
 * GET /api/public/stories
 * Obtener stories activas del tenant por slug
 * Query params: slug (required)
 */
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get('slug');

        if (!slug) {
            return NextResponse.json(
                { error: 'Slug del restaurante es requerido' },
                { status: 400 }
            );
        }

        const supabase = await createClient();

        // 1. Obtener el tenant por slug
        const { data: tenant, error: tenantError } = await supabase
            .from('tenants')
            .select('id')
            .eq('slug', slug)
            .single();

        if (tenantError || !tenant) {
            return NextResponse.json(
                { error: 'Restaurante no encontrado' },
                { status: 404 }
            );
        }

        // 2. Obtener stories activas con información del plato vinculado
        const now = new Date().toISOString();
        const { data: stories, error: storiesError } = await supabase
            .from('stories')
            .select(`
                id,
                title,
                type,
                image_url,
                video_url,
                linked_dish_id,
                view_count,
                created_at,
                dishes (
                    id,
                    name,
                    price,
                    image_url
                )
            `)
            .eq('tenant_id', tenant.id)
            .eq('is_active', true)
            .or(`expires_at.is.null,expires_at.gt.${now}`)
            .order('created_at', { ascending: false });

        if (storiesError) {
            console.error('Error fetching stories:', storiesError);
            return NextResponse.json(
                { error: 'Error al obtener stories' },
                { status: 500 }
            );
        }

        // 3. Estructurar la respuesta
        const formattedStories = stories.map(story => {
            // dishes puede ser un objeto o null debido a la relación
            const linkedDish = story.dishes && !Array.isArray(story.dishes) ? {
                id: (story.dishes as { id: string; name: string; price: number; image_url: string }).id,
                name: (story.dishes as { id: string; name: string; price: number; image_url: string }).name,
                price: (story.dishes as { id: string; name: string; price: number; image_url: string }).price,
                image: (story.dishes as { id: string; name: string; price: number; image_url: string }).image_url
            } : null;

            return {
                id: story.id,
                title: story.title,
                image: story.image_url,
                video: story.video_url,
                type: story.type as 'dish' | 'promo' | 'chef',
                viewed: false, // Por defecto no vista, el frontend maneja esto
                linkedItemId: story.linked_dish_id,
                viewCount: story.view_count,
                linkedDish
            };
        });

        return NextResponse.json({
            stories: formattedStories
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
