# Renogation landing page

React + TypeScript + Vite landing page for renogation.com.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The output is in `dist/`.

## Deploy to Cloudflare Pages

1. Create a GitHub repository named `renogation-website`.
2. Upload the contents of this project (not the ZIP itself) to the repository.
3. In Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git**.
4. Choose the GitHub repository.
5. Framework preset: **Vite** (or React/Vite); build command: `npm run build`; output directory: `dist`.
6. Deploy. Cloudflare gives you a `*.pages.dev` URL.
7. Under **Custom domains**, add `renogation.com` and `www.renogation.com`. Review prompts to replace the existing Namecheap parking/redirect DNS records. Do not remove email routing MX/TXT records.

## Notes

- Contact links use `mailto:founder@renogation.com`. This is not a contact form and does not store visitor data.
- Product claims are deliberately future-tense: the product is in development.
- Google Fonts are fetched from Google's CDN. If you want to avoid third-party font requests, replace with system fonts in `src/style.css`.
- No analytics or tracking is installed.
