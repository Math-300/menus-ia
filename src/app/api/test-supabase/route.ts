import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const supabase = await createClient();

        // Probar conexión consultando tenants
        const { data: tenants, error: tenantsError } = await supabase
            .from('tenants')
            .select('id, name, slug')
            .limit(5);

        if (tenantsError) {
            return NextResponse.json({
                success: false,
                error: tenantsError.message,
                details: tenantsError
            }, { status: 500 });
        }

        // Probar conexión consultando categorías
        const { data: categories, error: categoriesError } = await supabase
            .from('categories')
            .select('id, name, tenant_id')
            .limit(5);

        if (categoriesError) {
            return NextResponse.json({
                success: false,
                error: categoriesError.message,
                details: categoriesError
            }, { status: 500 });
        }

        // Probar conexión consultando dishes
        const { data: dishes, error: dishesError } = await supabase
            .from('dishes')
            .select('id, name, price, tenant_id')
            .limit(5);

        if (dishesError) {
            return NextResponse.json({
                success: false,
                error: dishesError.message,
                details: dishesError
            }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            message: 'Conexión a Supabase exitosa',
            data: {
                tenants: tenants?.length || 0,
                categories: categories?.length || 0,
                dishes: dishes?.length || 0,
                tenantsList: tenants,
                categoriesList: categories,
                dishesList: dishes
            }
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Error desconocido'
        }, { status: 500 });
    }
}
