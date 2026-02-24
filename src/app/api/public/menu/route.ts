import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

/**
 * GET /api/public/menu
 * Obtener categorías y platos de un tenant por slug
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
            .select('id, name, slug, currency, primary_color, secondary_color, logo_url, tagline')
            .eq('slug', slug)
            .single();

        if (tenantError || !tenant) {
            return NextResponse.json(
                { error: 'Restaurante no encontrado' },
                { status: 404 }
            );
        }

        // 2. Obtener categorías activas del tenant
        const { data: categories, error: categoriesError } = await supabase
            .from('categories')
            .select('id, name, slug, image_url, display_order')
            .eq('tenant_id', tenant.id)
            .eq('is_active', true)
            .order('display_order', { ascending: true });

        if (categoriesError) {
            console.error('Error fetching categories:', categoriesError);
            return NextResponse.json(
                { error: 'Error al obtener categorías' },
                { status: 500 }
            );
        }

        // 3. Obtener platos con sus modificadores
        const { data: dishes, error: dishesError } = await supabase
            .from('dishes')
            .select(`
                id,
                name,
                description,
                price,
                image_url,
                available,
                dietary,
                is_popular,
                is_chef_choice,
                is_new,
                category_id,
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
            .eq('tenant_id', tenant.id)
            .eq('available', true)
            .order('name', { ascending: true });

        if (dishesError) {
            console.error('Error fetching dishes:', dishesError);
            return NextResponse.json(
                { error: 'Error al obtener platos' },
                { status: 500 }
            );
        }

        // 4. Estructurar la respuesta
        const categoriesWithDishes = categories.map(category => ({
            ...category,
            dishes: dishes.filter(dish => dish.category_id === category.id).map(dish => ({
                id: dish.id,
                name: dish.name,
                description: dish.description,
                price: dish.price,
                image: dish.image_url,
                category: category.name,
                tags: dish.dietary || [],
                popular: dish.is_popular,
                new: dish.is_new,
                chefChoice: dish.is_chef_choice,
                available: dish.available,
                modifiers: dish.dish_option_groups?.sort((a, b) => a.display_order - b.display_order).map(group => ({
                    id: group.id,
                    name: group.name,
                    minSelection: group.min_selections,
                    maxSelection: group.max_selections,
                    options: group.dish_options?.map(opt => ({
                        id: opt.id,
                        name: opt.name,
                        price: opt.price,
                        available: opt.available
                    })) || []
                })) || []
            }))
        }));

        // Platos sin categoría
        const uncategorizedDishes = dishes
            .filter(dish => !dish.category_id)
            .map(dish => ({
                id: dish.id,
                name: dish.name,
                description: dish.description,
                price: dish.price,
                image: dish.image_url,
                category: 'Sin categoría',
                tags: dish.dietary || [],
                popular: dish.is_popular,
                new: dish.is_new,
                chefChoice: dish.is_chef_choice,
                available: dish.available,
                modifiers: dish.dish_option_groups?.sort((a, b) => a.display_order - b.display_order).map(group => ({
                    id: group.id,
                    name: group.name,
                    minSelection: group.min_selections,
                    maxSelection: group.max_selections,
                    options: group.dish_options?.map(opt => ({
                        id: opt.id,
                        name: opt.name,
                        price: opt.price,
                        available: opt.available
                    })) || []
                })) || []
            }));

        // Agregar categoría "Sin categoría" si hay platos sin categoría
        if (uncategorizedDishes.length > 0) {
            categoriesWithDishes.push({
                id: 'uncategorized',
                name: 'Sin categoría',
                slug: 'uncategorized',
                image_url: null,
                display_order: 999,
                dishes: uncategorizedDishes
            });
        }

        return NextResponse.json({
            tenant: {
                id: tenant.id,
                name: tenant.name,
                slug: tenant.slug,
                currency: tenant.currency,
                primaryColor: tenant.primary_color,
                secondaryColor: tenant.secondary_color,
                logo: tenant.logo_url,
                tagline: tenant.tagline
            },
            categories: categoriesWithDishes,
            dishes: categoriesWithDishes.flatMap(c => c.dishes)
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
