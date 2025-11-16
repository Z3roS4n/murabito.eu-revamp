# murabito.eu-revamp 🚀

This repository contains a complete revamp of my personal portfolio website built with Next.js, NextIntl (for multi-language support), TypeScript (TSX), the App Router, and Tailwind CSS. The project aims to showcase projects, skills and contact information with a modern responsive design.

---

## English 🇬🇧

### Overview 🌐

A modern, responsive portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS. The project includes interactive UI components, animations and a modular layout under `portfolio-murabito-v2/`.

### Features ✨

- App Router (Next.js) ⚡
- API Rate Limiter (with Redis)
- TypeScript + TSX components 🧩
- Tailwind CSS for utility-first styling 🎨
- Client-side animations and effects (Framer Motion, Three.js) 🎥
- Accessible UI components and responsive layout ♿

### Tech stack 🧰

- Next.js
- TanStack Query
- Redis
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

### Deployment 🚀

The project is ready to deploy to Vercel. Link the repository and set any required environment variables in the Vercel dashboard. The default build command: `npm run build` and output is handled by Next.js.

### Environment variables (needed)

This project uses a few environment variables for backend features (rate limiting, Telegram notifications and Upstash Redis). Set them in `/.env.local` for local development and in your hosting provider (Vercel, Netlify) for production.

- `HASH_SALT` — a random secret string used to salt IP hashes for rate limiting.
- `TELEGRAM_BOT_TOKEN` — Telegram bot token used to forward contact form messages to a Telegram chat.
- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` — Upstash REST credentials used by `@upstash/redis` when calling `Redis.fromEnv()` (used by the rate limiter).

Example `.env.local` (replace placeholders):

```
HASH_SALT="your-random-salt-here"
TELEGRAM_BOT_TOKEN="123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
UPSTASH_REDIS_REST_URL="https://us1-xxxxxxxx-xxxxxxxx.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your-upstash-token"
```

Notes:
- Keep `HASH_SALT` and tokens secret. Don't commit `.env.local` to git.
- If you deploy to Vercel, add these variables under Project Settings → Environment Variables.

### Contributing 🤝

Contributions are welcome. Typical workflow:

1. Fork the repository
2. Create a feature branch
3. Open a pull request with a clear description of changes

Please run `npm run lint` and test the app locally before opening PRs.

---

## Italiano 🇮🇹

### Panoramica 🌐

Questo repository contiene il restyling completo del sito portfolio personale, realizzato con Next.js, TypeScript (TSX), App Router e Tailwind CSS. L'obiettivo è mostrare progetti, competenze e informazioni di contatto con un design moderno e responsive.

### Caratteristiche ✨

- App Router (Next.js) ⚡
- API Rate Limiter (con Redis)
- Componenti in TypeScript + TSX 🧩
- Tailwind CSS per lo styling 🎨
- Animazioni ed effetti client-side (Framer Motion, Three.js) 🎥
- Componenti UI accessibili e layout responsive ♿

### Tecnologie 🧰

- Next.js
- TanStack Query
- Redis
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

### Deploy 🚀

Il progetto è pronto per il deploy su Vercel. Collega il repository e configura le variabili d'ambiente necessarie nel pannello di Vercel. Il comando di build è `npm run build`.

### Contribuire 🤝

Le contribuzioni sono benvenute. Workflow suggerito:

1. Crea un fork del repository
2. Crea un branch per la feature
3. Apri una pull request con una descrizione chiara delle modifiche

Esegui `npm run lint` e testa l'app localmente prima di aprire la PR.

---

If you want different emojis, fewer/more, or emoji-only badges at the top, tell me which style and I'll update the README quickly.
