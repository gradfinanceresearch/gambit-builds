# Gambit Builds - Portfolio Website

Modern, responsive portfolio website for Gambit Builds web development agency. Built with Next.js, React, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display (headings), DM Sans (body)
- **Deployment:** Vercel

## Features

- Dark theme with orange accent color (#f97316)
- Fully responsive mobile design
- Hero section with CTA
- Stats bar
- Portfolio grid (5 projects with browser mockups)
- How It Works (4-step process)
- CTA section
- Fixed navigation header
- Footer with links and contact info
- All buttons link to `mailto:kaleb@gambitbuilds.com`

## Project Structure

```
gambit-builds/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── StatsBar.tsx
│   ├── Portfolio.tsx
│   ├── HowItWorks.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── styles/
│   └── globals.css
├── package.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── vercel.json
├── .gitignore
└── README.md
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

## Build

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push code to GitHub
2. Connect repo to Vercel
3. Vercel auto-detects Next.js and deploys

Or deploy directly:

```bash
npm i -g vercel
vercel
```

## Customization

### Colors
Update in `tailwind.config.js`:
- Dark background: `#080808`
- Accent orange: `#f97316`

### Portfolio Projects
Edit project data in `components/Portfolio.tsx`

### Contact Email
Update `mailto:kaleb@gambitbuilds.com` throughout to your email

### Fonts
Google Fonts are loaded in `pages/_document.tsx`. To change fonts, update the font link and Tailwind config.

## Performance

- Optimized images
- Code splitting
- Server-side rendering
- Vercel edge network

## License

© 2026 Gambit Builds. All rights reserved.
