# SEO Checklist for Saara Lehtonen Website

## ✅ Completed (Technical SEO)

### Meta Tags & Basic SEO
- ✅ Page title optimized: "Saara Lehtonen - Näyttelijä, Dubbaaja, Spiikkeri"
- ✅ Meta description (160 characters)
- ✅ Keywords meta tag (Finnish + English)
- ✅ Language set to Finnish (`<html lang="fi">`)
- ✅ Canonical URL defined
- ✅ Robots meta tag (index, follow)

### Open Graph (Social Media Sharing)
- ✅ OG title, description, image
- ✅ OG type: profile
- ✅ OG locale: fi_FI
- ✅ Profile first/last name
- ✅ Twitter Card tags

### Structured Data (Schema.org)
- ✅ JSON-LD Person schema
- ✅ Job titles defined
- ✅ Nationality and languages
- ✅ Occupations (Actress, Voice Actor)
- ✅ SameAs links (social profiles)

### Technical Files
- ✅ robots.txt created
- ✅ sitemap.xml created
- ✅ _headers file (Netlify caching + security)
- ✅ OG image placeholder documentation

---

## 🔜 To Do Before Launch

### 1. Open Graph Image
- [x] Create OG image (1200x630px) ✅
- [x] Professional headshot with name overlay ✅
- [x] Save as `/public/og-image.jpg` ✅
- [x] Test with Facebook Debugger ✅

### 2. Favicon
- [ ] Create proper favicon.ico (32x32px) - SKIPPED
- [ ] Create apple-touch-icon.png (180x180px) - SKIPPED
- [ ] Replace default vite.svg - SKIPPED

### 3. Content SEO
- [x] Ensure H1 tag with "Saara Lehtonen" on home page ✅
- [x] Proper heading hierarchy (H1 → H2 → H3) ✅
- [x] Alt text for ALL images ✅
- [x] Descriptive link text (avoid "click here") ✅

### 4. Performance
- [x] Optimize all images (WebP format) ✅
- [x] Lazy loading for images ✅ (React components handle this)
- [x] Minify CSS/JS (Vite does this automatically) ✅
- [x] Test page speed with Google PageSpeed Insights ✅ (2025-12-17: 88 Performance, 100 Accessibility/Best Practices/SEO)

### 5. Domain & Hosting
- [x] Set up custom domain ✅ (saaralehtonen.com)
- [x] Configure HTTPS ✅ (Netlify SSL active)
- [ ] Set up 301 redirects (if needed)
- [x] Update sitemap.xml with final domain ✅

### 6. Google Search Console Setup & Indexing
- [x] Add site to Google Search Console (Completed 2025-12-17)
- [x] Verify ownership via HTML file (`googlee954baaa9e9c972d.html`)
- [x] Submit sitemap.xml to Google ✅ (Completed 2025-12-17)
  - Go to "Sitemaps" → Enter `sitemap.xml` → Submit
- [x] Request indexing for homepage ✅ (Completed 2025-12-17)
  - Go to "URL Inspection" → Enter `https://saaralehtonen.com` → Request Indexing
- [ ] Monitor crawl errors and coverage
- [ ] Set up email notifications for critical issues

#### Verification Method Used:
- **HTML File Upload:** `googlee954baaa9e9c972d.html` in public folder
- **Status:** Verified ✅
- **Date:** December 17, 2025

---

## 📋 Post-Launch SEO Tasks

### Week 1: Initial Setup
- [x] Submit to Google Search Console ✅
- [x] Submit sitemap to Google Search Console ✅ (2025-12-17)
- [x] Request indexing for key pages ✅ (2025-12-17)
- [ ] Submit to Bing Webmaster Tools - SKIPPED (optional)
- [x] Test all Open Graph tags (Facebook Debugger) ✅ (2025-12-17 - fb:app_id optional, skipped)
- [x] Verify structured data (Schema.org validator) ✅ (2025-12-17 - Person type valid)

### Month 1: Content Optimization
- [ ] Add more descriptive bio content
- [ ] Include production/show names in content
- [ ] Add location keywords (Helsinki, Finland, etc.)
- [ ] Link to Saara's social media profiles

### Ongoing: Link Building
- [ ] Link from Saara's social media to website
- [ ] Add to Finnish actor directories (if available)
- [ ] Get listed on Vild.fi profile (already has voice samples)
- [ ] Link from production company credits (if possible)

### Analytics (Optional)
- [ ] Set up Google Analytics 4 (optional)
- [ ] Track visitor sources
- [ ] Monitor popular pages
- [ ] Track time on site

---

## 🎯 Target Keywords

### Primary (High Priority)
- ✅ "Saara Lehtonen" (exact name match)
- ✅ "Saara Lehtonen näyttelijä"
- ✅ "Saara Lehtonen actress"

### Secondary (Medium Priority)
- "Suomalainen näyttelijä" (Finnish actress)
- "Näyttelijä Helsinki"
- "Dubbaaja Suomi"
- "Spiikkeri Helsinki"

### Long-tail (Lower Priority)
- "Elovena mainos näyttelijä" (Elovena commercial actress)
- "Voice of Finland 2017 Saara"
- "Suomalainen äänityö" (Finnish voice work)

---

## 🔧 Tools to Use

### Testing & Validation
- **Google PageSpeed Insights:** https://pagespeed.web.dev/
- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly

### Monitoring
- **Google Search Console:** https://search.google.com/search-console
- **Bing Webmaster Tools:** https://www.bing.com/webmasters

### Analytics (Optional)
- **Google Analytics:** https://analytics.google.com/

---

## 🚀 Google Indexing Optimization Guide

### How to Speed Up Google Re-Indexing

When migrating to a new site or updating content, follow these steps to get Google to index the new version quickly:

