# Portfolio — Borys Burdeinyi

Personal portfolio website built with Angular 15. Single-page layout with animated sections, responsive design, and a dark UI design system.

## Tech Stack

- **Angular 15** (NgModule)
- **TypeScript 4.9**
- **Font Awesome 6** — icons
- **Typed.js** — typewriter effect
- **Bootstrap 5** — utility base

## Sections

| Section | Description |
|---------|-------------|
| **Home** | Hero with animated avatar border and social links |
| **About** | Role cards with inline SVG illustrations and hover animations |
| **Approach** | 3-step process with interactive SVG diagrams |
| **Skills** | Floating animated skill tags with per-tag chaotic motion |
| **Services** | Bento-card grid with micro-UI visuals per service |
| **Projects** | Expandable project cards with image carousel |
| **Contact** | Contact form with project type selector |
| **Footer** | Navigation and social links |

## Getting Started

```bash
npm install
npm start         # dev server → http://localhost:4200
npm run build     # production build → dist/
npm run watch     # build in watch mode
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   ├── about/
│   │   ├── approach/
│   │   ├── map/           # Skills floating tags
│   │   ├── services/
│   │   ├── projects/
│   │   ├── project/       # Expanded project card
│   │   ├── contact/
│   │   ├── carousel/
│   │   ├── nav/
│   │   ├── footer/
│   │   └── tiled-background/
│   ├── app.component.*
│   └── app.module.ts
└── styles.css             # Global reset and CSS variables
```

## Design System

- Background: `#0a0a0a`
- Font: IBM Plex Sans
- Section padding: `6rem 2rem` (desktop) → `3rem 1.25rem` (768px) → `2.5rem 1rem` (480px)
- Accent colors are set per-component via CSS custom properties (`--accent`, `--accent-bg`, `--accent-border`)

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| 1400px | Large desktop scaling |
| 1200px | Laptop — layout reflow |
| 1024px | Small laptop / large tablet |
| 768px | Tablet |
| 600px | Large phone |
| 480px | Small phone |
