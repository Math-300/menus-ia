import { Metadata } from "next";
import { createClient } from '@/lib/supabase/server';

interface TenantLayoutProps {
    children: React.ReactNode;
    params: Promise<{
        slug: string;
    }>;
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: TenantLayoutProps): Promise<Metadata> {
    const { slug } = await params;

    try {
        const supabase = await createClient();
        const { data: tenant } = await supabase
            .from('tenants')
            .select('name, tagline, description, logo_url, primary_color')
            .eq('slug', slug)
            .single();

        if (tenant) {
            return {
                title: `${tenant.name} - Menú Digital`,
                description: tenant.description || tenant.tagline || `Explora el menú de ${tenant.name}`,
                openGraph: {
                    title: `${tenant.name} - Menú Digital`,
                    description: tenant.description || tenant.tagline || `Explora el menú de ${tenant.name}`,
                    images: tenant.logo_url ? [tenant.logo_url] : [],
                    type: 'website',
                },
                themeColor: tenant.primary_color || '#f59e0b',
            };
        }
    } catch (error) {
        console.error('Error generating metadata:', error);
    }

    return {
        title: "MenuOS - Menú Digital",
        description: "Explora nuestro menú digital interactivo",
    };
}

export default async function TenantLayout({ children, params }: TenantLayoutProps) {
    const { slug } = await params;

    // Obtener configuración del tenant para el tema
    let themeStyle = '';
    let primaryColor = '#f59e0b';
    let secondaryColor = '#1f2937';
    let fontFamily = 'Inter';

    try {
        const supabase = await createClient();
        const { data: tenant } = await supabase
            .from('tenants')
            .select('primary_color, secondary_color, font_family')
            .eq('slug', slug)
            .single();

        if (tenant) {
            primaryColor = tenant.primary_color || primaryColor;
            secondaryColor = tenant.secondary_color || secondaryColor;
            fontFamily = tenant.font_family || fontFamily;
        }
    } catch (error) {
        console.error('Error fetching tenant theme:', error);
    }

    return (
        <main
            className="min-h-screen bg-background"
            style={{
                '--color-brand-primary': primaryColor,
                '--color-brand-secondary': secondaryColor,
                '--font-sans': fontFamily,
            } as React.CSSProperties}
        >
            {/* Inline script para aplicar tema inmediatamente */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            const root = document.documentElement;
                            root.style.setProperty('--color-brand-primary', '${primaryColor}');
                            root.style.setProperty('--color-brand-secondary', '${secondaryColor}');
                            root.style.setProperty('--font-sans', '${fontFamily}');
                        })();
                    `,
                }}
            />
            {children}
        </main>
    );
}
