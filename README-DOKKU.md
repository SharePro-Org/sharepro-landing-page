# SharePro Landing Page - Dokku Deployment Guide

This guide will help you deploy the SharePro Landing Page (React Router v7 + Vite) application to your Dokku server.

## Prerequisites

- Dokku server with Node.js buildpack installed
- Git access to the server
- Domain name configured (optional)

## Project Overview

This is a React Router v7 application with:
- **Framework**: React Router v7 with SSR/SPA capabilities
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **API Integration**: Apollo GraphQL Client
- **Deployment**: Docker + Dokku

## Files Overview

The following files have been added/configured for Dokku deployment:

- `Procfile` - Tells Dokku how to start the application
- `app.json` - Application metadata and configuration
- `.dokkuignore` - Files to exclude from deployment
- `.env.example` - Environment variables template
- `deploy.sh` - Automated deployment script
- `app/routes/health.tsx` - Health check endpoint

## Quick Deployment

### 1. Server Setup

On your Dokku server, create the application:

```bash
# SSH into your server
ssh root@198.177.123.23

# Create the Dokku app
dokku apps:create sharepro-landing

# Set environment variables
dokku config:set sharepro-landing NODE_ENV=production PORT=4000 REACT_APP_API_URL=https://api.mysharepro.com/graphql/

# Optional: Configure domain
dokku domains:add sharepro-landing mysharepro.com
dokku domains:add sharepro-landing www.mysharepro.com

# Optional: Enable SSL with Let's Encrypt
dokku letsencrypt:enable sharepro-landing
```

### 2. Deploy from Local Machine

```bash
# Add Dokku as git remote
git remote add dokku-landing dokku@198.177.123.23:sharepro-landing

# Deploy
git push dokku-landing main
```

### 3. Alternative: Use the Deploy Script

Make the script executable and run it:

```bash
# On Windows (Git Bash or WSL)
chmod +x deploy.sh
./deploy.sh

# On Windows (PowerShell)
bash deploy.sh
```

## Configuration

### Environment Variables

Set these environment variables on your Dokku server:

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Node environment | `production` |
| `PORT` | Application port | `3000` |
| `REACT_APP_API_URL` | GraphQL API URL | `https://api.mysharepro.com/graphql/` |
| `REACT_APP_WS_URL` | WebSocket URL | `wss://api.mysharepro.com/ws/graphql/` |

```bash
dokku config:set sharepro-landing NODE_ENV=production
dokku config:set sharepro-landing PORT=3000
dokku config:set sharepro-landing REACT_APP_API_URL=https://api.mysharepro.com/graphql/
dokku config:set sharepro-landing REACT_APP_WS_URL=wss://api.mysharepro.com/ws/graphql/
```

### Custom Domains

```bash
# Add custom domain
dokku domains:add sharepro-landing your-domain.com

# Remove default domain (optional)
dokku domains:remove sharepro-landing sharepro-landing.198.177.123.23
```

### SSL Certificate

```bash
# Enable Let's Encrypt SSL
dokku letsencrypt:enable sharepro-landing

# Auto-renew certificates
dokku letsencrypt:cron-job --add

# Add HTTPS port mapping
dokku ports:add sharepro-landing https:443:4000
```

## Monitoring and Maintenance

### View Application Logs

```bash
# View recent logs
dokku logs sharepro-landing

# Follow logs in real-time
dokku logs sharepro-landing -t
```

### Application Management

```bash
# Restart application
dokku ps:restart sharepro-landing

# Check application status
dokku ps:report sharepro-landing

# Scale application (if needed)
dokku ps:scale sharepro-landing web=2
```

### Health Check

The application includes a health check endpoint at `/health`:

```bash
curl https://your-domain.com/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "service": "sharepro-landing-page",
  "version": "1.0.0",
  "environment": "production",
  "uptime": 3600,
  "memory": {
    "used": 25000000,
    "total": 50000000
  },
  "checks": {
    "server": "healthy"
  }
}
```

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

### Build Process

The application uses React Router v7's build system:

1. **Development**: `npm run dev` - Vite dev server with HMR
2. **Build**: `npm run build` - Creates optimized production build
3. **Start**: `npm start` - Serves the built application

## Troubleshooting

### Build Failures

1. Check Node.js version compatibility:
   ```bash
   dokku config:set sharepro-landing NODE_VERSION=20.0.0
   ```

2. Clear buildpack cache:
   ```bash
   dokku repo:purge-cache sharepro-landing
   ```

### Memory Issues

If the application runs out of memory during build:

```bash
# Increase memory limit
dokku config:set sharepro-landing NODE_OPTIONS="--max-old-space-size=4096"
```

### Port Issues

Ensure the application is listening on the correct port:

```bash
# Check port configuration
dokku config sharepro-landing | grep PORT
```

### Environment Variable Issues

List all environment variables:

```bash
dokku config sharepro-landing
```

### DNS Issues

Check domain configuration:

```bash
dokku domains:report sharepro-landing
```

## Performance Optimization

### Static Asset Optimization

The application is optimized for production with:
- Tree-shaking for minimal bundle size
- Code splitting for optimal loading
- Static asset optimization via Vite

### CDN Integration

For better performance, consider using a CDN for static assets:

```bash
# Set CDN URL if available
dokku config:set sharepro-landing REACT_APP_CDN_URL=https://cdn.mysharepro.com
```

### Caching

Configure proper caching headers via Nginx (automatic with Dokku):
- Static assets: Long-term caching
- HTML files: Short-term caching
- API responses: No caching

## Security

### Environment Variables

Never commit sensitive data to the repository. Use environment variables for:
- API URLs
- Analytics tracking IDs
- Third-party service keys

### Content Security Policy

Consider implementing CSP headers for enhanced security:

```bash
# Add security headers via Nginx configuration
echo 'add_header X-Frame-Options DENY;' > /home/dokku/sharepro-landing/nginx.conf.d/security.conf
dokku nginx:build-config sharepro-landing
```

## Support

For issues specific to this deployment:

1. Check application logs: `dokku logs sharepro-landing`
2. Verify configuration: `dokku config sharepro-landing`
3. Test health endpoint: `curl https://your-domain.com/health`
4. Check Dokku documentation: [dokku.com](https://dokku.com/)

## Deployment Checklist

- [ ] Dokku server is set up and accessible
- [ ] Application created on Dokku server
- [ ] Environment variables configured
- [ ] Git remote added locally
- [ ] Application successfully deployed
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate enabled
- [ ] Health check endpoint responds correctly
- [ ] Application is accessible via browser
- [ ] Performance monitoring in place