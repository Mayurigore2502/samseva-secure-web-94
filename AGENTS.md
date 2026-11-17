# AGENTS.md

## Rules

- App binary assets (images, logos) must be committed to the repository and imported through Vite, never externalized to CDN asset pointers: the site is deployed on Vercel from this repo, where Lovable's `/__l5e/assets-v1/...` pointer URLs do not resolve.
