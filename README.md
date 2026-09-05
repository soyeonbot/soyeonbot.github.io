# Soyeon Kim — Research website

Personal academic website at **https://soyeonbot.github.io/**.

The English website presents research in explainable AI, weather intelligence, and environmental systems. Content is based on the August 9, 2026 CV. Recent publication links were cross-checked against the supplied reference websites and arXiv records. Peer-reviewed papers and manuscripts under review are presented separately.

## Update content

- `data/profile.json`: publications, resource links, education, experience, and profile links.
- `app/page.tsx`: introductory text, research areas, selected honors, and section layout.
- `app/globals.css`: responsive layout, colors, and typography.
- `public/Soyeon_Kim_CV.pdf`: public CV with the personal phone number removed.
- `public/og.png`: social sharing card.
- `app/layout.tsx`: page title, description, canonical URL, and social metadata.

All publication records are shown in one continuous list, without a collapsed older-publications section. Update the year range when adding papers. Review current manuscript status before changing a venue or acceptance label. The CVPR compute reporting award describes a compute-reporting initiative; it does not indicate a CVPR paper acceptance.

## Local development

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

## Build and deploy

```sh
npm run build
```

Vinext produces a static export in `dist/client/`. Only this folder is published to GitHub Pages. No application server, API key, or database is needed by the live website. A generated Worker output may also exist in `dist/server/`; GitHub Pages does not use it.

GitHub Pages is configured to publish through GitHub Actions. Pushing to `main` runs `.github/workflows/pages.yml`, builds the site, and publishes the static export. The workflow uses the automatically supplied GitHub token; never add a personal access token to the repository.

## Design references

- https://leekwoon.github.io/
- https://han-j-y.github.io/

The design is an original implementation inspired by the supplied references' concise academic introductions and publication-focused organization. No third-party portrait or source code was copied.

## Fonts and images

The page uses Helvetica when installed, with a self-hosted Arimo fallback (SIL Open Font License, included at `public/fonts/Arimo-OFL.txt`). Text sizes range from 14 to 32 px. The portrait is the user-provided original, copied to `public/images/soyeon-kim.jpg`.

Each available publication figure is stored in `public/publications/`; its original source and descriptive alternative text are recorded in `data/profile.json` under `thumbnail`. Figures come from the matching coauthor pages, original papers, or user-provided assets. Thumbnail containers use `object-fit: contain` to preserve the complete figures. Papers without a `thumbnail` entry keep an empty image column on desktop, with no icon or placeholder. DiffIG uses the supplied PDF thumbnail rendered as PNG, SIG uses the supplied portrait poster, and Suwonology uses the supplied map image.
