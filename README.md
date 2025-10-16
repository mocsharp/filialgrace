# 孝恩佛堂 Temple of Filial Grace Website

A modern, bilingual static website for Temple of Filial Grace (孝恩佛堂) built with React, TypeScript, Tailwind CSS, and deployed on GitHub Pages.

## Features

- 🌐 **Bilingual Support**: Traditional Chinese (繁體中文) and English
- 🎨 **Modern Design**: Responsive, accessible, and beautiful
- ⚡ **Fast Performance**: Built with Vite for optimal performance
- 🎭 **Smooth Animations**: Parallax scrolling effects with Framer Motion
- ♿ **Accessible**: WCAG AA compliant with keyboard navigation
- 📱 **Mobile-First**: Fully responsive design for all devices
- 🔍 **SEO Optimized**: Meta tags, Open Graph, structured data, and sitemap
- 📊 **Analytics**: Google Analytics integration
- 🍪 **Cookie Consent**: GDPR/CCPA compliant cookie banner

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: react-i18next
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
cd filialgrace-website
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

### 1. Enable GitHub Pages

- Go to your repository settings
- Navigate to "Pages" section
- Under "Source", select "GitHub Actions"

### 2. Configure Custom Domain

In repository settings > Pages, add: `filialgrace.org`

### 3. DNS Configuration

Add these DNS records at your domain provider:

**A Records** (for apex domain):
```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
```

**CNAME Record** (for www):
```
Type: CNAME, Name: www, Value: <yourusername>.github.io
```

### 4. Push to Deploy

```bash
git add .
git commit -m "Deploy website"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy.

## Customization

### Adding Images

1. Place images in `public/` folder
2. Update `Home.tsx` to use your images

### Updating Content

- **Translations**: Edit `src/i18n.ts`
- **Styles**: Modify `tailwind.config.js`
- **Pages**: Update files in `src/pages/`

## License

© 2025 Temple of Filial Grace. All rights reserved.

## Contact

Website: https://filialgrace.org
