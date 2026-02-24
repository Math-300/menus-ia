'use client';

import React, { useState, useEffect } from 'react';
import { X, Upload, Loader2, Plus, Trash2 } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import type { Dish, DishFormData } from '@/hooks/useDishes';
import type { Category } from '@/hooks/useCategories';

interface DishFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: DishFormData) => Promise<boolean>;
    dish?: Dish | null;
    categories: Category[];
    loading?: boolean;
}

const DIETARY_OPTIONS = [
    { value: 'vegetarian', label: 'Vegetariano' },
    { value: 'vegan', label: 'Vegano' },
    { value: 'gluten-free', label: 'Sin Gluten' },
    { value: 'dairy-free', label: 'Sin Lácteos' },
    { value: 'spicy', label: 'Picante' },
    { value: 'nut-free', label: 'Sin Nueces' },
];

export const DishForm: React.FC<DishFormProps> = ({
    isOpen,
    onClose,
    onSubmit,
    dish,
    categories,
    loading = false,
}) => {
    const [formData, setFormData] = useState<DishFormData>({
        name: '',
        description: '',
        price: 0,
        image_url: null,
        category_id: null,
        available: true,
        dietary: [],
        is_popular: false,
        is_chef_choice: false,
        is_new: false,
    });
    const [uploading, setUploading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Populate form when editing
    useEffect(() => {
        if (dish) {
            setFormData({
                name: dish.name,
                description: dish.description,
                price: dish.price,
                image_url: dish.image_url,
                category_id: dish.category_id,
                available: dish.available,
                dietary: dish.dietary || [],
                is_popular: dish.is_popular,
                is_chef_choice: dish.is_chef_choice,
                is_new: dish.is_new,
            });
        } else {
            setFormData({
                name: '',
                description: '',
                price: 0,
                image_url: null,
                category_id: null,
                available: true,
                dietary: [],
                is_popular: false,
                is_chef_choice: false,
                is_new: false,
            });
        }
        setErrors({});
    }, [dish, isOpen]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const uploadFormData = new FormData();
            uploadFormData.append('file', file);
            uploadFormData.append('folder', 'menuos/dishes');

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

    const handleDietaryToggle = (value: string) => {
        setFormData(prev => ({
            ...prev,
            dietary: prev.dietary?.includes(value)
                ? prev.dietary.filter(d => d !== value)
                : [...(prev.dietary || []), value],
        }));
    };

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }
        if (formData.price <= 0) {
            newErrors.price = 'El precio debe ser mayor a 0';
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

    const formatPrice = (value: number) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={dish ? 'Editar Plato' : 'Nuevo Plato'}>
            <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Image */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Imagen del Plato
                    </label>
                    <div className="flex items-start gap-4">
                        {formData.image_url ? (
                            <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-white/10">
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
                            <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-brand-primary/50 transition-colors">
                                {uploading ? (
                                    <Loader2 size={32} className="text-gray-400 animate-spin" />
                                ) : (
                                    <>
                                        <Upload size={32} className="text-gray-400" />
                                        <span className="text-xs text-gray-500 mt-2">Subir imagen</span>
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
                                Sube una imagen atractiva del plato
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                Recomendado: 800x600px. Formatos: JPG, PNG, WebP
                            </p>
                        </div>
                    </div>
                </div>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre del Plato *
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, name: e.target.value }));
                            if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                        }}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'
                            }`}
                        placeholder="Ej: Hamburguesa Clásica"
                    />
                    {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Descripción
                    </label>
                    <textarea
                        value={formData.description || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors resize-none"
                        rows={3}
                        placeholder="Describe los ingredientes y sabores del plato..."
                    />
                </div>

                {/* Price and Category */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Precio (COP) *
                        </label>
                        <input
                            type="number"
                            value={formData.price}
                            onChange={(e) => {
                                setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }));
                                if (errors.price) setErrors(prev => ({ ...prev, price: '' }));
                            }}
                            className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors ${errors.price ? 'border-red-500' : 'border-white/10'
                                }`}
                            min="0"
                            step="100"
                            placeholder="25000"
                        />
                        {errors.price && (
                            <p className="text-red-400 text-xs mt-1">{errors.price}</p>
                        )}
                        {formData.price > 0 && (
                            <p className="text-brand-primary text-xs mt-1">
                                {formatPrice(formData.price)}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Categoría
                        </label>
                        <select
                            value={formData.category_id || ''}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                category_id: e.target.value || null
                            }))}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors"
                        >
                            <option value="">Sin categoría</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Dietary Tags */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Etiquetas Dietéticas
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {DIETARY_OPTIONS.map(option => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => handleDietaryToggle(option.value)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${formData.dietary?.includes(option.value)
                                        ? 'bg-brand-primary text-white'
                                        : 'bg-white/10 text-gray-400 hover:bg-white/20'
                                    }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Badges */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Etiquetas Especiales
                    </label>
                    <div className="flex flex-wrap gap-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.is_popular}
                                onChange={(e) => setFormData(prev => ({ ...prev, is_popular: e.target.checked }))}
                                className="w-4 h-4 rounded border-white/20 bg-white/5 text-brand-primary focus:ring-brand-primary/50"
                            />
                            <span className="text-sm text-gray-300">🔥 Popular</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.is_chef_choice}
                                onChange={(e) => setFormData(prev => ({ ...prev, is_chef_choice: e.target.checked }))}
                                className="w-4 h-4 rounded border-white/20 bg-white/5 text-brand-primary focus:ring-brand-primary/50"
                            />
                            <span className="text-sm text-gray-300">👨‍🍳 Recomendado</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.is_new}
                                onChange={(e) => setFormData(prev => ({ ...prev, is_new: e.target.checked }))}
                                className="w-4 h-4 rounded border-white/20 bg-white/5 text-brand-primary focus:ring-brand-primary/50"
                            />
                            <span className="text-sm text-gray-300">✨ Nuevo</span>
                        </label>
                    </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, available: !prev.available }))}
                        className={`relative w-12 h-6 rounded-full transition-colors ${formData.available ? 'bg-green-500' : 'bg-white/20'
                            }`}
                    >
                        <span
                            className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${formData.available ? 'left-7' : 'left-1'
                                }`}
                        />
                    </button>
                    <span className="text-sm text-gray-300">
                        {formData.available ? '✅ Disponible' : '❌ No disponible'}
                    </span>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-white/10 sticky bottom-0 bg-gray-900/90 backdrop-blur-sm -mx-6 px-6 pb-6">
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
                            dish ? 'Guardar Cambios' : 'Crear Plato'
                        )}
                    </button>
                </div>
            </form>
        </Modal>
    );
};