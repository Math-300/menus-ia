'use client';

import React, { useState, useEffect } from 'react';
import {
    Upload,
    Loader2,
    Save,
    X,
    AlertCircle,
    Check,
    Image as ImageIcon,
    Palette,
    Type,
    Globe
} from 'lucide-react';
import { useTenant, type TenantFormData } from '@/hooks/useTenant';

const COLOR_PRESETS = [
    { name: 'Rojo', color: '#F94144' },
    { name: 'Naranja', color: '#F3722C' },
    { name: 'Amarillo', color: '#F9C74F' },
    { name: 'Verde', color: '#90BE6D' },
    { name: 'Turquesa', color: '#43AA8B' },
    { name: 'Azul', color: '#577590' },
    { name: 'Morado', color: '#9B5DE5' },
    { name: 'Rosa', color: '#F15BB5' },
];

const FONT_OPTIONS = [
    { value: 'Inter', label: 'Inter (Moderno)' },
    { value: 'Poppins', label: 'Poppins (Amigable)' },
    { value: 'Playfair Display', label: 'Playfair Display (Elegante)' },
    { value: 'Montserrat', label: 'Montserrat (Profesional)' },
    { value: 'Roboto', label: 'Roboto (Clásico)' },
    { value: 'Open Sans', label: 'Open Sans (Limpio)' },
];

const CURRENCY_OPTIONS = [
    { value: 'COP', label: 'Peso Colombiano (COP)' },
    { value: 'USD', label: 'Dólar Estadounidense (USD)' },
    { value: 'EUR', label: 'Euro (EUR)' },
    { value: 'MXN', label: 'Peso Mexicano (MXN)' },
    { value: 'ARS', label: 'Peso Argentino (ARS)' },
    { value: 'PEN', label: 'Sol Peruano (PEN)' },
];

