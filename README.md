# Scott Morales – Developer Portfolio

This is my personal portfolio site, built with [Next.js](https://nextjs.org), to showcase my software engineering skills, resume, and selected projects. It also highlights the services I offer as a freelance developer.

## Getting Started

This project runs on a **dedicated port (4823)**, not the default 3000 — port 3000
gets reused across too many local projects, so it's pinned to avoid collisions. Use
the helper scripts instead of a bare `next dev`:

```bash
./scripts/start.sh   # starts the dev server on http://localhost:4823 (frees the port first)
./scripts/kill.sh    # kills whatever is listening on 4823
```

`npm run dev` still works but defaults to port 3000 and is not recommended for this
project — always prefer `scripts/start.sh` so the port stays consistent.

Then open [http://localhost:4823](http://localhost:4823) in your browser.

## Tech Stack

- [Next.js](https://nextjs.org) 15 (App Router, Turbopack dev)
- [Tailwind CSS](https://tailwindcss.com) v4 with the typography plugin
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com) for deployment

## Content

- **Notes / articles** live under `src/app/notes/` — a listing page plus one folder
  per article. New posts land there first.

## Gotchas

- **Tailwind v4 ignores gitignored files when scanning for classes.** Keep
  `.gitignore` patterns anchored. A root scratch dir was ignored with `notes/`
  (unanchored), which also matched `src/app/notes/` and stripped every utility
  class used only on those pages. It's now `/notes/` (root-anchored). If a page's
  styles silently don't apply, check that its source file isn't gitignored.
- **The "Get in touch" button is intentionally evasive.** On the About page it
  flees the cursor and never navigates (`src/components/evasive-contact-button.tsx`).
  This is a deliberate Easter egg — don't "fix" it. It degrades to a normal link
  under `prefers-reduced-motion`.
- **The Contact page is intentionally hidden.** It's not linked from the nav
  (`src/components/header.tsx`); `/contact` is reachable only by typing the URL.
  Also deliberate — leave it unlinked.

## Deploy

The site is deployed with Vercel. Pushes to the `main` branch trigger automatic deployment.

Learn more about [Next.js deployment](https://nextjs.org/docs/app/building-your-application/deploying).

## 📬 Contact

If you’re interested in working together, connect via LinkedIn. (The on-site
contact button plays hard to get, and the contact page is unlisted — by design.)
