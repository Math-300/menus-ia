'use client';

import React, { useState, useMemo } from 'react';
import { Plus, Eye, Edit2, Trash2, Image, Video, Calendar, Loader2, AlertCircle } from 'lucide-react';
import { useStories, type Story, type StoryFormData } from '@/hooks/useStories';
import { useDishes } from '@/hooks/useDishes';
import { StoryForm } from '@/components/admin/StoryForm';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';

const STORY_TYPE_LABELS: Record<string, string> = {
    dish: 'Plato',
    promo: 'Promoción',
    chef: 'Chef',
    event: 'Evento',
};

const STORY_TYPE_COLORS: Record<string, string> = {
    dish: 'bg-green-500/20 text-green-400 border-green-500/30',
    promo: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    chef: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    event: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

export default function StoriesManagementPage() {
    const { stories, loading, error, fetchStories, createStory, updateStory, deleteStory } = useStories();
    const { dishes } = useDishes();

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingStory, setEditingStory] = useState<Story | null>(null);
    const [deleteConfirm, setDeleteConfirm] = useState<Story | null>(null);
    const [filterType, setFilterType] = useState<string>('all');
    const [submitting, setSubmitting] = useState(false);

    // Filter stories by type
    const filteredStories = useMemo(() => {
        if (filterType === 'all') return stories;
        return stories.filter(s => s.type === filterType);
    }, [stories, filterType]);

    // Calculate stats
    const stats = useMemo(() => {
        const activeStories = stories.filter(s => s.is_active);
        const totalViews = stories.reduce((sum, s) => sum + (s.view_count || 0), 0);
        const expiredStories = stories.filter(s =>
            s.expires_at && new Date(s.expires_at) < new Date()
        );

        return {
            total: stories.length,
            active: activeStories.length,
            views: totalViews,
            expired: expiredStories.length,
        };
    }, [stories]);

    const handleCreate = () => {
        setEditingStory(null);
        setIsFormOpen(true);
    };

    const handleEdit = (story: Story) => {
        setEditingStory(story);
        setIsFormOpen(true);
    };

    const handleDelete = async () => {
        if (!deleteConfirm) return;

        setSubmitting(true);
        const success = await deleteStory(deleteConfirm.id);
        if (success) {
            setDeleteConfirm(null);
        }
        setSubmitting(false);
    };

    const handleSubmit = async (data: StoryFormData): Promise<boolean> => {
        setSubmitting(true);
        try {
            let success: Story | null;
            if (editingStory) {
                success = await updateStory(editingStory.id, data);
            } else {
                success = await createStory(data);
            }
            return success !== null;
        } finally {
            setSubmitting(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-CO', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    };

    const isExpired = (story: Story) => {
        return story.expires_at && new Date(story.expires_at) < new Date();
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Stories</h1>
                    <p className="text-gray-400 mt-1">Gestiona tus stories promocionales tipo Instagram</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="px-4 py-2 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
                >
                    <Plus size={18} />
                    Nueva Story
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold text-white">{stats.total}</div>
                    <div className="text-sm text-gray-400">Total Stories</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold text-green-400">{stats.active}</div>
                    <div className="text-sm text-gray-400">Activas</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold text-white">{stats.views.toLocaleString('es-CO')}</div>
                    <div className="text-sm text-gray-400">Visualizaciones</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold text-red-400">{stats.expired}</div>
                    <div className="text-sm text-gray-400">Expiradas</div>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3">
                    <AlertCircle className="text-red-400" size={20} />
                    <p className="text-red-400 text-sm">{error}</p>
                </div>
            )}

            {/* Stories Grid */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-lg font-semibold text-white">Todas las Stories</h2>
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-primary"
                    >
                        <option value="all">Todos los tipos</option>
                        <option value="dish">Plato</option>
                        <option value="promo">Promoción</option>
                        <option value="chef">Chef</option>
                        <option value="event">Evento</option>
                    </select>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 size={32} className="text-gray-400 animate-spin" />
                    </div>
                ) : filteredStories.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                            <Image size={32} className="text-gray-500" />
                        </div>
                        <p className="text-gray-400">No hay stories creados</p>
                        <p className="text-gray-500 text-sm mt-2">
                            {filterType === 'all'
                                ? 'Crea tu primera story para promocionar platos'
                                : 'No hay stories de este tipo'}
                        </p>
                        {filterType === 'all' && (
                            <button
                                onClick={handleCreate}
                                className="mt-4 px-4 py-2 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-lg transition-colors text-sm font-medium"
                            >
                                Crear Story
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {filteredStories.map((story) => (
                            <div
                                key={story.id}
                                className={`group relative aspect-[9/16] bg-white/5 rounded-xl overflow-hidden border transition-all ${isExpired(story)
                                        ? 'border-red-500/30 opacity-60'
                                        : story.is_active
                                            ? 'border-white/10 hover:border-brand-primary/50'
                                            : 'border-gray-500/30 opacity-50'
                                    }`}
                            >
                                {/* Media Preview */}
                                {story.video_url ? (
                                    <video
                                        src={story.video_url}
                                        className="w-full h-full object-cover"
                                        muted
                                        playsInline
                                        onMouseEnter={(e) => e.currentTarget.play()}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.pause();
                                            e.currentTarget.currentTime = 0;
                                        }}
                                    />
                                ) : story.image_url ? (
                                    <img
                                        src={story.image_url}
                                        alt={story.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-white/10">
                                        <Image size={32} className="text-gray-500" />
                                    </div>
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <p className="text-white text-sm font-medium truncate">{story.title}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className={`text-xs px-2 py-0.5 rounded border ${STORY_TYPE_COLORS[story.type]}`}>
                                                {STORY_TYPE_LABELS[story.type]}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Status Indicators */}
                                <div className="absolute top-2 left-2 flex flex-col gap-1">
                                    {story.video_url && (
                                        <div className="p-1 bg-black/50 rounded">
                                            <Video size={12} className="text-white" />
                                        </div>
                                    )}
                                    {!story.is_active && (
                                        <div className="px-2 py-0.5 bg-gray-500/80 rounded text-xs text-white">
                                            Inactiva
                                        </div>
                                    )}
                                    {isExpired(story) && (
                                        <div className="px-2 py-0.5 bg-red-500/80 rounded text-xs text-white">
                                            Expirada
                                        </div>
                                    )}
                                </div>

                                {/* View Count */}
                                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/50 rounded text-xs text-white">
                                    <Eye size={12} />
                                    {story.view_count || 0}
                                </div>

                                {/* Actions */}
                                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => handleEdit(story)}
                                        className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
                                        title="Editar"
                                    >
                                        <Edit2 size={16} className="text-white" />
                                    </button>
                                    <button
                                        onClick={() => setDeleteConfirm(story)}
                                        className="p-2 bg-red-500/50 hover:bg-red-500/70 rounded-full backdrop-blur-sm transition-colors"
                                        title="Eliminar"
                                    >
                                        <Trash2 size={16} className="text-white" />
                                    </button>
                                </div>

                                {/* Expiration Badge */}
                                {story.expires_at && (
                                    <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/50 rounded text-xs text-white">
                                        <Calendar size={10} />
                                        {formatDate(story.expires_at)}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Story Form Modal */}
            <StoryForm
                isOpen={isFormOpen}
                onClose={() => {
                    setIsFormOpen(false);
                    setEditingStory(null);
                }}
                onSubmit={handleSubmit}
                story={editingStory}
                dishes={dishes}
                loading={submitting}
            />

            {/* Delete Confirmation */}
            <ConfirmDialog
                isOpen={!!deleteConfirm}
                onClose={() => setDeleteConfirm(null)}
                onConfirm={handleDelete}
                title="Eliminar Story"
                message={`¿Estás seguro de que deseas eliminar la story "${deleteConfirm?.title}"? Esta acción no se puede deshacer.`}
                confirmText="Eliminar"
                loading={submitting}
                variant="danger"
            />
        </div>
    );
}
