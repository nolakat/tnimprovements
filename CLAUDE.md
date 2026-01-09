# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

T&N Home Improvements website - a Gatsby 4 static site for a Pittsburgh home improvement contractor. Deployed on Netlify.

## Commands

```bash
npm run develop    # Start dev server at localhost:8000
npm run build      # Production build
npm run serve      # Serve production build locally
npm run clean      # Clear Gatsby cache (.cache and public directories)
```

Note: Requires Node v14.21.1 (specified in package.json keywords).

## Architecture

### Tech Stack
- **Framework**: Gatsby 4 with React 17
- **Styling**: Tailwind CSS + SCSS (both used together)
- **SEO**: react-helmet for meta tags, schema.org JSON-LD for local business
- **Analytics**: Google Analytics via gatsby-plugin-google-gtag
- **Fonts**: Oswald (display) and Source Sans Pro (body) via Google Fonts

### Key Patterns

**Layout**: All pages wrap content in `src/pages/layout.js` which provides:
- NavBar and Footer
- Helmet for SEO meta tags and structured data
- Site metadata via `useSiteMetadata` hook

**Site Metadata**: Configured in `gatsby-config.js` and accessed via GraphQL hook at `src/hooks/use-site-metadata.jsx`

**Styling Architecture**:
- Global styles in `src/styles/index.scss` (imported in gatsby-browser.js)
- SCSS partials organized: `global/`, `tools/`, `components/`
- Tailwind configured in `tailwind.config.js` with custom colors:
  - `gold-100: #f4c263` (brand accent)
  - `navy: #1e283b`, `darkNavy: #050e1b` (brand primaries)
- Custom fonts: `font-display` (Oswald), `font-body` (Source Sans Pro)

**Pages**: Service-specific pages (drywalling, patios, doors-framing, etc.) under `src/pages/`

**Components**: Reusable UI in `src/components/` - buttons, hero sections, navigation, footer, contact forms, galleries
