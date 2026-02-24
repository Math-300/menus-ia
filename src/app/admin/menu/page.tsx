'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Loader2, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { useCategories, type Category, type CategoryFormData } from '@/hooks/useCategories';
import { useDishes, type Dish, type DishFormData } from '@/hooks/useDishes';
import { CategoryForm } from '@/components/admin/CategoryForm';
import { DishForm } from '@/components/admin/DishForm';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { Toast } from '@/components/ui/Toast';

type TabType = 'categories' | 'dishes';

export default function MenuManagementPage() {
    const [activeTab, setActiveTab] = useState<TabType>('categories');

    // Categories
    const {
        categories,
        loading: loadingCategories,
        error: errorCategories,
        createCategory,
        updateCategory,
        deleteCategory,
        fetchCategories,
    } = useCategories();

    // Dishes
    const {
        dishes,
        loading: loadingDishes,
        error: errorDishes,
        createDish,
        updateDish,
        deleteDish,
        fetchDishes,
    } = useDishes();

    // Modal states
    const [showCategoryForm, setShowCategoryForm] = useState(false);
    const [showDishForm, setShowDishForm] = useState(false);
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);

    // Selected items for edit/delete
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
    const [itemToDelete, setItemToDelete] = useState<{ type: TabType; id: string; name: string } | null>(null);

    // Toast
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    // Loading states for actions
    const [actionLoading, setActionLoading] = useState(false);

    const showSuccessToast = (message: string) => {
        setToastMessage(message);
        setShowToast(true);
    };

    // Category handlers
    const handleCreateCategory = () => {
        setSelectedCategory(null);
        setShowCategoryForm(true);
    };

    const handleEditCategory = (category: Category) => {
        setSelectedCategory(category);
        setShowCategoryForm(true);
    };

    const handleDeleteCategory = (category: Category) => {
        setItemToDelete({ type: 'categories', id: category.id, name: category.name });
        setShowConfirmDelete(true);
    };

    const handleCategorySubmit = async (data: CategoryFormData): Promise<boolean> => {
        setActionLoading(true);
        let result;
        if (selectedCategory) {
            result = await updateCategory(selectedCategory.id, data);
            if (result) showSuccessToast('Categoría actualizada correctamente');
        } else {
            result = await createCategory(data);
            if (result) showSuccessToast('Categoría creada correctamente');
        }
        setActionLoading(false);
        return result !== null;
    };

    // Dish handlers
    const handleCreateDish = () => {
        setSelectedDish(null);
        setShowDishForm(true);
    };

    const handleEditDish = (dish: Dish) => {
        setSelectedDish(dish);
        setShowDishForm(true);
    };

    const handleDeleteDish = (dish: Dish) => {
        setItemToDelete({ type: 'dishes', id: dish.id, name: dish.name });
        setShowConfirmDelete(true);
    };

    const handleDishSubmit = async (data: DishFormData): Promise<boolean> => {
        setActionLoading(true);
        let result;
        if (selectedDish) {
            result = await updateDish(selectedDish.id, data);
            if (result) showSuccessToast('Plato actualizado correctamente');
        } else {
            result = await createDish(data);
            if (result) showSuccessToast('Plato creado correctamente');
        }
        setActionLoading(false);
        return result !== null;
    };

    // Confirm delete
    const handleConfirmDelete = async () => {
        if (!itemToDelete) return;

        setActionLoading(true);
        let success = false;

        if (itemToDelete.type === 'categories') {
            success = await deleteCategory(itemToDelete.id);
            if (success) showSuccessToast('Categoría eliminada correctamente');
        } else {
            success = await deleteDish(itemToDelete.id);
            if (success) showSuccessToast('Plato eliminado correctamente');
        }

        setActionLoading(false);
        if (success) {
            setShowConfirmDelete(false);
            setItemToDelete(null);
        }
    };

    // Format price
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Gestión de Menú</h1>
                    <p className="text-gray-400 mt-1">Administra categorías y platos de tu menú</p>
                </div>
                <div className="flex gap-2">
                    {activeTab === 'categories' ? (
                        <button
                            onClick={handleCreateCategory}
                            className="px-4 py-2 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
                        >
                            <Plus size={18} />
                            Nueva Categoría
                        </button>
                    ) : (
                        <button
                            onClick={handleCreateDish}
                            className="px-4 py-2 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
                        >
                            <Plus size={18} />
                            Nuevo Plato
                        </button>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-white/10 pb-2">
                <button
                    onClick={() => setActiveTab('categories')}
                    className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${activeTab === 'categories'
                            ? 'bg-brand-primary/20 text-brand-primary border-b-2 border-brand-primary'
                            : 'text-gray-400 hover:text-white'
                        }`}
                >
                    Categorías ({categories.length})
                </button>
                <button
                    onClick={() => setActiveTab('dishes')}
                    className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${activeTab === 'dishes'
                            ? 'bg-brand-primary/20 text-brand-primary border-b-2 border-brand-primary'
                            : 'text-gray-400 hover:text-white'
                        }`}
                >
                    Platos ({dishes.length})
                </button>
            </div>

            {/* Error Messages */}
            {(errorCategories || errorDishes) && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3">
                    <AlertCircle className="text-red-400" size={20} />
                    <p className="text-red-400 text-sm">{errorCategories || errorDishes}</p>
                </div>
            )}

            {/* Content */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {activeTab === 'categories' ? (
                    // Categories Table
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Orden
                                    </th>
                                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Imagen
                                    </th>
                                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Nombre
                                    </th>
                                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Slug
                                    </th>
                                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Estado
                                    </th>
                                    <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {loadingCategories ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center">
                                            <Loader2 className="animate-spin mx-auto text-brand-primary" size={24} />
                                            <p className="text-gray-400 text-sm mt-2">Cargando categorías...</p>
                                        </td>
                                    </tr>
                                ) : categories.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center">
                                            <p className="text-gray-400">No hay categorías creadas</p>
                                            <button
                                                onClick={handleCreateCategory}
                                                className="mt-4 px-4 py-2 bg-brand-primary/20 hover:bg-brand-primary/30 text-brand-primary rounded-lg transition-colors text-sm"
                                            >
                                                Crear primera categoría
                                            </button>
                                        </td>
                                    </tr>
                                ) : (
                                    categories.map((category) => (
                                        <tr key={category.id} className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4">
                                                <span className="text-gray-300 text-sm">{category.display_order}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {category.image_url ? (
                                                    <img
                                                        src={category.image_url}
                                                        alt={category.name}
                                                        className="w-10 h-10 rounded-lg object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                                        <ImageIcon size={16} className="text-gray-500" />
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-white font-medium">{category.name}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-gray-400 text-sm font-mono">{category.slug}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${category.is_active
                                                            ? 'bg-green-500/20 text-green-400'
                                                            : 'bg-red-500/20 text-red-400'
                                                        }`}
                                                >
                                                    {category.is_active ? 'Activa' : 'Inactiva'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => handleEditCategory(category)}
                                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                                                        title="Editar"
                                                    >
                                                        <Edit2 size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteCategory(category)}
                                                        className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-gray-400 hover:text-red-400"
                                                        title="Eliminar"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    // Dishes Table
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Imagen
                                    </th>
                                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Nombre
                                    </th>
                                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Categoría
                                    </th>
                                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Precio
                                    </th>
                                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Estado
                                    </th>
                                    <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Etiquetas
                                    </th>
                                    <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {loadingDishes ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center">
                                            <Loader2 className="animate-spin mx-auto text-brand-primary" size={24} />
                                            <p className="text-gray-400 text-sm mt-2">Cargando platos...</p>
                                        </td>
                                    </tr>
                                ) : dishes.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center">
                                            <p className="text-gray-400">No hay platos creados</p>
                                            <button
                                                onClick={handleCreateDish}
                                                className="mt-4 px-4 py-2 bg-brand-primary/20 hover:bg-brand-primary/30 text-brand-primary rounded-lg transition-colors text-sm"
                                            >
                                                Crear primer plato
                                            </button>
                                        </td>
                                    </tr>
                                ) : (
                                    dishes.map((dish) => (
                                        <tr key={dish.id} className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4">
                                                {dish.image_url ? (
                                                    <img
                                                        src={dish.image_url}
                                                        alt={dish.name}
                                                        className="w-12 h-12 rounded-lg object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                                                        <ImageIcon size={20} className="text-gray-500" />
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <span className="text-white font-medium">{dish.name}</span>
                                                    {dish.description && (
                                                        <p className="text-gray-500 text-xs mt-0.5 line-clamp-1">
                                                            {dish.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-gray-300 text-sm">
                                                    {dish.categories?.name || 'Sin categoría'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-brand-primary font-medium">
                                                    {formatPrice(dish.price)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${dish.available
                                                            ? 'bg-green-500/20 text-green-400'
                                                            : 'bg-red-500/20 text-red-400'
                                                        }`}
                                                >
                                                    {dish.available ? 'Disponible' : 'No disponible'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-wrap gap-1">
                                                    {dish.is_popular && (
                                                        <span className="text-xs">🔥</span>
                                                    )}
                                                    {dish.is_chef_choice && (
                                                        <span className="text-xs">👨‍🍳</span>
                                                    )}
                                                    {dish.is_new && (
                                                        <span className="text-xs">✨</span>
                                                    )}
                                                    {dish.dietary?.map(d => (
                                                        <span key={d} className="text-xs">
                                                            {d === 'vegetarian' && '🥬'}
                                                            {d === 'vegan' && '🌱'}
                                                            {d === 'gluten-free' && '🌾'}
                                                            {d === 'spicy' && '🌶️'}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => handleEditDish(dish)}
                                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                                                        title="Editar"
                                                    >
                                                        <Edit2 size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteDish(dish)}
                                                        className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-gray-400 hover:text-red-400"
                                                        title="Eliminar"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Category Form Modal */}
            <CategoryForm
                isOpen={showCategoryForm}
                onClose={() => {
                    setShowCategoryForm(false);
                    setSelectedCategory(null);
                }}
                onSubmit={handleCategorySubmit}
                category={selectedCategory}
                loading={actionLoading}
            />

            {/* Dish Form Modal */}
            <DishForm
                isOpen={showDishForm}
                onClose={() => {
                    setShowDishForm(false);
                    setSelectedDish(null);
                }}
                onSubmit={handleDishSubmit}
                dish={selectedDish}
                categories={categories}
                loading={actionLoading}
            />

            {/* Confirm Delete Dialog */}
            <ConfirmDialog
                isOpen={showConfirmDelete}
                onClose={() => {
                    setShowConfirmDelete(false);
                    setItemToDelete(null);
                }}
                onConfirm={handleConfirmDelete}
                title="Confirmar eliminación"
                message={`¿Estás seguro de que deseas eliminar "${itemToDelete?.name}"? Esta acción no se puede deshacer.`}
                confirmText="Eliminar"
                variant="danger"
                loading={actionLoading}
            />

            {/* Toast */}
            <Toast
                message={toastMessage}
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </div>
    );
}
