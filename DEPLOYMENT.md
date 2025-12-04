# Vow Vault - Wedding Planner

A comprehensive wedding planning application built with Next.js, React, and Tailwind CSS.

## 🚀 Netlify Deployment

This project is configured for easy deployment on Netlify with static site generation.

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Netlify Deployment

#### Option 1: Deploy via Netlify UI
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will automatically detect the settings from `netlify.toml`
4. Deploy!

#### Option 2: Deploy via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Configuration Files

- `netlify.toml` - Netlify build configuration
- `next.config.ts` - Next.js configuration with static export
- `public/_redirects` - SPA routing redirects
- `.gitignore` - Git ignore rules (includes `/out/` directory)

### Build Settings
- **Build Command**: `npm run build`
- **Publish Directory**: `out`
- **Node Version**: 18

### Features
- Static site generation for optimal performance
- SPA routing support
- Optimized caching headers
- Security headers configured
- Mobile-responsive design

### Environment Variables
No environment variables are required for this static deployment.

### Troubleshooting
- Ensure all dependencies are installed: `npm install`
- Check that the build completes successfully: `npm run build`
- Verify the `out` directory is generated after build
- Check Netlify build logs for any errors
