# Saara Lehtonen - Professional Website

Standalone website for actress Saara Lehtonen, built with React + TypeScript + Vite.

## Features

- 🎨 **Beautiful responsive design** - Works perfectly on mobile, tablet, and desktop
- 🎭 **Full-page hero layout** - Dramatic presentation with background image
- 📱 **Mobile-friendly navigation** - Hamburger menu with smooth interactions
- 🎨 **Color palette system** - Easy to switch between 3 curated color schemes
- ⚡ **Fast and lightweight** - Built with Vite for optimal performance

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Inline CSS-in-JS (no dependencies)
- **Deployment**: Ready for Netlify, Vercel, or any static host

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### Build for production
```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview production build
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── Navigation.tsx          # Responsive navigation with hamburger menu
├── pages/
│   └── HomePage.tsx            # Full-page hero landing page
├── hooks/
│   └── useScreenSize.ts        # Responsive breakpoint detection
├── styles/
│   └── colorPalettes.ts        # Color palette system (3 schemes)
├── SaaraLehtonenSite.tsx       # Main site component
└── App.tsx                     # App entry point

public/
└── saara/
    └── IMG_8559.jpg            # Hero background image
```

## Color Palettes

The site includes 3 curated color palettes that can be easily switched:

1. **Driftwood Pearl Morning** - Warm, earthy, sophisticated
2. **Graphite** - Soft, elegant, professional (currently active)
3. **Sapphire Ash Morning** - Cool, professional, clean

To switch palettes, edit `src/styles/colorPalettes.ts`:

```typescript
export const ACTIVE_PALETTE_KEY: keyof typeof PALETTES = 'graphite'
```

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## Next Steps (Planned)

- [ ] Add Decap CMS for content editing
- [ ] Create additional pages (About, Gallery, Media, CV, Contact)
- [ ] Deploy to Netlify with authentication
- [ ] Set up custom domain

## Development Notes

- Site extracted from YazzoSiteLight project
- Designed to be standalone and independently deployable
- No external dependencies for styling (keeps bundle small)
- All content currently hardcoded (CMS integration planned)

## License

Private project for Saara Lehtonen

---

Built with ❤️ by Timo Saari
