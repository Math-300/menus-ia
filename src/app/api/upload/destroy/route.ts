/**
 * Destroy API Route
 * Handles image deletion from Cloudinary
 * 
 * DELETE /api/upload/destroy
 * - Accepts public_id or URL
 * - Deletes image from Cloudinary
 */

import { NextRequest, NextResponse } from 'next/server';
import { deleteImage, extractPublicId } from '@/lib/cloudinary/client';

export async function DELETE(request: NextRequest) {
    try {
        const body = await request.json();
        const { public_id, url } = body;

        if (!public_id && !url) {
            return NextResponse.json(
                { error: 'No public_id or url provided' },
                { status: 400 }
            );
        }

        // Extract public_id from URL if provided
        let finalPublicId = public_id;
        if (!finalPublicId && url) {
            finalPublicId = extractPublicId(url);
            if (!finalPublicId) {
                return NextResponse.json(
                    { error: 'Could not extract public_id from URL' },
                    { status: 400 }
                );
            }
        }

        const success = await deleteImage(finalPublicId!);

        if (success) {
            return NextResponse.json({
                success: true,
                message: 'Image deleted successfully',
                public_id: finalPublicId,
            });
        } else {
            return NextResponse.json(
                { error: 'Image not found or already deleted' },
                { status: 404 }
            );
        }
    } catch (error) {
        console.error('Delete error:', error);
        return NextResponse.json(
            {
                error: 'Delete failed',
                message: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        );
    }
}

/**
 * POST /api/upload/destroy
 * Alternative method for clients that don't support DELETE
 */
export async function POST(request: NextRequest) {
    return DELETE(request);
}
