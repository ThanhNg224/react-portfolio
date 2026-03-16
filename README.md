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

This project checks `resume.updateDate` to decide if CV is fresh.

- If older than 1 month: resume preview is hidden and home download button is disabled.

When updating CV:

1. Replace `public/HUST_NguyenPhucThanh_CV.pdf`
2. Update `resume.updateDate` in:
- `src/locales/en/translation.json`
- `src/locales/vi/translation.json`

Accepted date formats:

- `MM/YYYY` (example: `03/2026`)
- `YYYY/MM` (example: `2026/03`)
- `Mon YYYY` (example: `Mar 2026`)



