'use client';

import React, { useState, useEffect } from 'react';
import { X, Upload, Loader2, Image as ImageIcon } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import type { Category, CategoryFormData } from '@/hooks/useCategories';

interface CategoryFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: CategoryFormData) => Promise<boolean>;
    category?: Category | null;
    loading?: boolean;
}

export const CategoryForm: React.FC<CategoryFormProps> = ({
    isOpen,
    onClose,
    onSubmit,
    category,
    loading = false,
}) => {
    const [formData, setFormData] = useState<CategoryFormData>({
        name: '',
        slug: '',
        image_url: null,
        display_order: 0,
        is_active: true,
    });
    const [uploading, setUploading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Populate form when editing
    useEffect(() => {
        if (category) {
            setFormData({
                name: category.name,
                slug: category.slug,
                image_url: category.image_url,
                display_order: category.display_order,
                is_active: category.is_active,
            });
        } else {
            setFormData({
                name: '',
                slug: '',
                image_url: null,
                display_order: 0,
                is_active: true,
            });
        }
        setErrors({});
    }, [category, isOpen]);

    // Auto-generate slug from name
    const generateSlug = (name: string) => {
        return name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove accents
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        setFormData(prev => ({
            ...prev,
            name,
            slug: generateSlug(name),
        }));
        if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const uploadFormData = new FormData();
            uploadFormData.append('file', file);
            uploadFormData.append('folder', 'menuos/categories');

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: uploadFormData,
            });

            if (!response.ok) {
                throw new Error('Error al subir imagen');
            }

            const data = await response.json();
            setFormData(prev => ({
                ...prev,
                image_url: data.data.secure_url,
            }));
        } catch (error) {
            console.error('Upload error:', error);
            alert('Error al subir la imagen');
        } finally {
            setUploading(false);
        }
    };

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }
        if (!formData.slug.trim()) {
            newErrors.slug = 'El slug es requerido';
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

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={category ? 'Editar Categoría' : 'Nueva Categoría'}>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre *
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={handleNameChange}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'
                            }`}
                        placeholder="Ej: Entradas, Platos Principales..."
                    />
                    {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                </div>

                {/* Slug */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Slug (URL) *
                    </label>
                    <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, slug: e.target.value }));
                            if (errors.slug) setErrors(prev => ({ ...prev, slug: '' }));
                        }}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors ${errors.slug ? 'border-red-500' : 'border-white/10'
                            }`}
                        placeholder="entradas"
                    />
                    {errors.slug && (
                        <p className="text-red-400 text-xs mt-1">{errors.slug}</p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">
                        Se genera automáticamente desde el nombre
                    </p>
                </div>

                {/* Image */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Imagen
                    </label>
                    <div className="flex items-center gap-4">
                        {formData.image_url ? (
                            <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-white/10">
                                <img
                                    src={formData.image_url}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, image_url: null }))}
                                    className="absolute top-1 right-1 p-1 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                                >
                                    <X size={12} className="text-white" />
                                </button>
                            </div>
                        ) : (
                            <label className="flex flex-col items-center justify-center w-24 h-24 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-brand-primary/50 transition-colors">
                                {uploading ? (
                                    <Loader2 size={24} className="text-gray-400 animate-spin" />
                                ) : (
                                    <>
                                        <Upload size={24} className="text-gray-400" />
                                        <span className="text-xs text-gray-500 mt-1">Subir</span>
                                    </>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    disabled={uploading}
                                />
                            </label>
                        )}
                        <div className="flex-1">
                            <p className="text-gray-400 text-sm">
                                Sube una imagen para la categoría (opcional)
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                Formatos: JPG, PNG, WebP. Max 5MB
                            </p>
                        </div>
                    </div>
                </div>

                {/* Display Order */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Orden de visualización
                    </label>
                    <input
                        type="number"
                        value={formData.display_order}
                        onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors"
                        min="0"
                        placeholder="0"
                    />
                    <p className="text-gray-500 text-xs mt-1">
                        Las categorías se ordenan de menor a mayor
                    </p>
                </div>

                {/* Is Active */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, is_active: !prev.is_active }))}
                        className={`relative w-12 h-6 rounded-full transition-colors ${formData.is_active ? 'bg-brand-primary' : 'bg-white/20'
                            }`}
                    >
                        <span
                            className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${formData.is_active ? 'left-7' : 'left-1'
                                }`}
                        />
                    </button>
                    <span className="text-sm text-gray-300">
                        {formData.is_active ? 'Activa' : 'Inactiva'}
                    </span>
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
                                <Loader2 size={18} className="animate-spin" />
                                Guardando...
                            </>
                        ) : (
                            category ? 'Guardar Cambios' : 'Crear Categoría'
                        )}
                    </button>
                </div>
            </form>
        </Modal>
    );
};