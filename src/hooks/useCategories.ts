'use client';

import { useState, useCallback, useEffect } from 'react';

export interface Category {
    id: string;
    tenant_id: string;
    name: string;
    slug: string;
    image_url: string | null;
    display_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface CategoryFormData {
    name: string;
    slug: string;
    image_url?: string | null;
    display_order?: number;
    is_active?: boolean;
}

interface UseCategoriesReturn {
    categories: Category[];
    loading: boolean;
    error: string | null;
    fetchCategories: () => Promise<void>;
    createCategory: (data: CategoryFormData) => Promise<Category | null>;
    updateCategory: (id: string, data: Partial<CategoryFormData>) => Promise<Category | null>;
    deleteCategory: (id: string) => Promise<boolean>;
    getCategory: (id: string) => Promise<Category | null>;
}

export function useCategories(): UseCategoriesReturn {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCategories = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/admin/categories');
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener categorías');
            }
            const data = await response.json();
            setCategories(data.categories || []);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    }, []);

    const createCategory = useCallback(async (formData: CategoryFormData): Promise<Category | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/admin/categories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al crear categoría');
            }
            const data = await response.json();
            const newCategory = data.category;
            setCategories(prev => [...prev, newCategory]);
            return newCategory;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const updateCategory = useCallback(async (id: string, formData: Partial<CategoryFormData>): Promise<Category | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/admin/categories/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al actualizar categoría');
            }
            const data = await response.json();
            const updatedCategory = data.category;
            setCategories(prev => prev.map(c => c.id === id ? updatedCategory : c));
            return updatedCategory;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const deleteCategory = useCallback(async (id: string): Promise<boolean> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/admin/categories/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al eliminar categoría');
            }
            setCategories(prev => prev.filter(c => c.id !== id));
            return true;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return false;
        } finally {
            setLoading(false);
        }
    }, []);

    const getCategory = useCallback(async (id: string): Promise<Category | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/admin/categories/${id}`);
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener categoría');
            }
            const data = await response.json();
            return data.category;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    // Auto-fetch on mount
    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return {
        categories,
        loading,
        error,
        fetchCategories,
        createCategory,
        updateCategory,
        deleteCategory,
        getCategory,
    };
}
