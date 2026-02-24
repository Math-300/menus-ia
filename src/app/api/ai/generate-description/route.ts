import { NextRequest, NextResponse } from 'next/server';
import { generateDishDescription } from '@/lib/ai/openrouter';
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

        const { dishName, ingredients, cuisine } = await request.json();

        if (!dishName) {
            return NextResponse.json(
                { error: 'Dish name is required' },
                { status: 400 }
            );
        }

        const description = await generateDishDescription(
            dishName,
            ingredients || [],
            cuisine
        );

        return NextResponse.json({ description });
    } catch (error) {
        console.error('Generate description API error:', error);
        return NextResponse.json(
            { error: 'Failed to generate description' },
            { status: 500 }
        );
    }
}
