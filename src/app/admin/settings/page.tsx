'use client';

import React, { useState } from 'react';

export default function SettingsPage() {
    const [saving, setSaving] = useState(false);

    const handleSave = async () => {
        setSaving(true);
        // Simular guardado
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSaving(false);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Configuración</h1>
                    <p className="text-gray-400 mt-1">Ajustes del sistema y del negocio</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-4 py-2 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-lg transition-colors text-sm font-medium disabled:opacity-50"
                >
                    {saving ? 'Guardando...' : 'Guardar Cambios'}
                </button>
            </div>

            {/* Settings Sections */}
            <div className="grid gap-6">
                {/* Business Info */}
                <section className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h2 className="text-lg font-semibold text-white mb-4">Información del Negocio</h2>
                    <div className="grid gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Nombre del Restaurante
                            </label>
                            <input
                                type="text"
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                                placeholder="Mi Restaurante"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">
                                    Dirección
                                </label>
                                <input
                                    type="text"
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
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                                    placeholder="+57 300 123 4567"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Horarios
                            </label>
                            <input
                                type="text"
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                                placeholder="Lun-Dom: 12:00 - 22:00"
                            />
                        </div>
                    </div>
                </section>

                {/* WhatsApp Integration */}
                <section className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h2 className="text-lg font-semibold text-white mb-4">Integración WhatsApp</h2>
                    <div className="grid gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Número de WhatsApp
                            </label>
                            <input
                                type="tel"
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                                placeholder="+57 300 123 4567"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Número al que se enviarán los pedidos
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="whatsapp-orders"
                                className="w-4 h-4 rounded border-white/20 bg-white/10 text-brand-primary focus:ring-brand-primary"
                            />
                            <label htmlFor="whatsapp-orders" className="text-sm text-gray-300">
                                Enviar pedidos automáticamente por WhatsApp
                            </label>
                        </div>
                    </div>
                </section>

                {/* Payment Settings */}
                <section className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h2 className="text-lg font-semibold text-white mb-4">Pagos</h2>
                    <div className="grid gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">
                                Moneda
                            </label>
                            <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-primary">
                                <option value="COP">Peso Colombiano (COP)</option>
                                <option value="USD">Dólar Estadounidense (USD)</option>
                                <option value="EUR">Euro (EUR)</option>
                                <option value="MXN">Peso Mexicano (MXN)</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="accept-online"
                                className="w-4 h-4 rounded border-white/20 bg-white/10 text-brand-primary focus:ring-brand-primary"
                            />
                            <label htmlFor="accept-online" className="text-sm text-gray-300">
                                Aceptar pagos en línea (Wompi)
                            </label>
                        </div>
                    </div>
                </section>

                {/* Danger Zone */}
                <section className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                    <h2 className="text-lg font-semibold text-red-400 mb-4">Zona de Peligro</h2>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <p className="text-sm text-gray-300">Eliminar cuenta y todos los datos</p>
                            <p className="text-xs text-gray-500 mt-1">Esta acción no se puede deshacer</p>
                        </div>
                        <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 rounded-lg transition-colors text-sm font-medium">
                            Eliminar Cuenta
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
