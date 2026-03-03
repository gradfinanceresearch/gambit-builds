# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Via GitHub

1. Push this repo to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/gambit-builds.git
   git branch -M main
   git push -u origin main
   ```

2. Go to [Vercel.com](https://vercel.com)
3. Click "New Project"
4. Import GitHub repo
5. Vercel auto-detects Next.js, click Deploy
6. Your site goes live at `gambit-builds.vercel.app` (or custom domain)

### Option 2: Via Vercel CLI

1. Install Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. Deploy
   ```bash
   vercel
   ```

3. Follow prompts, select `y` for all defaults
4. Site deploys automatically

## Custom Domain

1. In Vercel dashboard, go to Project Settings
2. Click "Domains"
3. Add your custom domain (e.g., `gambitbuilds.com`)
4. Update DNS records as instructed by Vercel
5. Done! HTTPS is automatic via Vercel SSL

## Environment Variables

No environment variables needed for this project. All config is in code.

## Redeploy

Every git push to `main` automatically redeploys via Vercel.

## Testing Before Deploy

```bash
npm run build
npm run start
```

Visit `http://localhost:3000` to verify everything works.

## Performance Tips

- Images: Add Next.js Image component for optimization
- Analytics: Connect Vercel Analytics in project settings
- Monitoring: Enable Vercel Web Vitals monitoring

## Troubleshooting

**Build fails:**
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Port already in use:**
```bash
npm run dev -- -p 3001
```

**Vercel CLI not found:**
```bash
npm install -g vercel@latest
```

## Support

- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
