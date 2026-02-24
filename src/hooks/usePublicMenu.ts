'use client';

import { useState, useCallback } from 'react';
import { MenuItem, Category } from '@/types';

export interface PublicMenuTenant {
    id: string;
    name: string;
    slug: string;
    currency: string;
    primaryColor: string | null;
    secondaryColor: string | null;
    logo: string | null;
    tagline: string | null;
}

export interface PublicMenuCategory extends Category {
    image_url: string | null;
    display_order: number;
    dishes: MenuItem[];
}

interface PublicMenuResponse {
    tenant: PublicMenuTenant;
    categories: PublicMenuCategory[];
    dishes: MenuItem[];
}

interface UsePublicMenuReturn {
    tenant: PublicMenuTenant | null;
    categories: PublicMenuCategory[];
    dishes: MenuItem[];
    loading: boolean;
    error: string | null;
    fetchPublicMenu: (slug: string) => Promise<PublicMenuResponse | null>;
}

export function usePublicMenu(): UsePublicMenuReturn {
    const [tenant, setTenant] = useState<PublicMenuTenant | null>(null);
    const [categories, setCategories] = useState<PublicMenuCategory[]>([]);
    const [dishes, setDishes] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchPublicMenu = useCallback(async (slug: string): Promise<PublicMenuResponse | null> => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/public/menu?slug=${encodeURIComponent(slug)}`);

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener menú');
            }

            const data: PublicMenuResponse = await response.json();

            setTenant(data.tenant);
            setCategories(data.categories);
            setDishes(data.dishes);

            return data;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
            setError(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        tenant,
        categories,
        dishes,
        loading,
        error,
        fetchPublicMenu,
    };
}
