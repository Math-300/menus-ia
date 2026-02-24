module.exports = [
"[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://roefufuidkrlmqgmddbx.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvZWZ1ZnVpZGtybG1xZ21kZGJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0NDk4NzIsImV4cCI6MjA4NzAyNTg3Mn0.5YkU5JVGnX8dNiK_BJN5eRXPAwmEZyU_Z2ZWQv9kTjs"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // The `setAll` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing sessions.
                }
            }
        }
    });
}
}),
"[project]/src/app/(tenant)/[slug]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TenantLayout,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)");
;
;
async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: tenant } = await supabase.from('tenants').select('name, tagline, description, logo_url, primary_color').eq('slug', slug).single();
        if (tenant) {
            return {
                title: `${tenant.name} - Menú Digital`,
                description: tenant.description || tenant.tagline || `Explora el menú de ${tenant.name}`,
                openGraph: {
                    title: `${tenant.name} - Menú Digital`,
                    description: tenant.description || tenant.tagline || `Explora el menú de ${tenant.name}`,
                    images: tenant.logo_url ? [
                        tenant.logo_url
                    ] : [],
                    type: 'website'
                },
                themeColor: tenant.primary_color || '#f59e0b'
            };
        }
    } catch (error) {
        console.error('Error generating metadata:', error);
    }
    return {
        title: "MenuOS - Menú Digital",
        description: "Explora nuestro menú digital interactivo"
    };
}
async function TenantLayout({ children, params }) {
    const { slug } = await params;
    // Obtener configuración del tenant para el tema
    let themeStyle = '';
    let primaryColor = '#f59e0b';
    let secondaryColor = '#1f2937';
    let fontFamily = 'Inter';
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: tenant } = await supabase.from('tenants').select('primary_color, secondary_color, font_family').eq('slug', slug).single();
        if (tenant) {
            primaryColor = tenant.primary_color || primaryColor;
            secondaryColor = tenant.secondary_color || secondaryColor;
            fontFamily = tenant.font_family || fontFamily;
        }
    } catch (error) {
        console.error('Error fetching tenant theme:', error);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background",
        style: {
            '--color-brand-primary': primaryColor,
            '--color-brand-secondary': secondaryColor,
            '--font-sans': fontFamily
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                dangerouslySetInnerHTML: {
                    __html: `
                        (function() {
                            const root = document.documentElement;
                            root.style.setProperty('--color-brand-primary', '${primaryColor}');
                            root.style.setProperty('--color-brand-secondary', '${secondaryColor}');
                            root.style.setProperty('--font-sans', '${fontFamily}');
                        })();
                    `
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(tenant)/[slug]/layout.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(tenant)/[slug]/layout.tsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_4104d552._.js.map