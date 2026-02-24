'use client';

import { useState, useCallback, useEffect } from 'react';

export interface DishOption {
    id: string;
    name: string;
    price: number;
    available: boolean;
}

export interface DishOptionGroup {
    id: string;
    name: string;
    min_selections: number;
    max_selections: number;
    display_order: number;
    dish_options: DishOption[];
}

export interface Dish {
    id: string;
    tenant_id: string;
    name: string;
    description: string | null;
    price: number;
    image_url: string | null;
    category_id: string | null;
    available: boolean;
    dietary: string[];
    is_popular: boolean;
    is_chef_choice: boolean;
    is_new: boolean;
    created_at: string;
    updated_at: string;
    categories?: { id: string; name: string; slug: string } | null;
    dish_option_groups?: DishOptionGroup[];
}

export interface DishFormData {
    name: string;
    description?: string | null;
    price: number;
    image_url?: string | null;
    category_id?: string | null;
    available?: boolean;
    dietary?: string[];
    is_popular?: boolean;
    is_chef_choice?: boolean;
    is_new?: boolean;
}

interface UseDishesReturn {
    dishes: Dish[];
    loading: boolean;
    error: string | null;
    fetchDishes: (filters?: { category_id?: string; available?: boolean }) => Promise<void>;
    createDish: (data: DishFormData) => Promise<Dish | null>;
    updateDish: (id: string, data: Partial<DishFormData>) => Promise<Dish | null>;
    deleteDish: (id: string) => Promise<boolean>;
    getDish: (id: string) => Promise<Dish | null>;
}

export function useDishes(): UseDishesReturn {
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchDishes = useCallback(async (filters?: { category_id?: string; available?: boolean }) => {
        setLoading(true);
        setError(null);
        try {
            const params = new URLSearchParams();
            if (filters?.category_id) {
                params.append('category_id', filters.category_id);
            }
            if (filters?.available !== undefined) {
                params.append('available', String(filters.available));
            }
            const queryString = params.toString();
            const url = `/api/admin/dishes${queryString ? `?${queryString}` : ''}`;

            const response = await fetch(url);
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener platos');
            }
            const data = await response.json();
            setDishes(data.dishes || []);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    }, []);

    const createDish = useCallback(async (formData: DishFormData): Promise<Dish | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/admin/dishes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al crear plato');
            }
            const data = await response.json();
            const newDish = data.dish;
            setDishes(prev => [...prev, newDish]);
            return newDish;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const updateDish = useCallback(async (id: string, formData: Partial<DishFormData>): Promise<Dish | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/admin/dishes/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al actualizar plato');
            }
            const data = await response.json();
            const updatedDish = data.dish;
            setDishes(prev => prev.map(d => d.id === id ? updatedDish : d));
            return updatedDish;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const deleteDish = useCallback(async (id: string): Promise<boolean> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/admin/dishes/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al eliminar plato');
            }
            setDishes(prev => prev.filter(d => d.id !== id));
            return true;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return false;
        } finally {
            setLoading(false);
        }
    }, []);

    const getDish = useCallback(async (id: string): Promise<Dish | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/admin/dishes/${id}`);
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener plato');
            }
            const data = await response.json();
            return data.dish;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    // Auto-fetch on mount
    useEffect(() => {
        fetchDishes();
    }, [fetchDishes]);

    return {
        dishes,
        loading,
        error,
        fetchDishes,
        createDish,
        updateDish,
        deleteDish,
        getDish,
    };
}
