# Jaleel Kotun - Athlete Profile Website

A modern, responsive Next.js 14 website built with TypeScript and Tailwind CSS, featuring an athlete-style design inspired by professional sports websites.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** - Mobile-first approach
- **Modern UI** - Clean, athlete-inspired design

## Pages

- **Home** (`/`) - Hero section with stats, bio preview, highlights, and gallery
- **Bio** (`/bio`) - Full biography page
- **Stats** (`/stats`) - Detailed statistics and performance metrics
- **Highlights** (`/highlights`) - Video highlights and key moments
- **Gallery** (`/gallery`) - Photo gallery grid
- **Achievements** (`/achievements`) - Awards and accomplishments
- **Contact** (`/contact`) - Contact form and information

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── page.tsx              # Homepage
│   ├── bio/page.tsx          # Bio page
│   ├── stats/page.tsx        # Stats page
│   ├── highlights/page.tsx   # Highlights page
│   ├── gallery/page.tsx      # Gallery page
│   ├── achievements/page.tsx # Achievements page
│   ├── contact/page.tsx      # Contact page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Navigation bar
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section
│   ├── StatsSection.tsx      # Stats section
│   ├── BioPreview.tsx        # Bio preview
│   ├── HighlightsPreview.tsx # Highlights preview
│   └── PhotoGrid.tsx         # Photo grid gallery
└── package.json
```

## Customization

All content is currently using placeholder data. You can replace:
- Dummy text with actual content
- Placeholder images with real photos
- Statistics with actual data
- Contact information with real details

## Build for Production

```bash
npm run build
npm start
```


