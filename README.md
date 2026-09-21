# Gonçalo Vieira — Portfolio

A custom Next.js portfolio focused on software case studies rather than generic template sections.

## Included case studies

- Scrappy — private repository
- Accessibility Validator — private repository
- Decozy — public repository
- AI Medical Triage Assistant — public repository
- CSTrader — public repository

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Where to edit content

Most portfolio content lives in:

```text
lib/projects.ts
```

Adding a project to the `projects` array automatically adds it to the homepage and generates its case-study route at `/projects/[slug]`.

The personal intro, education and stack sections live in `app/page.tsx`.

## Before publishing

1. Replace the placeholder `metadataBase` in `app/layout.tsx` with the real deployment URL.
2. Add an email / LinkedIn link if desired.
3. Deploy to Vercel or any platform that supports Next.js.

## Design notes

The interface intentionally avoids heavy neon gradients, generic AI-style glass cards and oversized decorative effects. The visual system is editorial: warm paper tones, restrained accents, strong typography, system diagrams and subtle motion.
