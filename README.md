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

- Recruiter homepage: Hero → Featured work → About → Experience → Skills → Contact
- Two flagship projects (Vancastro, Plurk Styler) as cards, not a carousel
- Resume PDF, LinkedIn, GitHub
- Thin `/work` routes exist but are not the hiring path

Local planning notes live in `doc/` (gitignored).
