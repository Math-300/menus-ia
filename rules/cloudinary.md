# Cloudinary Media Rules

## Trigger
- `**/media/**` directory
- `**/upload/**` directory

## Upload Configuration

### Image Upload Widget
```typescript
const widget = cloudinary.createUploadWidget({
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  uploadPreset: 'menuos-uploads',
  folder: `tenants/${tenantId}`,
  maxFileSize: 5000000, // 5MB
  allowedFormats: ['jpg', 'png', 'webp'],
  transformation: { quality: 'auto', fetch_format: 'auto' }
}, (error, result) => {
  if (result.event === 'success') {
    // Handle successful upload
  }
});
```

## Image Optimization

### Responsive Images
```typescript
// Generate responsive image URLs
const getImageUrl = (publicId: string, width: number) => {
  return `https://res.cloudinary.com/${cloudName}/image/upload/w_${width},q_auto,f_auto/${publicId}`;
};

// Srcset for responsive images
const srcSet = [320, 640, 768, 1024, 1280]
  .map(w => `${getImageUrl(publicId, w)} ${w}w`)
  .join(', ');
```

### Transformations
```typescript
// Menu item thumbnail
c_fill,w_400,h_300,q_auto,f_auto

// Hero image
c_fill,w_1920,h_600,q_auto,f_auto

// Story thumbnail
c_fill,w_200,h_200,q_auto,f_auto

// Favicon
c_fill,w_32,h_32,q_auto,f_auto
```

## Best Practices
- Use auto quality and format
- Lazy load images below fold
- Use placeholder/blur during load
- Organize by tenant folder
- Implement upload limits per plan
- Delete unused images periodically

## Storage Limits by Plan
- Starter: 100MB
- Pro: 1GB
- Enterprise: Unlimited
