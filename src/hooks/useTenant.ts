'use client';

import { useState, useCallback, useEffect } from 'react';

export interface TenantSettings {
    id: string;
    name: string;
    slug: string;
    logo_url: string | null;
    cover_url: string | null;
    primary_color: string | null;
    secondary_color: string | null;
    font_family: string | null;
    currency: string;
    locale: string;
    tagline: string | null;
    description: string | null;
    address: string | null;
    phone: string | null;
    whatsapp: string | null;
    hours: Record<string, string> | null;
    social_links: {
        instagram?: string;
        facebook?: string;
        twitter?: string;
        website?: string;
    } | null;
    settings: {
        show_prices?: boolean;
        show_descriptions?: boolean;
        enable_orders?: boolean;
        enable_chat?: boolean;
        theme?: 'light' | 'dark' | 'auto';
    } | null;
    created_at: string;
    updated_at: string;
}

export interface TenantFormData {
    name?: string;
    slug?: string;
    logo_url?: string | null;
    cover_url?: string | null;
    primary_color?: string | null;
    secondary_color?: string | null;
    font_family?: string | null;
    currency?: string;
    locale?: string;
    tagline?: string | null;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    whatsapp?: string | null;
    hours?: Record<string, string> | null;
    social_links?: TenantSettings['social_links'] | null;
    settings?: TenantSettings['settings'] | null;
}

interface UseTenantReturn {
    tenant: TenantSettings | null;
    userRole: string | null;
    loading: boolean;
    error: string | null;
    fetchTenant: () => Promise<void>;
    updateTenant: (data: TenantFormData) => Promise<TenantSettings | null>;
}

export function useTenant(): UseTenantReturn {
    const [tenant, setTenant] = useState<TenantSettings | null>(null);
    const [userRole, setUserRole] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTenant = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/admin/tenant');
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener configuración');
            }
            const data = await response.json();
            setTenant(data.tenant);
            setUserRole(data.userRole);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    }, []);

    const updateTenant = useCallback(async (formData: TenantFormData): Promise<TenantSettings | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/admin/tenant', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al actualizar configuración');
            }
            const data = await response.json();
            const updatedTenant = data.tenant;
            setTenant(updatedTenant);
            return updatedTenant;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    // Auto-fetch on mount
    useEffect(() => {
        fetchTenant();
    }, [fetchTenant]);

    return {
        tenant,
        userRole,
        loading,
        error,
        fetchTenant,
        updateTenant,
    };
}
