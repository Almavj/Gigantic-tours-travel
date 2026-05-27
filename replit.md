# Gigantic Tours & Travel

A full-featured travel website for Gigantic Tours & Travel, offering Kenyan safaris, international destinations, and seasonal packages.

## Run & Operate

- `pnpm --filter @workspace/gigantic-tours run dev` — run the frontend (Vite, port from `PORT` env)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port from `PORT` env)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string
- Optional env: `RESEND_API_KEY` — for newsletter subscription email notifications

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, wouter (routing), framer-motion, lucide-react
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/gigantic-tours/` — React + Vite frontend
  - `src/pages/` — Home, About, Contact, Booking, Destinations, DestinationDetail
  - `src/components/` — Navbar, Hero, Footer, Newsletter, BookingForm, AITravelQuiz, DealsTicker, etc.
  - `src/data/` — destination data (kenya.ts, international.ts, seasonal.ts, destinations.ts index)
  - `src/types/destination.ts` — TypeScript types
- `artifacts/api-server/` — Express API
  - `src/routes/subscribe.ts` — POST /api/subscribe (newsletter, uses RESEND_API_KEY)
  - `src/routes/health.ts` — GET /api/healthz
- `artifacts/api-server/src/app.ts` — Express app, all routes under `/api`

## Architecture decisions

- Used **wouter** instead of Next.js router; `<WouterRouter base={...}>` uses `BASE_URL` from Vite env so routing works under the Replit proxy path prefix.
- All `next/image` replaced with plain `<img>` tags with `onError` fallback to `/images/hero-fallback.webp`.
- Vite dev server proxies `/api` requests to the API server (`http://localhost:API_PORT`).
- Newsletter subscribe endpoint gracefully degrades when `RESEND_API_KEY` is not set.
- Destination data is indexed at startup into `Map` caches for O(1) slug/category/tag lookup.

## Product

- Home page: animated hero, AI travel quiz, hot deals ticker, destination highlights, packages, testimonials, trust badges
- Destinations page: filterable grid of all Kenyan + international + seasonal destinations
- Destination detail: full itinerary, highlights, gallery, related destinations
- Booking page: booking form with date/group-size pickers
- About & Contact pages
- Newsletter subscription with Resend email notification

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- `zod/v4` is not available in the api-server esbuild bundle; use plain `zod` or no zod in api-server routes.
- Data files in `src/data/` use `../types/destination` import (not `../../types/destination`).
- Vite proxy for `/api` reads `API_PORT` env var (defaults to 5000) for API server port.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
