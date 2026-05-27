---
name: Gigantic Tours migration
description: Key decisions and gotchas from migrating the Gigantic Tours site to the Replit pnpm stack
---

## Rules

- `zod/v4` is NOT resolvable in `api-server` esbuild bundles — use `zod` or skip zod entirely in Express routes.
- Data files in `artifacts/gigantic-tours/src/data/` must import types from `../types/destination` (one level up).
- The Vite dev server proxies `/api` to the API server via `API_PORT` env (defaults to 5000).
- Wouter router must use `base={import.meta.env.BASE_URL.replace(/\/$/, "")}` to work under the Replit path prefix.

**Why:** The api-server builds with esbuild which bundles dependencies; `zod/v4` is a sub-path export not listed in api-server's `package.json` dependencies. The Vite proxy is needed because the frontend and API are separate services on different ports. Wouter base path is needed because Replit proxies the frontend at a non-root path.

**How to apply:** Any new Express route in api-server must use only packages listed in `artifacts/api-server/package.json#dependencies`. Always add Vite proxy entries for new API prefixes.
