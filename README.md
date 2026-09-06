# Personal portfolio

A polished one-page portfolio for a software engineer and AI product builder.
Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and a small
Three.js accent.

## Customize

Start with `lib/portfolio-data.ts`. It contains Samuel's profile, social link,
featured products, skills, and resume-backed experience entries.

Then review:

- `app/page.tsx` for the hero, about, section copy, and footer year.
- `app/layout.tsx` for the browser title and search description.
- `app/globals.css` for colors, spacing, borders, and shared visual styles.
- `components/ambient-scene.tsx` for the lightweight Three.js motion.

## Contact email setup

The contact modal sends from `samgatemul@gmail.com` to
`samgatemul@gmail.com` through Gmail SMTP. The visitor's email is set as the
reply-to address.

1. Enable two-step verification on the Google account and create a Google App
   Password for this portfolio. Do not use the account's normal password.
2. Copy `.env.example` to `.env.local`.
3. Replace `GMAIL_APP_PASSWORD` with the generated App Password.
4. In Vercel, add `GMAIL_USER` and `GMAIL_APP_PASSWORD` under Project Settings
   > Environment Variables before deploying.

Without the App Password, the modal remains usable and points visitors to the
direct email address, but server-side delivery will report that it is not yet
configured.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production check

```bash
npm run lint
npm run build
```

## Deploy to Vercel

Push the project to a Git repository, import it in Vercel, and deploy. Vercel
will detect Next.js automatically; no custom build settings or environment
variables are required.

## Performance and accessibility

- Static Server Component content with only the Three.js accent on the client.
- Three.js is loaded asynchronously and renders a tiny wireframe scene.
- Device pixel ratio is capped to reduce GPU work.
- Motion is reduced when the visitor requests reduced motion.
- Semantic sections, visible focus states, a skip link, and responsive type and
  spacing are included.
