# Roaming Flavours

React + Vite + TypeScript website for the Roaming Flavours food truck (Windsor, ON).

## Getting started

```bash
npm install
npm run dev
```

## Live truck tracking

Before each shift, the owner generates a Google Maps live location link:

1. Open **Google Maps** on your phone
2. Tap your profile photo → **Share location** → copy the link
3. Paste it into `.env`:

```
VITE_LIVE_SHARE_URL=https://maps.app.goo.gl/yourlink
```

4. Restart the dev server (or redeploy). The **Track Our Truck Live** button will appear automatically while the truck is open.

> For production, set `VITE_LIVE_SHARE_URL` as an environment variable in Netlify/Vercel — no code redeploy needed, just re-trigger a build.

## Build

```bash
npm run build
```
