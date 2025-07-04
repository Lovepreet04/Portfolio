# Deployment Guide

This guide covers different deployment options for the Lovepreet Singh Portfolio website.

## 🚀 Quick Deploy Options

### Vercel (Recommended)
1. Fork this repository to your GitHub account
2. Visit [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your forked repository
4. Vercel will automatically detect the build settings
5. Deploy and get your live URL

### Netlify
1. Fork this repository
2. Visit [netlify.com](https://netlify.com) and sign in
3. Click "New site from Git" and connect your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
5. Deploy your site

### Replit Deployments
1. Open your project in Replit
2. Click the "Deploy" button in the top bar
3. Choose "Autoscale Deployment"
4. Your site will be live with a `.replit.app` domain

## 🔧 Manual Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 📁 Build Output
- Client build: `dist/public/`
- Server build: `dist/server/`

## 🌐 Environment Variables
No environment variables are required for basic deployment.

## 📝 Custom Domain
For custom domains, configure DNS settings in your deployment platform:
- Add CNAME record pointing to your deployment URL
- Update platform settings with your custom domain

## 🔒 HTTPS
All recommended platforms provide automatic HTTPS certificates.

## 📊 Performance Tips
- Images are optimized and served via CDN
- CSS and JS are minified in production
- Gzip compression is enabled
- Static assets have cache headers

---

**Need help?** Contact [Eng.Lovepreet@gmail.com](mailto:Eng.Lovepreet@gmail.com)