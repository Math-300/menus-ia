/**
 * Cloudinary Client Configuration
 * Handles image upload and management for MenuOS
 */

import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

// Configure Cloudinary with environment variables
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export interface UploadResult {
    public_id: string;
    secure_url: string;
    url: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    bytes: number;
}

export interface UploadOptions {
    folder?: string;
    public_id?: string;
    transformation?: object;
    tags?: string[];
    context?: Record<string, string>;
}

/**
 * Upload an image from a URL to Cloudinary
 */
export async function uploadFromUrl(
    url: string,
    options: UploadOptions = {}
): Promise<UploadResult> {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            url,
            {
                folder: options.folder || 'menuos/dishes',
                public_id: options.public_id,
                tags: options.tags,
                context: options.context,
                transformation: options.transformation,
                resource_type: 'image',
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
                if (error) {
                    reject(new Error(`Cloudinary upload error: ${error.message}`));
                    return;
                }
                if (!result) {
                    reject(new Error('Cloudinary upload failed: No result returned'));
                    return;
                }
                resolve({
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                    url: result.url,
                    width: result.width,
                    height: result.height,
                    format: result.format,
                    resource_type: result.resource_type,
                    bytes: result.bytes,
                });
            }
        );
    });
}

/**
 * Upload an image from a base64 string to Cloudinary
 */
export async function uploadFromBase64(
    base64String: string,
    options: UploadOptions = {}
): Promise<UploadResult> {
    return new Promise((resolve, reject) => {
        // Ensure the base64 string has the proper data URI prefix
        const dataUri = base64String.startsWith('data:')
            ? base64String
            : `data:image/jpeg;base64,${base64String}`;

        cloudinary.uploader.upload(
            dataUri,
            {
                folder: options.folder || 'menuos/dishes',
                public_id: options.public_id,
                tags: options.tags,
                context: options.context,
                transformation: options.transformation,
                resource_type: 'image',
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
                if (error) {
                    reject(new Error(`Cloudinary upload error: ${error.message}`));
                    return;
                }
                if (!result) {
                    reject(new Error('Cloudinary upload failed: No result returned'));
                    return;
                }
                resolve({
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                    url: result.url,
                    width: result.width,
                    height: result.height,
                    format: result.format,
                    resource_type: result.resource_type,
                    bytes: result.bytes,
                });
            }
        );
    });
}

/**
 * Upload a file buffer to Cloudinary
 */
export async function uploadFromBuffer(
    buffer: Buffer,
    options: UploadOptions = {}
): Promise<UploadResult> {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: options.folder || 'menuos/dishes',
                public_id: options.public_id,
                tags: options.tags,
                context: options.context,
                transformation: options.transformation,
                resource_type: 'image',
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
                if (error) {
                    reject(new Error(`Cloudinary upload error: ${error.message}`));
                    return;
                }
                if (!result) {
                    reject(new Error('Cloudinary upload failed: No result returned'));
                    return;
                }
                resolve({
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                    url: result.url,
                    width: result.width,
                    height: result.height,
                    format: result.format,
                    resource_type: result.resource_type,
                    bytes: result.bytes,
                });
            }
        );
        stream.end(buffer);
    });
}

/**
 * Delete an image from Cloudinary by public_id
 */
export async function deleteImage(publicId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) {
                reject(new Error(`Cloudinary delete error: ${error.message}`));
                return;
            }
            resolve(result?.result === 'ok');
        });
    });
}

/**
 * Generate a transformed URL for an image
 */
export function getTransformedUrl(
    publicId: string,
    transformations: object = {}
): string {
    return cloudinary.url(publicId, {
        secure: true,
        transformation: transformations,
    });
}

/**
 * Generate a thumbnail URL
 */
export function getThumbnailUrl(publicId: string, width = 300, height = 300): string {
    return getTransformedUrl(publicId, {
        width,
        height,
        crop: 'fill',
        gravity: 'auto',
        quality: 'auto',
        format: 'auto',
    });
}

/**
 * Extract public_id from a Cloudinary URL
 */
export function extractPublicId(url: string): string | null {
    try {
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split('/');

        // Find the index after 'upload' and version if present
        const uploadIndex = pathParts.findIndex(part => part === 'upload');
        if (uploadIndex === -1) return null;

        // Skip version (v1234567890) if present
        let startIndex = uploadIndex + 1;
        if (pathParts[startIndex]?.startsWith('v')) {
            startIndex++;
        }

        // Join remaining parts and remove extension
        const publicIdWithExt = pathParts.slice(startIndex).join('/');
        const lastDotIndex = publicIdWithExt.lastIndexOf('.');

        return lastDotIndex > 0 ? publicIdWithExt.substring(0, lastDotIndex) : publicIdWithExt;
    } catch {
        return null;
    }
}

// Export the configured cloudinary instance
export { cloudinary };

// Export default
export default cloudinary;