export default function BrandingPage() {
    const { tenant, loading, error, updateTenant } = useTenant();

    // Form state
    const [formData, setFormData] = useState<TenantFormData>({});
    const [uploadingLogo, setUploadingLogo] = useState(false);
    const [uploadingCover, setUploadingCover] = useState(false);
    const [saving, setSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    // Initialize form when tenant loads
    useEffect(() => {
        if (tenant) {
            setFormData({
                name: tenant.name,
                slug: tenant.slug,
                logo_url: tenant.logo_url,
                cover_url: tenant.cover_url,
                primary_color: tenant.primary_color || '#F94144',
                secondary_color: tenant.secondary_color,
                font_family: tenant.font_family || 'Inter',
                currency: tenant.currency || 'COP',
                locale: tenant.locale || 'es',
                tagline: tenant.tagline,
                description: tenant.description,
                address: tenant.address,
                phone: tenant.phone,
                whatsapp: tenant.whatsapp,
                social_links: tenant.social_links,
                settings: tenant.settings,
            });
        }
    }, [tenant]);

    // Handle image upload
    const handleImageUpload = async (
        e: React.ChangeEvent<HTMLInputElement>,
        type: 'logo' | 'cover'
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const setUploading = type === 'logo' ? setUploadingLogo : setUploadingCover;
        const fieldName = type === 'logo' ? 'logo_url' : 'cover_url';
        const folder = type === 'logo' ? 'menuos/logos' : 'menuos/covers';

        setUploading(true);
        try {
            const uploadFormData = new FormData();
            uploadFormData.append('file', file);
            uploadFormData.append('folder', folder);

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
                [fieldName]: data.data.secure_url,
            }));
        } catch (error) {
            console.error('Upload error:', error);
            alert('Error al subir la imagen');
        } finally {
            setUploading(false);
        }
    };

    // Handle form save
    const handleSave = async () => {
        setSaving(true);
        setFormError(null);
        setSaveSuccess(false);

        try {
            const result = await updateTenant(formData);
            if (result) {
                setSaveSuccess(true);
                setTimeout(() => setSaveSuccess(false), 3000);
            } else {
                setFormError('Error al guardar los cambios');
            }
        } catch (err) {
            setFormError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setSaving(false);
        }
    };

    // Update form field
    const updateField = <K extends keyof TenantFormData>(field: K, value: TenantFormData[K]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setSaveSuccess(false);
    };

    // Get primary color with fallback
    const primaryColor = formData.primary_color || '#F94144';

    if (loading && !tenant) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 size={32} className="text-gray-400 animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Branding</h1>
                    <p className="text-gray-400 mt-1">Personaliza la apariencia de tu menú</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving || uploadingLogo || uploadingCover}
                    className="px-4 py-2 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-lg transition-colors text-sm font-medium disabled:opacity-50 flex items-center gap-2"
                >
                    {saving ? (
                        <>
                            <Loader2 size={16} className="animate-spin" />
                            Guardando...
                        </>
                    ) : saveSuccess ? (
                        <>
                            <Check size={16} />
                            Guardado
                        </>
                    ) : (
                        <>
                            <Save size={16} />
                            Guardar Cambios
                        </>
                    )}
                </button>
            </div>

            {/* Error Messages */}
            {(error || formError) && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3">
                    <AlertCircle className="text-red-400" size={20} />
                    <p className="text-red-400 text-sm">{formError || error}</p>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Logo Section */}
                <section className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <ImageIcon size={18} className="text-gray-400" />
                        <h2 className="text-lg font-semibold text-white">Logo</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-24 h-24 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center overflow-hidden">
                                {formData.logo_url ? (
                                    <img
                                        src={formData.logo_url}
                                        alt="Logo"
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <span className="text-gray-500 text-xs">Sin logo</span>
                                )}
                            </div>
                            <div className="flex-1">
                                <label className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-medium cursor-pointer">
                                    {uploadingLogo ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            Subiendo...
                                        </>
                                    ) : (
                                        <>
                                            <Upload size={16} />
                                            Subir Logo
                                        </>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(e, 'logo')}
                                        className="hidden"
                                        disabled={uploadingLogo}
                                    />
                                </label>
                                {formData.logo_url && (
                                    <button
                                        onClick={() => updateField('logo_url', null)}
                                        className="ml-2 px-3 py-2 text-red-400 hover:text-red-300 text-sm"
                                    >
                                        Eliminar
                                    </button>
                                )}
                                <p className="text-xs text-gray-500 mt-2">
                                    PNG, JPG o SVG. Máximo 2MB. Recomendado: 200x200px
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cover Image */}
                <section className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <ImageIcon size={18} className="text-gray-400" />
                        <h2 className="text-lg font-semibold text-white">Imagen de Portada</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="w-full h-32 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center overflow-hidden">
                            {formData.cover_url ? (
                                <img
                                    src={formData.cover_url}
                                    alt="Cover"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-gray-500 text-xs">Sin imagen de portada</span>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-medium cursor-pointer">
                                {uploadingCover ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Subiendo...
                                    </>
                                ) : (
                                    <>
                                        <Upload size={16} />
                                        Subir Portada
                                    </>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, 'cover')}
                                    className="hidden"
                                    disabled={uploadingCover}
                                />
                            </label>
                            {formData.cover_url && (
                                <button
                                    onClick={() => updateField('cover_url', null)}
                                    className="px-3 py-2 text-red-400 hover:text-red-300 text-sm"
                                >
                                    Eliminar
                                </button>
                            )}
                        </div>
                        <p className="text-xs text-gray-500">
                            PNG o JPG. Máximo 5MB. Recomendado: 1200x400px
                        </p>
                    </div>
                </section>

                {/* Colors */}
                <section className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Palette size={18} className="text-gray-400" />
                        <h2 className="text-lg font-semibold text-white">Colores</h2>
                    </div>
                    <div className="space-y-6">
                        {/* Primary Color */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Color Principal
                            </label>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {COLOR_PRESETS.map((preset) => (
                                    <button
                                        key={preset.color}
                                        onClick={() => updateField('primary_color', preset.color)}
                                        className={`w-8 h-8 rounded-lg border-2 transition-transform hover:scale-110 ${primaryColor === preset.color
                                                ? 'border-white scale-110'
                                                : 'border-transparent'
                                            }`}
                                        style={{ backgroundColor: preset.color }}
                                        title={preset.name}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="color"
                                    value={primaryColor}
                                    onChange={(e) => updateField('primary_color', e.target.value)}
                                    className="w-10 h-10 rounded-lg border border-white/20 cursor-pointer"
                                />
                                <input
                                    type="text"
                                    value={primaryColor}
                                    onChange={(e) => updateField('primary_color', e.target.value)}
                                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-primary"
                                />
                            </div>
                        </div>

                        {/* Secondary Color */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Color Secundario (Opcional)
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="color"
                                    value={formData.secondary_color || '#ffffff'}
                                    onChange={(e) => updateField('secondary_color', e.target.value)}
                                    className="w-10 h-10 rounded-lg border border-white/20 cursor-pointer"
                                />
                                <input
                                    type="text"
                                    value={formData.secondary_color || ''}
                                    onChange={(e) => updateField('secondary_color', e.target.value || null)}
                                    placeholder="#ffffff"
                                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-primary"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Type size={18} className="text-gray-400" />
                        <h2 className="text-lg font-semibold text-white">Tipografía</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Fuente Principal
                            </label>
                            <select
                                value={formData.font_family || 'Inter'}
                                onChange={(e) => updateField('font_family', e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-primary"
                            >
                                {FONT_OPTIONS.map((font) => (
                                    <option key={font.value} value={font.value}>
                                        {font.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Moneda
                            </label>
                            <select
                                value={formData.currency || 'COP'}
                                onChange={(e) => updateField('currency', e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-primary"
                            >
                                {CURRENCY_OPTIONS.map((currency) => (
                                    <option key={currency.value} value={currency.value}>
                                        {currency.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </section>

                {/* Restaurant Info */}
                <section className="bg-white/5 border border-white/10 rounded-xl p-6 lg:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <Globe size={18} className="text-gray-400" />
                        <h2 className="text-lg font-semibold text-white">Información del Restaurante</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Nombre del Restaurante
                            </label>
                            <input
                                type="text"
                                value={formData.name || ''}
                                onChange={(e) => updateField('name', e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                                placeholder="Mi Restaurante"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Slug (URL)
                            </label>
                            <input
                                type="text"
                                value={formData.slug || ''}
                                onChange={(e) => updateField('slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                                placeholder="mi-restaurante"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Eslogan / Tagline
                            </label>
                            <input
                                type="text"
                                value={formData.tagline || ''}
                                onChange={(e) => updateField('tagline', e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                                placeholder="La mejor comida de la ciudad"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Descripción Corta
                            </label>
                            <input
                                type="text"
                                value={formData.description || ''}
                                onChange={(e) => updateField('description', e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                                placeholder="Restaurante de comida tradicional"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Dirección
                            </label>
                            <input
                                type="text"
                                value={formData.address || ''}
                                onChange={(e) => updateField('address', e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                                placeholder="Calle 123 #45-67"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Teléfono
                            </label>
                            <input
                                type="tel"
                                value={formData.phone || ''}
                                onChange={(e) => updateField('phone', e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                                placeholder="+57 123 456 7890"
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Preview */}
            <section className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Vista Previa</h2>
                <div
                    className="rounded-xl p-6 border"
                    style={{
                        backgroundColor: `${primaryColor}10`,
                        borderColor: `${primaryColor}30`,
                    }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
                            style={{ backgroundColor: formData.logo_url ? 'transparent' : primaryColor }}
                        >
                            {formData.logo_url ? (
                                <img src={formData.logo_url} alt="Logo" className="w-full h-full object-contain" />
                            ) : (
                                <span className="font-bold text-white">
                                    {(formData.name || 'M')[0].toUpperCase()}
                                </span>
                            )}
                        </div>
                        <div>
                            <h3
                                className="font-bold text-white"
                                style={{ fontFamily: formData.font_family || 'Inter' }}
                            >
                                {formData.name || 'Mi Restaurante'}
                            </h3>
                            <p className="text-sm text-gray-400">
                                {formData.tagline || 'La mejor comida de la ciudad'}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            className="px-4 py-2 text-white rounded-lg text-sm font-medium"
                            style={{ backgroundColor: primaryColor }}
                        >
                            Ver Menú
                        </button>
                        <button
                            className="px-4 py-2 text-white rounded-lg text-sm font-medium border"
                            style={{ borderColor: `${primaryColor}50` }}
                        >
                            Hacer Pedido
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
