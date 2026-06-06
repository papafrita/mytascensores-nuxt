.PHONY: dev build deploy

-include .env

CF_PAGES_PROJECT_NAME ?=

## Run the Nuxt development server.
dev:
	npm run dev

## Generate the static site into .output/public.
build:
	npm run build

## Deploy the latest static build to Cloudflare Pages.
deploy:
	@if [ -z "$(CF_PAGES_PROJECT_NAME)" ]; then \
		echo "Error: CF_PAGES_PROJECT_NAME is required."; \
		echo "Usage: CF_PAGES_PROJECT_NAME=<cloudflare-pages-project> make deploy"; \
		exit 1; \
	fi
	npx wrangler pages deploy .output/public --project-name "$(CF_PAGES_PROJECT_NAME)"
