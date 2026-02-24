import { notFound } from "next/navigation";
import { createClient } from '@/lib/supabase/server';
import { DinerClient } from "@/components/diner/DinerClient";
import { MenuItem, Story, Category, RestaurantConfig } from "@/types";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Tipo para los datos del tenant
interface TenantData {
    config: RestaurantConfig;
    menu: MenuItem[];
    stories: Story[];
    categories: Category[];
}

// Función para obtener todos los datos del tenant
async function getTenantData(slug: string): Promise<TenantData | null> {
    const supabase = await createClient();

    // 1. Obtener el tenant por slug
    const { data: tenant, error: tenantError } = await supabase
        .from('tenants')
        .select('*')
        .eq('slug', slug)
        .single();

    if (tenantError || !tenant) {
        return null;
    }

    // 2. Obtener categorías activas
    const { data: categories, error: categoriesError } = await supabase
        .from('categories')
        .select('id, name, slug, display_order')
        .eq('tenant_id', tenant.id)
        .eq('is_active', true)
        .order('display_order', { ascending: true });

    if (categoriesError) {
        console.error('Error fetching categories:', categoriesError);
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
    }

    // 4. Obtener stories activas
    const now = new Date().toISOString();
    const { data: stories, error: storiesError } = await supabase
        .from('stories')
        .select(`
            id,
            title,
            type,
            image_url,
            video_url,
            linked_dish_id
        `)
        .eq('tenant_id', tenant.id)
        .eq('is_active', true)
        .or(`expires_at.is.null,expires_at.gt.${now}`)
        .order('created_at', { ascending: false });

    if (storiesError) {
        console.error('Error fetching stories:', storiesError);
    }

    // 5. Construir configuración del restaurante
    const config: RestaurantConfig = {
        id: tenant.id,
        slug: tenant.slug,
        name: tenant.name,
        tagline: tenant.tagline || '',
        coverImage: tenant.cover_url || '',
        logo: tenant.logo_url || undefined,
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
        currency: tenant.currency || '$'
    };

    // 6. Construir categorías
    const formattedCategories: Category[] = (categories || []).map(cat => ({
        id: cat.id,
        name: cat.name
    }));

    // 7. Construir menú
    const menu: MenuItem[] = (dishes || []).map(dish => {
        const category = categories?.find(c => c.id === dish.category_id);
        return {
            id: dish.id,
            name: dish.name,
            description: dish.description || '',
            price: dish.price,
            image: dish.image_url || '',
            category: category?.name || 'Sin categoría',
            tags: dish.dietary || [],
            popular: dish.is_popular || false,
            new: dish.is_new || false,
            chefChoice: dish.is_chef_choice || false,
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
        };
    });

    // 8. Construir stories
    const formattedStories: Story[] = (stories || []).map(story => ({
        id: story.id,
        title: story.title,
        image: story.image_url || '',
        viewed: false,
        type: story.type as 'dish' | 'promo' | 'chef',
        linkedItemId: story.linked_dish_id || undefined
    }));

    return {
        config,
        menu,
        stories: formattedStories,
        categories: formattedCategories
    };
}

export default async function TenantPage({ params }: PageProps) {
    const { slug } = await params;

    // Obtener datos reales desde Supabase
    const tenantData = await getTenantData(slug);

    if (!tenantData) {
        notFound();
    }

    return (
        <DinerClient
            config={tenantData.config}
            menuItems={tenantData.menu}
            stories={tenantData.stories}
            categories={tenantData.categories}
        />
    );
}

// Generar rutas estáticas para los tenants conocidos (opcional para SSR)
export function generateStaticParams() {
    // Retornar array vacío para que sea completamente dinámico
    // Si se quiere SSG, obtener slugs de la base de datos aquí
    return [];
}
