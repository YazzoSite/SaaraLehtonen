# Saara Lehtonen - Actress Portfolio Website

**Client:** Saara Lehtonen
**Type:** Actress portfolio (näyttelijä, dubbaaja, spiikkeri)
**Status:** In Development

## Folder Structure

```
/src/production/saara-lehtonen/
├─ .developmentPlan.md          # Internal plan (hidden from client)
├─ README.md                    # This file
├─ SaaraLehtonenSite.tsx        # Main site router
├─ components/                  # Reusable components
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  └─ Navigation.tsx
├─ pages/                       # Page components
│  ├─ HomePage.tsx
│  ├─ AboutPage.tsx
│  ├─ GalleryPage.tsx
│  ├─ MediaPage.tsx
│  ├─ CVPage.tsx
│  └─ ContactPage.tsx
├─ styles/                      # Styling
│  └─ colorPalettes.ts          # All 3 color palettes
└─ assets/                      # Images and media
   └─ placeholders/             # Temporary images
```

## Color Palettes

Three color palettes available (easily switchable):
1. **Driftwood Pearl Morning** - Warm, earthy
2. **Graphite** - Soft, elegant
3. **Sapphire Ash Morning** - Cool, professional

Currently using: **Combined Palette** (best elements from all three)

To change palette: Edit `ACTIVE_PALETTE_KEY` in `styles/colorPalettes.ts`

## Development Phases

- **Phase 1:** Build static pages with hardcoded content ← CURRENT
- **Phase 2:** Integrate real content and media
- **Phase 3:** Builder integration (optional)
- **Phase 4:** Deployment

## Media to Include

- Elovena commercial: https://youtu.be/EjO6EcuqlAM
- Vild voice samples: https://vild.fi/spiikkerihaku?query=Saara+Lehtonen
- Voice of Finland 2017: https://www.ruutu.fi/video/2932661

## Design References

Client's favorite sites:
- www.janekaariainen.com (FAVORITE - clear and stylish)
- www.elsasaisio.com (bright and clear)
- www.ilonachevakova.com (good clear menu)

## Notes

- Keep text COMPACT - client doesn't want overwhelming text
- Bright, clean design (not dark)
- Professional but approachable
- Mobile responsive
