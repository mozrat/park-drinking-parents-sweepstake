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

## GitHub Pages (`gh_pages` branch)

The site is **not** served from `main` (that tree still has dev `index.html` → `/src/main.tsx`). Instead, a workflow builds **`dist/`** and pushes it to the **`gh_pages`** branch; GitHub Pages serves **that** branch.

### One-time setup

1. **Settings → Pages → Build and deployment**
   - **Source**: **Deploy from a branch** (not “GitHub Actions”).
   - **Branch**: **`gh_pages`** / **Folder**: **`/ (root)`**.
2. **Trigger a deploy** (the workflow does **not** run when you push to `gh_pages` — that branch is only the build output):
   - Push or merge to **`main`** (or **`master`** if that is your default branch), **or**
   - **Actions → Deploy to gh_pages branch → Run workflow** (manual run uses the selected branch’s files — pick **`main`**).
   Workflow: [`.github/workflows/deploy-gh_pages.yml`](.github/workflows/deploy-gh_pages.yml) — `npm ci`, `npm run build`, then push **`dist/`** to **`gh_pages`**.

### Open the right URL

**Project pages:** `https://<username>.github.io/<repository-name>/`  
(e.g. `https://mozrat.github.io/park-drinking-parents-sweepstake/`).

**View source** on the live page: you should see `<script … src="…/assets/index-….js">`, never `main.tsx`.

Assets use `/<repository-name>/` via `VITE_BASE_URL` in that workflow (matches project Pages).

### User or organisation site (`<username>.github.io` repository)

If this repo **is** the `<username>.github.io` site (served from `/`), change the **Build** step in [`.github/workflows/deploy-gh_pages.yml`](.github/workflows/deploy-gh_pages.yml) to:

```yaml
env:
  VITE_BASE_URL: /
```

## Git over SSH (two GitHub accounts)

This machine uses **`~/.ssh/config`** with two host aliases:

| Host alias | Key file | Use for |
|------------|----------|---------|
| `github-personal` | `~/.ssh/id_ed25519` | First GitHub account |
| `github-work` | `~/.ssh/id_ed25519_work` | Second GitHub account |

**Remotes must use the alias**, not `github.com`, e.g. `git@github-personal:mozrat/park-drinking-parents-sweepstake.git`.

1. Add **`~/.ssh/id_ed25519.pub`** to the first account (GitHub → **SSH and GPG keys** → New key).
2. Add **`~/.ssh/id_ed25519_work.pub`** to the second account.
3. If `mozrat` is the **work** account, run:  
   `git remote set-url origin git@github-work:mozrat/park-drinking-parents-sweepstake.git`
4. Test: `ssh -T git@github-personal` or `ssh -T git@github-work` — you should see `Hi <username>!`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server with HMR |
| `npm run build` | Typecheck + production build to `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | ESLint |

## Licence

Private / friends use — not affiliated with FIFA.
