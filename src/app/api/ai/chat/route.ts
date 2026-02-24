import { NextRequest, NextResponse } from 'next/server';
import { chatWithConcierge } from '@/lib/ai/openrouter';
import { RESTAURANT_DB } from '@/data/mockData';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
    try {
        // Authentication check
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json(
                { error: 'No autorizado' },
                { status: 401 }
            );
        }

        const { message, tenantSlug } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Get tenant data from mock database
        const slug = tenantSlug || 'demo-grill';
        const tenantData = RESTAURANT_DB[slug];

        if (!tenantData) {
            return NextResponse.json(
                { error: 'Tenant not found' },
                { status: 404 }
            );
        }

        const tenantName = tenantData.config.name;
        const menuItems = tenantData.menu.map(item => ({
            name: item.name,
            description: item.description,
            price: item.price,
            dietary: item.tags || [],
        }));

        const response = await chatWithConcierge(message, {
            menuItems,
            tenantName,
        });

        return NextResponse.json({ response });
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { error: 'Failed to process chat message' },
            { status: 500 }
        );
    }
}
