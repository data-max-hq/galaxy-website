# Galaxy Website

Modern Astro + Tailwind site for Galaxy, the pharmaceutical distribution arm of Profarma Group. It delivers a sleek landing page with sections for Home, About, Partners, Blog, and Contact, plus a Markdown-powered blog you can grow over time.

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:4321 to preview the site. Content edits trigger instant reloads.

Visit: https://data-max-hq.github.io/galaxy-website/ to see the page live.

## Content & Structure

- `src/pages/index.astro` – primary landing page with hero, about, partners, blog teaser, and contact sections.
- `src/pages/blog/index.astro` – blog listing.
- `src/pages/blog/[slug].astro` – dynamic template for each Markdown post.
- `src/content/blog/` – Markdown posts with frontmatter (`title`, `description`, `publishDate`, `author`, optional `heroImage`, `tags`).
- `src/content/partners/` – JSON entries describing partner name, focus, website, and logo path.
- `public/blog` & `public/logos` – lightweight SVG artwork used on cards.

Add new stories by creating a Markdown file under `src/content/blog/` (e.g., `your-story.md`). The slug is derived from the filename, and pages are generated automatically.

## Deployment

1. Build the static output: `npm run build` (files land in `dist/`).
2. Deploy the `dist/` folder with GitHub Pages or any static host. Astro's output works with the default Pages workflow (`actions/deploy-pages`).

## Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start the dev server with hot reload.   |
| `npm run build` | Generate the production-ready site.     |
| `npm run preview` | Preview the production build locally. |
