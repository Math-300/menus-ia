(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/ai/chatService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeMenuHealth",
    ()=>analyzeMenuHealth,
    "chatWithConcierge",
    ()=>chatWithConcierge,
    "editDishImage",
    ()=>editDishImage,
    "generateDishDescription",
    ()=>generateDishDescription,
    "generateDishDescriptionClient",
    ()=>generateDishDescriptionClient,
    "generateDishImage",
    ()=>generateDishImage,
    "getRecommendations",
    ()=>getRecommendations,
    "sendChatMessage",
    ()=>sendChatMessage
]);
// AI Service - OpenRouter Integration
// This file provides client-side functions that call the API routes
// Predefined responses for demo fallback
const FALLBACK_RESPONSES = [
    "¡Excelente pregunta! Te recomiendo nuestro Truffle Smash, es el favorito de la casa.",
    "Para maridar, te sugiero un Malbec Reserva que complementa perfectamente nuestros platos fuertes.",
    "Tenemos opciones vegetarianas deliciosas como el Goddess Buddha Bowl.",
    "Nuestro chef recomienda el Wagyu Steak para una experiencia premium.",
    "El Volcán de Chocolate es perfecto para los amantes del dulce."
];
async function sendChatMessage(message, tenantSlug) {
    try {
        const response = await fetch('/api/ai/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message,
                tenantSlug
            })
        });
        if (!response.ok) {
            // Fallback to mock response on error
            console.warn('Chat API failed, using fallback response');
            return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
        }
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Chat error:', error);
        return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
    }
}
async function generateDishDescriptionClient(dishName, ingredients, cuisine) {
    try {
        const response = await fetch('/api/ai/generate-description', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dishName,
                ingredients,
                cuisine
            })
        });
        if (!response.ok) {
            // Fallback description
            return `Una deliciosa creación culinaria que destaca por sus sabores únicos y presentación exquisita. ${dishName} es perfecto para los amantes de la buena mesa.`;
        }
        const data = await response.json();
        return data.description;
    } catch (error) {
        console.error('Generate description error:', error);
        return `Una deliciosa creación culinaria que destaca por sus sabores únicos y presentación exquisita. ${dishName} es perfecto para los amantes de la buena mesa.`;
    }
}
async function chatWithConcierge(message, _history, _thinking = false) {
    return sendChatMessage(message);
}
async function getRecommendations(likedItems, allItems) {
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const available = allItems.filter((item)=>!likedItems.includes(item));
    return available.slice(0, 3);
}
async function generateDishDescription(name, tags) {
    return generateDishDescriptionClient(name, tags.split(',').map((t)=>t.trim()));
}
async function generateDishImage(prompt, size) {
    await new Promise((resolve)=>setTimeout(resolve, 2000));
    // Return placeholder image
    return `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80`;
}
async function editDishImage(imageUrl, instruction) {
    await new Promise((resolve)=>setTimeout(resolve, 1500));
    return imageUrl; // Return same image for mock
}
async function analyzeMenuHealth(menuSummary) {
    await new Promise((resolve)=>setTimeout(resolve, 2000));
    return {
        score: 85,
        suggestions: [
            'Considera agregar más opciones vegetarianas',
            'Los precios son competitivos para el segmento',
            'Buena variedad en categorías de bebidas',
            'Podrías expandir la sección de postres'
        ]
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diner/ChatBot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatBot",
    ()=>ChatBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wine.js [app-client] (ecmascript) <export default as Wine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$chatService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ai/chatService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ChatBot = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "749d6a6bf245e0a2cb6115431af15fb094c9b3564b699224f3156dd2e5766032") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "749d6a6bf245e0a2cb6115431af15fb094c9b3564b699224f3156dd2e5766032";
    }
    const { searchQuery: t1, activeCategory: t2 } = t0;
    const searchQuery = t1 === undefined ? "" : t1;
    const activeCategory = t2 === undefined ? "all" : t2;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentHint, setCurrentHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showHint, setShowHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t4;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            "\xBFQu\xE9 vino recomiendas?",
            "\xBFTienen opciones veganas?",
            "\xBFQu\xE9 es popular hoy?",
            "\xBFIngredientes del chef?"
        ];
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    const GENERAL_HINTS = t4;
    let t5;
    let t6;
    if ($[3] !== isOpen) {
        t5 = ()=>{
            const handleClickOutside = (event)=>{
                if (isOpen && chatContainerRef.current && !chatContainerRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            };
            if (isOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ()=>{
                document.removeEventListener("mousedown", handleClickOutside);
            };
        };
        t6 = [
            isOpen
        ];
        $[3] = isOpen;
        $[4] = t5;
        $[5] = t6;
    } else {
        t5 = $[4];
        t6 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[6] !== activeCategory || $[7] !== isOpen || $[8] !== searchQuery) {
        t7 = ()=>{
            if (isOpen) {
                return;
            }
            let contextHint = "";
            if (searchQuery && searchQuery.length > 2) {
                const topics = [
                    `¿Buscas el mejor maridaje para "${searchQuery}"?`,
                    `¿"${searchQuery}" tiene alérgenos?`,
                    `¿Cuál es el mejor "${searchQuery}"?`,
                    `¿Hay "${searchQuery}" para compartir?`
                ];
                contextHint = topics[Math.floor(Math.random() * topics.length)];
            } else {
                if (activeCategory !== "all") {
                    bb34: switch(activeCategory){
                        case "drinks":
                            {
                                contextHint = "\xBFBuscas algo dulce o seco?";
                                break bb34;
                            }
                        case "burgers":
                            {
                                contextHint = "\xBFT\xE9rmino de la carne?";
                                break bb34;
                            }
                        case "desserts":
                            {
                                contextHint = "\xBFCaf\xE9 para acompa\xF1ar?";
                                break bb34;
                            }
                        case "starters":
                            {
                                contextHint = "\xBFAlgo r\xE1pido para empezar?";
                                break bb34;
                            }
                        default:
                            {
                                contextHint = `¿Sugerencias de ${activeCategory}?`;
                            }
                    }
                }
            }
            if (contextHint) {
                setCurrentHint(contextHint);
                setShowHint(true);
                const timer = setTimeout(()=>setShowHint(false), 6000);
                return ()=>clearTimeout(timer);
            }
        };
        t8 = [
            searchQuery,
            activeCategory,
            isOpen
        ];
        $[6] = activeCategory;
        $[7] = isOpen;
        $[8] = searchQuery;
        $[9] = t7;
        $[10] = t8;
    } else {
        t7 = $[9];
        t8 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t10;
    let t9;
    if ($[11] !== isOpen || $[12] !== searchQuery) {
        t9 = ()=>{
            const hintInterval = setInterval(()=>{
                if (!isOpen && !searchQuery) {
                    const nextHint = GENERAL_HINTS[Math.floor(Math.random() * GENERAL_HINTS.length)];
                    setCurrentHint(nextHint);
                    setShowHint(true);
                    setTimeout(()=>setShowHint(false), 5000);
                }
            }, 20000);
            if (!searchQuery) {
                setTimeout(()=>{
                    setCurrentHint(GENERAL_HINTS[0]);
                    setShowHint(true);
                    setTimeout(()=>setShowHint(false), 5000);
                }, 3000);
            }
            return ()=>clearInterval(hintInterval);
        };
        t10 = [
            isOpen,
            searchQuery
        ];
        $[11] = isOpen;
        $[12] = searchQuery;
        $[13] = t10;
        $[14] = t9;
    } else {
        t10 = $[13];
        t9 = $[14];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        };
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    const scrollToBottom = t11;
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ()=>{
            scrollToBottom();
        };
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== messages) {
        t13 = [
            messages
        ];
        $[17] = messages;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t12, t13);
    let t14;
    if ($[19] !== input || $[20] !== messages || $[21] !== searchQuery) {
        t14 = async ()=>{
            if (!input.trim()) {
                return;
            }
            const userMsg = {
                id: Date.now().toString(),
                role: "user",
                text: input
            };
            setMessages((prev)=>[
                    ...prev,
                    userMsg
                ]);
            setInput("");
            setIsLoading(true);
            const history = messages.map(_temp);
            let contextualMessage = userMsg.text;
            if (searchQuery) {
                contextualMessage = contextualMessage + ` [Contexto del usuario: Está buscando "${searchQuery}" en el menú]`;
            }
            const responseText = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$chatService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatWithConcierge"])(contextualMessage, history, false);
            const botMsg = {
                id: (Date.now() + 1).toString(),
                role: "model",
                text: responseText
            };
            setMessages((prev_0)=>[
                    ...prev_0,
                    botMsg
                ]);
            setIsLoading(false);
        };
        $[19] = input;
        $[20] = messages;
        $[21] = searchQuery;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    const handleSend = t14;
    let t15;
    if ($[23] !== currentHint) {
        t15 = ()=>{
            setIsOpen(true);
            setShowHint(false);
            setInput(currentHint);
        };
        $[23] = currentHint;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    const handleHintClick = t15;
    let t16;
    if ($[25] !== currentHint || $[26] !== handleHintClick || $[27] !== isOpen || $[28] !== showHint) {
        t16 = !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-6 right-6 z-[55] flex flex-col items-end gap-2 pointer-events-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: handleHintClick,
                    className: `
                bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-3 rounded-2xl rounded-br-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-xs font-medium tracking-wide mb-1 transition-all duration-500 transform cursor-pointer pointer-events-auto hover:bg-white/20 hover:scale-105 active:scale-95
                ${showHint ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"}
            `,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 12,
                                className: "text-brand-primary shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/diner/ChatBot.tsx",
                                lineNumber: 248,
                                columnNumber: 57
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: currentHint
                            }, void 0, false, {
                                fileName: "[project]/src/components/diner/ChatBot.tsx",
                                lineNumber: 248,
                                columnNumber: 119
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/diner/ChatBot.tsx",
                        lineNumber: 248,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/ChatBot.tsx",
                    lineNumber: 245,
                    columnNumber: 119
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setIsOpen(true);
                        setShowHint(false);
                    },
                    className: "pointer-events-auto bg-black/60 backdrop-blur-xl border border-white/20 text-white p-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-105 hover:bg-white/20 transition-all group relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-brand-primary/20 blur-xl group-hover:bg-brand-primary/40 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/ChatBot.tsx",
                            lineNumber: 251,
                            columnNumber: 238
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            size: 24,
                            className: "relative z-10 group-hover:text-brand-primary transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/ChatBot.tsx",
                            lineNumber: 251,
                            columnNumber: 352
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/ChatBot.tsx",
                    lineNumber: 248,
                    columnNumber: 157
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/ChatBot.tsx",
            lineNumber: 245,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = currentHint;
        $[26] = handleHintClick;
        $[27] = isOpen;
        $[28] = showHint;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== handleSend || $[31] !== input || $[32] !== isLoading || $[33] !== isOpen || $[34] !== messages || $[35] !== searchQuery) {
        t17 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: chatContainerRef,
            className: "\n                fixed z-[55] bg-black/90 backdrop-blur-2xl rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden border border-white/10 animate-slide-up\n                w-[95vw] md:w-96 h-[600px] max-h-[80vh]\n                bottom-4 \n                left-0 right-0 mx-auto md:mx-0 md:left-auto md:right-6\n            ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 border-b border-white/5 flex justify-between items-center bg-white/[0.02]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-serif italic text-2xl text-white",
                                    children: "Concierge"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/ChatBot.tsx",
                                    lineNumber: 262,
                                    columnNumber: 516
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/ChatBot.tsx",
                                            lineNumber: 262,
                                            columnNumber: 675
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " En Línea"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/diner/ChatBot.tsx",
                                    lineNumber: 262,
                                    columnNumber: 584
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/ChatBot.tsx",
                            lineNumber: 262,
                            columnNumber: 511
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsOpen(false),
                            className: "p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/diner/ChatBot.tsx",
                                lineNumber: 262,
                                columnNumber: 903
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/ChatBot.tsx",
                            lineNumber: 262,
                            columnNumber: 766
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/ChatBot.tsx",
                    lineNumber: 262,
                    columnNumber: 416
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar bg-gradient-to-b from-transparent to-black/20",
                    children: [
                        messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full flex flex-col items-center justify-center text-center opacity-60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10 shadow-glow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wine$3e$__["Wine"], {
                                        className: "text-white/40",
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diner/ChatBot.tsx",
                                        lineNumber: 262,
                                        columnNumber: 1285
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/ChatBot.tsx",
                                    lineNumber: 262,
                                    columnNumber: 1161
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-serif italic text-white text-lg mb-2",
                                    children: "A su servicio."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/ChatBot.tsx",
                                    lineNumber: 262,
                                    columnNumber: 1335
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 max-w-[200px] leading-relaxed",
                                    children: searchQuery ? `Veo que buscas "${searchQuery}". ¿En qué puedo ayudarte con eso?` : "Pregunte por maridajes, ingredientes o dietas especiales."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/ChatBot.tsx",
                                    lineNumber: 262,
                                    columnNumber: 1410
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/diner/ChatBot.tsx",
                            lineNumber: 262,
                            columnNumber: 1072
                        }, ("TURBOPACK compile-time value", void 0)),
                        messages.map(_temp2),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start animate-fade-in",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 border border-white/10 rounded-2xl p-4 rounded-tl-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: "0ms"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/ChatBot.tsx",
                                            lineNumber: 262,
                                            columnNumber: 1835
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: "150ms"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/ChatBot.tsx",
                                            lineNumber: 264,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: "300ms"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diner/ChatBot.tsx",
                                            lineNumber: 266,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/diner/ChatBot.tsx",
                                    lineNumber: 262,
                                    columnNumber: 1801
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/diner/ChatBot.tsx",
                                lineNumber: 262,
                                columnNumber: 1720
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/ChatBot.tsx",
                            lineNumber: 262,
                            columnNumber: 1668
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: messagesEndRef
                        }, void 0, false, {
                            fileName: "[project]/src/components/diner/ChatBot.tsx",
                            lineNumber: 268,
                            columnNumber: 39
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diner/ChatBot.tsx",
                    lineNumber: 262,
                    columnNumber: 933
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-white/10 bg-black/40 backdrop-blur-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                onKeyDown: (e_0)=>e_0.key === "Enter" && handleSend(),
                                placeholder: "Escribe tu consulta...",
                                className: "w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-light"
                            }, void 0, false, {
                                fileName: "[project]/src/components/diner/ChatBot.tsx",
                                lineNumber: 268,
                                columnNumber: 192
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSend,
                                disabled: isLoading || !input.trim(),
                                className: "absolute right-2 p-2.5 bg-brand-primary text-white rounded-full disabled:opacity-50 disabled:bg-gray-700 hover:bg-brand-primary/80 transition-all shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diner/ChatBot.tsx",
                                    lineNumber: 268,
                                    columnNumber: 802
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/diner/ChatBot.tsx",
                                lineNumber: 268,
                                columnNumber: 567
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/diner/ChatBot.tsx",
                        lineNumber: 268,
                        columnNumber: 148
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/diner/ChatBot.tsx",
                    lineNumber: 268,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/diner/ChatBot.tsx",
            lineNumber: 262,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = handleSend;
        $[31] = input;
        $[32] = isLoading;
        $[33] = isOpen;
        $[34] = messages;
        $[35] = searchQuery;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== t16 || $[38] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t16,
                t17
            ]
        }, void 0, true);
        $[37] = t16;
        $[38] = t17;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    return t18;
};
_s(ChatBot, "pb66jwPvZwso08Y+l6uc+mTbDxc=");
_c = ChatBot;
function _temp(m) {
    return {
        role: m.role,
        parts: [
            {
                text: m.text
            }
        ]
    };
}
function _temp2(msg) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `max-w-[85%] rounded-2xl p-4 text-sm font-light leading-relaxed shadow-lg backdrop-blur-md ${msg.role === "user" ? "bg-brand-primary/90 text-white rounded-tr-sm border border-brand-primary/50" : "bg-white/10 text-gray-100 rounded-tl-sm border border-white/10"}`,
            children: msg.text
        }, void 0, false, {
            fileName: "[project]/src/components/diner/ChatBot.tsx",
            lineNumber: 299,
            columnNumber: 104
        }, this)
    }, msg.id, false, {
        fileName: "[project]/src/components/diner/ChatBot.tsx",
        lineNumber: 299,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ChatBot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Send
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("send", __iconNode);
;
 //# sourceMappingURL=send.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_872a395b._.js.map