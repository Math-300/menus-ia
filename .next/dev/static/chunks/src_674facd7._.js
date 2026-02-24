(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "DEFAULT_THEME",
    ()=>DEFAULT_THEME,
    "MENU_ITEMS",
    ()=>MENU_ITEMS,
    "STORIES",
    ()=>STORIES
]);
const DEFAULT_THEME = {
    colors: {
        primary: '#F94144',
        secondary: '#1F2937',
        accent: '#F3722C',
        dark: '#030712'
    },
    fonts: {
        sans: 'Inter, sans-serif',
        serif: 'Playfair Display, serif'
    }
};
const CATEGORIES = [
    {
        id: 'starters',
        name: 'Entradas'
    },
    {
        id: 'mains',
        name: 'Fuertes'
    },
    {
        id: 'burgers',
        name: 'Handhelds'
    },
    {
        id: 'desserts',
        name: 'Postres'
    },
    {
        id: 'drinks',
        name: 'Bar & Cocteles'
    }
];
const STORIES = [
    {
        id: 's1',
        title: 'Nueva Trufa',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
        viewed: false,
        type: 'dish',
        linkedItemId: 'm1'
    },
    {
        id: 's2',
        title: 'Mesa del Chef',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
        viewed: false,
        type: 'chef'
    },
    {
        id: 's3',
        title: 'Coctelería',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
        viewed: true,
        type: 'promo'
    }
];
const MENU_ITEMS = [
    {
        id: 'm1',
        name: 'Truffle Smash Burger',
        description: 'Doble carne madurada, mayonesa de trufa negra, queso suizo y pan brioche artesanal.',
        price: 38000,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
        category: 'burgers',
        tags: [
            'Popular',
            'Chef Choice'
        ],
        popular: true,
        available: true,
        calories: 950,
        pairing: 'Malbec Reserva',
        ingredients: [
            'Trufa Negra',
            'Queso Suizo',
            'Brioche',
            'Res Madurada'
        ]
    },
    {
        id: 'm2',
        name: 'Tartar de Atún Picante',
        description: 'Atún aleta azul, mousse de aguacate, crujiente de sésamo y reducción de ponzu.',
        price: 42000,
        image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=800&q=80',
        category: 'starters',
        tags: [
            'Picante',
            'GF',
            'Proteína'
        ],
        new: true,
        available: true,
        calories: 320,
        pairing: 'Sauvignon Blanc',
        ingredients: [
            'Atún Rojo',
            'Ponzu',
            'Aguacate'
        ]
    },
    {
        id: 'm3',
        name: 'Goddess Buddha Bowl',
        description: 'Quinoa tricolor, garbanzos rostizados, kale masajeado y aderezo diosa verde de tahini.',
        price: 32000,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
        category: 'mains',
        tags: [
            'Vegano',
            'GF',
            'Saludable'
        ],
        available: true,
        calories: 450,
        pairing: 'Jugo Verde Detox'
    },
    {
        id: 'm4',
        name: 'Volcán de Chocolate',
        description: 'Fondant de chocolate 70%, gelato de vainilla de Madagascar y coulis de frutos rojos.',
        price: 22000,
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=800&q=80',
        category: 'desserts',
        tags: [
            'Dulce',
            'Indulgente'
        ],
        popular: true,
        available: true,
        calories: 600,
        pairing: 'Espresso Martini'
    },
    {
        id: 'm5',
        name: 'Wagyu Steak Frites',
        description: 'Sirloin Wagyu A5 (8oz), mantequilla de hierbas compuesta y papas fritas trufadas.',
        price: 125000,
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
        category: 'mains',
        tags: [
            'GF',
            'Premium'
        ],
        chefChoice: true,
        available: true,
        calories: 800,
        pairing: 'Cabernet Sauvignon'
    },
    {
        id: 'm6',
        name: 'Paloma de Romero',
        description: 'Tequila Reposado, toronja fresca, jarabe de romero ahumado, lima y agua con gas.',
        price: 32000,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
        category: 'drinks',
        tags: [
            'Coctel',
            'Refrescante'
        ],
        available: true,
        calories: 180
    },
    {
        id: 'm7',
        name: 'Burrata & Durazno',
        description: 'Burrata italiana fresca, duraznos a la parrilla, aceite de albahaca y glaseado balsámico.',
        price: 36000,
        image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?auto=format&fit=crop&w=800&q=80',
        category: 'starters',
        tags: [
            'Vegetariano',
            'Temporada'
        ],
        new: true,
        available: true,
        calories: 400,
        pairing: 'Vino Rosado'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMenuFilter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMenuFilter",
    ()=>useMenuFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Manual "Embeddings" for instant semantic search without API latency
const CATEGORY_SYNONYMS = {
    burgers: [
        'hamburguesa',
        'sandwich',
        'bocadillo',
        'carne',
        'res',
        'handheld',
        'cheeseburger'
    ],
    starters: [
        'entrada',
        'botana',
        'inicio',
        'para compartir',
        'tapas',
        'picada'
    ],
    mains: [
        'fuerte',
        'principal',
        'plato',
        'cena',
        'comida',
        'grande',
        'lujo'
    ],
    desserts: [
        'postre',
        'dulce',
        'pastel',
        'chocolate',
        'helado',
        'azucar',
        'final'
    ],
    drinks: [
        'bebida',
        'coctel',
        'trago',
        'vino',
        'cerveza',
        'alcohol',
        'soda',
        'refresco',
        'bar'
    ]
};
const useMenuFilter = (items)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "d38d4677721bc54a190e9fe9e34a650c94b523664272449bcf40b8b98df28695") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38d4677721bc54a190e9fe9e34a650c94b523664272449bcf40b8b98df28695";
    }
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const normalize = _temp;
    let t0;
    bb0: {
        if (searchQuery.trim()) {
            let t1;
            if ($[1] !== items || $[2] !== searchQuery) {
                const terms = normalize(searchQuery).split(" ").filter(_temp2);
                const scoredItems = items.map((item)=>{
                    let score = 0;
                    const normName = normalize(item.name);
                    const normDesc = normalize(item.description);
                    const normTags = item.tags.map((t_0)=>normalize(t_0));
                    const categoryId = item.category;
                    const categoryDisplay = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].find((c)=>c.id === categoryId)?.name || "";
                    const normCatDisplay = normalize(categoryDisplay);
                    normalize(categoryId);
                    const categorySynonyms = CATEGORY_SYNONYMS[categoryId] || [];
                    terms.forEach((term)=>{
                        if (normName === term) {
                            score = score + 100;
                            score;
                        } else {
                            if (normName.startsWith(term)) {
                                score = score + 50;
                                score;
                            } else {
                                if (normName.includes(term)) {
                                    score = score + 25;
                                    score;
                                }
                            }
                        }
                        if (normTags.some((t_1)=>t_1.includes(term))) {
                            score = score + 20;
                            score;
                        }
                        if (normCatDisplay.includes(term)) {
                            score = score + 15;
                            score;
                        }
                        if (categorySynonyms.some((syn)=>syn.includes(term))) {
                            score = score + 15;
                            score;
                        }
                        if (normDesc.includes(term)) {
                            score = score + 5;
                            score;
                        }
                    });
                    return {
                        item,
                        score
                    };
                });
                t1 = scoredItems.filter(_temp3).sort(_temp4).map(_temp5);
                $[1] = items;
                $[2] = searchQuery;
                $[3] = t1;
            } else {
                t1 = $[3];
            }
            t0 = t1;
            break bb0;
        }
        if (selectedCategory !== "all") {
            let t1;
            if ($[4] !== items || $[5] !== selectedCategory) {
                let t2;
                if ($[7] !== selectedCategory) {
                    t2 = (i)=>i.category === selectedCategory;
                    $[7] = selectedCategory;
                    $[8] = t2;
                } else {
                    t2 = $[8];
                }
                t1 = items.filter(t2);
                $[4] = items;
                $[5] = selectedCategory;
                $[6] = t1;
            } else {
                t1 = $[6];
            }
            t0 = t1;
            break bb0;
        }
        t0 = items;
    }
    const filteredItems = t0;
    let t1;
    if ($[9] !== filteredItems || $[10] !== searchQuery || $[11] !== selectedCategory) {
        t1 = {
            selectedCategory,
            setSelectedCategory,
            searchQuery,
            setSearchQuery,
            filteredItems
        };
        $[9] = filteredItems;
        $[10] = searchQuery;
        $[11] = selectedCategory;
        $[12] = t1;
    } else {
        t1 = $[12];
    }
    return t1;
};
_s(useMenuFilter, "Z2gcJgNWKwa2Yr9+lS6QViyQUHI=");
function _temp(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
function _temp2(t) {
    return t.length > 0;
}
function _temp3(x) {
    return x.score > 0;
}
function _temp4(a, b) {
    return b.score - a.score;
}
function _temp5(x_0) {
    return x_0.item;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCart.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useCart = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "eb9597c6f08c00f973bfd9d332748296c9db16db34cf59e1783c4b9d31098a01") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eb9597c6f08c00f973bfd9d332748296c9db16db34cf59e1783c4b9d31098a01";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [selection, setSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (newItem)=>{
            setSelection((prev)=>{
                const incomingId = newItem.id;
                const incomingOptsSignature = JSON.stringify(newItem.selectedOptions?.sort(_temp) || []);
                const existingIndex = prev.findIndex((existing)=>{
                    const existingId = existing.id;
                    const existingOptsSignature = JSON.stringify(existing.selectedOptions?.sort(_temp2) || []);
                    return existingId === incomingId && existingOptsSignature === incomingOptsSignature;
                });
                if (existingIndex >= 0) {
                    const updatedCart = [
                        ...prev
                    ];
                    const existingItem = updatedCart[existingIndex];
                    const quantityToAdd = newItem.quantity || 1;
                    const newQuantity = (existingItem.quantity || 1) + quantityToAdd;
                    const unitPrice = existingItem.price;
                    updatedCart[existingIndex] = {
                        ...existingItem,
                        quantity: newQuantity,
                        finalPrice: unitPrice * newQuantity
                    };
                    return updatedCart;
                } else {
                    const itemToAdd = {
                        ...newItem,
                        quantity: newItem.quantity || 1,
                        finalPrice: newItem.finalPrice || newItem.price,
                        selectedOptions: newItem.selectedOptions || []
                    };
                    return [
                        ...prev,
                        itemToAdd
                    ];
                }
            });
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const addToCart = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (index, newQuantity_0)=>{
            if (newQuantity_0 < 1) {
                return;
            }
            setSelection((prev_0)=>{
                const updated = [
                    ...prev_0
                ];
                const item = updated[index];
                const unitPrice_0 = item.price;
                updated[index] = {
                    ...item,
                    quantity: newQuantity_0,
                    finalPrice: unitPrice_0 * newQuantity_0
                };
                return updated;
            });
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const updateQuantity = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = (index_0)=>{
            setSelection((prev_1)=>prev_1.filter((_, i)=>i !== index_0));
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const removeFromCart = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
            setSelection([]);
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const clearCart = t4;
    let t5;
    if ($[6] !== selection) {
        t5 = {
            selection,
            addToCart,
            updateQuantity,
            removeFromCart,
            clearCart
        };
        $[6] = selection;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
};
_s(useCart, "ULmlnKTk1CWoaCdU8U9XR0UBbVo=");
function _temp(a, b) {
    return a.optionName.localeCompare(b.optionName);
}
function _temp2(a_0, b_0) {
    return a_0.optionName.localeCompare(b_0.optionName);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCreateOrder.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "menuItemToOrderItem",
    ()=>menuItemToOrderItem,
    "useCreateOrder",
    ()=>useCreateOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function menuItemToOrderItem(item, notes) {
    return {
        dish_id: item.id,
        dish_name: item.name,
        quantity: item.quantity || 1,
        unit_price: item.price,
        total_price: item.finalPrice || item.price * (item.quantity || 1),
        notes: notes,
        modifiers: item.selectedOptions?.map((opt)=>({
                groupName: opt.groupName,
                optionName: opt.optionName,
                price: opt.price
            }))
    };
}
function useCreateOrder() {
    _s();
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const createOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCreateOrder.useCallback[createOrder]": async (orderData)=>{
            setLoading(true);
            setError(null);
            setSuccess(false);
            try {
                const response = await fetch('/api/public/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderData)
                });
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.error || 'Error al crear pedido');
                }
                if (data.success && data.order) {
                    setOrder(data.order);
                    setSuccess(true);
                    return data.order;
                }
                throw new Error('Respuesta inesperada del servidor');
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
                setError(errorMessage);
                return null;
            } finally{
                setLoading(false);
            }
        }
    }["useCreateOrder.useCallback[createOrder]"], []);
    const resetState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCreateOrder.useCallback[resetState]": ()=>{
            setOrder(null);
            setError(null);
            setSuccess(false);
            setLoading(false);
        }
    }["useCreateOrder.useCallback[resetState]"], []);
    return {
        order,
        loading,
        error,
        success,
        createOrder,
        resetState
    };
}
_s(useCreateOrder, "GiOKiblFhvzGU7ELE1VE9w54tLk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diner/StoryRail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoryRail",
    ()=>StoryRail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
'use client';
;
;
;
const StoryRail = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "19ab5f9e8a299ce54d7cb7f2026badfd7e3d1421f04e89f6f749adc268db0a32") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19ab5f9e8a299ce54d7cb7f2026badfd7e3d1421f04e89f6f749adc268db0a32";
    }
    const { stories, onViewStory, onOpenBrand } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 rounded-full border-[1.5px] border-dashed border-brand-primary/40 group-hover:border-brand-primary transition-colors duration-500 animate-[spin_10s_linear_infinite]"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryRail.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryRail.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-serif font-bold text-2xl md:text-3xl italic text-brand-primary",
            children: "M"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryRail.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-[76px] h-[76px] md:w-[84px] md:h-[84px] flex items-center justify-center",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-[66px] h-[66px] md:w-[74px] md:h-[74px] rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all shadow-lg overflow-hidden",
                    children: [
                        t2,
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-1 right-1 bg-brand-primary text-white rounded-full p-1 shadow-sm border border-black/50 z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 10,
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/diner/StoryRail.tsx",
                                lineNumber: 46,
                                columnNumber: 496
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/StoryRail.tsx",
                            lineNumber: 46,
                            columnNumber: 370
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/StoryRail.tsx",
                    lineNumber: 46,
                    columnNumber: 115
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/StoryRail.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors",
            children: "MenuOS"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryRail.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    let t6;
    if ($[6] !== onOpenBrand) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: onOpenBrand,
            className: "flex flex-col items-center gap-2.5 cursor-pointer shrink-0 snap-start group",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/StoryRail.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = onOpenBrand;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== onViewStory || $[9] !== stories) {
        let t8;
        if ($[11] !== onViewStory) {
            t8 = (story, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-2.5 cursor-pointer shrink-0 snap-start group",
                    onClick: ()=>onViewStory(story),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-[76px] h-[76px] md:w-[84px] md:h-[84px] flex items-center justify-center",
                            children: [
                                !story.viewed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full bg-gradient-to-tr from-brand-primary via-orange-500 to-brand-primary p-[2px] animate-[spin_4s_linear_infinite]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full bg-black rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diner/StoryRail.tsx",
                                        lineNumber: 66,
                                        columnNumber: 449
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/StoryRail.tsx",
                                    lineNumber: 66,
                                    columnNumber: 291
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/StoryRail.tsx",
                                    lineNumber: 66,
                                    columnNumber: 513
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `
                absolute inset-[5px] rounded-full overflow-hidden transition-all duration-300 ease-out border bg-gray-900
                ${!story.viewed ? "border-black group-hover:inset-[3px]" : "border-transparent opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"}
            `,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: story.image,
                                        alt: story.title,
                                        className: "w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110",
                                        loading: index < 4 ? "eager" : "lazy",
                                        fetchPriority: index < 2 ? "high" : "auto",
                                        decoding: "async"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diner/StoryRail.tsx",
                                        lineNumber: 69,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/StoryRail.tsx",
                                    lineNumber: 66,
                                    columnNumber: 632
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/StoryRail.tsx",
                            lineNumber: 66,
                            columnNumber: 173
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-[10px] md:text-xs uppercase tracking-widest truncate max-w-[80px] text-center transition-colors ${!story.viewed ? "text-white font-bold" : "text-gray-500 font-medium group-hover:text-gray-300"}`,
                            children: story.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/StoryRail.tsx",
                            lineNumber: 69,
                            columnNumber: 276
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, story.id, true, {
                    fileName: "[project]/src/components/diner/StoryRail.tsx",
                    lineNumber: 66,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0));
            $[11] = onViewStory;
            $[12] = t8;
        } else {
            t8 = $[12];
        }
        t7 = stories.map(t8);
        $[8] = onViewStory;
        $[9] = stories;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[13] !== t6 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 md:gap-6 overflow-x-auto px-5 md:px-8 py-6 no-scrollbar snap-x-mandatory scroll-pl-5 md:scroll-pl-8",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/StoryRail.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
};
_c = StoryRail;
var _c;
__turbopack_context__.k.register(_c, "StoryRail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Formateador de moneda exclusivo para Colombia (COP).
 * Elimina decimales y usa separadores de miles (punto).
 */ __turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency
]);
const formatCurrency = (amount)=>{
    return amount.toLocaleString('es-CO', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diner/DishCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DishCard",
    ()=>DishCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const DishCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(81);
    if ($[0] !== "2774f728f0a5e5d601b8244fa87c16daa338a4cb1b85662d6329e5edea9fdcc6") {
        for(let $i = 0; $i < 81; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2774f728f0a5e5d601b8244fa87c16daa338a4cb1b85662d6329e5edea9fdcc6";
    }
    const { item, onClick, onAdd, layout: t1, className: t2, currency: t3 } = t0;
    const layout = t1 === undefined ? "vertical" : t1;
    const className = t2 === undefined ? "" : t2;
    const currency = t3 === undefined ? "$" : t3;
    const isHorizontal = layout === "horizontal";
    let t4;
    if ($[1] !== item.modifiers) {
        t4 = item.modifiers?.some(_temp);
        $[1] = item.modifiers;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    const hasRequiredModifiers = t4;
    let t5;
    if ($[3] !== hasRequiredModifiers || $[4] !== item || $[5] !== onAdd || $[6] !== onClick) {
        t5 = (e)=>{
            e.stopPropagation();
            if (hasRequiredModifiers) {
                onClick(item);
                return;
            }
            if (onAdd && item.available) {
                onAdd(item);
            }
        };
        $[3] = hasRequiredModifiers;
        $[4] = item;
        $[5] = onAdd;
        $[6] = onClick;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const handleQuickAdd = t5;
    if (isHorizontal) {
        let t6;
        if ($[8] !== item || $[9] !== onClick) {
            t6 = ()=>onClick(item);
            $[8] = item;
            $[9] = onClick;
            $[10] = t6;
        } else {
            t6 = $[10];
        }
        const t7 = `group flex items-center gap-4 py-4 border-b border-dashed border-white/10 hover:bg-white/[0.03] transition-all cursor-pointer rounded-xl px-2 -mx-2 ${className}`;
        let t8;
        if ($[11] !== item.image || $[12] !== item.name) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-900 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: item.image,
                    alt: item.name,
                    className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100",
                    loading: "lazy",
                    decoding: "async"
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DishCard.tsx",
                    lineNumber: 79,
                    columnNumber: 112
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DishCard.tsx",
                lineNumber: 79,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[11] = item.image;
            $[12] = item.name;
            $[13] = t8;
        } else {
            t8 = $[13];
        }
        let t9;
        if ($[14] !== item.name) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-serif text-lg text-white font-medium italic truncate pr-2 group-hover:text-brand-primary transition-colors",
                children: item.name
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DishCard.tsx",
                lineNumber: 88,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[14] = item.name;
            $[15] = t9;
        } else {
            t9 = $[15];
        }
        let t10;
        if ($[16] !== item.price) {
            t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.price);
            $[16] = item.price;
            $[17] = t10;
        } else {
            t10 = $[17];
        }
        let t11;
        if ($[18] !== currency || $[19] !== t10) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-sans text-sm font-bold text-white tracking-wide",
                children: [
                    currency,
                    " ",
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/diner/DishCard.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[18] = currency;
            $[19] = t10;
            $[20] = t11;
        } else {
            t11 = $[20];
        }
        let t12;
        if ($[21] !== t11 || $[22] !== t9) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-1",
                children: [
                    t9,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/diner/DishCard.tsx",
                lineNumber: 113,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[21] = t11;
            $[22] = t9;
            $[23] = t12;
        } else {
            t12 = $[23];
        }
        let t13;
        if ($[24] !== item.description) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-gray-500 line-clamp-1 font-medium tracking-[0.1em] uppercase mb-2",
                children: item.description
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DishCard.tsx",
                lineNumber: 122,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[24] = item.description;
            $[25] = t13;
        } else {
            t13 = $[25];
        }
        let t14;
        if ($[26] !== item.tags) {
            t14 = item.tags.slice(0, 2).map(_temp2);
            $[26] = item.tags;
            $[27] = t14;
        } else {
            t14 = $[27];
        }
        let t15;
        if ($[28] !== t14) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                children: t14
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DishCard.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[28] = t14;
            $[29] = t15;
        } else {
            t15 = $[29];
        }
        let t16;
        if ($[30] !== handleQuickAdd || $[31] !== hasRequiredModifiers || $[32] !== item.available) {
            t16 = item.available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleQuickAdd,
                className: `w-8 h-8 rounded-full border flex items-center justify-center transition-all active:scale-90
                            ${hasRequiredModifiers ? "border-white/10 text-white/50 hover:bg-white hover:text-black" : "border-white/20 text-white/50 hover:bg-brand-primary hover:border-brand-primary hover:text-white"}
                        `,
                children: hasRequiredModifiers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DishCard.tsx",
                    lineNumber: 148,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DishCard.tsx",
                    lineNumber: 148,
                    columnNumber: 81
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DishCard.tsx",
                lineNumber: 146,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0));
            $[30] = handleQuickAdd;
            $[31] = hasRequiredModifiers;
            $[32] = item.available;
            $[33] = t16;
        } else {
            t16 = $[33];
        }
        let t17;
        if ($[34] !== t15 || $[35] !== t16) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mt-1",
                children: [
                    t15,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/diner/DishCard.tsx",
                lineNumber: 158,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[34] = t15;
            $[35] = t16;
            $[36] = t17;
        } else {
            t17 = $[36];
        }
        let t18;
        if ($[37] !== t12 || $[38] !== t13 || $[39] !== t17) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0 flex flex-col justify-center",
                children: [
                    t12,
                    t13,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/diner/DishCard.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[37] = t12;
            $[38] = t13;
            $[39] = t17;
            $[40] = t18;
        } else {
            t18 = $[40];
        }
        let t19;
        if ($[41] !== t18 || $[42] !== t6 || $[43] !== t7 || $[44] !== t8) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: t6,
                className: t7,
                children: [
                    t8,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/diner/DishCard.tsx",
                lineNumber: 177,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[41] = t18;
            $[42] = t6;
            $[43] = t7;
            $[44] = t8;
            $[45] = t19;
        } else {
            t19 = $[45];
        }
        return t19;
    }
    let t6;
    if ($[46] !== item || $[47] !== onClick) {
        t6 = ()=>onClick(item);
        $[46] = item;
        $[47] = onClick;
        $[48] = t6;
    } else {
        t6 = $[48];
    }
    const t7 = `group relative flex flex-col flex-shrink-0 cursor-pointer ${className}`;
    let t8;
    if ($[49] !== item.image || $[50] !== item.name) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: item.image,
            alt: item.name,
            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100",
            loading: "lazy",
            decoding: "async"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DishCard.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = item.image;
        $[50] = item.name;
        $[51] = t8;
    } else {
        t8 = $[51];
    }
    let t9;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DishCard.tsx",
            lineNumber: 209,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t9;
    } else {
        t9 = $[52];
    }
    let t10;
    if ($[53] !== item.price) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.price);
        $[53] = item.price;
        $[54] = t10;
    } else {
        t10 = $[54];
    }
    let t11;
    if ($[55] !== currency || $[56] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-medium text-white tracking-widest",
                children: [
                    currency,
                    " ",
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/diner/DishCard.tsx",
                lineNumber: 224,
                columnNumber: 143
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DishCard.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = currency;
        $[56] = t10;
        $[57] = t11;
    } else {
        t11 = $[57];
    }
    let t12;
    if ($[58] !== item.popular) {
        t12 = item.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-fit text-[8px] font-bold uppercase tracking-widest text-black bg-white/90 backdrop-blur px-2 py-1 rounded-lg shadow-lg",
            children: "Popular"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DishCard.tsx",
            lineNumber: 233,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = item.popular;
        $[59] = t12;
    } else {
        t12 = $[59];
    }
    let t13;
    if ($[60] !== item.chefChoice) {
        t13 = item.chefChoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-fit text-[8px] font-bold uppercase tracking-widest text-white bg-brand-primary/90 backdrop-blur px-2 py-1 rounded-lg shadow-lg",
            children: "Chef's"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DishCard.tsx",
            lineNumber: 241,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = item.chefChoice;
        $[61] = t13;
    } else {
        t13 = $[61];
    }
    let t14;
    if ($[62] !== t12 || $[63] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 left-4 flex flex-col gap-2 z-10",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DishCard.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t12;
        $[63] = t13;
        $[64] = t14;
    } else {
        t14 = $[64];
    }
    let t15;
    if ($[65] !== t11 || $[66] !== t14 || $[67] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-gray-900 shadow-2xl ring-1 ring-white/5 transition-all duration-500 group-hover:shadow-brand-primary/10 group-hover:ring-white/20",
            children: [
                t8,
                t9,
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DishCard.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = t11;
        $[66] = t14;
        $[67] = t8;
        $[68] = t15;
    } else {
        t15 = $[68];
    }
    let t16;
    if ($[69] !== item.category) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[9px] text-brand-primary uppercase tracking-[0.3em] font-bold mb-2 opacity-80",
            children: item.category
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DishCard.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = item.category;
        $[70] = t16;
    } else {
        t16 = $[70];
    }
    let t17;
    if ($[71] !== item.name) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-serif text-white leading-none italic group-hover:text-brand-primary transition-colors",
            children: item.name
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DishCard.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = item.name;
        $[72] = t17;
    } else {
        t17 = $[72];
    }
    let t18;
    if ($[73] !== t16 || $[74] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 px-2 text-center transition-transform duration-500 group-hover:-translate-y-1",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DishCard.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[73] = t16;
        $[74] = t17;
        $[75] = t18;
    } else {
        t18 = $[75];
    }
    let t19;
    if ($[76] !== t15 || $[77] !== t18 || $[78] !== t6 || $[79] !== t7) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: t6,
            className: t7,
            children: [
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DishCard.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[76] = t15;
        $[77] = t18;
        $[78] = t6;
        $[79] = t7;
        $[80] = t19;
    } else {
        t19 = $[80];
    }
    return t19;
};
_c = DishCard;
function _temp(group) {
    return group.minSelection > 0;
}
function _temp2(tag) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[8px] border border-white/10 text-gray-500 px-1.5 py-0.5 rounded-md uppercase tracking-wider",
        children: tag
    }, tag, false, {
        fileName: "[project]/src/components/diner/DishCard.tsx",
        lineNumber: 308,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "DishCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diner/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
'use client';
;
;
;
const HeroSection = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "529ee13ef103d564c5fe9edea5ab2db900bb3897ab094024867d1f28a00a76e6") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "529ee13ef103d564c5fe9edea5ab2db900bb3897ab094024867d1f28a00a76e6";
    }
    const { item, onClick } = t0;
    let t1;
    if ($[1] !== item || $[2] !== onClick) {
        t1 = ()=>onClick(item);
        $[1] = item;
        $[2] = onClick;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== item.image) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: item.image,
            className: "w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80",
            alt: "Hero",
            loading: "eager",
            fetchPriority: "high"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/HeroSection.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = item.image;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/HeroSection.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 right-4 md:top-8 md:right-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-3 py-1.5 md:px-5 md:py-2 flex items-center gap-2 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        size: 10,
                        className: "text-brand-primary fill-brand-primary"
                    }, void 0, false, {
                        fileName: "[project]/src/components/diner/HeroSection.tsx",
                        lineNumber: 49,
                        columnNumber: 214
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-white",
                        children: "Elección del Chef"
                    }, void 0, false, {
                        fileName: "[project]/src/components/diner/HeroSection.tsx",
                        lineNumber: 49,
                        columnNumber: 282
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/diner/HeroSection.tsx",
                lineNumber: 49,
                columnNumber: 70
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/diner/HeroSection.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== item.name) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-6xl font-serif italic mb-2 md:mb-4 text-white/95 leading-none tracking-tight",
            children: item.name
        }, void 0, false, {
            fileName: "[project]/src/components/diner/HeroSection.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = item.name;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== item.description) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-300 line-clamp-2 mb-4 md:mb-8 font-light text-xs md:text-sm tracking-wide max-w-lg opacity-80",
            children: item.description
        }, void 0, false, {
            fileName: "[project]/src/components/diner/HeroSection.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = item.description;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex items-center gap-3 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b border-white/30 pb-1 group-hover:border-brand-primary transition-colors",
                children: [
                    "Explorar ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/src/components/diner/HeroSection.tsx",
                        lineNumber: 72,
                        columnNumber: 227
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/diner/HeroSection.tsx",
                lineNumber: 72,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/diner/HeroSection.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t5 || $[14] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white flex flex-col justify-end h-full",
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/HeroSection.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t5;
        $[14] = t6;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t1 || $[17] !== t2 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "px-6 animate-fade-in mb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: t1,
                className: "relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 shadow-2xl",
                children: [
                    t2,
                    t3,
                    t4,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/diner/HeroSection.tsx",
                lineNumber: 88,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/diner/HeroSection.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t1;
        $[17] = t2;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    return t9;
};
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diner/DinerHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DinerHeader",
    ()=>DinerHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
'use client';
;
;
;
const DinerHeader = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "895ae401e014a02071ff64435decb071c63e0730130b3d558152163471dbcf0b") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "895ae401e014a02071ff64435decb071c63e0730130b3d558152163471dbcf0b";
    }
    const { config, onOpenInfo } = t0;
    let t1;
    if ($[1] !== config.coverImage) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: config.coverImage,
            alt: "Restaurant Cover",
            className: "absolute inset-0 w-full h-full object-cover transform transition-transform duration-[3s] group-hover:scale-105"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = config.coverImage;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== config.logo || $[5] !== config.name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-14 h-14 rounded-full border-2 border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden",
            children: config.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: config.logo,
                className: "w-full h-full object-cover",
                alt: "Logo"
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DinerHeader.tsx",
                lineNumber: 40,
                columnNumber: 204
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-serif italic font-bold text-2xl text-brand-primary",
                children: config.name.charAt(0)
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DinerHeader.tsx",
                lineNumber: 40,
                columnNumber: 282
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = config.logo;
        $[5] = config.name;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#030712] rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative shrink-0",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t3;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== config.name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl md:text-2xl font-serif font-bold text-white leading-tight drop-shadow-md truncate",
            children: config.name
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = config.name;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center gap-1.5 text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-[4px] backdrop-blur-sm border border-emerald-400/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    size: 10,
                    strokeWidth: 3
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerHeader.tsx",
                    lineNumber: 73,
                    columnNumber: 161
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "uppercase tracking-wider text-[9px] font-bold",
                    children: "Abierto"
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerHeader.tsx",
                    lineNumber: 73,
                    columnNumber: 196
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-0.5 h-0.5 rounded-full bg-gray-500"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t7;
        $[13] = t8;
    } else {
        t7 = $[12];
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mt-1 text-xs font-medium text-gray-300",
            children: [
                t7,
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-1 opacity-80 truncate",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            size: 10
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DinerHeader.tsx",
                            lineNumber: 83,
                            columnNumber: 160
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "uppercase tracking-wider text-[9px]",
                            children: "Bogotá"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DinerHeader.tsx",
                            lineNumber: 83,
                            columnNumber: 180
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/DinerHeader.tsx",
                    lineNumber: 83,
                    columnNumber: 98
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t6) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0 mb-0.5",
            children: [
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 90,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t6;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== onOpenInfo) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onOpenInfo,
            className: "mb-1 p-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white/80 hover:bg-white/20 hover:text-white transition-all active:scale-95 shadow-lg",
            "aria-label": "Informaci\xF3n del restaurante",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = onOpenInfo;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t10 || $[21] !== t12 || $[22] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-0 w-full p-5 md:px-8 pb-4 flex items-end gap-4",
            children: [
                t5,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t10;
        $[21] = t12;
        $[22] = t5;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t1 || $[25] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-44 md:h-52 overflow-hidden shadow-2xl z-20 group",
            children: [
                t1,
                t2,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerHeader.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t1;
        $[25] = t13;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    return t14;
};
_c = DinerHeader;
var _c;
__turbopack_context__.k.register(_c, "DinerHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diner/DinerNavbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DinerNavbar",
    ()=>DinerNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const DinerNavbar = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "ae03d44ebd5cfbab4bfbcfbae18557d2e295cb63b4fac1d11f911835f8a67dfa") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ae03d44ebd5cfbab4bfbcfbae18557d2e295cb63b4fac1d11f911835f8a67dfa";
    }
    const { scrolled, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = t0;
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "Popular",
            "Picante",
            "Premium",
            "Vegetariano",
            "Nuevo",
            "Vino"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const QUICK_TAGS = t1;
    let t2;
    if ($[2] !== setSearchQuery) {
        t2 = (tag)=>{
            setSearchQuery(tag);
            setTimeout(()=>setIsFocused(false), 100);
        };
        $[2] = setSearchQuery;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleTagClick = t2;
    const t3 = `sticky top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled ? "bg-[#030712]/80 backdrop-blur-2xl pt-2 pb-2 border-b border-white/5 shadow-2xl" : "pt-1 pb-1 bg-transparent"}`;
    const t4 = `relative group transition-all duration-500 ease-out ${scrolled ? "mb-1" : "mb-2"}`;
    const t5 = `absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none z-10 transition-colors duration-300 ${isFocused ? "text-brand-primary" : "text-white/30"}`;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            size: 14,
            strokeWidth: 2.5
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    let t7;
    if ($[5] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t5;
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    const t8 = isFocused ? "Busca 'Trufa', 'Picante'..." : "Buscar en la colecci\xF3n...";
    let t10;
    let t9;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ()=>setIsFocused(true);
        t10 = ()=>setTimeout(()=>setIsFocused(false), 200);
        $[7] = t10;
        $[8] = t9;
    } else {
        t10 = $[7];
        t9 = $[8];
    }
    let t11;
    if ($[9] !== setSearchQuery) {
        t11 = (e)=>setSearchQuery(e.target.value);
        $[9] = setSearchQuery;
        $[10] = t11;
    } else {
        t11 = $[10];
    }
    const t12 = `
                    w-full text-white placeholder-white/20 rounded-full py-3.5 pl-12 pr-4 text-xs font-medium tracking-wide
                    focus:outline-none transition-all duration-500 backdrop-blur-md relative z-0
                    ${isFocused ? "bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] ring-1 ring-white/10" : "bg-white/5 border-white/5 border hover:bg-white/10 hover:border-white/10"}
                `;
    let t13;
    if ($[11] !== searchQuery || $[12] !== t11 || $[13] !== t12 || $[14] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: t8,
            value: searchQuery,
            onFocus: t9,
            onBlur: t10,
            onChange: t11,
            className: t12
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = searchQuery;
        $[12] = t11;
        $[13] = t12;
        $[14] = t8;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] !== searchQuery || $[17] !== setSearchQuery) {
        t14 = searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>setSearchQuery(""),
            className: "absolute right-4 top-3.5 text-white/40 hover:text-white transition-colors z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                size: 14
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DinerNavbar.tsx",
                lineNumber: 106,
                columnNumber: 160
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 106,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = searchQuery;
        $[17] = setSearchQuery;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== t13 || $[20] !== t14 || $[21] !== t7) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-20",
            children: [
                t7,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t13;
        $[20] = t14;
        $[21] = t7;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    const t16 = `
                overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                ${isFocused && !searchQuery ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
            `;
    let t17;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 text-[8px] font-bold text-gray-500 uppercase tracking-widest mr-2 shrink-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    size: 10,
                    className: "text-brand-primary"
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerNavbar.tsx",
                    lineNumber: 129,
                    columnNumber: 129
                }, ("TURBOPACK compile-time value", void 0)),
                " Tendencias"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    if ($[24] !== handleTagClick) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 overflow-x-auto no-scrollbar py-1 pl-1",
            children: [
                t17,
                QUICK_TAGS.map((tag_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onMouseDown: _temp,
                        onClick: ()=>handleTagClick(tag_0),
                        className: "shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-[9px] font-medium tracking-wide text-gray-300 hover:text-white transition-all backdrop-blur-md group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                size: 8,
                                className: "opacity-40 group-hover:text-brand-primary transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/diner/DinerNavbar.tsx",
                                lineNumber: 136,
                                columnNumber: 437
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            tag_0
                        ]
                    }, tag_0, true, {
                        fileName: "[project]/src/components/diner/DinerNavbar.tsx",
                        lineNumber: 136,
                        columnNumber: 108
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = handleTagClick;
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    let t19;
    if ($[26] !== t16 || $[27] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t16,
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t16;
        $[27] = t18;
        $[28] = t19;
    } else {
        t19 = $[28];
    }
    let t20;
    if ($[29] !== t15 || $[30] !== t19 || $[31] !== t4) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t15,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t15;
        $[30] = t19;
        $[31] = t4;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    const t21 = `
            flex space-x-3 overflow-x-auto pb-1 no-scrollbar snap-x-mandatory scroll-pl-6 mask-fade-right 
            transition-all duration-500 ease-out will-change-transform
            ${isFocused ? "opacity-20 blur-[2px] scale-[0.98] origin-top" : "opacity-100 blur-0 scale-100 origin-top"}
         `;
    let t22;
    if ($[33] !== setSelectedCategory) {
        t22 = ()=>setSelectedCategory("all");
        $[33] = setSelectedCategory;
        $[34] = t22;
    } else {
        t22 = $[34];
    }
    const t23 = `
                    px-5 py-2 rounded-full text-[9px] font-bold tracking-[0.2em] whitespace-nowrap transition-all duration-300 snap-start border backdrop-blur-md
                    ${selectedCategory === "all" ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20"}
                `;
    let t24;
    if ($[35] !== t22 || $[36] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t22,
            className: t23,
            children: "TODOS"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t22;
        $[36] = t23;
        $[37] = t24;
    } else {
        t24 = $[37];
    }
    let t25;
    if ($[38] !== selectedCategory || $[39] !== setSelectedCategory) {
        t25 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setSelectedCategory(cat.id),
                className: `
                    px-5 py-2 rounded-full text-[9px] font-bold tracking-[0.2em] whitespace-nowrap transition-all duration-300 snap-start border backdrop-blur-md
                    ${selectedCategory === cat.id ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20"}
                `,
                children: cat.name.toUpperCase()
            }, cat.id, false, {
                fileName: "[project]/src/components/diner/DinerNavbar.tsx",
                lineNumber: 189,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0)));
        $[38] = selectedCategory;
        $[39] = setSelectedCategory;
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    let t26;
    if ($[41] !== t21 || $[42] !== t24 || $[43] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t21,
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t21;
        $[42] = t24;
        $[43] = t25;
        $[44] = t26;
    } else {
        t26 = $[44];
    }
    let t27;
    if ($[45] !== t20 || $[46] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6",
            children: [
                t20,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t20;
        $[46] = t26;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] !== t27 || $[49] !== t3) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t3,
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerNavbar.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t27;
        $[49] = t3;
        $[50] = t28;
    } else {
        t28 = $[50];
    }
    return t28;
};
_s(DinerNavbar, "taoS6m9NZex5dx3pinefKTdpShE=");
_c = DinerNavbar;
function _temp(e_0) {
    return e_0.preventDefault();
}
var _c;
__turbopack_context__.k.register(_c, "DinerNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diner/DinerFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DinerFooter",
    ()=>DinerFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const DinerFooter = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "9b5ddaff250f6cc58b9f40e00774916126014fdc41ed5b5d16f51760deb2680e") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9b5ddaff250f6cc58b9f40e00774916126014fdc41ed5b5d16f51760deb2680e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "pt-12 pb-32 px-6 text-center animate-fade-in opacity-60",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 mx-auto bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-serif italic font-bold text-brand-primary",
                        children: "M"
                    }, void 0, false, {
                        fileName: "[project]/src/components/diner/DinerFooter.tsx",
                        lineNumber: 15,
                        columnNumber: 204
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerFooter.tsx",
                    lineNumber: 15,
                    columnNumber: 86
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-2",
                    children: "Experiencia Culinaria"
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerFooter.tsx",
                    lineNumber: 15,
                    columnNumber: 283
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-gray-600 font-serif italic",
                    children: "Designed by MenuOS AI"
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerFooter.tsx",
                    lineNumber: 15,
                    columnNumber: 381
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerFooter.tsx",
            lineNumber: 15,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = DinerFooter;
var _c;
__turbopack_context__.k.register(_c, "DinerFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diner/StoryViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoryViewer",
    ()=>StoryViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const StoryViewer = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(96);
    if ($[0] !== "f77382b66d11ec4a003af5e8e1a1e137b5e7dd4b211aad5b23cf1463f72a7c2f") {
        for(let $i = 0; $i < 96; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f77382b66d11ec4a003af5e8e1a1e137b5e7dd4b211aad5b23cf1463f72a7c2f";
    }
    const { stories, initialStoryId, onClose, onAction } = t0;
    let t1;
    if ($[1] !== initialStoryId || $[2] !== stories) {
        let t2;
        if ($[4] !== initialStoryId) {
            t2 = (s)=>s.id === initialStoryId;
            $[4] = initialStoryId;
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        t1 = stories.findIndex(t2);
        $[1] = initialStoryId;
        $[2] = stories;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const startIndex = t1;
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(startIndex !== -1 ? startIndex : 0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeStory = stories[currentIndex];
    let t2;
    if ($[6] !== currentIndex || $[7] !== onClose || $[8] !== stories.length) {
        t2 = ()=>{
            if (currentIndex < stories.length - 1) {
                setCurrentIndex(_temp);
                setProgress(0);
            } else {
                onClose();
            }
        };
        $[6] = currentIndex;
        $[7] = onClose;
        $[8] = stories.length;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    const handleNext = t2;
    let t3;
    if ($[10] !== currentIndex) {
        t3 = ()=>{
            if (currentIndex > 0) {
                setCurrentIndex(_temp2);
                setProgress(0);
            } else {
                setProgress(0);
            }
        };
        $[10] = currentIndex;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const handlePrev = t3;
    let t4;
    if ($[12] !== handleNext || $[13] !== isPaused) {
        t4 = ()=>{
            if (isPaused) {
                return;
            }
            const timer = setInterval(()=>{
                setProgress((prev_1)=>{
                    if (prev_1 >= 100) {
                        handleNext();
                        return 0;
                    }
                    return prev_1 + 0.4;
                });
            }, 20);
            return ()=>clearInterval(timer);
        };
        $[12] = handleNext;
        $[13] = isPaused;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== currentIndex || $[16] !== handleNext || $[17] !== isPaused) {
        t5 = [
            currentIndex,
            isPaused,
            handleNext
        ];
        $[15] = currentIndex;
        $[16] = handleNext;
        $[17] = isPaused;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[19] !== handleNext || $[20] !== handlePrev || $[21] !== onClose) {
        t6 = ()=>{
            const handleKeyDown = (e)=>{
                if (e.key === "ArrowRight") {
                    handleNext();
                }
                if (e.key === "ArrowLeft") {
                    handlePrev();
                }
                if (e.key === "Escape") {
                    onClose();
                }
                if (e.key === " ") {
                    setIsPaused(_temp3);
                }
            };
            window.addEventListener("keydown", handleKeyDown);
            return ()=>window.removeEventListener("keydown", handleKeyDown);
        };
        t7 = [
            handleNext,
            handlePrev,
            onClose
        ];
        $[19] = handleNext;
        $[20] = handlePrev;
        $[21] = onClose;
        $[22] = t6;
        $[23] = t7;
    } else {
        t6 = $[22];
        t7 = $[23];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    if (!activeStory) {
        return null;
    }
    let t8;
    if ($[24] !== activeStory.image) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-0 opacity-40 blur-3xl scale-125",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: activeStory.image,
                className: "w-full h-full object-cover",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/src/components/diner/StoryViewer.tsx",
                lineNumber: 154,
                columnNumber: 78
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 154,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = activeStory.image;
        $[25] = t8;
    } else {
        t8 = $[25];
    }
    const t9 = `w-full h-full object-cover transition-transform duration-[10s] ease-linear ${isPaused ? "scale-100" : "scale-110"}`;
    let t10;
    if ($[26] !== activeStory.id || $[27] !== activeStory.image || $[28] !== activeStory.title || $[29] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: activeStory.image,
            className: t9,
            alt: activeStory.title
        }, activeStory.id, false, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = activeStory.id;
        $[27] = activeStory.image;
        $[28] = activeStory.title;
        $[29] = t9;
        $[30] = t10;
    } else {
        t10 = $[30];
    }
    let t11;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t11;
    } else {
        t11 = $[31];
    }
    let t12;
    if ($[32] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-10 bg-black",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t10;
        $[33] = t12;
    } else {
        t12 = $[33];
    }
    let t13;
    if ($[34] !== currentIndex || $[35] !== progress || $[36] !== stories) {
        let t14;
        if ($[38] !== currentIndex || $[39] !== progress) {
            t14 = (story, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 bg-white/20 rounded-full overflow-hidden h-full backdrop-blur-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]",
                        style: {
                            width: index === currentIndex ? `${progress}%` : index < currentIndex ? "100%" : "0%",
                            transition: index === currentIndex ? "width 20ms linear" : "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/diner/StoryViewer.tsx",
                        lineNumber: 191,
                        columnNumber: 135
                    }, ("TURBOPACK compile-time value", void 0))
                }, story.id, false, {
                    fileName: "[project]/src/components/diner/StoryViewer.tsx",
                    lineNumber: 191,
                    columnNumber: 31
                }, ("TURBOPACK compile-time value", void 0));
            $[38] = currentIndex;
            $[39] = progress;
            $[40] = t14;
        } else {
            t14 = $[40];
        }
        t13 = stories.map(t14);
        $[34] = currentIndex;
        $[35] = progress;
        $[36] = stories;
        $[37] = t13;
    } else {
        t13 = $[37];
    }
    let t14;
    if ($[41] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1.5 h-1",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t13;
        $[42] = t14;
    } else {
        t14 = $[42];
    }
    let t15;
    if ($[43] !== activeStory.image) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-full border border-white/20 p-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full rounded-full overflow-hidden bg-gray-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: activeStory.image,
                    className: "w-full h-full object-cover",
                    alt: "Avatar"
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/StoryViewer.tsx",
                    lineNumber: 219,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/diner/StoryViewer.tsx",
                lineNumber: 219,
                columnNumber: 80
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = activeStory.image;
        $[44] = t15;
    } else {
        t15 = $[44];
    }
    let t16;
    if ($[45] !== activeStory.title) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-bold text-white drop-shadow-md leading-tight",
            children: activeStory.title
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = activeStory.title;
        $[46] = t16;
    } else {
        t16 = $[46];
    }
    const t17 = activeStory.type === "dish" ? "Plato Destacado" : activeStory.type === "chef" ? "Backstage" : "Promo";
    let t18;
    if ($[47] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-gray-300 uppercase tracking-widest drop-shadow-md",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t17;
        $[48] = t18;
    } else {
        t18 = $[48];
    }
    let t19;
    if ($[49] !== t16 || $[50] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t16;
        $[50] = t18;
        $[51] = t19;
    } else {
        t19 = $[51];
    }
    let t20;
    if ($[52] !== t15 || $[53] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t15,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t15;
        $[53] = t19;
        $[54] = t20;
    } else {
        t20 = $[54];
    }
    let t21;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t21;
    } else {
        t21 = $[55];
    }
    let t22;
    if ($[56] !== onClose) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "p-2 hover:bg-white/10 rounded-full transition-colors text-white active:scale-90",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = onClose;
        $[57] = t22;
    } else {
        t22 = $[57];
    }
    let t23;
    if ($[58] !== t20 || $[59] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mt-2",
            children: [
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t20;
        $[59] = t22;
        $[60] = t23;
    } else {
        t23 = $[60];
    }
    let t24;
    if ($[61] !== t14 || $[62] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 pointer-events-auto",
            children: [
                t14,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t14;
        $[62] = t23;
        $[63] = t24;
    } else {
        t24 = $[63];
    }
    let t25;
    if ($[64] !== activeStory.linkedItemId || $[65] !== activeStory.type || $[66] !== isPaused || $[67] !== onAction) {
        t25 = activeStory.linkedItemId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-slide-up",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onAction(activeStory.linkedItemId),
                    className: "group bg-white/10 backdrop-blur-xl border border-white/30 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-xl flex items-center gap-3 mx-auto active:scale-95",
                    children: [
                        activeStory.type === "dish" ? "Ver Plato" : "Ver Detalles",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 14,
                            className: "group-hover:translate-x-1 transition-transform"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/StoryViewer.tsx",
                            lineNumber: 295,
                            columnNumber: 448
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/StoryViewer.tsx",
                    lineNumber: 295,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[9px] text-white/50 mt-4 uppercase tracking-widest font-medium animate-pulse",
                    children: isPaused ? "Pausado" : "Mant\xE9n presionado para pausar"
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/StoryViewer.tsx",
                    lineNumber: 295,
                    columnNumber: 542
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 295,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0));
        $[64] = activeStory.linkedItemId;
        $[65] = activeStory.type;
        $[66] = isPaused;
        $[67] = onAction;
        $[68] = t25;
    } else {
        t25 = $[68];
    }
    let t26;
    if ($[69] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center pointer-events-auto pb-8 md:pb-6 relative z-30",
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t25;
        $[70] = t26;
    } else {
        t26 = $[70];
    }
    let t27;
    if ($[71] !== t24 || $[72] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-20 flex-1 flex flex-col justify-between pb-10 pt-4 px-4 pointer-events-none",
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t24;
        $[72] = t26;
        $[73] = t27;
    } else {
        t27 = $[73];
    }
    let t28;
    let t29;
    let t30;
    let t31;
    let t32;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ()=>setIsPaused(true);
        t29 = ()=>setIsPaused(false);
        t30 = ()=>setIsPaused(false);
        t31 = ()=>setIsPaused(true);
        t32 = ()=>setIsPaused(false);
        $[74] = t28;
        $[75] = t29;
        $[76] = t30;
        $[77] = t31;
        $[78] = t32;
    } else {
        t28 = $[74];
        t29 = $[75];
        t30 = $[76];
        t31 = $[77];
        t32 = $[78];
    }
    let t33;
    if ($[79] !== handlePrev) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[30%] h-full cursor-pointer active:opacity-10 transition-opacity bg-white/0 hover:bg-white/[0.02]",
            onClick: handlePrev,
            onMouseDown: t28,
            onMouseUp: t29,
            onMouseLeave: t30,
            onTouchStart: t31,
            onTouchEnd: t32
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = handlePrev;
        $[80] = t33;
    } else {
        t33 = $[80];
    }
    let t34;
    let t35;
    let t36;
    let t37;
    let t38;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = ()=>setIsPaused(true);
        t35 = ()=>setIsPaused(false);
        t36 = ()=>setIsPaused(false);
        t37 = ()=>setIsPaused(true);
        t38 = ()=>setIsPaused(false);
        $[81] = t34;
        $[82] = t35;
        $[83] = t36;
        $[84] = t37;
        $[85] = t38;
    } else {
        t34 = $[81];
        t35 = $[82];
        t36 = $[83];
        t37 = $[84];
        t38 = $[85];
    }
    let t39;
    if ($[86] !== handleNext) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[70%] h-full cursor-pointer active:opacity-10 transition-opacity bg-white/0 hover:bg-white/[0.02]",
            onClick: handleNext,
            onMouseDown: t34,
            onMouseUp: t35,
            onMouseLeave: t36,
            onTouchStart: t37,
            onTouchEnd: t38
        }, void 0, false, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[86] = handleNext;
        $[87] = t39;
    } else {
        t39 = $[87];
    }
    let t40;
    if ($[88] !== t33 || $[89] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-15 flex",
            children: [
                t33,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[88] = t33;
        $[89] = t39;
        $[90] = t40;
    } else {
        t40 = $[90];
    }
    let t41;
    if ($[91] !== t12 || $[92] !== t27 || $[93] !== t40 || $[94] !== t8) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[70] bg-black flex flex-col animate-fade-in touch-none select-none",
            onContextMenu: _temp4,
            children: [
                t8,
                t12,
                t27,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/StoryViewer.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[91] = t12;
        $[92] = t27;
        $[93] = t40;
        $[94] = t8;
        $[95] = t41;
    } else {
        t41 = $[95];
    }
    return t41;
};
_s(StoryViewer, "3AKaGUufVvKjYe4QMjfyDHPWqMU=");
_c = StoryViewer;
function _temp(prev) {
    return prev + 1;
}
function _temp2(prev_0) {
    return prev_0 - 1;
}
function _temp3(prev_2) {
    return !prev_2;
}
function _temp4(e_0) {
    return e_0.preventDefault();
}
var _c;
__turbopack_context__.k.register(_c, "StoryViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diner/SectionRow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionRow",
    ()=>SectionRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DishCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diner/DishCard.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const SectionRow = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "fb8b8252016eb625d2cc2bea8c5608f88a5ba94cce07b3123324e550d112ff42") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fb8b8252016eb625d2cc2bea8c5608f88a5ba94cce07b3123324e550d112ff42";
    }
    const { title, items, onItemClick, currency: t1 } = t0;
    const currency = t1 === undefined ? "$" : t1;
    if (items.length === 0) {
        return null;
    }
    let t2;
    if ($[1] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-serif italic text-white/90",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/diner/SectionRow.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = title;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2 hover:text-white transition-colors group pb-1 border-b border-transparent hover:border-white",
            children: [
                "Ver Todo ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    size: 10,
                    className: "group-hover:translate-x-1 transition-transform"
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/SectionRow.tsx",
                    lineNumber: 42,
                    columnNumber: 219
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/SectionRow.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 flex justify-between items-end mb-6",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/SectionRow.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t2;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== currency || $[7] !== items || $[8] !== onItemClick) {
        let t6;
        if ($[10] !== currency || $[11] !== onItemClick) {
            t6 = (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DishCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DishCard"], {
                    item: item,
                    onClick: onItemClick,
                    layout: "vertical",
                    className: "w-64 snap-start",
                    currency: currency
                }, item.id, false, {
                    fileName: "[project]/src/components/diner/SectionRow.tsx",
                    lineNumber: 59,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0));
            $[10] = currency;
            $[11] = onItemClick;
            $[12] = t6;
        } else {
            t6 = $[12];
        }
        t5 = items.map(t6);
        $[6] = currency;
        $[7] = items;
        $[8] = onItemClick;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-6 overflow-x-auto pb-8 px-6 no-scrollbar snap-x-mandatory scroll-pl-6",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/diner/SectionRow.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t4 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-8 border-b border-white/5",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/SectionRow.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t4;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    return t7;
};
_c = SectionRow;
var _c;
__turbopack_context__.k.register(_c, "SectionRow");
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
"[project]/src/components/diner/DishDetailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DishDetailModal",
    ()=>DishDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wine.js [app-client] (ecmascript) <export default as Wine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/beer.js [app-client] (ecmascript) <export default as Beer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const DishDetailModal = ({ item, menuItems, onClose, onAdd, isLiked, onToggleLike, currency = '$' })=>{
    _s();
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selections, setSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isPairingSelected, setIsPairingSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAdded, setIsAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- MOTOR DE INTELIGENCIA DE UPSELL (Validado v2) ---
    const smartRecommendation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DishDetailModal.useMemo[smartRecommendation]": ()=>{
            if (!item) return null;
            // A. Búsqueda Exacta (Nivel 1)
            if (item.pairing) {
                // Filtrar palabras cortas para evitar falsos positivos con "de", "con", "el"
                const searchTerms = item.pairing.toLowerCase().split(' ').filter({
                    "DishDetailModal.useMemo[smartRecommendation].searchTerms": (w)=>w.length > 3
                }["DishDetailModal.useMemo[smartRecommendation].searchTerms"]);
                const foundItem = menuItems.find({
                    "DishDetailModal.useMemo[smartRecommendation].foundItem": (i)=>i.available && // Solo sugerir si está disponible
                        searchTerms.some({
                            "DishDetailModal.useMemo[smartRecommendation].foundItem": (term)=>i.name.toLowerCase().includes(term)
                        }["DishDetailModal.useMemo[smartRecommendation].foundItem"])
                }["DishDetailModal.useMemo[smartRecommendation].foundItem"]);
                if (foundItem) return {
                    item: foundItem,
                    type: 'match',
                    label: 'Maridaje Perfecto'
                };
                // Si no existe, crear VIRTUAL ITEM (Nivel 2)
                // FIX CRÍTICO: Usamos guión bajo (_) en el ID para evitar que useCart lo agrupe incorrectamente
                return {
                    item: {
                        id: `pairing_${item.id}`,
                        // ID Único vinculado al padre
                        name: item.pairing,
                        price: 24000,
                        // Precio realista para Bebida Premium
                        image: '',
                        category: 'drinks',
                        tags: [
                            'Recomendado'
                        ],
                        description: 'Selección especial del Sommelier',
                        available: true
                    },
                    type: 'virtual',
                    label: 'Recomendación del Chef'
                };
            }
            // B. Deducción Contextual (Nivel 3 - "Inteligencia")
            let categoryTarget = 'drinks';
            let label = 'Para Acompañar';
            let searchTerm = ''; // Opcional: refinar búsqueda dentro de categoría
            if (item.category === 'desserts') {
                // Si es postre, buscar cafés o digestivos primero
                categoryTarget = 'drinks'; // Asumiendo que cafés están en drinks o categoría propia
                searchTerm = 'café';
                label = 'Perfecto con Café';
            } else if (item.category === 'burgers' || item.category === 'mains') {
                categoryTarget = 'drinks';
                label = 'Mejora tu Experiencia';
            } else if (item.category === 'starters') {
                // Si es entrada, quizás sugerir otra entrada para compartir o bebida ligera
                categoryTarget = 'drinks';
                label = 'Para Empezar';
            }
            // Buscar el mejor candidato disponible
            const fallbackItem = menuItems.filter({
                "DishDetailModal.useMemo[smartRecommendation]": (i_0)=>i_0.available && (i_0.category === categoryTarget || i_0.category === 'drinks') && (searchTerm ? i_0.name.toLowerCase().includes(searchTerm) : true) && i_0.id !== item.id // No sugerirse a sí mismo
            }["DishDetailModal.useMemo[smartRecommendation]"])// Ordenar por: Tiene Tag 'Popular' > Precio más alto (Upsell)
            .sort({
                "DishDetailModal.useMemo[smartRecommendation]": (a, b)=>(b.popular ? 1 : 0) - (a.popular ? 1 : 0) || b.price - a.price
            }["DishDetailModal.useMemo[smartRecommendation]"])[0];
            if (fallbackItem) return {
                item: fallbackItem,
                type: 'context',
                label: label
            };
            return null;
        }
    }["DishDetailModal.useMemo[smartRecommendation]"], [
        item,
        menuItems
    ]);
    // Reset al abrir
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DishDetailModal.useEffect": ()=>{
            if (item) {
                setQuantity(1);
                setSelections({});
                setIsPairingSelected(false);
                setIsAdded(false);
            }
        }
    }["DishDetailModal.useEffect"], [
        item
    ]);
    // Cálculo de Precios
    const unitPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DishDetailModal.useMemo[unitPrice]": ()=>{
            if (!item) return 0;
            let total = item.price;
            if (item.modifiers) {
                item.modifiers.forEach({
                    "DishDetailModal.useMemo[unitPrice]": (group)=>{
                        const groupSelections = selections[group.id] || [];
                        groupSelections.forEach({
                            "DishDetailModal.useMemo[unitPrice]": (optId)=>{
                                const option = group.options.find({
                                    "DishDetailModal.useMemo[unitPrice].option": (o)=>o.id === optId
                                }["DishDetailModal.useMemo[unitPrice].option"]);
                                if (option) total += option.price;
                            }
                        }["DishDetailModal.useMemo[unitPrice]"]);
                    }
                }["DishDetailModal.useMemo[unitPrice]"]);
            }
            return total;
        }
    }["DishDetailModal.useMemo[unitPrice]"], [
        item,
        selections
    ]);
    const upsellPrice = isPairingSelected && smartRecommendation ? smartRecommendation.item.price : 0;
    // Lógica de Bundle: 1 Plato Principal + 1 Bebida Sugerida
    const totalDisplayPrice = unitPrice * quantity + upsellPrice;
    const isValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DishDetailModal.useMemo[isValid]": ()=>{
            if (!item || !item.modifiers) return true;
            return item.modifiers.every({
                "DishDetailModal.useMemo[isValid]": (group_0)=>{
                    const currentCount = (selections[group_0.id] || []).length;
                    return currentCount >= group_0.minSelection;
                }
            }["DishDetailModal.useMemo[isValid]"]);
        }
    }["DishDetailModal.useMemo[isValid]"], [
        item,
        selections
    ]);
    // Handlers
    const toggleSelection = (groupId, optionId, max)=>{
        setSelections((prev)=>{
            const current = prev[groupId] || [];
            const isSelected = current.includes(optionId);
            if (max === 1) return {
                ...prev,
                [groupId]: [
                    optionId
                ]
            }; // Radio behavior
            if (isSelected) return {
                ...prev,
                [groupId]: current.filter((id)=>id !== optionId)
            };
            if (current.length >= max) return prev;
            return {
                ...prev,
                [groupId]: [
                    ...current,
                    optionId
                ]
            };
        });
    };
    const handleAdd = ()=>{
        if (item && isValid) {
            // 1. Agregar Main Item
            const selectedOptionsList = [];
            if (item.modifiers) {
                item.modifiers.forEach((group_1)=>{
                    (selections[group_1.id] || []).forEach((optId_0)=>{
                        const opt = group_1.options.find((o_0)=>o_0.id === optId_0);
                        if (opt) selectedOptionsList.push({
                            groupName: group_1.name,
                            optionName: opt.name,
                            price: opt.price
                        });
                    });
                });
            }
            onAdd({
                ...item,
                price: unitPrice,
                quantity: quantity,
                selectedOptions: selectedOptionsList,
                finalPrice: unitPrice * quantity
            });
            // 2. Agregar Upsell (Si fue seleccionado)
            if (isPairingSelected && smartRecommendation) {
                onAdd({
                    ...smartRecommendation.item,
                    quantity: 1,
                    // Siempre 1 por bundle
                    finalPrice: smartRecommendation.item.price
                });
            }
            setIsAdded(true);
            setTimeout(()=>{
                if (item) onClose();
            }, 800);
        }
    };
    // Helper UI Icons
    const getUpsellIcon = (itemName)=>{
        const lower = itemName.toLowerCase();
        if (lower.includes('caf') || lower.includes('coffee') || lower.includes('espresso')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            size: 24,
            strokeWidth: 1.5
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
            lineNumber: 199,
            columnNumber: 97
        }, ("TURBOPACK compile-time value", void 0));
        if (lower.includes('cerveza') || lower.includes('beer') || lower.includes('lager') || lower.includes('stout')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beer$3e$__["Beer"], {
            size: 24,
            strokeWidth: 1.5
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
            lineNumber: 200,
            columnNumber: 123
        }, ("TURBOPACK compile-time value", void 0));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wine$3e$__["Wine"], {
            size: 24,
            strokeWidth: 1.5
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
            lineNumber: 201,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: !!item,
        onClose: onClose,
        title: " ",
        variant: "immersive",
        children: item && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#050505] min-h-full flex flex-col relative pb-32",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-[45vh] w-full shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.image,
                            alt: item.name,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                            lineNumber: 208,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                            lineNumber: 209,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 p-6 pt-12 flex gap-3 w-full justify-between items-start pointer-events-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggleLike,
                                className: `w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center transition-all shadow-xl active:scale-90 ${isLiked ? 'bg-brand-primary border-brand-primary text-white' : 'bg-black/30 border-white/10 text-white hover:bg-white hover:text-black'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    size: 18,
                                    className: isLiked ? "fill-white" : ""
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                    lineNumber: 212,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                lineNumber: 211,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                            lineNumber: 210,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                    lineNumber: 207,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 -mt-12 relative z-10 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-3",
                                    children: [
                                        item.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-bold bg-white text-black px-2 py-0.5 rounded-sm uppercase tracking-wider shadow-[0_0_10px_rgba(255,255,255,0.4)]",
                                            children: "Popular"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                            lineNumber: 221,
                                            columnNumber: 50
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-bold text-brand-primary border border-brand-primary/30 bg-brand-primary/5 px-2 py-0.5 rounded uppercase tracking-wider",
                                            children: item.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                            lineNumber: 222,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                    lineNumber: 220,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-serif text-white italic leading-[0.9] mb-4 tracking-tight",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                    lineNumber: 224,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-sm font-light leading-relaxed opacity-90",
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                    lineNumber: 225,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                            lineNumber: 219,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        item.modifiers && item.modifiers.map((group_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-end mb-4 border-b border-white/5 pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-bold text-gray-400 uppercase tracking-[0.2em]",
                                                children: group_2.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                lineNumber: 231,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${group_2.minSelection > 0 ? 'bg-brand-primary/20 text-brand-primary' : 'bg-white/10 text-gray-400'}`,
                                                children: group_2.minSelection > 0 ? 'Requerido' : 'Opcional'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                lineNumber: 232,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                        lineNumber: 230,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: group_2.options.map((option_0)=>{
                                            const isSelected_0 = (selections[group_2.id] || []).includes(option_0.id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>toggleSelection(group_2.id, option_0.id, group_2.maxSelection),
                                                className: `flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-300 active:scale-[0.99] ${isSelected_0 ? 'bg-white/[0.08] border-brand-primary/50 shadow-lg' : 'bg-white/[0.03] border-transparent hover:bg-white/[0.06]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${isSelected_0 ? 'bg-brand-primary border-brand-primary text-white scale-110' : 'border-gray-600'}`,
                                                                children: isSelected_0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 12,
                                                                    strokeWidth: 4
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 74
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-sm ${isSelected_0 ? 'text-white font-medium' : 'text-gray-400 font-light'}`,
                                                                children: option_0.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    option_0.price > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-white bg-black/40 px-2 py-1 rounded",
                                                        children: [
                                                            "+",
                                                            currency,
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(option_0.price)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 72
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, option_0.id, true, {
                                                fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                lineNumber: 239,
                                                columnNumber: 22
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                        lineNumber: 236,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, group_2.id, true, {
                                fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                lineNumber: 229,
                                columnNumber: 74
                            }, ("TURBOPACK compile-time value", void 0))),
                        smartRecommendation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 mb-8 animate-slide-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-4 pl-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 14,
                                            className: "text-brand-primary animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                            lineNumber: 255,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xs font-bold text-gray-300 uppercase tracking-[0.2em]",
                                            children: smartRecommendation.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                            lineNumber: 256,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                    lineNumber: 254,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setIsPairingSelected(!isPairingSelected),
                                    className: `
                                relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer group
                                ${isPairingSelected ? 'bg-brand-primary/10 border-brand-primary shadow-[0_0_30px_rgba(var(--color-brand-primary),0.15)]' : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.05]'}
                            `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center p-4 gap-5 relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-16 h-16 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500 relative overflow-hidden ${isPairingSelected ? 'border-brand-primary bg-black' : 'border-white/10 bg-white/5'}`,
                                                    children: [
                                                        smartRecommendation.item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: smartRecommendation.item.image,
                                                            className: "w-full h-full object-cover opacity-90",
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 79
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `transition-colors ${isPairingSelected ? 'text-brand-primary' : 'text-gray-500'}`,
                                                            children: getUpsellIcon(smartRecommendation.item.name)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 183
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isPairingSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-brand-primary/20 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 67
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-lg font-serif italic truncate pr-2 transition-colors ${isPairingSelected ? 'text-white' : 'text-gray-300'}`,
                                                                    children: smartRecommendation.item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs font-bold px-2 py-1 rounded border transition-colors ${isPairingSelected ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white/10 text-white border-transparent'}`,
                                                                    children: [
                                                                        "+",
                                                                        currency,
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(smartRecommendation.item.price)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-500 mt-1 uppercase tracking-wider line-clamp-1",
                                                            children: smartRecommendation.item.description || "Complemento ideal sugerido"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${isPairingSelected ? 'border-brand-primary' : 'border-gray-600'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_10px_currentColor] transition-all duration-300 ${isPairingSelected ? 'scale-100' : 'scale-0'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                            lineNumber: 263,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-transparent transition-opacity duration-500 ${isPairingSelected ? 'opacity-100' : 'opacity-0'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                            lineNumber: 295,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                    lineNumber: 259,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                            lineNumber: 253,
                            columnNumber: 49
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                    lineNumber: 218,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-0 left-0 right-0 p-4 pb-6 md:p-6 bg-[#050505]/95 backdrop-blur-xl border-t border-white/10 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto flex gap-4 h-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-white/5 rounded-2xl border border-white/10 px-1 shrink-0 h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setQuantity(Math.max(1, quantity - 1)),
                                        className: "w-12 h-full flex items-center justify-center text-white hover:text-brand-primary active:scale-75 transition-all",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                            lineNumber: 305,
                                            columnNumber: 220
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                        lineNumber: 305,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-8 text-center font-bold text-xl text-white tabular-nums",
                                        children: quantity
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                        lineNumber: 306,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setQuantity(quantity + 1),
                                        className: "w-12 h-full flex items-center justify-center text-white hover:text-brand-primary active:scale-75 transition-all",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                            lineNumber: 307,
                                            columnNumber: 207
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                        lineNumber: 307,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                lineNumber: 304,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAdd,
                                disabled: !isValid || isAdded,
                                className: `
                            flex-1 h-full rounded-2xl font-bold text-xs tracking-[0.15em] uppercase shadow-2xl transition-all flex items-center justify-between px-8 transform active:scale-[0.98]
                            ${isAdded ? 'bg-green-500 text-white border-green-500' : isValid ? 'bg-white text-black hover:bg-brand-primary hover:text-white hover:border-brand-primary' : 'bg-gray-800 text-gray-500 cursor-not-allowed border-white/5 border'}
                        `,
                                children: isAdded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex justify-center items-center gap-3 animate-fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                            lineNumber: 315,
                                            columnNumber: 123
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Listo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                            lineNumber: 315,
                                            columnNumber: 150
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                    lineNumber: 315,
                                    columnNumber: 44
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start leading-none gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-black",
                                                    children: isValid ? 'Agregar' : 'Elige Opciones'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isPairingSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-normal normal-case opacity-70 tracking-normal",
                                                    children: [
                                                        "+ ",
                                                        smartRecommendation?.item.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 67
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                            lineNumber: 316,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-serif italic font-medium",
                                            children: [
                                                currency,
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(totalDisplayPrice)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                            lineNumber: 320,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                                lineNumber: 311,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                        lineNumber: 302,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DishDetailModal.tsx",
                    lineNumber: 301,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DishDetailModal.tsx",
            lineNumber: 204,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/diner/DishDetailModal.tsx",
        lineNumber: 203,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DishDetailModal, "LtfSYQ4pwuADdNTx5fSw0TinRws=");
_c = DishDetailModal;
var _c;
__turbopack_context__.k.register(_c, "DishDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diner/SelectionDock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectionDock",
    ()=>SelectionDock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const SelectionDock = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "7c65317b839cea352d82beea8cd803da64e0dc6ea14fcafe2ee5fc00d1e2456f") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7c65317b839cea352d82beea8cd803da64e0dc6ea14fcafe2ee5fc00d1e2456f";
    }
    const { selection, onViewOrder, currency: t1 } = t0;
    const currency = t1 === undefined ? "$" : t1;
    const [animate, setAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    let t3;
    if ($[1] !== selection.length) {
        t2 = ()=>{
            if (selection.length > 0) {
                setAnimate(true);
                const timer = setTimeout(()=>setAnimate(false), 300);
                return ()=>clearTimeout(timer);
            }
        };
        t3 = [
            selection.length
        ];
        $[1] = selection.length;
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (selection.length === 0) {
        return null;
    }
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[4] !== animate || $[5] !== currency || $[6] !== onViewOrder || $[7] !== selection) {
        const total = selection.reduce(_temp, 0);
        t14 = "fixed bottom-6 left-6 right-6 md:right-32 z-40 animate-slide-up pointer-events-none";
        t12 = onViewOrder;
        t13 = `
            pointer-events-auto max-w-md mx-auto md:mx-0 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-2 pr-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center justify-between cursor-pointer group hover:bg-white/15 transition-all duration-300
            ${animate ? "scale-105 bg-white/20" : "scale-100"}
        `;
        t10 = "flex items-center gap-4";
        const t15 = `
                bg-brand-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-transform
                ${animate ? "scale-110" : "group-hover:scale-105"}
            `;
        if ($[19] !== selection.length || $[20] !== t15) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t15,
                children: selection.length
            }, void 0, false, {
                fileName: "[project]/src/components/diner/SelectionDock.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[19] = selection.length;
            $[20] = t15;
            $[21] = t11;
        } else {
            t11 = $[21];
        }
        t8 = "flex flex-col";
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] text-gray-400 uppercase tracking-widest font-bold",
                children: "Tu Selección"
            }, void 0, false, {
                fileName: "[project]/src/components/diner/SelectionDock.tsx",
                lineNumber: 84,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[22] = t9;
        } else {
            t9 = $[22];
        }
        t4 = "text-white font-serif italic text-lg leading-none";
        t5 = currency;
        t6 = " ";
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(total);
        $[4] = animate;
        $[5] = currency;
        $[6] = onViewOrder;
        $[7] = selection;
        $[8] = t10;
        $[9] = t11;
        $[10] = t12;
        $[11] = t13;
        $[12] = t14;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
        $[18] = t9;
    } else {
        t10 = $[8];
        t11 = $[9];
        t12 = $[10];
        t13 = $[11];
        t14 = $[12];
        t4 = $[13];
        t5 = $[14];
        t6 = $[15];
        t7 = $[16];
        t8 = $[17];
        t9 = $[18];
    }
    let t15;
    if ($[23] !== t4 || $[24] !== t5 || $[25] !== t6 || $[26] !== t7) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t4,
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/SelectionDock.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t4;
        $[24] = t5;
        $[25] = t6;
        $[26] = t7;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t15 || $[29] !== t8 || $[30] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/SelectionDock.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t15;
        $[29] = t8;
        $[30] = t9;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== t10 || $[33] !== t11 || $[34] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/SelectionDock.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t10;
        $[33] = t11;
        $[34] = t16;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Revisar"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/SelectionDock.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white pr-2",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/diner/SelectionDock.tsx",
                        lineNumber: 161,
                        columnNumber: 270
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/SelectionDock.tsx",
                    lineNumber: 161,
                    columnNumber: 117
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/SelectionDock.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== t12 || $[39] !== t13 || $[40] !== t17) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: t12,
            className: t13,
            children: [
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/SelectionDock.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t12;
        $[39] = t13;
        $[40] = t17;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t14 || $[43] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t14,
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/diner/SelectionDock.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t14;
        $[43] = t20;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    return t21;
};
_s(SelectionDock, "z07FJ1oDfa7+qdGd0fWFFN4Jr94=");
_c = SelectionDock;
function _temp(acc, item) {
    const itemTotal = item.finalPrice || item.price * (item.quantity || 1);
    return acc + itemTotal;
}
var _c;
__turbopack_context__.k.register(_c, "SelectionDock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diner/OrderSummaryModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderSummaryModal",
    ()=>OrderSummaryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const OrderSummaryModal = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "7ec260675f885a6594a58ee9620dcb77b475c157c5292ecbcb551b28099b32bf") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7ec260675f885a6594a58ee9620dcb77b475c157c5292ecbcb551b28099b32bf";
    }
    const { isOpen, onClose, selection, onRemoveItem, onUpdateQuantity, onConfirmOrder, currencySymbol: t1, isLoading: t2 } = t0;
    const currencySymbol = t1 === undefined ? "$" : t1;
    const isLoading = t2 === undefined ? false : t2;
    let T0;
    let handlePay;
    let t10;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== currencySymbol || $[2] !== isOpen || $[3] !== onClose || $[4] !== onConfirmOrder || $[5] !== onRemoveItem || $[6] !== onUpdateQuantity || $[7] !== selection) {
        const subtotal = selection.reduce(_temp, 0);
        const tax = subtotal * 0.08;
        const total = subtotal + tax;
        let t11;
        if ($[18] !== onConfirmOrder) {
            t11 = ()=>{
                onConfirmOrder();
            };
            $[18] = onConfirmOrder;
            $[19] = t11;
        } else {
            t11 = $[19];
        }
        handlePay = t11;
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"];
        t7 = isOpen;
        t8 = onClose;
        t9 = " ";
        t10 = "default";
        t3 = "px-6 pb-6";
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                            className: "text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                            lineNumber: 71,
                            columnNumber: 166
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                        lineNumber: 71,
                        columnNumber: 46
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-serif text-white italic",
                        children: "Tu Cuenta"
                    }, void 0, false, {
                        fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                        lineNumber: 71,
                        columnNumber: 209
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 uppercase tracking-widest mt-1",
                        children: "Revisa tus elecciones"
                    }, void 0, false, {
                        fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                        lineNumber: 71,
                        columnNumber: 277
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                lineNumber: 71,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[20] = t4;
        } else {
            t4 = $[20];
        }
        let t12;
        if ($[21] !== currencySymbol || $[22] !== onRemoveItem || $[23] !== onUpdateQuantity || $[24] !== selection) {
            t12 = selection.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-gray-500 py-8 text-sm",
                children: "No has seleccionado nada aún."
            }, void 0, false, {
                fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                lineNumber: 78,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)) : selection.map((item_0, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start bg-white/5 p-4 rounded-xl border border-white/5 group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 pr-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-medium text-lg leading-tight",
                                        children: item_0.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                        lineNumber: 78,
                                        columnNumber: 366
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 320
                                }, ("TURBOPACK compile-time value", void 0)),
                                item_0.selectedOptions && item_0.selectedOptions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-0 space-y-1 mt-2 mb-2",
                                    children: item_0.selectedOptions.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-gray-400 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1 h-1 rounded-full bg-brand-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 676
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: opt.optionName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 733
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                opt.price > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/60",
                                                    children: [
                                                        "+",
                                                        currencySymbol,
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(opt.price)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 780
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                            lineNumber: 78,
                                            columnNumber: 601
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 519
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                            lineNumber: 78,
                            columnNumber: 291
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-serif font-medium text-lg",
                                    children: [
                                        currencySymbol,
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item_0.finalPrice || 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 932
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center bg-black/40 rounded-lg border border-white/10 p-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                if ((item_0.quantity || 1) > 1) {
                                                    onUpdateQuantity(idx, (item_0.quantity || 1) - 1);
                                                } else {
                                                    onRemoveItem(idx);
                                                }
                                            },
                                            className: "w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors",
                                            children: (item_0.quantity || 1) > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                                lineNumber: 84,
                                                columnNumber: 174
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 14,
                                                className: "text-red-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                                lineNumber: 84,
                                                columnNumber: 196
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                            lineNumber: 78,
                                            columnNumber: 1140
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-8 text-center text-sm font-bold text-white tabular-nums",
                                            children: item_0.quantity || 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 251
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onUpdateQuantity(idx, (item_0.quantity || 1) + 1),
                                            className: "w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                                lineNumber: 84,
                                                columnNumber: 558
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 356
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 1055
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                            lineNumber: 78,
                            columnNumber: 885
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, `${item_0.id}-${idx}`, true, {
                    fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                    lineNumber: 78,
                    columnNumber: 159
                }, ("TURBOPACK compile-time value", void 0)));
            $[21] = currencySymbol;
            $[22] = onRemoveItem;
            $[23] = onUpdateQuantity;
            $[24] = selection;
            $[25] = t12;
        } else {
            t12 = $[25];
        }
        if ($[26] !== t12) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 mb-8 max-h-[40vh] overflow-y-auto no-scrollbar",
                children: t12
            }, void 0, false, {
                fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                lineNumber: 94,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[26] = t12;
            $[27] = t5;
        } else {
            t5 = $[27];
        }
        t6 = selection.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-dashed border-white/10 pt-6 space-y-2 mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-xs text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Subtotal"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                            lineNumber: 100,
                            columnNumber: 170
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                currencySymbol,
                                " ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(subtotal)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                            lineNumber: 100,
                            columnNumber: 191
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                    lineNumber: 100,
                    columnNumber: 110
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-xs text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Impoconsumo (8%)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                            lineNumber: 100,
                            columnNumber: 313
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                currencySymbol,
                                " ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(tax)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                            lineNumber: 100,
                            columnNumber: 342
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                    lineNumber: 100,
                    columnNumber: 253
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-xl font-serif text-white italic pt-2 mt-2 border-t border-white/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Total"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                            lineNumber: 100,
                            columnNumber: 508
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                currencySymbol,
                                " ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(total)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                            lineNumber: 100,
                            columnNumber: 526
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                    lineNumber: 100,
                    columnNumber: 399
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
            lineNumber: 100,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = currencySymbol;
        $[2] = isOpen;
        $[3] = onClose;
        $[4] = onConfirmOrder;
        $[5] = onRemoveItem;
        $[6] = onUpdateQuantity;
        $[7] = selection;
        $[8] = T0;
        $[9] = handlePay;
        $[10] = t10;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        T0 = $[8];
        handlePay = $[9];
        t10 = $[10];
        t3 = $[11];
        t4 = $[12];
        t5 = $[13];
        t6 = $[14];
        t7 = $[15];
        t8 = $[16];
        t9 = $[17];
    }
    const t11 = selection.length === 0 || isLoading;
    let t12;
    if ($[28] !== isLoading) {
        t12 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "animate-pulse",
            children: "Procesando Orden..."
        }, void 0, false, {
            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
            lineNumber: 133,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                "Confirmar Pedido ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
                    lineNumber: 133,
                    columnNumber: 157
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
            lineNumber: 133,
            columnNumber: 84
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = isLoading;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== handlePay || $[31] !== t11 || $[32] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handlePay,
            disabled: t11,
            className: "\n                w-full py-4 rounded-xl font-bold text-xs tracking-[0.15em] uppercase shadow-xl transition-all relative overflow-hidden\n                bg-brand-primary text-white hover:bg-brand-primary/90\n                disabled:opacity-50 disabled:cursor-not-allowed\n            ",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = handlePay;
        $[31] = t11;
        $[32] = t12;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    let t14;
    if ($[34] !== t13 || $[35] !== t3 || $[36] !== t4 || $[37] !== t5 || $[38] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5,
                t6,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t13;
        $[35] = t3;
        $[36] = t4;
        $[37] = t5;
        $[38] = t6;
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    let t15;
    if ($[40] !== T0 || $[41] !== t10 || $[42] !== t14 || $[43] !== t7 || $[44] !== t8 || $[45] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            isOpen: t7,
            onClose: t8,
            title: t9,
            variant: t10,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/diner/OrderSummaryModal.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = T0;
        $[41] = t10;
        $[42] = t14;
        $[43] = t7;
        $[44] = t8;
        $[45] = t9;
        $[46] = t15;
    } else {
        t15 = $[46];
    }
    return t15;
};
_c = OrderSummaryModal;
function _temp(acc, item) {
    return acc + (item.finalPrice || item.price * (item.quantity || 1));
}
var _c;
__turbopack_context__.k.register(_c, "OrderSummaryModal");
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
"[project]/src/components/ui/Skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardSkeleton",
    ()=>CardSkeleton,
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const Skeleton = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "d6410130c71808e0b428c71d0e6106d65238c18be87f65864aa780cfe0207be7") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d6410130c71808e0b428c71d0e6106d65238c18be87f65864aa780cfe0207be7";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `bg-white/5 animate-pulse rounded-xl ${className}`;
    let t3;
    if ($[1] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Skeleton.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    return t3;
};
_c = Skeleton;
const CardSkeleton = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d6410130c71808e0b428c71d0e6106d65238c18be87f65864aa780cfe0207be7") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d6410130c71808e0b428c71d0e6106d65238c18be87f65864aa780cfe0207be7";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
            className: "h-20 w-20 rounded-2xl flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Skeleton.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
            className: "h-4 w-3/4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Skeleton.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
            className: "h-3 w-1/2"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Skeleton.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 py-4 border-b border-dashed border-white/5 px-2 -mx-2 opacity-50",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 space-y-2",
                    children: [
                        t1,
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                    className: "h-4 w-12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Skeleton.tsx",
                                    lineNumber: 59,
                                    columnNumber: 205
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                    className: "h-6 w-6 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Skeleton.tsx",
                                    lineNumber: 59,
                                    columnNumber: 238
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Skeleton.tsx",
                            lineNumber: 59,
                            columnNumber: 162
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Skeleton.tsx",
                    lineNumber: 59,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Skeleton.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
};
_c1 = CardSkeleton;
var _c, _c1;
__turbopack_context__.k.register(_c, "Skeleton");
__turbopack_context__.k.register(_c1, "CardSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diner/DinerClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DinerClient",
    ()=>DinerClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMenuFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMenuFilter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCreateOrder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCreateOrder.ts [app-client] (ecmascript)");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$StoryRail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diner/StoryRail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DishCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diner/DishCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diner/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DinerHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diner/DinerHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DinerNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diner/DinerNavbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DinerFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diner/DinerFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$StoryViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diner/StoryViewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$SectionRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diner/SectionRow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DishDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diner/DishDetailModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$SelectionDock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diner/SelectionDock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$OrderSummaryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diner/OrderSummaryModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuit>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Lazy Load ChatBot
const ChatBot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].lazy(()=>__turbopack_context__.A("[project]/src/components/diner/ChatBot.tsx [app-client] (ecmascript, async loader)").then((module)=>({
            default: module.ChatBot
        })));
_c = ChatBot;
function DinerClient(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(150);
    if ($[0] !== "52f7c88a41472b8e2915a9db0062e6c29ce1a3e74e957cc029fa1691cc25b162") {
        for(let $i = 0; $i < 150; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "52f7c88a41472b8e2915a9db0062e6c29ce1a3e74e957cc029fa1691cc25b162";
    }
    const { config, menuItems, stories, categories } = t0;
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewingStoryId, setViewingStoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showInfo, setShowInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showOrderSummary, setShowOrderSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastVisible, setToastVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { selection, addToCart, updateQuantity, removeFromCart, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { loading: orderLoading, error: orderError, createOrder } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCreateOrder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateOrder"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Set();
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [likedItemIds, setLikedItemIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [recommendedItems, setRecommendedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [isRecLoading, setIsRecLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery, filteredItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMenuFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuFilter"])(menuItems);
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "DinerClient[useEffect()]": ()=>{
                const handleScroll = {
                    "DinerClient[useEffect() > handleScroll]": ()=>setScrolled(window.scrollY > 20)
                }["DinerClient[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["DinerClient[useEffect()]"];
        t4 = [];
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[5] !== menuItems) {
        t5 = ({
            "DinerClient[useEffect()]": ()=>{
                const defaultMix = menuItems.filter(_DinerClientUseEffectMenuItemsFilter).sort(_DinerClientUseEffectAnonymous).slice(0, 4);
                setRecommendedItems(defaultMix);
            }
        })["DinerClient[useEffect()]"];
        t6 = [
            menuItems
        ];
        $[5] = menuItems;
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[8] !== menuItems || $[9] !== selection) {
        t7 = ({
            "DinerClient[useEffect()]": ()=>{
                if (selection.length > 0 && selection.length % 2 !== 0) {
                    setIsRecLoading(true);
                    const likedCategories = selection.map(_DinerClientUseEffectSelectionMap);
                    const recs = menuItems.filter({
                        "DinerClient[useEffect() > menuItems.filter()]": (i_1)=>likedCategories.includes(i_1.category) && !selection.find({
                                "DinerClient[useEffect() > menuItems.filter() > selection.find()]": (s)=>s.id === i_1.id
                            }["DinerClient[useEffect() > menuItems.filter() > selection.find()]"])
                    }["DinerClient[useEffect() > menuItems.filter()]"]).slice(0, 4);
                    setTimeout({
                        "DinerClient[useEffect() > setTimeout()]": ()=>{
                            if (recs.length > 0) {
                                setRecommendedItems(recs);
                            }
                            setIsRecLoading(false);
                        }
                    }["DinerClient[useEffect() > setTimeout()]"], 800);
                }
            }
        })["DinerClient[useEffect()]"];
        t8 = [
            selection,
            menuItems
        ];
        $[8] = menuItems;
        $[9] = selection;
        $[10] = t7;
        $[11] = t8;
    } else {
        t7 = $[10];
        t8 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "DinerClient[handleToggleLike]": (itemId)=>{
                setLikedItemIds({
                    "DinerClient[handleToggleLike > setLikedItemIds()]": (prev)=>{
                        const next = new Set(prev);
                        if (next.has(itemId)) {
                            next.delete(itemId);
                        } else {
                            next.add(itemId);
                        }
                        return next;
                    }
                }["DinerClient[handleToggleLike > setLikedItemIds()]"]);
            }
        })["DinerClient[handleToggleLike]"];
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const handleToggleLike = t9;
    let t10;
    if ($[13] !== addToCart) {
        t10 = ({
            "DinerClient[handleAddToSelection]": (newItem)=>{
                addToCart(newItem);
                setToastMessage(`${newItem.name} agregado`);
                setToastVisible(true);
            }
        })["DinerClient[handleAddToSelection]"];
        $[13] = addToCart;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const handleAddToSelection = t10;
    let t11;
    if ($[15] !== clearCart || $[16] !== config.slug || $[17] !== createOrder || $[18] !== orderError || $[19] !== selection) {
        t11 = ({
            "DinerClient[handleConfirmOrder]": async ()=>{
                const subtotal = selection.reduce(_DinerClientHandleConfirmOrderSelectionReduce, 0);
                const tax = subtotal * 0.08;
                const total = subtotal + tax;
                const orderData = {
                    tenant_slug: config.slug,
                    customer_name: "Cliente",
                    items: selection.map(_DinerClientHandleConfirmOrderSelectionMap),
                    total
                };
                const createdOrder = await createOrder(orderData);
                if (createdOrder) {
                    clearCart();
                    setToastMessage(`¡Pedido #${createdOrder.id.slice(0, 8)} confirmado!`);
                    setToastVisible(true);
                    setShowOrderSummary(false);
                } else {
                    setToastMessage(orderError || "Error al crear pedido");
                    setToastVisible(true);
                }
            }
        })["DinerClient[handleConfirmOrder]"];
        $[15] = clearCart;
        $[16] = config.slug;
        $[17] = createOrder;
        $[18] = orderError;
        $[19] = selection;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    const handleConfirmOrder = t11;
    let t12;
    if ($[21] !== menuItems) {
        t12 = ({
            "DinerClient[handleStoryAction]": (linkedItemId)=>{
                const item_1 = menuItems.find({
                    "DinerClient[handleStoryAction > menuItems.find()]": (i_2)=>i_2.id === linkedItemId
                }["DinerClient[handleStoryAction > menuItems.find()]"]);
                if (item_1) {
                    setViewingStoryId(null);
                    setTimeout({
                        "DinerClient[handleStoryAction > setTimeout()]": ()=>setSelectedItem(item_1)
                    }["DinerClient[handleStoryAction > setTimeout()]"], 300);
                }
            }
        })["DinerClient[handleStoryAction]"];
        $[21] = menuItems;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    const handleStoryAction = t12;
    let t13;
    if ($[23] !== menuItems) {
        t13 = menuItems.filter(_DinerClientMenuItemsFilter);
        $[23] = menuItems;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    const popularItems = t13;
    let t14;
    if ($[25] !== menuItems) {
        t14 = menuItems.filter(_DinerClientMenuItemsFilter2);
        $[25] = menuItems;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    const chefItems = t14;
    let t15;
    if ($[27] !== categories || $[28] !== selectedCategory) {
        t15 = categories.find({
            "DinerClient[categories.find()]": (c)=>c.id === selectedCategory
        }["DinerClient[categories.find()]"])?.name;
        $[27] = categories;
        $[28] = selectedCategory;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    const activeCategoryName = t15;
    let t16;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-0 overflow-hidden bg-[#030712]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80",
                        className: "w-full h-full object-cover opacity-60 blur-[2px] scale-105 transform transition-transform duration-[20s] hover:scale-110",
                        alt: "Ambience"
                    }, void 0, false, {
                        fileName: "[project]/src/components/diner/DinerClient.tsx",
                        lineNumber: 292,
                        columnNumber: 109
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 292,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(3,7,18,0.5)_50%,_rgba(3,7,18,0.95)_100%)]"
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 292,
                    columnNumber: 367
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 292,
                    columnNumber: 504
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-[10%] left-[20%] w-[60vw] h-[60vw] bg-brand-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[5000ms]"
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 292,
                    columnNumber: 602
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "DinerClient[<DinerHeader>.onOpenInfo]": ()=>setShowInfo(true)
        })["DinerClient[<DinerHeader>.onOpenInfo]"];
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] !== config) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DinerHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DinerHeader"], {
            config: config,
            onOpenInfo: t17
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[32] = config;
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    let t19;
    if ($[34] !== scrolled || $[35] !== searchQuery || $[36] !== selectedCategory || $[37] !== setSearchQuery || $[38] !== setSelectedCategory) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DinerNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DinerNavbar"], {
            scrolled: scrolled,
            searchQuery: searchQuery,
            setSearchQuery: setSearchQuery,
            selectedCategory: selectedCategory,
            setSelectedCategory: setSelectedCategory
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[34] = scrolled;
        $[35] = searchQuery;
        $[36] = selectedCategory;
        $[37] = setSearchQuery;
        $[38] = setSelectedCategory;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== searchQuery || $[41] !== selectedCategory || $[42] !== stories) {
        t20 = !searchQuery && selectedCategory === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "pl-1 animate-fade-in",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$StoryRail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StoryRail"], {
                stories: stories,
                onViewStory: {
                    "DinerClient[<StoryRail>.onViewStory]": (story)=>setViewingStoryId(story.id)
                }["DinerClient[<StoryRail>.onViewStory]"],
                onOpenBrand: {
                    "DinerClient[<StoryRail>.onOpenBrand]": ()=>setShowInfo(true)
                }["DinerClient[<StoryRail>.onOpenBrand]"]
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DinerClient.tsx",
                lineNumber: 328,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 328,
            columnNumber: 57
        }, this);
        $[40] = searchQuery;
        $[41] = selectedCategory;
        $[42] = stories;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== menuItems[0] || $[45] !== menuItems.length || $[46] !== searchQuery || $[47] !== selectedCategory) {
        t21 = !searchQuery && selectedCategory === "all" && menuItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {
            item: menuItems[0],
            onClick: setSelectedItem
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 342,
            columnNumber: 81
        }, this);
        $[44] = menuItems[0];
        $[45] = menuItems.length;
        $[46] = searchQuery;
        $[47] = selectedCategory;
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    let t22;
    if ($[49] !== config.currency || $[50] !== filteredItems || $[51] !== handleAddToSelection || $[52] !== searchQuery) {
        t22 = searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "px-6 animate-fade-in pt-4 pb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-sm font-light text-gray-400 mb-8 uppercase tracking-[0.2em]",
                    children: [
                        'Resultados para "',
                        searchQuery,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 353,
                    columnNumber: 79
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-6",
                    children: [
                        filteredItems.map({
                            "DinerClient[filteredItems.map()]": (item_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DishCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DishCard"], {
                                    item: item_2,
                                    onClick: setSelectedItem,
                                    onAdd: handleAddToSelection,
                                    layout: "horizontal",
                                    currency: config.currency
                                }, item_2.id, false, {
                                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                                    lineNumber: 354,
                                    columnNumber: 57
                                }, this)
                        }["DinerClient[filteredItems.map()]"]),
                        filteredItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12 opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-serif italic text-xl",
                                    children: "Sin resultados"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                                    lineNumber: 355,
                                    columnNumber: 125
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs mt-2 uppercase tracking-widest",
                                    children: "Intenta otra búsqueda"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                                    lineNumber: 355,
                                    columnNumber: 184
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 355,
                            columnNumber: 79
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 353,
                    columnNumber: 196
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 353,
            columnNumber: 26
        }, this);
        $[49] = config.currency;
        $[50] = filteredItems;
        $[51] = handleAddToSelection;
        $[52] = searchQuery;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] !== chefItems || $[55] !== config.currency || $[56] !== handleAddToSelection || $[57] !== isRecLoading || $[58] !== menuItems || $[59] !== popularItems || $[60] !== recommendedItems || $[61] !== searchQuery || $[62] !== selectedCategory) {
        t23 = !searchQuery && selectedCategory === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8 animate-fade-in",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative border-b border-white/5 pb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 flex justify-between items-end mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-serif italic text-white/90",
                                            children: "Para ti"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                                            lineNumber: 366,
                                            columnNumber: 254
                                        }, this),
                                        isRecLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"], {
                                            size: 14,
                                            className: "text-brand-primary animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                                            lineNumber: 366,
                                            columnNumber: 340
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                                    lineNumber: 366,
                                    columnNumber: 213
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em]",
                                    children: isRecLoading ? "Personalizando..." : "Basado en tu gusto"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                                    lineNumber: 366,
                                    columnNumber: 418
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 366,
                            columnNumber: 155
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: isRecLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSkeleton"], {}, void 0, false, {
                                        fileName: "[project]/src/components/diner/DinerClient.tsx",
                                        lineNumber: 366,
                                        columnNumber: 648
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSkeleton"], {}, void 0, false, {
                                        fileName: "[project]/src/components/diner/DinerClient.tsx",
                                        lineNumber: 366,
                                        columnNumber: 664
                                    }, this)
                                ]
                            }, void 0, true) : recommendedItems.slice(0, 4).map({
                                "DinerClient[(anonymous)()]": (item_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DishCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DishCard"], {
                                        item: item_3,
                                        onClick: setSelectedItem,
                                        onAdd: handleAddToSelection,
                                        layout: "horizontal",
                                        currency: config.currency
                                    }, `rec-${item_3.id}`, false, {
                                        fileName: "[project]/src/components/diner/DinerClient.tsx",
                                        lineNumber: 367,
                                        columnNumber: 53
                                    }, this)
                            }["DinerClient[(anonymous)()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 366,
                            columnNumber: 570
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 366,
                    columnNumber: 100
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$SectionRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionRow"], {
                    title: "Tendencias",
                    items: popularItems,
                    onItemClick: setSelectedItem,
                    currency: config.currency
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 368,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$SectionRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionRow"], {
                    title: "Selecci\xF3n del Chef",
                    items: chefItems,
                    onItemClick: setSelectedItem,
                    currency: config.currency
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 368,
                    columnNumber: 167
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "px-6 pb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-16 mt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px bg-white/5 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                                    lineNumber: 368,
                                    columnNumber: 381
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 px-6 text-[10px] font-bold tracking-[0.4em] text-gray-600 uppercase",
                                    children: "La Colección"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                                    lineNumber: 368,
                                    columnNumber: 423
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px bg-white/5 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                                    lineNumber: 368,
                                    columnNumber: 537
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 368,
                            columnNumber: 319
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12",
                            children: menuItems.map({
                                "DinerClient[menuItems.map()]": (item_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DishCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DishCard"], {
                                        item: item_4,
                                        onClick: setSelectedItem,
                                        layout: "vertical",
                                        className: "w-full",
                                        currency: config.currency
                                    }, item_4.id, false, {
                                        fileName: "[project]/src/components/diner/DinerClient.tsx",
                                        lineNumber: 369,
                                        columnNumber: 55
                                    }, this)
                            }["DinerClient[menuItems.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 368,
                            columnNumber: 585
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 368,
                    columnNumber: 288
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DinerFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DinerFooter"], {}, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 370,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 366,
            columnNumber: 57
        }, this);
        $[54] = chefItems;
        $[55] = config.currency;
        $[56] = handleAddToSelection;
        $[57] = isRecLoading;
        $[58] = menuItems;
        $[59] = popularItems;
        $[60] = recommendedItems;
        $[61] = searchQuery;
        $[62] = selectedCategory;
        $[63] = t23;
    } else {
        t23 = $[63];
    }
    let t24;
    if ($[64] !== activeCategoryName || $[65] !== config.currency || $[66] !== filteredItems || $[67] !== handleAddToSelection || $[68] !== searchQuery || $[69] !== selectedCategory) {
        t24 = !searchQuery && selectedCategory !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "px-6 animate-fade-in pb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-5xl font-serif italic text-white capitalize tracking-tight mb-3",
                            children: activeCategoryName
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 386,
                            columnNumber: 140
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-gray-500 uppercase tracking-[0.4em]",
                            children: "Selección Curada"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 386,
                            columnNumber: 250
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 386,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-4",
                    children: filteredItems.map({
                        "DinerClient[filteredItems.map()]": (item_5)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DishCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DishCard"], {
                                item: item_5,
                                onClick: setSelectedItem,
                                onAdd: handleAddToSelection,
                                layout: "horizontal",
                                currency: config.currency
                            }, item_5.id, false, {
                                fileName: "[project]/src/components/diner/DinerClient.tsx",
                                lineNumber: 387,
                                columnNumber: 57
                            }, this)
                    }["DinerClient[filteredItems.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 386,
                    columnNumber: 344
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DinerFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DinerFooter"], {}, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 388,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 386,
            columnNumber: 57
        }, this);
        $[64] = activeCategoryName;
        $[65] = config.currency;
        $[66] = filteredItems;
        $[67] = handleAddToSelection;
        $[68] = searchQuery;
        $[69] = selectedCategory;
        $[70] = t24;
    } else {
        t24 = $[70];
    }
    let t25;
    if ($[71] !== t20 || $[72] !== t21 || $[73] !== t22 || $[74] !== t23 || $[75] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "pt-2",
            children: [
                t20,
                t21,
                t22,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[71] = t20;
        $[72] = t21;
        $[73] = t22;
        $[74] = t23;
        $[75] = t24;
        $[76] = t25;
    } else {
        t25 = $[76];
    }
    let t26;
    if ($[77] !== t18 || $[78] !== t19 || $[79] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10",
            children: [
                t18,
                t19,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[77] = t18;
        $[78] = t19;
        $[79] = t25;
        $[80] = t26;
    } else {
        t26 = $[80];
    }
    let t27;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ({
            "DinerClient[<Toast>.onClose]": ()=>setToastVisible(false)
        })["DinerClient[<Toast>.onClose]"];
        $[81] = t27;
    } else {
        t27 = $[81];
    }
    let t28;
    if ($[82] !== toastMessage || $[83] !== toastVisible) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
            message: toastMessage,
            isVisible: toastVisible,
            onClose: t27
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[82] = toastMessage;
        $[83] = toastVisible;
        $[84] = t28;
    } else {
        t28 = $[84];
    }
    let t29;
    if ($[85] !== config.currency || $[86] !== selection || $[87] !== showOrderSummary) {
        t29 = !showOrderSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$SelectionDock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionDock"], {
            selection: selection,
            onViewOrder: {
                "DinerClient[<SelectionDock>.onViewOrder]": ()=>setShowOrderSummary(true)
            }["DinerClient[<SelectionDock>.onViewOrder]"],
            currency: config.currency
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 441,
            columnNumber: 32
        }, this);
        $[85] = config.currency;
        $[86] = selection;
        $[87] = showOrderSummary;
        $[88] = t29;
    } else {
        t29 = $[88];
    }
    let t30;
    if ($[89] !== searchQuery || $[90] !== selectedCategory) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatBot, {
                searchQuery: searchQuery,
                activeCategory: selectedCategory
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DinerClient.tsx",
                lineNumber: 453,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 453,
            columnNumber: 11
        }, this);
        $[89] = searchQuery;
        $[90] = selectedCategory;
        $[91] = t30;
    } else {
        t30 = $[91];
    }
    let t31;
    if ($[92] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = ({
            "DinerClient[<DishDetailModal>.onClose]": ()=>setSelectedItem(null)
        })["DinerClient[<DishDetailModal>.onClose]"];
        $[92] = t31;
    } else {
        t31 = $[92];
    }
    let t32;
    if ($[93] !== likedItemIds || $[94] !== selectedItem) {
        t32 = selectedItem ? likedItemIds.has(selectedItem.id) : false;
        $[93] = likedItemIds;
        $[94] = selectedItem;
        $[95] = t32;
    } else {
        t32 = $[95];
    }
    let t33;
    if ($[96] !== selectedItem) {
        t33 = ({
            "DinerClient[<DishDetailModal>.onToggleLike]": ()=>selectedItem && handleToggleLike(selectedItem.id)
        })["DinerClient[<DishDetailModal>.onToggleLike]"];
        $[96] = selectedItem;
        $[97] = t33;
    } else {
        t33 = $[97];
    }
    let t34;
    if ($[98] !== config.currency || $[99] !== handleAddToSelection || $[100] !== menuItems || $[101] !== selectedItem || $[102] !== t32 || $[103] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$DishDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DishDetailModal"], {
            item: selectedItem,
            menuItems: menuItems,
            onClose: t31,
            onAdd: handleAddToSelection,
            isLiked: t32,
            onToggleLike: t33,
            currency: config.currency
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, this);
        $[98] = config.currency;
        $[99] = handleAddToSelection;
        $[100] = menuItems;
        $[101] = selectedItem;
        $[102] = t32;
        $[103] = t33;
        $[104] = t34;
    } else {
        t34 = $[104];
    }
    let t35;
    if ($[105] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = ({
            "DinerClient[<OrderSummaryModal>.onClose]": ()=>setShowOrderSummary(false)
        })["DinerClient[<OrderSummaryModal>.onClose]"];
        $[105] = t35;
    } else {
        t35 = $[105];
    }
    let t36;
    if ($[106] !== config.currency || $[107] !== handleConfirmOrder || $[108] !== orderLoading || $[109] !== removeFromCart || $[110] !== selection || $[111] !== showOrderSummary || $[112] !== updateQuantity) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$OrderSummaryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderSummaryModal"], {
            isOpen: showOrderSummary,
            onClose: t35,
            selection: selection,
            onUpdateQuantity: updateQuantity,
            onRemoveItem: removeFromCart,
            onConfirmOrder: handleConfirmOrder,
            currencySymbol: config.currency,
            isLoading: orderLoading
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 512,
            columnNumber: 11
        }, this);
        $[106] = config.currency;
        $[107] = handleConfirmOrder;
        $[108] = orderLoading;
        $[109] = removeFromCart;
        $[110] = selection;
        $[111] = showOrderSummary;
        $[112] = updateQuantity;
        $[113] = t36;
    } else {
        t36 = $[113];
    }
    let t37;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = ({
            "DinerClient[<Modal>.onClose]": ()=>setShowInfo(false)
        })["DinerClient[<Modal>.onClose]"];
        $[114] = t37;
    } else {
        t37 = $[114];
    }
    let t38;
    if ($[115] !== config.logo || $[116] !== config.name) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-primary/20 shadow-[0_0_30px_rgba(var(--color-brand-primary),0.2)]",
            children: config.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: config.logo,
                className: "w-full h-full object-cover rounded-full",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DinerClient.tsx",
                lineNumber: 535,
                columnNumber: 218
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-serif text-3xl italic text-brand-primary font-bold",
                children: config.name.charAt(0)
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DinerClient.tsx",
                lineNumber: 535,
                columnNumber: 305
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 535,
            columnNumber: 11
        }, this);
        $[115] = config.logo;
        $[116] = config.name;
        $[117] = t38;
    } else {
        t38 = $[117];
    }
    let t39;
    if ($[118] !== config.name) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-serif text-white mb-2 italic",
            children: config.name
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 544,
            columnNumber: 11
        }, this);
        $[118] = config.name;
        $[119] = t39;
    } else {
        t39 = $[119];
    }
    let t40;
    if ($[120] !== config.tagline) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400 uppercase tracking-widest",
            children: config.tagline
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 552,
            columnNumber: 11
        }, this);
        $[120] = config.tagline;
        $[121] = t40;
    } else {
        t40 = $[121];
    }
    let t41;
    if ($[122] !== t38 || $[123] !== t39 || $[124] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-8",
            children: [
                t38,
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 560,
            columnNumber: 11
        }, this);
        $[122] = t38;
        $[123] = t39;
        $[124] = t40;
        $[125] = t41;
    } else {
        t41 = $[125];
    }
    let t42;
    let t43;
    if ($[126] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 text-sm text-gray-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/diner/DinerClient.tsx",
                        lineNumber: 571,
                        columnNumber: 166
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 571,
                    columnNumber: 74
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] font-bold text-gray-500 uppercase tracking-wider",
                            children: "Horario"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 571,
                            columnNumber: 196
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Abierto • Cierra a las 11:00 PM"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 571,
                            columnNumber: 283
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 571,
                    columnNumber: 191
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 571,
            columnNumber: 11
        }, this);
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px bg-white/5 w-full"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 572,
            columnNumber: 11
        }, this);
        $[126] = t42;
        $[127] = t43;
    } else {
        t42 = $[126];
        t43 = $[127];
    }
    let t44;
    let t45;
    if ($[128] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 text-sm text-gray-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/diner/DinerClient.tsx",
                        lineNumber: 582,
                        columnNumber: 166
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 582,
                    columnNumber: 74
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] font-bold text-gray-500 uppercase tracking-wider",
                            children: "Ubicación"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 582,
                            columnNumber: 197
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Calle Principal 123, Zona Gourmet"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 582,
                            columnNumber: 286
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 582,
                    columnNumber: 192
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px bg-white/5 w-full"
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 583,
            columnNumber: 11
        }, this);
        $[128] = t44;
        $[129] = t45;
    } else {
        t44 = $[128];
        t45 = $[129];
    }
    let t46;
    if ($[130] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 bg-white/5 rounded-2xl p-6 border border-white/5",
            children: [
                t42,
                t43,
                t44,
                t45,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 text-sm text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/diner/DinerClient.tsx",
                                lineNumber: 592,
                                columnNumber: 262
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 592,
                            columnNumber: 170
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold text-gray-500 uppercase tracking-wider",
                                    children: "Sitio Web"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                                    lineNumber: 592,
                                    columnNumber: 292
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-brand-primary underline cursor-pointer",
                                    children: "www.menuos.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                                    lineNumber: 592,
                                    columnNumber: 381
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/DinerClient.tsx",
                            lineNumber: 592,
                            columnNumber: 287
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/DinerClient.tsx",
                    lineNumber: 592,
                    columnNumber: 107
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 592,
            columnNumber: 11
        }, this);
        $[130] = t46;
    } else {
        t46 = $[130];
    }
    let t47;
    if ($[131] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-500 italic font-serif leading-relaxed px-4",
                children: '"Una experiencia culinaria diseñada para deleitar los sentidos, fusionando tradición e innovación en cada plato."'
            }, void 0, false, {
                fileName: "[project]/src/components/diner/DinerClient.tsx",
                lineNumber: 599,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 599,
            columnNumber: 11
        }, this);
        $[131] = t47;
    } else {
        t47 = $[131];
    }
    let t48;
    if ($[132] !== t41) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                t41,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 606,
            columnNumber: 11
        }, this);
        $[132] = t41;
        $[133] = t48;
    } else {
        t48 = $[133];
    }
    let t49;
    if ($[134] !== showInfo || $[135] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: showInfo,
            onClose: t37,
            title: "Sobre la Casa",
            children: t48
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 614,
            columnNumber: 11
        }, this);
        $[134] = showInfo;
        $[135] = t48;
        $[136] = t49;
    } else {
        t49 = $[136];
    }
    let t50;
    if ($[137] !== handleStoryAction || $[138] !== stories || $[139] !== viewingStoryId) {
        t50 = viewingStoryId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diner$2f$StoryViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StoryViewer"], {
            stories: stories,
            initialStoryId: viewingStoryId,
            onClose: {
                "DinerClient[<StoryViewer>.onClose]": ()=>setViewingStoryId(null)
            }["DinerClient[<StoryViewer>.onClose]"],
            onAction: handleStoryAction
        }, void 0, false, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 623,
            columnNumber: 29
        }, this);
        $[137] = handleStoryAction;
        $[138] = stories;
        $[139] = viewingStoryId;
        $[140] = t50;
    } else {
        t50 = $[140];
    }
    let t51;
    if ($[141] !== t26 || $[142] !== t28 || $[143] !== t29 || $[144] !== t30 || $[145] !== t34 || $[146] !== t36 || $[147] !== t49 || $[148] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen relative text-gray-100 font-sans selection:bg-brand-primary selection:text-white",
            children: [
                t16,
                t26,
                t28,
                t29,
                t30,
                t34,
                t36,
                t49,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/DinerClient.tsx",
            lineNumber: 635,
            columnNumber: 11
        }, this);
        $[141] = t26;
        $[142] = t28;
        $[143] = t29;
        $[144] = t30;
        $[145] = t34;
        $[146] = t36;
        $[147] = t49;
        $[148] = t50;
        $[149] = t51;
    } else {
        t51 = $[149];
    }
    return t51;
}
_s(DinerClient, "Nay6fongryFsARylYnhu7LygKFY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCreateOrder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateOrder"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMenuFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuFilter"]
    ];
});
_c1 = DinerClient;
function _DinerClientMenuItemsFilter2(i_4) {
    return i_4.chefChoice;
}
function _DinerClientMenuItemsFilter(i_3) {
    return i_3.popular;
}
function _DinerClientHandleConfirmOrderSelectionMap(item_0) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCreateOrder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItemToOrderItem"])(item_0);
}
function _DinerClientHandleConfirmOrderSelectionReduce(acc, item) {
    return acc + (item.finalPrice || item.price * (item.quantity || 1));
}
function _DinerClientUseEffectSelectionMap(i_0) {
    return i_0.category;
}
function _DinerClientUseEffectAnonymous() {
    return 0.5 - Math.random();
}
function _DinerClientUseEffectMenuItemsFilter(i) {
    return i.new || i.popular;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatBot");
__turbopack_context__.k.register(_c1, "DinerClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_674facd7._.js.map