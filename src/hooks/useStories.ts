'use client';

import { useState, useCallback, useEffect } from 'react';

export interface Story {
    id: string;
    tenant_id: string;
    title: string;
    type: 'dish' | 'promo' | 'chef' | 'event';
    image_url: string | null;
    video_url: string | null;
    linked_dish_id: string | null;
    is_active: boolean;
    expires_at: string | null;
    view_count: number;
    display_order: number;
    created_at: string;
    updated_at: string;
    dishes?: {
        id: string;
        name: string;
        price: number;
        image_url: string | null;
    } | null;
}

export interface StoryFormData {
    title: string;
    type: 'dish' | 'promo' | 'chef' | 'event';
    image_url?: string | null;
    video_url?: string | null;
    linked_dish_id?: string | null;
    is_active?: boolean;
    expires_at?: string | null;
    display_order?: number;
}

interface UseStoriesReturn {
    stories: Story[];
    loading: boolean;
    error: string | null;
    fetchStories: (filters?: { type?: string; is_active?: boolean }) => Promise<void>;
    createStory: (data: StoryFormData) => Promise<Story | null>;
    updateStory: (id: string, data: Partial<StoryFormData>) => Promise<Story | null>;
    deleteStory: (id: string) => Promise<boolean>;
    getStory: (id: string) => Promise<Story | null>;
    reorderStories: (storyIds: string[]) => Promise<boolean>;
}

export function useStories(): UseStoriesReturn {
    const [stories, setStories] = useState<Story[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStories = useCallback(async (filters?: { type?: string; is_active?: boolean }) => {
        setLoading(true);
        setError(null);
        try {
            const params = new URLSearchParams();
            if (filters?.type) {
                params.append('type', filters.type);
            }
            if (filters?.is_active !== undefined) {
                params.append('is_active', String(filters.is_active));
            }
            const queryString = params.toString();
            const url = `/api/admin/stories${queryString ? `?${queryString}` : ''}`;

            const response = await fetch(url);
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener stories');
            }
            const data = await response.json();
            setStories(data.stories || []);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    }, []);

    const createStory = useCallback(async (formData: StoryFormData): Promise<Story | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/admin/stories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al crear story');
            }
            const data = await response.json();
            const newStory = data.story;
            setStories(prev => [...prev, newStory]);
            return newStory;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const updateStory = useCallback(async (id: string, formData: Partial<StoryFormData>): Promise<Story | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/admin/stories/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al actualizar story');
            }
            const data = await response.json();
            const updatedStory = data.story;
            setStories(prev => prev.map(s => s.id === id ? updatedStory : s));
            return updatedStory;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const deleteStory = useCallback(async (id: string): Promise<boolean> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/admin/stories/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al eliminar story');
            }
            setStories(prev => prev.filter(s => s.id !== id));
            return true;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return false;
        } finally {
            setLoading(false);
        }
    }, []);

    const getStory = useCallback(async (id: string): Promise<Story | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/admin/stories/${id}`);
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener story');
            }
            const data = await response.json();
            return data.story;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const reorderStories = useCallback(async (storyIds: string[]): Promise<boolean> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/admin/stories', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ storyIds }),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al reordenar stories');
            }
            // Update local state with new order
            setStories(prev => {
                const storyMap = new Map(prev.map(s => [s.id, s]));
                return storyIds
                    .map(id => storyMap.get(id))
                    .filter((s): s is Story => s !== undefined);
            });
            return true;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return false;
        } finally {
            setLoading(false);
        }
    }, []);

    // Auto-fetch on mount
    useEffect(() => {
        fetchStories();
    }, [fetchStories]);

    return {
        stories,
        loading,
        error,
        fetchStories,
        createStory,
        updateStory,
        deleteStory,
        getStory,
        reorderStories,
    };
}