#### Step 1: Submit Sitemap (Most Important)
1. Go to Google Search Console
2. Navigate to "Sitemaps" in left menu
3. Enter: `sitemap.xml`
4. Click "Submit"
5. **Result:** Google starts crawling within hours

#### Step 2: Request Indexing for Key Pages (Priority Crawl)
1. Go to "URL Inspection" in left menu
2. Enter the full URL (e.g., `https://saaralehtonen.com`)
3. Click "Test URL"
4. Click "Request Indexing"
5. **Result:** Priority crawl within 24-48 hours

**Important URLs to request indexing for:**
- `https://saaralehtonen.com` (homepage)
- Other important pages as needed

**Note:** You can only request indexing for a limited number of URLs per day (usually 10-20).

#### Step 3: Manual Sitemap Ping (Optional)
Visit this URL in your browser to manually ping Google:
```
https://www.google.com/ping?sitemap=https://saaralehtonen.com/sitemap.xml
```

#### Step 4: Remove Old Cached Pages (Optional)
If old site content still appears in Google:
1. Go to: https://www.google.com/webmasters/tools/removals
2. Request removal of outdated URLs
3. Wait for removal to process (24-48 hours)

### Expected Timeline for Re-Indexing

- ✅ **Sitemap submitted:** Crawling starts within 1-6 hours
- ⏳ **Request indexing:** Priority crawl in 24-48 hours
- ⏳ **Natural re-crawl:** 1-2 weeks without action
- ⏳ **Full re-indexing:** 2-4 weeks for all pages
- 🎯 **Old cache replaced:** 2-4 weeks for complete update

### Monitoring Index Status

In Google Search Console, monitor:
1. **Coverage Report:** Shows which pages are indexed
2. **Sitemaps Report:** Shows sitemap status and discovered URLs
3. **Performance Report:** Shows search rankings and clicks
4. **URL Inspection:** Check specific page index status

### Sitemap Updates

**When to update sitemap.xml:**
- After adding new pages or content
- When making significant content changes
- Monthly as best practice

**Current sitemap:**
- Location: `/public/sitemap.xml`
- Last updated: 2025-12-17
- URLs included: 5 (home, about, gallery, media, contact)

**Update process:**
1. Edit `public/sitemap.xml`
2. Update `<lastmod>` dates to current date
3. Commit and push changes
4. Re-submit to Google Search Console (optional, Google will discover automatically)

### Common Issues & Solutions

**Issue:** Google says "URL not found"
- **Solution:** Make sure you selected the correct property in Search Console

**Issue:** "Couldn't find your verification token"
- **Solution:** Ensure verification file is in `/public/` folder and deployed

**Issue:** Sitemap errors
- **Solution:** Validate sitemap at https://www.xml-sitemaps.com/validate-xml-sitemap.html

**Issue:** Pages not being indexed
- **Solution:** Check robots.txt isn't blocking, ensure HTTPS is working

---

## 💡 SEO Best Practices for Actress Portfolios

### Content Tips:
1. **Name everywhere:** Use full name "Saara Lehtonen" in headers, titles, content
2. **Job titles:** Repeat "näyttelijä, dubbaaja, spiikkeri" naturally
3. **Credits:** List shows, productions, commercials (with names)
4. **Location:** Mention Helsinki, Finland for local SEO
5. **Fresh content:** Update regularly via CMS (Google loves fresh content)

### Image SEO:
```html
<!-- Good example -->
<img
  src="/images/saara-headshot.jpg"
  alt="Saara Lehtonen - Suomalainen näyttelijä, dubbaaja ja spiikkeri"
  title="Saara Lehtonen ammattilaisvalokuva"
/>

<!-- Bad example -->
<img src="/img1.jpg" alt="photo" />
```

### Internal Linking:
- Link from Home → Gallery → About → Contact
- Use descriptive anchor text: "Katso ammattilaisvalokuvat" not "Klikkaa tästä"

---

## 📊 Expected Results Timeline

### Week 1-2: Indexing
- Google crawls and indexes the site
- Site appears when searching "Saara Lehtonen"

### Month 1: Name Searches
- Ranks #1 for "Saara Lehtonen näyttelijä"
- Shows correct info in Google Knowledge Panel (maybe)

### Month 3-6: Broader Terms
- Might rank for "suomalainen näyttelijä" (very competitive)
- Strong presence for "Saara Lehtonen" + any keyword

### Ongoing:
- Maintain #1 position for name searches
- Build authority through links and fresh content

---

## ⚠️ Common SEO Mistakes to Avoid

1. ❌ **Missing alt text on images** - Google can't "see" images
2. ❌ **Duplicate content** - Each page should be unique
3. ❌ **Keyword stuffing** - Don't repeat keywords unnaturally
4. ❌ **Slow loading** - Optimize images!
5. ❌ **No mobile optimization** - Already handled ✅
6. ❌ **Broken links** - Test all links before launch
7. ❌ **Missing H1 tag** - Every page needs exactly one H1

---

## 📝 Notes

- Update `sitemap.xml` lastmod dates when content changes
- Update `index.html` social links when Saara provides them
- Keep JSON-LD structured data current (add new productions/credits)
- Domain in meta tags is placeholder - update when final domain is set

---

## 🚀 Quick Win Checklist (Before Launch)

Priority tasks for immediate SEO impact:

1. [ ] Create and upload OG image (1200x630px)
2. [ ] Add alt text to all images
3. [ ] Ensure H1 tag on home page
4. [ ] Create proper favicon
5. [ ] Update all URLs with final domain
6. [ ] Test mobile responsiveness
7. [ ] Submit to Google Search Console
8. [ ] Link from Saara's social media profiles

**Estimated time: 2-3 hours**
