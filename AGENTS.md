# Pensula Curată - Agent Documentation

## Project Overview

**Pensula Curată** is a React-based marketing website for a Romanian painting services business. The site targets customers in Târgoviște and Dâmbovița county, offering interior painting and minor wall repair services.

- **Language**: Romanian (content), English (code/comments)
- **Domain**: https://pensulacurata.ro
- **Business Type**: Local painting services (zugrăveli interioare)
- **Contact Phone**: 0774 613 207

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | React | 19.2.0 |
| Language | TypeScript | 5.9.3 |
| Build Tool | Vite | 7.2.4 |
| Router | react-router-dom | 7.13.1 |
| Styling | Tailwind CSS | 3.4.19 |
| UI Components | shadcn/ui | - |
| Animation | framer-motion | 12.38.0 |
| Icons | lucide-react | 0.562.0 |
| Forms | react-hook-form | 7.70.0 |
| Validation | zod | 4.3.5 |

### UI Component Library

The project uses **shadcn/ui** (New York style) with **Radix UI** primitives. 40+ pre-installed components are available in `src/components/ui/`:

```typescript
// Import pattern
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
```

Available components: accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, empty, field, form, hover-card, input, input-group, input-otp, item, kbd, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toggle, toggle-group, tooltip.

## Project Structure

```
src/
├── components/           # Shared components
│   ├── ui/              # shadcn/ui components (40+)
│   ├── FAQ.tsx          # FAQ accordion component
│   ├── Logo.tsx         # Brand logo
│   ├── Navbar.tsx       # Navigation bar
│   ├── SchemaMarkup.tsx # SEO structured data
│   └── SEOPageTemplate.tsx # Template for SEO pages
├── pages/               # Route-level page components
│   ├── Home.tsx         # Homepage
│   ├── ZugraveliTargoviste.tsx
│   ├── ZugraveliDambovita.tsx
│   └── ZugravInteriorTargoviste.tsx
├── sections/            # Page section components
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Gallery.tsx
│   ├── Trust.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── hooks/               # Custom React hooks
│   └── use-mobile.ts    # Mobile breakpoint detection
├── lib/                 # Utility functions
│   └── utils.ts         # cn() helper for Tailwind classes
├── App.tsx              # Root component with routes
├── main.tsx             # Entry point
├── index.css            # Global styles + Tailwind
└── App.css              # App-specific styles

public/
├── images/              # Static images
├── 404.html             # SPA redirect handler
├── robots.txt           # SEO robots rules
└── sitemap.xml          # SEO sitemap
```

## Build and Development Commands

```bash
# Start development server
npm run dev

# Build for production (TypeScript compile + Vite build)
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

### Build Output

- Output directory: `dist/`
- Source maps: disabled in production
- Base URL: `/`

## Routing Architecture

The app uses **HashRouter** for client-side routing (SPA), which ensures compatibility with static hosting:

```typescript
// App.tsx routes
<HashRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/zugraveli-targoviste" element={<ZugraveliTargoviste />} />
    <Route path="/zugraveli-dambovita" element={<ZugraveliDambovita />} />
    <Route path="/zugrav-interior-targoviste" element={<ZugravInteriorTargoviste />} />
  </Routes>
</HashRouter>
```

### SEO Pages

Three dedicated SEO landing pages target specific local keywords:
1. `/zugraveli-targoviste` - "Zugrăveli Târgoviște"
2. `/zugraveli-dambovita` - "Zugrăveli Dâmbovița"  
3. `/zugrav-interior-targoviste` - "Zugrav Interior Târgoviște"

These pages use the `SEOPageTemplate` component with location-specific content and FAQs.

## Styling Guidelines

### Color Palette

Primary brand color: `#5A7D6F` (sage green)

CSS Variables (defined in `src/index.css`):
```css
--background: 0 0% 98%;
--foreground: 0 0% 10%;
--primary: 155 18% 42%;      /* #5A7D6F */
--primary-foreground: 0 0% 100%;
--secondary: 0 0% 96%;
--muted: 0 0% 96%;
--muted-foreground: 0 0% 42%;
--border: 0 0% 90%;
--radius: 0.5rem;
```

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Tailwind Configuration

- Breakpoint for mobile: 768px
- Custom animations: accordion-down, accordion-up, caret-blink
- Extended colors for sidebar, destructive states

### Utility Function

Use the `cn()` helper for conditional Tailwind class merging:

```typescript
import { cn } from '@/lib/utils';

// Usage
className={cn('base-classes', condition && 'conditional-classes')}
```

## SEO Implementation

### Structured Data

The app includes Schema.org JSON-LD markup:

1. **LocalBusiness** - Main business info (in `index.html`)
2. **FAQPage** - FAQ schema for each page with FAQs
3. **WebPage** - Individual page metadata

Components in `SchemaMarkup.tsx`:
- `SchemaMarkup` - LocalBusiness schema for homepage
- `PageSchemaMarkup` - WebPage schema for SEO pages
- `FAQSchemaMarkup` - FAQPage schema

### Meta Tags

Each page should set appropriate meta tags. Homepage meta is in `index.html`:
- Title: "Zugrăveli Târgoviște | Pensula Curată | Zugrav Dâmbovița"
- Description: "Zugrăveli interioare curate și profesionale în Târgoviște și județul Dâmbovița. Sună acum: 0774 613 207. Fără stres, fără complicații."

### Sitemap

`sitemap.xml` includes all 4 routes with priorities and change frequencies.

## Development Conventions

### Import Patterns

```typescript
// Aliases configured in vite.config.ts and tsconfig.json
import { Button } from '@/components/ui/button';
import { Hero } from '@/sections/Hero';
import { cn } from '@/lib/utils';
```

### Component Structure

- Use functional components with TypeScript interfaces
- Props interfaces should be explicit
- Use `motion` components from framer-motion for animations
- Implement `viewport={{ once: true }}` for scroll-triggered animations

### Animation Patterns

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
```

### Phone Links

All CTA buttons use tel: links for direct calling:

```typescript
const handleCall = () => {
  window.location.href = 'tel:0774613207';
};
```

## Testing Instructions

No test framework is currently configured. To add testing:

```bash
# Example: Add Vitest
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

## Deployment Process

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to static hosting (Netlify, Vercel, etc.)
3. Ensure `_redirects` file is present for SPA routing (if using Netlify)
4. The `404.html` handles client-side routing fallback

### SPA Routing Handling

The project includes a redirect script in `index.html` and a `404.html` for static hosting compatibility:

```javascript
// In index.html - handles redirect after 404
sessionStorage.redirect = location.href;
location.href = '/';
```

## Security Considerations

- No sensitive data is stored in the frontend
- Phone number is exposed publicly (business contact)
- No authentication system present
- Site is static - no server-side vulnerabilities

## Dependencies Notes

- **next-themes**: Used for theme management (light/dark mode support)
- **date-fns**: Date formatting utilities
- **embla-carousel-react**: Carousel component
- **recharts**: Charting library (included but may not be actively used)
- **cmdk**: Command palette component
- **input-otp**: OTP input component
- **vaul**: Drawer component

## Environment Requirements

- Node.js 20+
- npm or compatible package manager
- Modern browser for development (ES2022)
