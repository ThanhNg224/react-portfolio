# React Portfolio

Simple personal portfolio built with React.

## Quick Start

1. Install dependencies

```bash
pnpm install
```

2. Run locally

```bash
pnpm start
```

3. Open http://localhost:3000

Note: `pnpm run dev` does not work here because this project has no `dev` script.

## Scripts

- `pnpm start` - start development server
- `pnpm run build` - create production build
- `pnpm test` - run tests
- `pnpm run deploy` - deploy to GitHub Pages

## CV Update (Important)

This project checks a centralized CV config to decide if CV is fresh.

- If older than ~60 days: resume preview is hidden and home download button is disabled.
- If you update the CV file but forget to update `CV_UPDATE_DATE`, the UI may treat it as outdated and not show it.

When updating CV:

1. Replace the CV file in `public/`
2. Update `src/config/cv.js`:
- `CV_FILE_NAME`
- `CV_UPDATE_DATE`

Accepted date formats:

- `YYYY-MM-DD` (example: `2026-03-17`)
- `MM/YYYY` (example: `03/2026`)
- `YYYY/MM` (example: `2026/03`)
- `Mon YYYY` (example: `Mar 2026`)



