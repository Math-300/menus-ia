import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET /api/admin/tenant - Get tenant configuration
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
            .select('tenant_id, role')
            .eq('id', user.id)
            .single();

        if (userError || !userData?.tenant_id) {
            return NextResponse.json(
                { error: 'Usuario sin restaurante asociado' },
                { status: 400 }
            );
        }

        // Fetch tenant configuration
        const { data: tenant, error: tenantError } = await supabase
            .from('tenants')
            .select('*')
            .eq('id', userData.tenant_id)
            .single();

        if (tenantError) {
            console.error('Error fetching tenant:', tenantError);
            return NextResponse.json(
                { error: 'Error al obtener configuración del restaurante' },
                { status: 500 }
            );
        }

        return NextResponse.json({ tenant, userRole: userData.role });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}

// PUT /api/admin/tenant - Update tenant configuration
export async function PUT(request: NextRequest) {
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

        // Get user's tenant_id and verify role
        const { data: userData, error: userError } = await supabase
            .from('users')
            .select('tenant_id, role')
            .eq('id', user.id)
            .single();

        if (userError || !userData?.tenant_id) {
            return NextResponse.json(
                { error: 'Usuario sin restaurante asociado' },
                { status: 400 }
            );
        }

        // Only admins and owners can update tenant settings
        if (userData.role !== 'admin' && userData.role !== 'owner') {
            return NextResponse.json(
                { error: 'No tienes permisos para actualizar la configuración' },
                { status: 403 }
            );
        }

        // Build update object with allowed fields
        const allowedFields = [
            'name',
            'slug',
            'logo_url',
            'cover_url',
            'primary_color',
            'secondary_color',
            'font_family',
            'currency',
            'locale',
            'tagline',
            'description',
            'address',
            'phone',
            'whatsapp',
            'hours',
            'social_links',
            'settings',
        ];

        const updateData: Record<string, unknown> = {};
        for (const field of allowedFields) {
            if (body[field] !== undefined) {
                updateData[field] = body[field];
            }
        }

        // Validate slug uniqueness if being updated
        if (body.slug) {
            const { data: existingSlug } = await supabase
                .from('tenants')
                .select('id')
                .eq('slug', body.slug)
                .neq('id', userData.tenant_id)
                .single();

            if (existingSlug) {
                return NextResponse.json(
                    { error: 'El slug ya está en uso por otro restaurante' },
                    { status: 400 }
                );
            }
        }

        // Update tenant
        const { data: tenant, error: updateError } = await supabase
            .from('tenants')
            .update(updateData)
            .eq('id', userData.tenant_id)
            .select()
            .single();

        if (updateError) {
            console.error('Error updating tenant:', updateError);
            return NextResponse.json(
                { error: 'Error al actualizar configuración' },
                { status: 500 }
            );
        }

        return NextResponse.json({ tenant });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
