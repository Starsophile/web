# Rishi Parmar — Smartphone Market Research Portfolio

A customised version of the Starfolio Astro template, adapted for independent smartphone market research, consumer insights, and product strategy.

## What is included

- Dark navy and cyan visual theme, with dark mode as the first-visit default
- Responsive Starfolio layout and navigation
- Research cards for:
  - Samsung India mid-range portfolio architecture
  - Google Search demand across smartphone model lifecycles
  - Smartphone consumer preferences survey
  - From market data to product decisions
- Four starter research notes in `src/content/blog/`
- About, experience, education, research toolkit, writing, and contact sections
- Custom SVG project artwork, avatar initials, favicon, and social preview image
- Static output intended for low-maintenance hosting

## Before publishing — personalise these details

Search the project for `your-domain.com` and `YOUR_EMAIL_HERE`.

1. Edit `src/data/config.ts` and set `site.url` to your actual root domain, for example `https://example.com`.
2. Edit `src/data/resume.tsx`:
   - Replace the LinkedIn homepage URL with your actual profile URL.
   - Replace `YOUR_EMAIL_HERE` in both the email field and `mailto:` URL.
   - Verify the experience and education wording/dates.
   - Update project descriptions and links as your analysis matures.
3. Update each MDX post in `src/content/blog/`. The included notes are starter drafts and methodology framing; add your actual charts, sources, dataset definitions, and findings before presenting them as completed research.
4. Update `public/og_image.png` if you want a different social preview.

## Local development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Astro, usually `http://localhost:4321`.

## Build and preview

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Free deployment with Cloudflare Pages

1. Create a GitHub repository and upload the **contents** of this project folder.
2. In Cloudflare, create a Pages project connected to that repository.
3. Configure:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy and test the generated `*.pages.dev` URL.
5. In the Pages project, open **Custom domains** and add your root domain.
6. Follow Cloudflare's domain instructions. Apex/root domains typically require the domain to be added to Cloudflare DNS and use Cloudflare nameservers. Before changing nameservers, preserve any existing MX, TXT, and other DNS records used for email or other services.

Cloudflare Pages has a free tier, subject to its current plan limits. Your domain renewal remains a separate cost.

## Updating content later

- Edit project/profile details in `src/data/resume.tsx`.
- Add a new `.mdx` file to `src/content/blog/` for a writing piece.
- Push the changes to GitHub. Cloudflare Pages rebuilds and deploys automatically.

## Research integrity note

Search interest is not equivalent to sales, shipments, or market share. Survey results describe the respondents unless the sampling design supports broader generalisation. Label findings as observed, inferred, or hypothetical and cite sources/methodology in each case study.

## Original template

Built on [Starfolio](https://github.com/webrating/starfolio). See `LICENSE` for the original template licence.
