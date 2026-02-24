'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight, Edit, Trash2, Eye, MoreVertical } from 'lucide-react';

export interface Column<T> {
    key: keyof T | string;
    header: string;
    render?: (item: T) => React.ReactNode;
    sortable?: boolean;
    className?: string;
}

export interface Action<T> {
    label: string;
    icon?: React.ReactNode;
    onClick: (item: T) => void;
    variant?: 'default' | 'danger' | 'success';
    show?: (item: T) => boolean;
}

interface DataTableProps<T extends Record<string, unknown>> {
    data: T[];
    columns: Column<T>[];
    actions?: Action<T>[];
    searchable?: boolean;
    searchPlaceholder?: string;
    searchKeys?: (keyof T)[];
    pageSize?: number;
    loading?: boolean;
    emptyMessage?: string;
    onRowClick?: (item: T) => void;
    getItemId: (item: T) => string;
}

export function DataTable<T extends Record<string, unknown>>({
    data,
    columns,
    actions,
    searchable = true,
    searchPlaceholder = 'Buscar...',
    searchKeys,
    pageSize = 10,
    loading = false,
    emptyMessage = 'No hay datos disponibles',
    onRowClick,
    getItemId,
}: DataTableProps<T>) {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortKey, setSortKey] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [openActionMenu, setOpenActionMenu] = useState<string | null>(null);

    // Filter data based on search
    const filteredData = useMemo(() => {
        if (!search || !searchKeys) return data;

        const searchLower = search.toLowerCase();
        return data.filter(item =>
            searchKeys.some(key => {
                const value = item[key];
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(searchLower);
                }
                if (typeof value === 'number') {
                    return value.toString().includes(searchLower);
                }
                return false;
            })
        );
    }, [data, search, searchKeys]);

    // Sort data
    const sortedData = useMemo(() => {
        if (!sortKey) return filteredData;

        return [...filteredData].sort((a, b) => {
            const aValue = a[sortKey as keyof T];
            const bValue = b[sortKey as keyof T];

            if (aValue === bValue) return 0;
            if (aValue === null || aValue === undefined) return 1;
            if (bValue === null || bValue === undefined) return -1;

            const comparison = aValue < bValue ? -1 : 1;
            return sortDirection === 'asc' ? comparison : -comparison;
        });
    }, [filteredData, sortKey, sortDirection]);

    // Paginate data
    const totalPages = Math.ceil(sortedData.length / pageSize);
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return sortedData.slice(start, start + pageSize);
    }, [sortedData, currentPage, pageSize]);

    const handleSort = (key: string) => {
        if (sortKey === key) {
            setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortDirection('asc');
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setOpenActionMenu(null);
    };

    const getCellValue = (item: T, key: keyof T | string): React.ReactNode => {
        if (typeof key === 'string' && key.includes('.')) {
            const keys = key.split('.');
            let value: unknown = item;
            for (const k of keys) {
                value = (value as Record<string, unknown>)?.[k];
            }
            return value as React.ReactNode;
        }
        return item[key as keyof T] as React.ReactNode;
    };

    return (
        <div className="space-y-4">
            {/* Search Bar */}
            {searchable && (
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                        placeholder={searchPlaceholder}
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                    />
                </div>
            )}

            {/* Table */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                {columns.map((column) => (
                                    <th
                                        key={String(column.key)}
                                        className={`px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${column.sortable ? 'cursor-pointer hover:text-white' : ''
                                            } ${column.className || ''}`}
                                        onClick={() => column.sortable && handleSort(String(column.key))}
                                    >
                                        <div className="flex items-center gap-1">
                                            {column.header}
                                            {column.sortable && sortKey === column.key && (
                                                <span className="text-brand-primary">
                                                    {sortDirection === 'asc' ? '↑' : '↓'}
                                                </span>
                                            )}
                                        </div>
                                    </th>
                                ))}
                                {actions && actions.length > 0 && (
                                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Acciones
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                <tr>
                                    <td
                                        colSpan={columns.length + (actions ? 1 : 0)}
                                        className="px-4 py-12 text-center"
                                    >
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" />
                                            <span className="text-gray-400">Cargando...</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : paginatedData.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={columns.length + (actions ? 1 : 0)}
                                        className="px-4 py-12 text-center text-gray-500"
                                    >
                                        {emptyMessage}
                                    </td>
                                </tr>
                            ) : (
                                paginatedData.map((item) => {
                                    const itemId = getItemId(item);
                                    return (
                                        <tr
                                            key={itemId}
                                            className={`hover:bg-white/5 transition-colors ${onRowClick ? 'cursor-pointer' : ''
                                                }`}
                                            onClick={() => onRowClick?.(item)}
                                        >
                                            {columns.map((column) => (
                                                <td
                                                    key={String(column.key)}
                                                    className={`px-4 py-3 text-sm text-white ${column.className || ''}`}
                                                >
                                                    {column.render
                                                        ? column.render(item)
                                                        : getCellValue(item, column.key)}
                                                </td>
                                            ))}
                                            {actions && actions.length > 0 && (
                                                <td className="px-4 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                                                    <div className="relative inline-block">
                                                        <button
                                                            onClick={() => setOpenActionMenu(openActionMenu === itemId ? null : itemId)}
                                                            className="p-1 text-gray-400 hover:text-white rounded-lg hover:bg-white/10"
                                                        >
                                                            <MoreVertical size={18} />
                                                        </button>
                                                        {openActionMenu === itemId && (
                                                            <div className="absolute right-0 top-full mt-1 bg-gray-900 border border-white/20 rounded-lg shadow-xl z-10 min-w-[140px] overflow-hidden">
                                                                {actions.map((action, index) => {
                                                                    if (action.show && !action.show(item)) return null;
                                                                    return (
                                                                        <button
                                                                            key={index}
                                                                            onClick={() => {
                                                                                action.onClick(item);
                                                                                setOpenActionMenu(null);
                                                                            }}
                                                                            className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left transition-colors ${action.variant === 'danger'
                                                                                ? 'text-red-400 hover:bg-red-500/20'
                                                                                : action.variant === 'success'
                                                                                    ? 'text-green-400 hover:bg-green-500/20'
                                                                                    : 'text-gray-300 hover:bg-white/10'
                                                                                }`}
                                                                        >
                                                                            {action.icon}
                                                                            {action.label}
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            )}
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
                        <div className="text-sm text-gray-400">
                            Mostrando {((currentPage - 1) * pageSize) + 1} - {Math.min(currentPage * pageSize, sortedData.length)} de {sortedData.length}
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                let page: number;
                                if (totalPages <= 5) {
                                    page = i + 1;
                                } else if (currentPage <= 3) {
                                    page = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    page = totalPages - 4 + i;
                                } else {
                                    page = currentPage - 2 + i;
                                }
                                return (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${currentPage === page
                                            ? 'bg-brand-primary text-white'
                                            : 'text-gray-400 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Click outside to close menu */}
            {openActionMenu && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setOpenActionMenu(null)}
                />
            )}
        </div>
    );
}

// Common action icons
export const ActionIcons = {
    Edit: <Edit size={16} />,
    Delete: <Trash2 size={16} />,
    View: <Eye size={16} />,
};
