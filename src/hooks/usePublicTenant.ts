'use client';

import { useState, useCallback, useEffect } from 'react';
import { RestaurantConfig, RestaurantTheme } from '@/types';

export interface PublicTenantConfig extends Omit<RestaurantConfig, 'theme'> {
    theme: RestaurantTheme;
    description?: string | null;
    contact?: {
        address?: string | null;
        phone?: string | null;
        whatsapp?: string | null;
    };
    hours?: Record<string, string> | null;
    socialLinks?: {
        instagram?: string;
        facebook?: string;
        twitter?: string;
        website?: string;
    } | null;
}

interface UsePublicTenantReturn {
    tenant: PublicTenantConfig | null;
    loading: boolean;
    error: string | null;
    fetchTenantConfig: (slug: string) => Promise<PublicTenantConfig | null>;
    applyTheme: (theme: RestaurantTheme) => void;
}

export function usePublicTenant(): UsePublicTenantReturn {
    const [tenant, setTenant] = useState<PublicTenantConfig | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const applyTheme = useCallback((theme: RestaurantTheme) => {
        if (typeof document !== 'undefined') {
            const root = document.documentElement;

            // Aplicar colores CSS custom properties
            root.style.setProperty('--color-brand-primary', theme.colors.primary);
            root.style.setProperty('--color-brand-secondary', theme.colors.secondary);
            root.style.setProperty('--color-brand-accent', theme.colors.accent);
            root.style.setProperty('--color-brand-dark', theme.colors.dark);

            // Aplicar fuentes
            root.style.setProperty('--font-sans', theme.fonts.sans);
            root.style.setProperty('--font-serif', theme.fonts.serif);
        }
    }, []);

    const fetchTenantConfig = useCallback(async (slug: string): Promise<PublicTenantConfig | null> => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/public/tenant/${encodeURIComponent(slug)}`);

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener configuración');
            }

            const data = await response.json();
            const tenantConfig: PublicTenantConfig = data.tenant;

            setTenant(tenantConfig);

            // Aplicar tema automáticamente
            if (tenantConfig.theme) {
                applyTheme(tenantConfig.theme);
            }

            return tenantConfig;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
            setError(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    }, [applyTheme]);

    // Limpiar tema al desmontar si es necesario
    useEffect(() => {
        return () => {
            // Opcional: resetear a valores por defecto
        };
    }, []);

    return {
        tenant,
        loading,
        error,
        fetchTenantConfig,
        applyTheme,
    };
}
