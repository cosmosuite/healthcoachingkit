# Netlify Deployment Guide

## Quick Deploy

The project is now ready for Netlify deployment!

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select the repository: `cosmosuite/lifecoachingkit`
5. Configure build settings (these should auto-populate from `netlify.toml`):
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: 18
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod
```

## Environment Variables

No environment variables are currently required for deployment. All tracking codes (Meta Pixel, Pinterest, Reddit) are already configured in the code.

## Build Configuration

The project uses Next.js static export mode. Build settings are configured in:
- `netlify.toml` - Netlify-specific configuration
- `next.config.ts` - Next.js configuration with `output: 'export'`

## Post-Deployment Checklist

After deployment:

1. ✅ Verify the homepage loads correctly
2. ✅ Check mobile responsiveness
4. ✅ Verify Meta Pixel is firing (use Facebook Pixel Helper extension)
5. ✅ Test currency switcher (USD ↔ INR)
6. ✅ Test checkout redirect functionality
7. ✅ Verify all images load properly

## Custom Domain Setup

To add a custom domain:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow Netlify's DNS configuration instructions
4. Update the `metadataBase` in `src/app/layout.tsx` to your custom domain

## Continuous Deployment

Netlify is now configured for continuous deployment:
- Every push to `main` branch will trigger a new deployment
- Preview deployments are created for pull requests

## Troubleshooting

### Build fails
- Check the build logs in Netlify dashboard
- Ensure Node version is 18 or higher
- Verify all dependencies are in `package.json`

### Images not loading
- Ensure images are in the `public` folder
- Check image paths are correct (should start with `/`)

### Redirects not working
- Verify `netlify.toml` is in the root directory
- Check the `_redirects` file in `public` folder

## Repository

GitHub: https://github.com/cosmosuite/lifecoachingkit.git

## Support

For deployment issues, check:
- [Netlify Docs](https://docs.netlify.com/)
- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
