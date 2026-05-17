# CLAUDE.md — scott-dev

Guidance for Claude Code working in the `scott-dev` portfolio site.

## Dev server: use the scripts, mind the port

This project is **pinned to port 4823**, not 3000. Port 3000 collides with too many
other local projects, so it's intentionally dedicated.

- Start: `./scripts/start.sh` — runs the dev server on `http://localhost:4823`,
  freeing the port first so restarts don't hit `EADDRINUSE`.
- Stop: `./scripts/kill.sh` — kills whatever listens on 4823.
- The two scripts share a `DEV_PORT=4823` constant; keep them in sync if it changes.
- **Do not** start the site with a bare `npm run dev` / `next dev` — that lands on
  3000 and creates stray servers that get tested by mistake. Always use the scripts.

When verifying in a browser, hit `http://localhost:4823`, and confirm you're testing
the server started by `scripts/start.sh` (not a leftover 3000 process).

## Tailwind v4 + .gitignore gotcha

Tailwind v4 auto-detects source files but **excludes anything matched by
`.gitignore`**. An unanchored ignore rule will silently strip utility classes from
any page whose source file it matches.

- Keep `.gitignore` patterns root-anchored when they're meant for the root only
  (e.g. `/notes/`, not `notes/` — the latter also matched `src/app/notes/`).
- Symptom: a page renders with no/partial styling and changing class values has no
  effect, because the class is never generated. Check whether the source file is
  gitignored before chasing CSS specificity.

## Intentional Easter eggs — do not "fix" these

- `src/components/evasive-contact-button.tsx` — the About page "Get in touch"
  button **deliberately flees the cursor and never navigates**. It's a game, not a
  bug. It degrades to a plain working link under `prefers-reduced-motion`.
- The **Contact page is intentionally unlinked**: `/contact` is removed from the
  nav in `src/components/header.tsx` — nothing on the site links to it; you reach
  it by typing the URL. The joke is the missing link, not secrecy: it *is* listed
  in `src/app/sitemap.ts` and crawlable on purpose. Keep it out of the nav; keep
  it in the sitemap.

If a task seems to require "repairing" either of these, confirm with the user first.

## Content layout

- Notes/articles live under `src/app/notes/`: a listing `page.tsx` plus one folder
  per article (each with its own `page.tsx`).

## Writing style

When writing or editing prose in the notes/articles, **avoid the bare
negation-then-affirmation construction**:

- "X is not Y. It is Z."  (e.g. "The difference is not intelligence. It is reach.")
- "The value is not novelty. It is that…"

State the point directly instead. Softer variants of the same idea are fine and
don't need changing — "was never X, it was Y", "not a technical one — an agreement
one", "we don't win by X, we win by Y", "won't be X, they'll be Y". The thing to
steer away from is specifically the short, declarative "is not ___. It is ___."
form.
