'use client';

import React, { useState, useEffect } from 'react';
import { X, Upload, Loader2, Image, Video, Calendar, Link2 } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import type { Story, StoryFormData } from '@/hooks/useStories';
import type { Dish } from '@/hooks/useDishes';

interface StoryFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: StoryFormData) => Promise<boolean>;
    story?: Story | null;
    dishes: Dish[];
    loading?: boolean;
}

const STORY_TYPES = [
    { value: 'dish', label: 'Plato', description: 'Mostrar un plato del menú' },
    { value: 'promo', label: 'Promoción', description: 'Ofertas y descuentos especiales' },
    { value: 'chef', label: 'Chef', description: 'Destacados del chef' },
    { value: 'event', label: 'Evento', description: 'Eventos especiales' },
];

export const StoryForm: React.FC<StoryFormProps> = ({
    isOpen,
    onClose,
    onSubmit,
    story,
    dishes,
    loading = false,
}) => {
    const [formData, setFormData] = useState<StoryFormData>({
        title: '',
        type: 'dish',
        image_url: null,
        video_url: null,
        linked_dish_id: null,
        is_active: true,
        expires_at: null,
    });
    const [uploading, setUploading] = useState(false);
    const [uploadType, setUploadType] = useState<'image' | 'video'>('image');
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Populate form when editing
    useEffect(() => {
        if (story) {
            setFormData({
                title: story.title,
                type: story.type,
                image_url: story.image_url,
                video_url: story.video_url,
                linked_dish_id: story.linked_dish_id,
                is_active: story.is_active,
                expires_at: story.expires_at ? story.expires_at.split('T')[0] : null,
            });
            setUploadType(story.video_url ? 'video' : 'image');
        } else {
            setFormData({
                title: '',
                type: 'dish',
                image_url: null,
                video_url: null,
                linked_dish_id: null,
                is_active: true,
                expires_at: null,
            });
            setUploadType('image');
        }
        setErrors({});
    }, [story, isOpen]);

    const handleMediaUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Determine folder based on file type
        const isVideo = file.type.startsWith('video/');
        const folder = isVideo ? 'menuos/stories/videos' : 'menuos/stories/images';

        setUploading(true);
        try {
            const uploadFormData = new FormData();
            uploadFormData.append('file', file);
            uploadFormData.append('folder', folder);

            // For videos, we might want to set different upload options
            if (isVideo) {
                uploadFormData.append('resource_type', 'video');
            }

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: uploadFormData,
            });

            if (!response.ok) {
                throw new Error('Error al subir archivo');
            }

            const data = await response.json();

            if (isVideo) {
                setFormData(prev => ({
                    ...prev,
                    video_url: data.data.secure_url,
                    image_url: null, // Clear image if video is uploaded
                }));
                setUploadType('video');
            } else {
                setFormData(prev => ({
                    ...prev,
                    image_url: data.data.secure_url,
                    video_url: null, // Clear video if image is uploaded
                }));
                setUploadType('image');
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Error al subir el archivo');
        } finally {
            setUploading(false);
        }
    };

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};
        if (!formData.title.trim()) {
            newErrors.title = 'El título es requerido';
        }
        if (!formData.image_url && !formData.video_url) {
            newErrors.media = 'Debes subir una imagen o video';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const success = await onSubmit(formData);
        if (success) {
            onClose();
        }
    };

    const getMediaPreview = () => {
        if (formData.video_url) {
            return (
                <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-white/10 bg-black">
                    <video
                        src={formData.video_url}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                    />
                    <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, video_url: null }))}
                        className="absolute top-2 right-2 p-1.5 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                    >
                        <X size={12} className="text-white" />
                    </button>
                    <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 rounded text-xs text-white flex items-center gap-1">
                        <Video size={12} />
                        Video
                    </div>
                </div>
            );
        }

        if (formData.image_url) {
            return (
                <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-white/10">
                    <img
                        src={formData.image_url}
                        alt="Preview"
                        className="w-full h-full object-cover"
                    />
                    <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, image_url: null }))}
                        className="absolute top-2 right-2 p-1.5 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                    >
                        <X size={12} className="text-white" />
                    </button>
                    <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 rounded text-xs text-white flex items-center gap-1">
                        <Image size={12} />
                        Imagen
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={story ? 'Editar Story' : 'Nueva Story'}>
            <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                {/* Media Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Media (Imagen o Video) *
                    </label>

                    {!formData.image_url && !formData.video_url ? (
                        <div className="space-y-3">
                            {/* Upload buttons */}
                            <div className="flex gap-3">
                                <label className={`flex-1 flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${uploadType === 'image'
                                        ? 'border-brand-primary bg-brand-primary/10'
                                        : 'border-white/20 hover:border-white/40'
                                    }`}>
                                    {uploading && uploadType === 'image' ? (
                                        <Loader2 size={32} className="text-gray-400 animate-spin" />
                                    ) : (
                                        <>
                                            <Image size={32} className="text-gray-400" />
                                            <span className="text-sm text-gray-400 mt-2">Subir Imagen</span>
                                            <span className="text-xs text-gray-500 mt-1">9:16 recomendado</span>
                                        </>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            setUploadType('image');
                                            handleMediaUpload(e);
                                        }}
                                        className="hidden"
                                        disabled={uploading}
                                    />
                                </label>

                                <label className={`flex-1 flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${uploadType === 'video'
                                        ? 'border-brand-primary bg-brand-primary/10'
                                        : 'border-white/20 hover:border-white/40'
                                    }`}>
                                    {uploading && uploadType === 'video' ? (
                                        <Loader2 size={32} className="text-gray-400 animate-spin" />
                                    ) : (
                                        <>
                                            <Video size={32} className="text-gray-400" />
                                            <span className="text-sm text-gray-400 mt-2">Subir Video</span>
                                            <span className="text-xs text-gray-500 mt-1">Máx. 30 segundos</span>
                                        </>
                                    )}
                                    <input
                                        type="file"
                                        accept="video/*"
                                        onChange={(e) => {
                                            setUploadType('video');
                                            handleMediaUpload(e);
                                        }}
                                        className="hidden"
                                        disabled={uploading}
                                    />
                                </label>
                            </div>

                            <p className="text-gray-500 text-xs text-center">
                                Formatos: JPG, PNG, WebP, MP4, WebM. Máximo 50MB para videos.
                            </p>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <div className="w-32 flex-shrink-0">
                                {getMediaPreview()}
                            </div>
                            <div className="flex-1 space-y-3">
                                <p className="text-gray-400 text-sm">
                                    {formData.video_url
                                        ? 'Video cargado correctamente. Se reproducirá en bucle.'
                                        : 'Imagen cargada correctamente.'}
                                </p>
                                <label className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-colors text-sm text-gray-300">
                                    <Upload size={16} />
                                    Cambiar media
                                    <input
                                        type="file"
                                        accept={formData.video_url ? 'video/*' : 'image/*'}
                                        onChange={handleMediaUpload}
                                        className="hidden"
                                        disabled={uploading}
                                    />
                                </label>
                            </div>
                        </div>
                    )}

                    {errors.media && (
                        <p className="text-red-400 text-xs mt-2">{errors.media}</p>
                    )}
                </div>

                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Título *
                    </label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, title: e.target.value }));
                            if (errors.title) setErrors(prev => ({ ...prev, title: '' }));
                        }}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors ${errors.title ? 'border-red-500' : 'border-white/10'
                            }`}
                        placeholder="Ej: Especial del Día"
                    />
                    {errors.title && (
                        <p className="text-red-400 text-xs mt-1">{errors.title}</p>
                    )}
                </div>

                {/* Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Tipo de Story
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        {STORY_TYPES.map((type) => (
                            <button
                                key={type.value}
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, type: type.value as StoryFormData['type'] }))}
                                className={`p-3 rounded-lg border text-left transition-colors ${formData.type === type.value
                                        ? 'border-brand-primary bg-brand-primary/10'
                                        : 'border-white/10 hover:border-white/20'
                                    }`}
                            >
                                <div className="text-sm font-medium text-white">{type.label}</div>
                                <div className="text-xs text-gray-500">{type.description}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Linked Dish */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Link2 size={14} className="inline mr-1" />
                        Plato Vinculado (Opcional)
                    </label>
                    <select
                        value={formData.linked_dish_id || ''}
                        onChange={(e) => setFormData(prev => ({
                            ...prev,
                            linked_dish_id: e.target.value || null
                        }))}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors"
                    >
                        <option value="">Ninguno</option>
                        {dishes.map((dish) => (
                            <option key={dish.id} value={dish.id}>
                                {dish.name} - ${dish.price.toLocaleString('es-CO')}
                            </option>
                        ))}
                    </select>
                    <p className="text-gray-500 text-xs mt-1">
                        Al vincular un plato, los usuarios podrán verlo al tocar la story
                    </p>
                </div>

                {/* Expiration Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Calendar size={14} className="inline mr-1" />
                        Fecha de Expiración (Opcional)
                    </label>
                    <input
                        type="date"
                        value={formData.expires_at || ''}
                        onChange={(e) => setFormData(prev => ({
                            ...prev,
                            expires_at: e.target.value || null
                        }))}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors"
                    />
                    <p className="text-gray-500 text-xs mt-1">
                        La story se desactivará automáticamente después de esta fecha
                    </p>
                </div>

                {/* Active Status */}
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div>
                        <div className="text-sm font-medium text-white">Story Activa</div>
                        <div className="text-xs text-gray-500">La story será visible en el menú</div>
                    </div>
                    <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, is_active: !prev.is_active }))}
                        className={`relative w-12 h-6 rounded-full transition-colors ${formData.is_active ? 'bg-brand-primary' : 'bg-gray-600'
                            }`}
                    >
                        <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${formData.is_active ? 'translate-x-6' : 'translate-x-0'
                                }`}
                        />
                    </button>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        disabled={loading || uploading}
                        className="flex-1 px-4 py-3 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <Loader2 size={16} className="animate-spin" />
                                Guardando...
                            </>
                        ) : (
                            story ? 'Guardar Cambios' : 'Crear Story'
                        )}
                    </button>
                </div>
            </form>
        </Modal>
    );
};
