import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

interface RouteParams {
    params: Promise<{
        slug: string;
    }>;
}

/**
 * GET /api/public/tenant/[slug]
 * Obtener configuración pública del tenant por slug
 * Retorna: nombre, logo, colores, redes sociales, etc.
 */
export async function GET(_request: Request, { params }: RouteParams) {
    try {
        const { slug } = await params;

        if (!slug) {
            return NextResponse.json(
                { error: 'Slug es requerido' },
                { status: 400 }
            );
        }

        const supabase = await createClient();

        // Obtener configuración del tenant
        const { data: tenant, error: tenantError } = await supabase
            .from('tenants')
            .select(`
                id,
                slug,
                name,
                logo_url,
                cover_url,
                primary_color,
                secondary_color,
                font_family,
                currency,
                locale,
                tagline,
                description,
                address,
                phone,
                whatsapp,
                hours,
                social_links
            `)
            .eq('slug', slug)
            .single();

        if (tenantError) {
            console.error('Error fetching tenant:', tenantError);

            if (tenantError.code === 'PGRST116') {
                return NextResponse.json(
                    { error: 'Restaurante no encontrado' },
                    { status: 404 }
                );
            }

            return NextResponse.json(
                { error: 'Error al obtener configuración del restaurante' },
                { status: 500 }
            );
        }

        // Estructurar la respuesta pública
        const publicConfig = {
            id: tenant.id,
            slug: tenant.slug,
            name: tenant.name,
            logo: tenant.logo_url,
            coverImage: tenant.cover_url,
            tagline: tenant.tagline,
            description: tenant.description,
            theme: {
                colors: {
                    primary: tenant.primary_color || '#f59e0b',
                    secondary: tenant.secondary_color || '#1f2937',
                    accent: tenant.primary_color || '#f59e0b',
                    dark: '#030712'
                },
                fonts: {
                    sans: tenant.font_family || 'Inter',
                    serif: 'Playfair Display'
                }
            },
            currency: tenant.currency || '$',
            locale: tenant.locale || 'es-CO',
            contact: {
                address: tenant.address,
                phone: tenant.phone,
                whatsapp: tenant.whatsapp
            },
            hours: tenant.hours,
            socialLinks: tenant.social_links
        };

        return NextResponse.json({ tenant: publicConfig });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
