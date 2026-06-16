# AGENTS.md

Guidance for coding agents working in this repository.

## Project overview

MYT Ascensores is a Nuxt 4 marketing site configured for static generation and deployment to Cloudflare Pages.

Key stack:

- Nuxt 4 / Vue 3
- Tailwind CSS via `@nuxtjs/tailwindcss`
- Static output generated to `.output/public`
- Cloudflare Pages deployment via Wrangler

## Before making changes

- Read the relevant source files before editing.
- Keep changes focused and minimal.
- Prefer existing project scripts and Makefile targets.
- Do not commit generated output directories such as `.output`, `.nuxt`, `dist`, or `.wrangler`.
- The `.pi` folder is local agent workspace metadata and should stay ignored.

## Common commands

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
make dev
```

Generate the static site:

```bash
make build
```

Preview the generated site when needed:

```bash
npm run preview
```

## Cloudflare Pages setup

This repo deploys the generated static site in `.output/public` to Cloudflare Pages.

Wrangler is installed as a project dev dependency, so prefer `npx wrangler` instead of relying on a global install.

Authenticate once before CLI deployments:

```bash
npx wrangler login
```

Deploy with the Makefile target:

```bash
CF_PAGES_PROJECT_NAME=<cloudflare-pages-project> make deploy
```

The deploy target runs:

```bash
npx wrangler pages deploy .output/public --project-name "$CF_PAGES_PROJECT_NAME"
```

For Cloudflare Pages Git integration, use:

```txt
Build command: npm run build
Build output directory: .output/public
```

The static fallback for client-side routing is provided by `public/_redirects`.

## Cloudflare agent skills

When working on Cloudflare-related tasks, agents should use Cloudflare-specific skills or install the official Cloudflare skills if they are not already available.

Recommended skills:

- `cloudflare` for general Cloudflare platform guidance.
- `wrangler` before running Wrangler commands or editing deployment configuration.
- `workers-best-practices` if Cloudflare Workers code is introduced.
- `durable-objects`, `agents-sdk`, or other Cloudflare official skills only when those products are relevant.

For deployment or infrastructure changes, verify the current Cloudflare documentation and avoid guessing Wrangler syntax or Cloudflare Pages behavior.

## Validation expectations

After code changes, run the narrowest practical validation:

```bash
npm run build
```

Use additional checks only when relevant to the change. If validation cannot be run, explain why in the final response.
