# MYT Ascensores

Nuxt 4 marketing site for MYT Ascensores, configured for static generation and Cloudflare Pages deployment.

## Requirements

- Node.js 20+ recommended
- npm
- Cloudflare Wrangler CLI, installed through project dependencies

Install dependencies:

```bash
npm ci
```

## Development

Run the Nuxt dev server:

```bash
make dev
```

The site will be available at the URL printed by Nuxt, usually `http://localhost:3000`.

## Static build

Generate the static site into `.output/public`:

```bash
make build
```

This runs `nuxt generate` and prerenders the known static routes, including the service detail pages.

## Deploy to Cloudflare Pages

Authenticate Wrangler once:

```bash
npx wrangler login
```

Deploy the latest generated build:

```bash
CF_PAGES_PROJECT_NAME=<cloudflare-pages-project> make deploy
```

`make deploy` uploads `.output/public` using:

```bash
npx wrangler pages deploy .output/public --project-name "$CF_PAGES_PROJECT_NAME"
```

Run `make build` before `make deploy` whenever you want to publish fresh changes.

## Cloudflare Pages Git integration

If deploying through Cloudflare's Git integration instead of the CLI, use:

```txt
Build command: npm run build
Build output directory: .output/public
```

The `public/_redirects` file provides a static fallback to `200.html` for client-side navigation on refresh.
