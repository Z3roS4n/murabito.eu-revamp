# murabito.eu-revamp 🚀

This repository contains a complete revamp of a personal portfolio website built with Next.js, TypeScript (TSX), the App Router, and Tailwind CSS. The project aims to showcase projects, skills and contact information with a modern responsive design.

---

## English 🇬🇧

### Overview 🌐

A modern, responsive portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS. The project includes interactive UI components, animations and a modular layout under `portfolio-murabito-v2/`.

### Features ✨

- App Router (Next.js) ⚡
- TypeScript + TSX components 🧩
- Tailwind CSS for utility-first styling 🎨
- Client-side animations and effects (Framer Motion, Three.js) 🎥
- Accessible UI components and responsive layout ♿

### Tech stack 🧰

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion, Three.js, tsParticles
- shadcn-ui / Radix primitives

### Quick start ▶️

Prerequisites:

- Node.js 18 or newer (recommended)
- npm (or Yarn / pnpm)

Steps:

1. Clone the repository

   git clone https://github.com/Z3roS4n/murabito.eu-revamp.git

2. Change directory to the app

   cd murabito.eu-revamp/portfolio-murabito-v2

3. Install dependencies

   npm install

4. Run the development server

   npm run dev

Open http://localhost:3000 in your browser.

### Available scripts 🛠️

These scripts are defined in `portfolio-murabito-v2/package.json`:

- `npm run dev` — start development server (uses Next.js turbopack)
- `npm run build` — build production bundle
- `npm run start` — start production server
- `npm run lint` — run ESLint

### Environment variables 🔒

If your local setup requires backend services (Supabase, Prisma, etc.) add the environment variables to a `.env.local` file in `portfolio-murabito-v2/`. Common variables (only if used):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `DATABASE_URL` (for Prisma)

If the project does not use these services in your copy, you can ignore this section.

### Project structure (high level) 📁

- `portfolio-murabito-v2/`
  - `public/` — static assets (images, icons)
  - `src/app/` — Next.js App Router entry points (`page.tsx`, `layout.tsx`, etc.)
  - `src/components/` — UI components and layout primitives
  - `src/lib/` — utilities
  - `package.json`, `tsconfig.json`, `tailwind.config.ts`, etc.

### Deployment 🚀

The project is ready to deploy to Vercel. Link the repository and set any required environment variables in the Vercel dashboard. The default build command: `npm run build` and output is handled by Next.js.

### Contributing 🤝

Contributions are welcome. Typical workflow:

1. Fork the repository
2. Create a feature branch
3. Open a pull request with a clear description of changes

Please run `npm run lint` and test the app locally before opening PRs.

### License 📄

No license file is included in the repo. If you want to publish this project under an open license, add a `LICENSE` file (for example MIT) and update this section.

---

## Italiano 🇮🇹

### Panoramica 🌐

Questo repository contiene il restyling completo del sito portfolio personale, realizzato con Next.js, TypeScript (TSX), App Router e Tailwind CSS. L'obiettivo è mostrare progetti, competenze e informazioni di contatto con un design moderno e responsive.

### Caratteristiche ✨

- App Router (Next.js) ⚡
- Componenti in TypeScript + TSX 🧩
- Tailwind CSS per lo styling 🎨
- Animazioni ed effetti client-side (Framer Motion, Three.js) 🎥
- Componenti UI accessibili e layout responsive ♿

### Tecnologie 🧰

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion, Three.js, tsParticles
- shadcn-ui / Radix primitives

### Avvio rapido ▶️

Prerequisiti:

- Node.js 18 o superiore (consigliato)
- npm (o Yarn / pnpm)

Passaggi:

1. Clona il repository

   git clone https://github.com/Z3roS4n/murabito.eu-revamp.git

2. Vai nella cartella dell'app

   cd murabito.eu-revamp/portfolio-murabito-v2

3. Installa le dipendenze

   npm install

4. Avvia il server di sviluppo

   npm run dev

Apri http://localhost:3000 nel browser.

### Script disponibili 🛠️

Definiti in `portfolio-murabito-v2/package.json`:

- `npm run dev` — avvia il server di sviluppo (Next.js turbopack)
- `npm run build` — crea la build di produzione
- `npm run start` — avvia il server di produzione
- `npm run lint` — esegue ESLint

### Variabili d'ambiente 🔒

Se la tua installazione locale richiede servizi backend (Supabase, Prisma, ecc.) aggiungi le variabili d'ambiente in un file `.env.local` dentro `portfolio-murabito-v2/`. Variabili comuni (solo se necessarie):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `DATABASE_URL` (per Prisma)

Se il progetto nella tua copia non usa questi servizi, puoi ignorare questa sezione.

### Struttura del progetto (panoramica) 📁

- `portfolio-murabito-v2/`
  - `public/` — asset statici (immagini, icone)
  - `src/app/` — entry points di Next.js (`page.tsx`, `layout.tsx`, ecc.)
  - `src/components/` — componenti UI e primitive di layout
  - `src/lib/` — utilità
  - `package.json`, `tsconfig.json`, `tailwind.config.ts`, ecc.

### Deploy 🚀

Il progetto è pronto per il deploy su Vercel. Collega il repository e configura le variabili d'ambiente necessarie nel pannello di Vercel. Il comando di build è `npm run build`.

### Contribuire 🤝

Le contribuzioni sono benvenute. Workflow suggerito:

1. Crea un fork del repository
2. Crea un branch per la feature
3. Apri una pull request con una descrizione chiara delle modifiche

Esegui `npm run lint` e testa l'app localmente prima di aprire la PR.

### Licenza 📄

Non è presente un file di licenza nel repository. Se vuoi rendere il progetto open source, aggiungi un file `LICENSE` (ad esempio MIT) e aggiorna questa sezione.

---

If you want different emojis, fewer/more, or emoji-only badges at the top, tell me which style and I'll update the README quickly.
