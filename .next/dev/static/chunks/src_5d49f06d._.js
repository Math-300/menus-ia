(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useCategories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useCategories() {
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCategories.useCallback[fetchCategories]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/api/admin/categories');
                if (!response.ok) {
                    const data = await response.json();
                    throw new Error(data.error || 'Error al obtener categorías');
                }
                const data_0 = await response.json();
                setCategories(data_0.categories || []);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido');
            } finally{
                setLoading(false);
            }
        }
    }["useCategories.useCallback[fetchCategories]"], []);
    const createCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCategories.useCallback[createCategory]": async (formData)=>{
            setLoading(true);
            setError(null);
            try {
                const response_0 = await fetch('/api/admin/categories', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (!response_0.ok) {
                    const data_1 = await response_0.json();
                    throw new Error(data_1.error || 'Error al crear categoría');
                }
                const data_2 = await response_0.json();
                const newCategory = data_2.category;
                setCategories({
                    "useCategories.useCallback[createCategory]": (prev)=>[
                            ...prev,
                            newCategory
                        ]
                }["useCategories.useCallback[createCategory]"]);
                return newCategory;
            } catch (err_0) {
                setError(err_0 instanceof Error ? err_0.message : 'Error desconocido');
                return null;
            } finally{
                setLoading(false);
            }
        }
    }["useCategories.useCallback[createCategory]"], []);
    const updateCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCategories.useCallback[updateCategory]": async (id, formData_0)=>{
            setLoading(true);
            setError(null);
            try {
                const response_1 = await fetch(`/api/admin/categories/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData_0)
                });
                if (!response_1.ok) {
                    const data_3 = await response_1.json();
                    throw new Error(data_3.error || 'Error al actualizar categoría');
                }
                const data_4 = await response_1.json();
                const updatedCategory = data_4.category;
                setCategories({
                    "useCategories.useCallback[updateCategory]": (prev_0)=>prev_0.map({
                            "useCategories.useCallback[updateCategory]": (c)=>c.id === id ? updatedCategory : c
                        }["useCategories.useCallback[updateCategory]"])
                }["useCategories.useCallback[updateCategory]"]);
                return updatedCategory;
            } catch (err_1) {
                setError(err_1 instanceof Error ? err_1.message : 'Error desconocido');
                return null;
            } finally{
                setLoading(false);
            }
        }
    }["useCategories.useCallback[updateCategory]"], []);
    const deleteCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCategories.useCallback[deleteCategory]": async (id_0)=>{
            setLoading(true);
            setError(null);
            try {
                const response_2 = await fetch(`/api/admin/categories/${id_0}`, {
                    method: 'DELETE'
                });
                if (!response_2.ok) {
                    const data_5 = await response_2.json();
                    throw new Error(data_5.error || 'Error al eliminar categoría');
                }
                setCategories({
                    "useCategories.useCallback[deleteCategory]": (prev_1)=>prev_1.filter({
                            "useCategories.useCallback[deleteCategory]": (c_0)=>c_0.id !== id_0
                        }["useCategories.useCallback[deleteCategory]"])
                }["useCategories.useCallback[deleteCategory]"]);
                return true;
            } catch (err_2) {
                setError(err_2 instanceof Error ? err_2.message : 'Error desconocido');
                return false;
            } finally{
                setLoading(false);
            }
        }
    }["useCategories.useCallback[deleteCategory]"], []);
    const getCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCategories.useCallback[getCategory]": async (id_1)=>{
            setLoading(true);
            setError(null);
            try {
                const response_3 = await fetch(`/api/admin/categories/${id_1}`);
                if (!response_3.ok) {
                    const data_6 = await response_3.json();
                    throw new Error(data_6.error || 'Error al obtener categoría');
                }
                const data_7 = await response_3.json();
                return data_7.category;
            } catch (err_3) {
                setError(err_3 instanceof Error ? err_3.message : 'Error desconocido');
                return null;
            } finally{
                setLoading(false);
            }
        }
    }["useCategories.useCallback[getCategory]"], []);
    // Auto-fetch on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCategories.useEffect": ()=>{
            fetchCategories();
        }
    }["useCategories.useEffect"], [
        fetchCategories
    ]);
    return {
        categories,
        loading,
        error,
        fetchCategories,
        createCategory,
        updateCategory,
        deleteCategory,
        getCategory
    };
}
_s(useCategories, "MKzutF6lDa0mG8ElxB8DQekfv9s=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useDishes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDishes",
    ()=>useDishes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useDishes() {
    _s();
    const [dishes, setDishes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchDishes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDishes.useCallback[fetchDishes]": async (filters)=>{
            setLoading(true);
            setError(null);
            try {
                const params = new URLSearchParams();
                if (filters?.category_id) {
                    params.append('category_id', filters.category_id);
                }
                if (filters?.available !== undefined) {
                    params.append('available', String(filters.available));
                }
                const queryString = params.toString();
                const url = `/api/admin/dishes${queryString ? `?${queryString}` : ''}`;
                const response = await fetch(url);
                if (!response.ok) {
                    const data = await response.json();
                    throw new Error(data.error || 'Error al obtener platos');
                }
                const data_0 = await response.json();
                setDishes(data_0.dishes || []);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido');
            } finally{
                setLoading(false);
            }
        }
    }["useDishes.useCallback[fetchDishes]"], []);
    const createDish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDishes.useCallback[createDish]": async (formData)=>{
            setLoading(true);
            setError(null);
            try {
                const response_0 = await fetch('/api/admin/dishes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (!response_0.ok) {
                    const data_1 = await response_0.json();
                    throw new Error(data_1.error || 'Error al crear plato');
                }
                const data_2 = await response_0.json();
                const newDish = data_2.dish;
                setDishes({
                    "useDishes.useCallback[createDish]": (prev)=>[
                            ...prev,
                            newDish
                        ]
                }["useDishes.useCallback[createDish]"]);
                return newDish;
            } catch (err_0) {
                setError(err_0 instanceof Error ? err_0.message : 'Error desconocido');
                return null;
            } finally{
                setLoading(false);
            }
        }
    }["useDishes.useCallback[createDish]"], []);
    const updateDish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDishes.useCallback[updateDish]": async (id, formData_0)=>{
            setLoading(true);
            setError(null);
            try {
                const response_1 = await fetch(`/api/admin/dishes/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData_0)
                });
                if (!response_1.ok) {
                    const data_3 = await response_1.json();
                    throw new Error(data_3.error || 'Error al actualizar plato');
                }
                const data_4 = await response_1.json();
                const updatedDish = data_4.dish;
                setDishes({
                    "useDishes.useCallback[updateDish]": (prev_0)=>prev_0.map({
                            "useDishes.useCallback[updateDish]": (d)=>d.id === id ? updatedDish : d
                        }["useDishes.useCallback[updateDish]"])
                }["useDishes.useCallback[updateDish]"]);
                return updatedDish;
            } catch (err_1) {
                setError(err_1 instanceof Error ? err_1.message : 'Error desconocido');
                return null;
            } finally{
                setLoading(false);
            }
        }
    }["useDishes.useCallback[updateDish]"], []);
    const deleteDish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDishes.useCallback[deleteDish]": async (id_0)=>{
            setLoading(true);
            setError(null);
            try {
                const response_2 = await fetch(`/api/admin/dishes/${id_0}`, {
                    method: 'DELETE'
                });
                if (!response_2.ok) {
                    const data_5 = await response_2.json();
                    throw new Error(data_5.error || 'Error al eliminar plato');
                }
                setDishes({
                    "useDishes.useCallback[deleteDish]": (prev_1)=>prev_1.filter({
                            "useDishes.useCallback[deleteDish]": (d_0)=>d_0.id !== id_0
                        }["useDishes.useCallback[deleteDish]"])
                }["useDishes.useCallback[deleteDish]"]);
                return true;
            } catch (err_2) {
                setError(err_2 instanceof Error ? err_2.message : 'Error desconocido');
                return false;
            } finally{
                setLoading(false);
            }
        }
    }["useDishes.useCallback[deleteDish]"], []);
    const getDish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDishes.useCallback[getDish]": async (id_1)=>{
            setLoading(true);
            setError(null);
            try {
                const response_3 = await fetch(`/api/admin/dishes/${id_1}`);
                if (!response_3.ok) {
                    const data_6 = await response_3.json();
                    throw new Error(data_6.error || 'Error al obtener plato');
                }
                const data_7 = await response_3.json();
                return data_7.dish;
            } catch (err_3) {
                setError(err_3 instanceof Error ? err_3.message : 'Error desconocido');
                return null;
            } finally{
                setLoading(false);
            }
        }
    }["useDishes.useCallback[getDish]"], []);
    // Auto-fetch on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDishes.useEffect": ()=>{
            fetchDishes();
        }
    }["useDishes.useEffect"], [
        fetchDishes
    ]);
    return {
        dishes,
        loading,
        error,
        fetchDishes,
        createDish,
        updateDish,
        deleteDish,
        getDish
    };
}
_s(useDishes, "3zDRJFI/gpM0fFUx4J0/rVQqt0s=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Modal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "9dff98d5a7b54716e5b3b4c83a338a29bf60f85845f9f21355e2e5e8f224bab2") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9dff98d5a7b54716e5b3b4c83a338a29bf60f85845f9f21355e2e5e8f224bab2";
    }
    const { isOpen, onClose, children, title, variant: t1 } = t0;
    const variant = t1 === undefined ? "default" : t1;
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    let t3;
    if ($[1] !== isOpen || $[2] !== onClose) {
        t2 = ()=>{
            const handleOutsideClick = (event)=>{
                if (modalRef.current && !modalRef.current.contains(event.target)) {
                    onClose();
                }
            };
            if (isOpen) {
                document.addEventListener("mousedown", handleOutsideClick);
                document.body.style.overflow = "hidden";
            }
            return ()=>{
                document.removeEventListener("mousedown", handleOutsideClick);
                document.body.style.overflow = "unset";
            };
        };
        t3 = [
            isOpen,
            onClose
        ];
        $[1] = isOpen;
        $[2] = onClose;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!isOpen) {
        return null;
    }
    const isImmersive = variant === "immersive";
    const t4 = `
            bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-t-[2.5rem] md:rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl transform transition-all animate-slide-up h-[90vh] md:h-auto md:max-h-[90vh] flex flex-col
            ${isImmersive ? "p-0" : "p-0 md:p-6"} 
        `;
    const t5 = `
            flex justify-between items-center absolute top-0 left-0 right-0 z-20 pointer-events-none
            ${isImmersive ? "p-6 bg-gradient-to-b from-black/60 to-transparent" : "p-6 bg-transparent"}
        `;
    let t6;
    if ($[5] !== title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-serif italic text-white/90 drop-shadow-md",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = title;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            size: 20,
            className: "group-hover:rotate-90 transition-transform duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== onClose) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "pointer-events-auto p-2.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-white shadow-lg group",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = onClose;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t5 || $[11] !== t6 || $[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t5;
        $[11] = t6;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== children) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto overscroll-contain no-scrollbar",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = children;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10 || $[17] !== t4 || $[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-6 animate-fade-in",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: modalRef,
                className: t4,
                children: [
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Modal.tsx",
                lineNumber: 113,
                columnNumber: 151
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t10;
        $[17] = t4;
        $[18] = t9;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    return t11;
};
_s(Modal, "iXNJws+mDn9J+ZcpHudMXHGV85c=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/CategoryForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryForm",
    ()=>CategoryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CategoryForm = ({ isOpen, onClose, onSubmit, category, loading = false })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        slug: '',
        image_url: null,
        display_order: 0,
        is_active: true
    });
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Populate form when editing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoryForm.useEffect": ()=>{
            if (category) {
                setFormData({
                    name: category.name,
                    slug: category.slug,
                    image_url: category.image_url,
                    display_order: category.display_order,
                    is_active: category.is_active
                });
            } else {
                setFormData({
                    name: '',
                    slug: '',
                    image_url: null,
                    display_order: 0,
                    is_active: true
                });
            }
            setErrors({});
        }
    }["CategoryForm.useEffect"], [
        category,
        isOpen
    ]);
    // Auto-generate slug from name
    const generateSlug = (name)=>{
        return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };
    const handleNameChange = (e)=>{
        const name_0 = e.target.value;
        setFormData((prev)=>({
                ...prev,
                name: name_0,
                slug: generateSlug(name_0)
            }));
        if (errors.name) setErrors((prev_0)=>({
                ...prev_0,
                name: ''
            }));
    };
    const handleImageUpload = async (e_0)=>{
        const file = e_0.target.files?.[0];
        if (!file) return;
        setUploading(true);
        try {
            const uploadFormData = new FormData();
            uploadFormData.append('file', file);
            uploadFormData.append('folder', 'menuos/categories');
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: uploadFormData
            });
            if (!response.ok) {
                throw new Error('Error al subir imagen');
            }
            const data = await response.json();
            setFormData((prev_1)=>({
                    ...prev_1,
                    image_url: data.data.secure_url
                }));
        } catch (error) {
            console.error('Upload error:', error);
            alert('Error al subir la imagen');
        } finally{
            setUploading(false);
        }
    };
    const validate = ()=>{
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }
        if (!formData.slug.trim()) {
            newErrors.slug = 'El slug es requerido';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e_1)=>{
        e_1.preventDefault();
        if (!validate()) return;
        const success = await onSubmit(formData);
        if (success) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: isOpen,
        onClose: onClose,
        title: category ? 'Editar Categoría' : 'Nueva Categoría',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "p-6 space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-300 mb-2",
                            children: "Nombre *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: formData.name,
                            onChange: handleNameChange,
                            className: `w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`,
                            placeholder: "Ej: Entradas, Platos Principales..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 123,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 text-xs mt-1",
                            children: errors.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 124,
                            columnNumber: 37
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/CategoryForm.tsx",
                    lineNumber: 119,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-300 mb-2",
                            children: "Slug (URL) *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 129,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: formData.slug,
                            onChange: (e_2)=>{
                                setFormData((prev_2)=>({
                                        ...prev_2,
                                        slug: e_2.target.value
                                    }));
                                if (errors.slug) setErrors((prev_3)=>({
                                        ...prev_3,
                                        slug: ''
                                    }));
                            },
                            className: `w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors ${errors.slug ? 'border-red-500' : 'border-white/10'}`,
                            placeholder: "entradas"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 132,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        errors.slug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 text-xs mt-1",
                            children: errors.slug
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 142,
                            columnNumber: 37
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-xs mt-1",
                            children: "Se genera automáticamente desde el nombre"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/CategoryForm.tsx",
                    lineNumber: 128,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-300 mb-2",
                            children: "Imagen"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 150,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                formData.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-24 h-24 rounded-lg overflow-hidden border border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: formData.image_url,
                                            alt: "Preview",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                            lineNumber: 155,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setFormData((prev_4)=>({
                                                        ...prev_4,
                                                        image_url: null
                                                    })),
                                            className: "absolute top-1 right-1 p-1 bg-red-500 rounded-full hover:bg-red-600 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 12,
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                                lineNumber: 160,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                            lineNumber: 156,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                    lineNumber: 154,
                                    columnNumber: 47
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex flex-col items-center justify-center w-24 h-24 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-brand-primary/50 transition-colors",
                                    children: [
                                        uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            size: 24,
                                            className: "text-gray-400 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                            lineNumber: 163,
                                            columnNumber: 46
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    size: 24,
                                                    className: "text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Subir"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "image/*",
                                            onChange: handleImageUpload,
                                            className: "hidden",
                                            disabled: uploading
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                            lineNumber: 167,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                    lineNumber: 162,
                                    columnNumber: 38
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: "Sube una imagen para la categoría (opcional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                            lineNumber: 170,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-xs mt-1",
                                            children: "Formatos: JPG, PNG, WebP. Max 5MB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                            lineNumber: 173,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                    lineNumber: 169,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 153,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/CategoryForm.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-300 mb-2",
                            children: "Orden de visualización"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 182,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            value: formData.display_order,
                            onChange: (e_3)=>setFormData((prev_5)=>({
                                        ...prev_5,
                                        display_order: parseInt(e_3.target.value) || 0
                                    })),
                            className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors",
                            min: "0",
                            placeholder: "0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 185,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-xs mt-1",
                            children: "Las categorías se ordenan de menor a mayor"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 189,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/CategoryForm.tsx",
                    lineNumber: 181,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setFormData((prev_6)=>({
                                        ...prev_6,
                                        is_active: !prev_6.is_active
                                    })),
                            className: `relative w-12 h-6 rounded-full transition-colors ${formData.is_active ? 'bg-brand-primary' : 'bg-white/20'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${formData.is_active ? 'left-7' : 'left-1'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                lineNumber: 200,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 196,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-300",
                            children: formData.is_active ? 'Activa' : 'Inactiva'
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 202,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/CategoryForm.tsx",
                    lineNumber: 195,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 pt-4 border-t border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium",
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 209,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading || uploading,
                            className: "flex-1 px-4 py-3 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 18,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/CategoryForm.tsx",
                                        lineNumber: 214,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Guardando..."
                                ]
                            }, void 0, true) : category ? 'Guardar Cambios' : 'Crear Categoría'
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CategoryForm.tsx",
                            lineNumber: 212,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/CategoryForm.tsx",
                    lineNumber: 208,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/CategoryForm.tsx",
            lineNumber: 117,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/admin/CategoryForm.tsx",
        lineNumber: 116,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CategoryForm, "CWr4wDXhKHIlgokYFlfVEJXh8JY=");
_c = CategoryForm;
var _c;
__turbopack_context__.k.register(_c, "CategoryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/DishForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DishForm",
    ()=>DishForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const DIETARY_OPTIONS = [
    {
        value: 'vegetarian',
        label: 'Vegetariano'
    },
    {
        value: 'vegan',
        label: 'Vegano'
    },
    {
        value: 'gluten-free',
        label: 'Sin Gluten'
    },
    {
        value: 'dairy-free',
        label: 'Sin Lácteos'
    },
    {
        value: 'spicy',
        label: 'Picante'
    },
    {
        value: 'nut-free',
        label: 'Sin Nueces'
    }
];
const DishForm = ({ isOpen, onClose, onSubmit, dish, categories, loading = false })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        description: '',
        price: 0,
        image_url: null,
        category_id: null,
        available: true,
        dietary: [],
        is_popular: false,
        is_chef_choice: false,
        is_new: false
    });
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Populate form when editing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DishForm.useEffect": ()=>{
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
                    is_new: dish.is_new
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
                    is_new: false
                });
            }
            setErrors({});
        }
    }["DishForm.useEffect"], [
        dish,
        isOpen
    ]);
    const handleImageUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        try {
            const uploadFormData = new FormData();
            uploadFormData.append('file', file);
            uploadFormData.append('folder', 'menuos/dishes');
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: uploadFormData
            });
            if (!response.ok) {
                throw new Error('Error al subir imagen');
            }
            const data = await response.json();
            setFormData((prev)=>({
                    ...prev,
                    image_url: data.data.secure_url
                }));
        } catch (error) {
            console.error('Upload error:', error);
            alert('Error al subir la imagen');
        } finally{
            setUploading(false);
        }
    };
    const handleDietaryToggle = (value)=>{
        setFormData((prev_0)=>({
                ...prev_0,
                dietary: prev_0.dietary?.includes(value) ? prev_0.dietary.filter((d)=>d !== value) : [
                    ...prev_0.dietary || [],
                    value
                ]
            }));
    };
    const validate = ()=>{
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }
        if (formData.price <= 0) {
            newErrors.price = 'El precio debe ser mayor a 0';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e_0)=>{
        e_0.preventDefault();
        if (!validate()) return;
        const success = await onSubmit(formData);
        if (success) {
            onClose();
        }
    };
    const formatPrice = (value_0)=>{
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(value_0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: isOpen,
        onClose: onClose,
        title: dish ? 'Editar Plato' : 'Nuevo Plato',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "p-6 space-y-6 max-h-[70vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-300 mb-2",
                            children: "Imagen del Plato"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 152,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4",
                            children: [
                                formData.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-32 h-32 rounded-lg overflow-hidden border border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: formData.image_url,
                                            alt: "Preview",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 157,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setFormData((prev_1)=>({
                                                        ...prev_1,
                                                        image_url: null
                                                    })),
                                            className: "absolute top-1 right-1 p-1 bg-red-500 rounded-full hover:bg-red-600 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 12,
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/DishForm.tsx",
                                                lineNumber: 162,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 158,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 156,
                                    columnNumber: 47
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-brand-primary/50 transition-colors",
                                    children: [
                                        uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            size: 32,
                                            className: "text-gray-400 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 165,
                                            columnNumber: 46
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    size: 32,
                                                    className: "text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500 mt-2",
                                                    children: "Subir imagen"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "image/*",
                                            onChange: handleImageUpload,
                                            className: "hidden",
                                            disabled: uploading
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 169,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 164,
                                    columnNumber: 38
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: "Sube una imagen atractiva del plato"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 172,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-xs mt-1",
                                            children: "Recomendado: 800x600px. Formatos: JPG, PNG, WebP"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 175,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 171,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 155,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/DishForm.tsx",
                    lineNumber: 151,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-300 mb-2",
                            children: "Nombre del Plato *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 184,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: formData.name,
                            onChange: (e_1)=>{
                                setFormData((prev_2)=>({
                                        ...prev_2,
                                        name: e_1.target.value
                                    }));
                                if (errors.name) setErrors((prev_3)=>({
                                        ...prev_3,
                                        name: ''
                                    }));
                            },
                            className: `w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`,
                            placeholder: "Ej: Hamburguesa Clásica"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 187,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 text-xs mt-1",
                            children: errors.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 197,
                            columnNumber: 37
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/DishForm.tsx",
                    lineNumber: 183,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-300 mb-2",
                            children: "Descripción"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 202,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: formData.description || '',
                            onChange: (e_2)=>setFormData((prev_4)=>({
                                        ...prev_4,
                                        description: e_2.target.value
                                    })),
                            className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors resize-none",
                            rows: 3,
                            placeholder: "Describe los ingredientes y sabores del plato..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 205,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/DishForm.tsx",
                    lineNumber: 201,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                    children: "Precio (COP) *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 214,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: formData.price,
                                    onChange: (e_3)=>{
                                        setFormData((prev_5)=>({
                                                ...prev_5,
                                                price: parseFloat(e_3.target.value) || 0
                                            }));
                                        if (errors.price) setErrors((prev_6)=>({
                                                ...prev_6,
                                                price: ''
                                            }));
                                    },
                                    className: `w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors ${errors.price ? 'border-red-500' : 'border-white/10'}`,
                                    min: "0",
                                    step: "100",
                                    placeholder: "25000"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 217,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                errors.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-400 text-xs mt-1",
                                    children: errors.price
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 227,
                                    columnNumber: 42
                                }, ("TURBOPACK compile-time value", void 0)),
                                formData.price > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-brand-primary text-xs mt-1",
                                    children: formatPrice(formData.price)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 228,
                                    columnNumber: 48
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 213,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                    children: "Categoría"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 234,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.category_id || '',
                                    onChange: (e_4)=>setFormData((prev_7)=>({
                                                ...prev_7,
                                                category_id: e_4.target.value || null
                                            })),
                                    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Sin categoría"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 241,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: cat.id,
                                                children: cat.name
                                            }, cat.id, false, {
                                                fileName: "[project]/src/components/admin/DishForm.tsx",
                                                lineNumber: 242,
                                                columnNumber: 52
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 237,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 233,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/DishForm.tsx",
                    lineNumber: 212,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-300 mb-2",
                            children: "Etiquetas Dietéticas"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 251,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: DIETARY_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleDietaryToggle(option.value),
                                    className: `px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${formData.dietary?.includes(option.value) ? 'bg-brand-primary text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`,
                                    children: option.label
                                }, option.value, false, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 255,
                                    columnNumber: 56
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 254,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/DishForm.tsx",
                    lineNumber: 250,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-300 mb-2",
                            children: "Etiquetas Especiales"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 263,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: formData.is_popular,
                                            onChange: (e_5)=>setFormData((prev_8)=>({
                                                        ...prev_8,
                                                        is_popular: e_5.target.checked
                                                    })),
                                            className: "w-4 h-4 rounded border-white/20 bg-white/5 text-brand-primary focus:ring-brand-primary/50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 268,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-300",
                                            children: "🔥 Popular"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 272,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 267,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: formData.is_chef_choice,
                                            onChange: (e_6)=>setFormData((prev_9)=>({
                                                        ...prev_9,
                                                        is_chef_choice: e_6.target.checked
                                                    })),
                                            className: "w-4 h-4 rounded border-white/20 bg-white/5 text-brand-primary focus:ring-brand-primary/50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 275,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-300",
                                            children: "👨‍🍳 Recomendado"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 279,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 274,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: formData.is_new,
                                            onChange: (e_7)=>setFormData((prev_10)=>({
                                                        ...prev_10,
                                                        is_new: e_7.target.checked
                                                    })),
                                            className: "w-4 h-4 rounded border-white/20 bg-white/5 text-brand-primary focus:ring-brand-primary/50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 282,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-300",
                                            children: "✨ Nuevo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/DishForm.tsx",
                                            lineNumber: 286,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/DishForm.tsx",
                                    lineNumber: 281,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 266,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/DishForm.tsx",
                    lineNumber: 262,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setFormData((prev_11)=>({
                                        ...prev_11,
                                        available: !prev_11.available
                                    })),
                            className: `relative w-12 h-6 rounded-full transition-colors ${formData.available ? 'bg-green-500' : 'bg-white/20'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${formData.available ? 'left-7' : 'left-1'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/DishForm.tsx",
                                lineNumber: 297,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 293,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-300",
                            children: formData.available ? '✅ Disponible' : '❌ No disponible'
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 299,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/DishForm.tsx",
                    lineNumber: 292,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 pt-4 border-t border-white/10 sticky bottom-0 bg-gray-900/90 backdrop-blur-sm -mx-6 px-6 pb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium",
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 306,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading || uploading,
                            className: "flex-1 px-4 py-3 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 18,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/DishForm.tsx",
                                        lineNumber: 311,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Guardando..."
                                ]
                            }, void 0, true) : dish ? 'Guardar Cambios' : 'Crear Plato'
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/DishForm.tsx",
                            lineNumber: 309,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/DishForm.tsx",
                    lineNumber: 305,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/DishForm.tsx",
            lineNumber: 149,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/admin/DishForm.tsx",
        lineNumber: 148,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DishForm, "lSxyYdV1n43u/WleGjmRn+5pKl4=");
_c = DishForm;
var _c;
__turbopack_context__.k.register(_c, "DishForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ConfirmDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmDialog",
    ()=>ConfirmDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const ConfirmDialog = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "c6e02daff9294010b3429a03182c595324227d05ea61e52444e11f48e7707dbb") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c6e02daff9294010b3429a03182c595324227d05ea61e52444e11f48e7707dbb";
    }
    const { isOpen, onClose, onConfirm, title, message, confirmText: t1, cancelText: t2, variant: t3, loading: t4 } = t0;
    const confirmText = t1 === undefined ? "Confirmar" : t1;
    const cancelText = t2 === undefined ? "Cancelar" : t2;
    const variant = t3 === undefined ? "danger" : t3;
    const loading = t4 === undefined ? false : t4;
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            danger: {
                icon: "bg-red-500/20 text-red-400",
                button: "bg-red-500 hover:bg-red-600"
            },
            warning: {
                icon: "bg-yellow-500/20 text-yellow-400",
                button: "bg-yellow-500 hover:bg-yellow-600"
            },
            info: {
                icon: "bg-blue-500/20 text-blue-400",
                button: "bg-blue-500 hover:bg-blue-600"
            }
        };
        $[1] = t5;
    } else {
        t5 = $[1];
    }
    const variantStyles = t5;
    const t6 = `p-3 rounded-full ${variantStyles[variant].icon}`;
    let t7;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t7;
    } else {
        t7 = $[2];
    }
    let t8;
    if ($[3] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t6;
        $[4] = t8;
    } else {
        t8 = $[4];
    }
    let t9;
    if ($[5] !== title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-white mb-2",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = title;
        $[6] = t9;
    } else {
        t9 = $[6];
    }
    let t10;
    if ($[7] !== message) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm",
            children: message
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = message;
        $[8] = t10;
    } else {
        t10 = $[8];
    }
    let t11;
    if ($[9] !== t10 || $[10] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t10;
        $[10] = t9;
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    let t12;
    if ($[12] !== t11 || $[13] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4",
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
        $[13] = t8;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] !== cancelText || $[16] !== loading || $[17] !== onClose) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClose,
            disabled: loading,
            className: "flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium disabled:opacity-50",
            children: cancelText
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = cancelText;
        $[16] = loading;
        $[17] = onClose;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    const t14 = `flex-1 px-4 py-3 ${variantStyles[variant].button} text-white rounded-lg transition-colors font-medium disabled:opacity-50 flex items-center justify-center gap-2`;
    let t15;
    if ($[19] !== confirmText || $[20] !== loading) {
        t15 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ConfirmDialog.tsx",
                    lineNumber: 125,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0)),
                "Eliminando..."
            ]
        }, void 0, true) : confirmText;
        $[19] = confirmText;
        $[20] = loading;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== loading || $[23] !== onConfirm || $[24] !== t14 || $[25] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onConfirm,
            disabled: loading,
            className: t14,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = loading;
        $[23] = onConfirm;
        $[24] = t14;
        $[25] = t15;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] !== t13 || $[28] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3 mt-6",
            children: [
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t13;
        $[28] = t16;
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] !== t12 || $[31] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                t12,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t12;
        $[31] = t17;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== isOpen || $[34] !== onClose || $[35] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: "",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ConfirmDialog.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = isOpen;
        $[34] = onClose;
        $[35] = t18;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    return t19;
};
_c = ConfirmDialog;
var _c;
__turbopack_context__.k.register(_c, "ConfirmDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Toast = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "849700d98cb253379c5e4ec25c3b974c5d3a830240c1656d42f10c604a59e48b") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "849700d98cb253379c5e4ec25c3b974c5d3a830240c1656d42f10c604a59e48b";
    }
    const { message, isVisible, onClose } = t0;
    let t1;
    let t2;
    if ($[1] !== isVisible || $[2] !== onClose) {
        t1 = ()=>{
            if (isVisible) {
                const timer = setTimeout(()=>{
                    onClose();
                }, 2000);
                return ()=>clearTimeout(timer);
            }
        };
        t2 = [
            isVisible,
            onClose
        ];
        $[1] = isVisible;
        $[2] = onClose;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const t3 = `
        fixed top-24 left-1/2 transform -translate-x-1/2 z-[70] transition-all duration-300 pointer-events-none
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
      `;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-green-500 rounded-full p-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                size: 12,
                className: "text-black stroke-[3]"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 51,
                columnNumber: 59
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Toast.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== message) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] text-white px-6 py-3 rounded-full flex items-center gap-3",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-bold uppercase tracking-widest text-shadow",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Toast.tsx",
                    lineNumber: 58,
                    columnNumber: 177
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Toast.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = message;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t3 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Toast.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t3;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
};
_s(Toast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Toast;
var _c;
__turbopack_context__.k.register(_c, "Toast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/menu/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuManagementPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCategories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDishes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDishes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$CategoryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/CategoryForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$DishForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/DishForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ConfirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ConfirmDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function MenuManagementPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(75);
    if ($[0] !== "5ae969b544d40718d3a0362669539d491ce766b6870ee886527c6997f9913d15") {
        for(let $i = 0; $i < 75; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5ae969b544d40718d3a0362669539d491ce766b6870ee886527c6997f9913d15";
    }
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("categories");
    const { categories, loading: loadingCategories, error: errorCategories, createCategory, updateCategory, deleteCategory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"])();
    const { dishes, loading: loadingDishes, error: errorDishes, createDish, updateDish, deleteDish } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDishes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDishes"])();
    const [showCategoryForm, setShowCategoryForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDishForm, setShowDishForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmDelete, setShowConfirmDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDish, setSelectedDish] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [itemToDelete, setItemToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [actionLoading, setActionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "MenuManagementPage[showSuccessToast]": (message)=>{
                setToastMessage(message);
                setShowToast(true);
            }
        })["MenuManagementPage[showSuccessToast]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const showSuccessToast = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "MenuManagementPage[handleCreateCategory]": ()=>{
                setSelectedCategory(null);
                setShowCategoryForm(true);
            }
        })["MenuManagementPage[handleCreateCategory]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleCreateCategory = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "MenuManagementPage[handleEditCategory]": (category)=>{
                setSelectedCategory(category);
                setShowCategoryForm(true);
            }
        })["MenuManagementPage[handleEditCategory]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleEditCategory = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "MenuManagementPage[handleDeleteCategory]": (category_0)=>{
                setItemToDelete({
                    type: "categories",
                    id: category_0.id,
                    name: category_0.name
                });
                setShowConfirmDelete(true);
            }
        })["MenuManagementPage[handleDeleteCategory]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleDeleteCategory = t3;
    let t4;
    if ($[5] !== createCategory || $[6] !== selectedCategory || $[7] !== updateCategory) {
        t4 = ({
            "MenuManagementPage[handleCategorySubmit]": async (data)=>{
                setActionLoading(true);
                let result;
                if (selectedCategory) {
                    result = await updateCategory(selectedCategory.id, data);
                    if (result) {
                        showSuccessToast("Categor\xEDa actualizada correctamente");
                    }
                } else {
                    result = await createCategory(data);
                    if (result) {
                        showSuccessToast("Categor\xEDa creada correctamente");
                    }
                }
                setActionLoading(false);
                return result !== null;
            }
        })["MenuManagementPage[handleCategorySubmit]"];
        $[5] = createCategory;
        $[6] = selectedCategory;
        $[7] = updateCategory;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleCategorySubmit = t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "MenuManagementPage[handleCreateDish]": ()=>{
                setSelectedDish(null);
                setShowDishForm(true);
            }
        })["MenuManagementPage[handleCreateDish]"];
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const handleCreateDish = t5;
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "MenuManagementPage[handleEditDish]": (dish)=>{
                setSelectedDish(dish);
                setShowDishForm(true);
            }
        })["MenuManagementPage[handleEditDish]"];
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const handleEditDish = t6;
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "MenuManagementPage[handleDeleteDish]": (dish_0)=>{
                setItemToDelete({
                    type: "dishes",
                    id: dish_0.id,
                    name: dish_0.name
                });
                setShowConfirmDelete(true);
            }
        })["MenuManagementPage[handleDeleteDish]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const handleDeleteDish = t7;
    let t8;
    if ($[12] !== createDish || $[13] !== selectedDish || $[14] !== updateDish) {
        t8 = ({
            "MenuManagementPage[handleDishSubmit]": async (data_0)=>{
                setActionLoading(true);
                let result_0;
                if (selectedDish) {
                    result_0 = await updateDish(selectedDish.id, data_0);
                    if (result_0) {
                        showSuccessToast("Plato actualizado correctamente");
                    }
                } else {
                    result_0 = await createDish(data_0);
                    if (result_0) {
                        showSuccessToast("Plato creado correctamente");
                    }
                }
                setActionLoading(false);
                return result_0 !== null;
            }
        })["MenuManagementPage[handleDishSubmit]"];
        $[12] = createDish;
        $[13] = selectedDish;
        $[14] = updateDish;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const handleDishSubmit = t8;
    let t9;
    if ($[16] !== deleteCategory || $[17] !== deleteDish || $[18] !== itemToDelete) {
        t9 = ({
            "MenuManagementPage[handleConfirmDelete]": async ()=>{
                if (!itemToDelete) {
                    return;
                }
                setActionLoading(true);
                let success;
                if (itemToDelete.type === "categories") {
                    success = await deleteCategory(itemToDelete.id);
                    if (success) {
                        showSuccessToast("Categor\xEDa eliminada correctamente");
                    }
                } else {
                    success = await deleteDish(itemToDelete.id);
                    if (success) {
                        showSuccessToast("Plato eliminado correctamente");
                    }
                }
                setActionLoading(false);
                if (success) {
                    setShowConfirmDelete(false);
                    setItemToDelete(null);
                }
            }
        })["MenuManagementPage[handleConfirmDelete]"];
        $[16] = deleteCategory;
        $[17] = deleteDish;
        $[18] = itemToDelete;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    const handleConfirmDelete = t9;
    const formatPrice = _MenuManagementPageFormatPrice;
    let t10;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-white",
                    children: "Gestión de Menú"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/menu/page.tsx",
                    lineNumber: 242,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mt-1",
                    children: "Administra categorías y platos de tu menú"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/menu/page.tsx",
                    lineNumber: 242,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/menu/page.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== activeTab) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: activeTab === "categories" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreateCategory,
                        className: "px-4 py-2 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-lg transition-colors text-sm font-medium flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                lineNumber: 249,
                                columnNumber: 346
                            }, this),
                            "Nueva Categoría"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/menu/page.tsx",
                        lineNumber: 249,
                        columnNumber: 158
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreateDish,
                        className: "px-4 py-2 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-lg transition-colors text-sm font-medium flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                lineNumber: 249,
                                columnNumber: 575
                            }, this),
                            "Nuevo Plato"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/menu/page.tsx",
                        lineNumber: 249,
                        columnNumber: 391
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/menu/page.tsx",
                    lineNumber: 249,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/menu/page.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[21] = activeTab;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "MenuManagementPage[<button>.onClick]": ()=>setActiveTab("categories")
        })["MenuManagementPage[<button>.onClick]"];
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    const t13 = `px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${activeTab === "categories" ? "bg-brand-primary/20 text-brand-primary border-b-2 border-brand-primary" : "text-gray-400 hover:text-white"}`;
    let t14;
    if ($[24] !== categories.length || $[25] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t12,
            className: t13,
            children: [
                "Categorías (",
                categories.length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/menu/page.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[24] = categories.length;
        $[25] = t13;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "MenuManagementPage[<button>.onClick]": ()=>setActiveTab("dishes")
        })["MenuManagementPage[<button>.onClick]"];
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    const t16 = `px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${activeTab === "dishes" ? "bg-brand-primary/20 text-brand-primary border-b-2 border-brand-primary" : "text-gray-400 hover:text-white"}`;
    let t17;
    if ($[28] !== dishes.length || $[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t15,
            className: t16,
            children: [
                "Platos (",
                dishes.length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/menu/page.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, this);
        $[28] = dishes.length;
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== t14 || $[32] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 border-b border-white/10 pb-2",
            children: [
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/menu/page.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t17;
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    let t19;
    if ($[34] !== errorCategories || $[35] !== errorDishes) {
        t19 = (errorCategories || errorDishes) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "text-red-400",
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/menu/page.tsx",
                    lineNumber: 304,
                    columnNumber: 142
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-400 text-sm",
                    children: errorCategories || errorDishes
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/menu/page.tsx",
                    lineNumber: 304,
                    columnNumber: 192
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/menu/page.tsx",
            lineNumber: 304,
            columnNumber: 47
        }, this);
        $[34] = errorCategories;
        $[35] = errorDishes;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== activeTab || $[38] !== categories || $[39] !== dishes || $[40] !== loadingCategories || $[41] !== loadingDishes) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 border border-white/10 rounded-xl overflow-hidden",
            children: activeTab === "categories" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-white/10 bg-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Orden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 237
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Imagen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 342
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Nombre"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 448
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Slug"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 554
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Estado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 658
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-right text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Acciones"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 764
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                lineNumber: 313,
                                columnNumber: 185
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/menu/page.tsx",
                            lineNumber: 313,
                            columnNumber: 178
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-white/5",
                            children: loadingCategories ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    className: "px-6 py-12 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "animate-spin mx-auto text-brand-primary",
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 1005
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm mt-2",
                                            children: "Cargando categorías..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 1078
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 954
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                lineNumber: 313,
                                columnNumber: 950
                            }, this) : categories.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    className: "px-6 py-12 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400",
                                            children: "No hay categorías creadas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 1240
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCreateCategory,
                                            className: "mt-4 px-4 py-2 bg-brand-primary/20 hover:bg-brand-primary/30 text-brand-primary rounded-lg transition-colors text-sm",
                                            children: "Crear primera categoría"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 1298
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 1189
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                lineNumber: 313,
                                columnNumber: 1185
                            }, this) : categories.map({
                                "MenuManagementPage[categories.map()]": (category_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-white/5 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-300 text-sm",
                                                    children: category_1.display_order
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 166
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 140
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: category_1.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: category_1.image_url,
                                                    alt: category_1.name,
                                                    className: "w-10 h-10 rounded-lg object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 294
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                        size: 16,
                                                        className: "text-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 482
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 399
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 244
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-medium",
                                                    children: category_1.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 569
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 543
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400 text-sm font-mono",
                                                    children: category_1.slug
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 665
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 639
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `inline-flex px-2 py-1 rounded-full text-xs font-medium ${category_1.is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`,
                                                    children: category_1.is_active ? "Activa" : "Inactiva"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 770
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 744
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-end gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: {
                                                                "MenuManagementPage[categories.map() > <button>.onClick]": ()=>handleEditCategory(category_1)
                                                            }["MenuManagementPage[categories.map() > <button>.onClick]"],
                                                            className: "p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white",
                                                            title: "Editar",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                                lineNumber: 316,
                                                                columnNumber: 192
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 1072
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: {
                                                                "MenuManagementPage[categories.map() > <button>.onClick]": ()=>handleDeleteCategory(category_1)
                                                            }["MenuManagementPage[categories.map() > <button>.onClick]"],
                                                            className: "p-2 hover:bg-red-500/20 rounded-lg transition-colors text-gray-400 hover:text-red-400",
                                                            title: "Eliminar",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 198
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 220
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 1019
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 993
                                            }, this)
                                        ]
                                    }, category_1.id, true, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 69
                                    }, this)
                            }["MenuManagementPage[categories.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/menu/page.tsx",
                            lineNumber: 313,
                            columnNumber: 886
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/menu/page.tsx",
                    lineNumber: 313,
                    columnNumber: 152
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/menu/page.tsx",
                lineNumber: 313,
                columnNumber: 119
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-white/10 bg-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Imagen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 199
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Nombre"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 305
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Categoría"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 411
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Precio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 520
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Estado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 626
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Etiquetas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 732
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-right text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4",
                                        children: "Acciones"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 841
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                lineNumber: 319,
                                columnNumber: 147
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/menu/page.tsx",
                            lineNumber: 319,
                            columnNumber: 140
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-white/5",
                            children: loadingDishes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 7,
                                    className: "px-6 py-12 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "animate-spin mx-auto text-brand-primary",
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 1078
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm mt-2",
                                            children: "Cargando platos..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 1151
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 1027
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                lineNumber: 319,
                                columnNumber: 1023
                            }, this) : dishes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 7,
                                    className: "px-6 py-12 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400",
                                            children: "No hay platos creados"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 1305
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCreateDish,
                                            className: "mt-4 px-4 py-2 bg-brand-primary/20 hover:bg-brand-primary/30 text-brand-primary rounded-lg transition-colors text-sm",
                                            children: "Crear primer plato"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 1359
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 1254
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                lineNumber: 319,
                                columnNumber: 1250
                            }, this) : dishes.map({
                                "MenuManagementPage[dishes.map()]": (dish_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-white/5 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: dish_1.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: dish_1.image_url,
                                                    alt: dish_1.name,
                                                    className: "w-12 h-12 rounded-lg object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 174
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                        size: 20,
                                                        className: "text-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 354
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 271
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 128
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-medium",
                                                            children: dish_1.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 446
                                                        }, this),
                                                        dish_1.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-500 text-xs mt-0.5 line-clamp-1",
                                                            children: dish_1.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 530
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 441
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 415
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-300 text-sm",
                                                    children: dish_1.categories?.name || "Sin categor\xEDa"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 649
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 623
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-brand-primary font-medium",
                                                    children: formatPrice(dish_1.price)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 774
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 748
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `inline-flex px-2 py-1 rounded-full text-xs font-medium ${dish_1.available ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`,
                                                    children: dish_1.available ? "Disponible" : "No disponible"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 888
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 862
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: [
                                                        dish_1.is_popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "🔥"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 1198
                                                        }, this),
                                                        dish_1.is_chef_choice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "👨‍🍳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 1260
                                                        }, this),
                                                        dish_1.is_new && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "✨"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 1317
                                                        }, this),
                                                        dish_1.dietary?.map(_MenuManagementPageDishesMapAnonymous)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 1138
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 1112
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-end gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: {
                                                                "MenuManagementPage[dishes.map() > <button>.onClick]": ()=>handleEditDish(dish_1)
                                                            }["MenuManagementPage[dishes.map() > <button>.onClick]"],
                                                            className: "p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white",
                                                            title: "Editar",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 188
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 1502
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: {
                                                                "MenuManagementPage[dishes.map() > <button>.onClick]": ()=>handleDeleteDish(dish_1)
                                                            }["MenuManagementPage[dishes.map() > <button>.onClick]"],
                                                            className: "p-2 hover:bg-red-500/20 rounded-lg transition-colors text-gray-400 hover:text-red-400",
                                                            title: "Eliminar",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 194
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/menu/page.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 216
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/menu/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 1449
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/menu/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 1423
                                            }, this)
                                        ]
                                    }, dish_1.id, true, {
                                        fileName: "[project]/src/app/admin/menu/page.tsx",
                                        lineNumber: 320,
                                        columnNumber: 61
                                    }, this)
                            }["MenuManagementPage[dishes.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/menu/page.tsx",
                            lineNumber: 319,
                            columnNumber: 963
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/menu/page.tsx",
                    lineNumber: 319,
                    columnNumber: 114
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/menu/page.tsx",
                lineNumber: 319,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/menu/page.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[37] = activeTab;
        $[38] = categories;
        $[39] = dishes;
        $[40] = loadingCategories;
        $[41] = loadingDishes;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "MenuManagementPage[<CategoryForm>.onClose]": ()=>{
                setShowCategoryForm(false);
                setSelectedCategory(null);
            }
        })["MenuManagementPage[<CategoryForm>.onClose]"];
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== actionLoading || $[45] !== handleCategorySubmit || $[46] !== selectedCategory || $[47] !== showCategoryForm) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$CategoryForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryForm"], {
            isOpen: showCategoryForm,
            onClose: t21,
            onSubmit: handleCategorySubmit,
            category: selectedCategory,
            loading: actionLoading
        }, void 0, false, {
            fileName: "[project]/src/app/admin/menu/page.tsx",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        $[44] = actionLoading;
        $[45] = handleCategorySubmit;
        $[46] = selectedCategory;
        $[47] = showCategoryForm;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = ({
            "MenuManagementPage[<DishForm>.onClose]": ()=>{
                setShowDishForm(false);
                setSelectedDish(null);
            }
        })["MenuManagementPage[<DishForm>.onClose]"];
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] !== actionLoading || $[51] !== categories || $[52] !== handleDishSubmit || $[53] !== selectedDish || $[54] !== showDishForm) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$DishForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DishForm"], {
            isOpen: showDishForm,
            onClose: t23,
            onSubmit: handleDishSubmit,
            dish: selectedDish,
            categories: categories,
            loading: actionLoading
        }, void 0, false, {
            fileName: "[project]/src/app/admin/menu/page.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[50] = actionLoading;
        $[51] = categories;
        $[52] = handleDishSubmit;
        $[53] = selectedDish;
        $[54] = showDishForm;
        $[55] = t24;
    } else {
        t24 = $[55];
    }
    let t25;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = ({
            "MenuManagementPage[<ConfirmDialog>.onClose]": ()=>{
                setShowConfirmDelete(false);
                setItemToDelete(null);
            }
        })["MenuManagementPage[<ConfirmDialog>.onClose]"];
        $[56] = t25;
    } else {
        t25 = $[56];
    }
    const t26 = `¿Estás seguro de que deseas eliminar "${itemToDelete?.name}"? Esta acción no se puede deshacer.`;
    let t27;
    if ($[57] !== actionLoading || $[58] !== handleConfirmDelete || $[59] !== showConfirmDelete || $[60] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ConfirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmDialog"], {
            isOpen: showConfirmDelete,
            onClose: t25,
            onConfirm: handleConfirmDelete,
            title: "Confirmar eliminaci\xF3n",
            message: t26,
            confirmText: "Eliminar",
            variant: "danger",
            loading: actionLoading
        }, void 0, false, {
            fileName: "[project]/src/app/admin/menu/page.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[57] = actionLoading;
        $[58] = handleConfirmDelete;
        $[59] = showConfirmDelete;
        $[60] = t26;
        $[61] = t27;
    } else {
        t27 = $[61];
    }
    let t28;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ({
            "MenuManagementPage[<Toast>.onClose]": ()=>setShowToast(false)
        })["MenuManagementPage[<Toast>.onClose]"];
        $[62] = t28;
    } else {
        t28 = $[62];
    }
    let t29;
    if ($[63] !== showToast || $[64] !== toastMessage) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
            message: toastMessage,
            isVisible: showToast,
            onClose: t28
        }, void 0, false, {
            fileName: "[project]/src/app/admin/menu/page.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[63] = showToast;
        $[64] = toastMessage;
        $[65] = t29;
    } else {
        t29 = $[65];
    }
    let t30;
    if ($[66] !== t11 || $[67] !== t18 || $[68] !== t19 || $[69] !== t20 || $[70] !== t22 || $[71] !== t24 || $[72] !== t27 || $[73] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t11,
                t18,
                t19,
                t20,
                t22,
                t24,
                t27,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/menu/page.tsx",
            lineNumber: 426,
            columnNumber: 11
        }, this);
        $[66] = t11;
        $[67] = t18;
        $[68] = t19;
        $[69] = t20;
        $[70] = t22;
        $[71] = t24;
        $[72] = t27;
        $[73] = t29;
        $[74] = t30;
    } else {
        t30 = $[74];
    }
    return t30;
}
_s(MenuManagementPage, "nAtgzp8f87gf4+L3fKceGfl2nKc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDishes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDishes"]
    ];
});
_c = MenuManagementPage;
function _MenuManagementPageDishesMapAnonymous(d) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-xs",
        children: [
            d === "vegetarian" && "\uD83E\uDD6C",
            d === "vegan" && "\uD83C\uDF31",
            d === "gluten-free" && "\uD83C\uDF3E",
            d === "spicy" && "\uD83C\uDF36\uFE0F"
        ]
    }, d, true, {
        fileName: "[project]/src/app/admin/menu/page.tsx",
        lineNumber: 442,
        columnNumber: 10
    }, this);
}
function _MenuManagementPageFormatPrice(price) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    }).format(price);
}
var _c;
__turbopack_context__.k.register(_c, "MenuManagementPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5d49f06d._.js.map