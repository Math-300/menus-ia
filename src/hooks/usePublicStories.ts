'use client';

import { useState, useCallback } from 'react';
import { Story } from '@/types';

export interface PublicStory extends Story {
    video?: string | null;
    viewCount?: number;
    linkedDish?: {
        id: string;
        name: string;
        price: number;
        image: string | null;
    } | null;
}

interface UsePublicStoriesReturn {
    stories: PublicStory[];
    loading: boolean;
    error: string | null;
    fetchStories: (slug: string) => Promise<PublicStory[]>;
}

export function usePublicStories(): UsePublicStoriesReturn {
    const [stories, setStories] = useState<PublicStory[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStories = useCallback(async (slug: string): Promise<PublicStory[]> => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/public/stories?slug=${encodeURIComponent(slug)}`);

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Error al obtener stories');
            }

            const data = await response.json();
            const fetchedStories: PublicStory[] = data.stories || [];

            setStories(fetchedStories);

            return fetchedStories;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
            setError(errorMessage);
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        stories,
        loading,
        error,
        fetchStories,
    };
}
