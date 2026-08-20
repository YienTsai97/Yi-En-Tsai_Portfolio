# Yi-En Tsai Portfolio v2

The new portfolio foundation is built with Nuxt, Vue 3, strict TypeScript, and SCSS.

The original static portfolio is preserved in the `legacy-v1` branch and the `v1-static` tag.

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Verification

```bash
pnpm typecheck
pnpm build
```

## Current scope

- Shared layout and navigation (header / blue footer)
- Homepage sections migrated from the legacy static site
- Visual restore: metaball background, circle cursor, experience timeline, projects Swiper carousel
- `/work` project index and `/work/[slug]` detail pages for the original five projects

Local planning notes live in `doc/` (gitignored), including `migration-map.md` for legacy → Nuxt path mapping.
