# World Cup 2026 sweepstake

Single-page React site for a private **24-player, 48-team** sweepstake: two random nations per entrant, **£180** prize pot, and an honours board driven by JSON in the repo.

Stack: **Vite**, **React 19**, **TypeScript**, **Tailwind CSS v4** (via `@tailwindcss/vite`).

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Editing competition data

All editable content lives under **`public/data/`** (copied verbatim into the build so you can change it without touching React code).

| File | Purpose |
|------|---------|
| `teams.json` | All 48 nations: `id`, display `name`, `group` (A–L), `flagCode` for [flagcdn](https://flagcdn.com) |
| `entrants.json` | `displayName`, optional `avatar` filename, stable `id` (`p01`…`p24`) |
| `assignments.json` | After the draw, two `teamIds` per `entrantId` (must match `teams.json`) |
| `prizes.json` | Pot total, currency, and each side prize |
| `winners.json` | Fill `entrantId` / `teamId` / `entrantIds` as the tournament finishes |

### Avatars

Add image files under **`public/avatars/`** and set `"avatar": "yourfile.webp"` on each entrant. See `public/avatars/README.md`. If `avatar` is `null` or the file fails to load, **initials** are shown.

### Flags

Flags load from `https://flagcdn.com` using each team’s `flagCode` (ISO-style codes, including `gb-eng` and `gb-sct` where needed).

## GitHub Pages

1. In the repository **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to **`main`**. The workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) runs `npm ci`, `npm run build`, and publishes the `dist/` folder.

Assets use a base path of `/<repository-name>/`, set at build time via `VITE_BASE_URL`, so the app works on **project pages** (`https://<user>.github.io/<repo>/`).

### User or organisation site (`*.github.io` repository)

If this repository is named `<username>.github.io`, the site is served from the **root** `/`. Change the workflow build step to:

```yaml
env:
  VITE_BASE_URL: /
```

(or remove `VITE_BASE_URL` entirely and rely on the default `/` in `vite.config.ts`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server with HMR |
| `npm run build` | Typecheck + production build to `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | ESLint |

## Licence

Private / friends use — not affiliated with FIFA.
