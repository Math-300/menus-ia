/**
 * Upload API Route
 * Handles image uploads to Cloudinary
 * 
 * POST /api/upload
 * - Accepts file (FormData), base64, or URL
 * - Returns Cloudinary upload result
 * - Requires authentication
 */

import { NextRequest, NextResponse } from 'next/server';
import {
    uploadFromUrl,
    uploadFromBase64,
    uploadFromBuffer,
    UploadResult,
} from '@/lib/cloudinary/client';
import { createClient } from '@/lib/supabase/server';

// File validation constants
const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

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

        const contentType = request.headers.get('content-type') || '';

        // Handle FormData (file upload)
        if (contentType.includes('multipart/form-data')) {
            const formData = await request.formData();
            const file = formData.get('file') as File | null;
            const folder = formData.get('folder') as string | null;
            const tags = formData.get('tags') as string | null;

            if (!file) {
                return NextResponse.json(
                    { error: 'No file provided' },
                    { status: 400 }
                );
            }

            // File validation
            if (file.size > MAX_SIZE) {
                return NextResponse.json(
                    { error: 'El archivo excede el tamaño máximo de 5MB' },
                    { status: 400 }
                );
            }

            if (!ALLOWED_TYPES.includes(file.type)) {
                return NextResponse.json(
                    { error: 'Tipo de archivo no permitido. Use JPEG, PNG, WebP o GIF' },
                    { status: 400 }
                );
            }

            // Convert File to Buffer
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const result = await uploadFromBuffer(buffer, {
                folder: folder || 'menuos/dishes',
                tags: tags ? tags.split(',') : undefined,
            });

            return NextResponse.json({
                success: true,
                data: result,
            });
        }

        // Handle JSON (base64 or URL)
        const body = await request.json();
        const { url, base64, folder, public_id, tags } = body;

        let result: UploadResult;

        if (url) {
            // Upload from URL
            result = await uploadFromUrl(url, {
                folder: folder || 'menuos/dishes',
                public_id,
                tags,
            });
        } else if (base64) {
            // Upload from base64
            result = await uploadFromBase64(base64, {
                folder: folder || 'menuos/dishes',
                public_id,
                tags,
            });
        } else {
            return NextResponse.json(
                { error: 'No valid upload source provided. Use "file", "url", or "base64"' },
                { status: 400 }
            );
        }

        return NextResponse.json({
            success: true,
            data: result,
        });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            {
                error: 'Upload failed',
                message: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        );
    }
}

/**
 * GET /api/upload
 * Returns Cloudinary configuration for client-side uploads
 */
export async function GET() {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!cloudName) {
        return NextResponse.json(
            { error: 'Cloudinary not configured' },
            { status: 500 }
        );
    }

    return NextResponse.json({
        cloudName,
        uploadPreset: 'menuos_unsigned', // Optional: for unsigned uploads
    });
}
