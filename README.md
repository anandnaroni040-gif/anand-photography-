# Anand Photography — Production Static Portfolio

A cinematic, responsive portfolio for **Anand Photography** built with plain HTML, CSS and JavaScript.

## Files

- `index.html` — main portfolio
- `404.html` — custom GitHub Pages error page
- `.nojekyll` — keeps GitHub Pages in static-file mode
- `css/style.css` — design and responsive styles
- `js/main.js` — interactions and scroll effects
- `assets/anand-hero.png` — supplied hero portrait
- `assets/favicon.png` — generated site icon
- `robots.txt` — crawler rules
- `site.webmanifest` — installable web-app metadata

## GitHub Pages

1. Create a GitHub repository, for example `anand-photography`.
2. Upload the **contents of this folder**, not the outer folder itself.
3. Make sure `index.html` is in the repository root.
4. Open **Settings → Pages**.
5. Under the publishing source, choose **Deploy from a branch**.
6. Select `main` and `/(root)`, then save.
7. GitHub will publish the site at a URL similar to:
   `https://YOUR-USERNAME.github.io/anand-photography/`

GitHub may take a few minutes to publish changes.

## Local preview

From this folder:

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

## Replace the demo gallery

Replace the repeated `assets/anand-hero.png` references in `index.html` with your real project images. Keep image paths relative so the site works on GitHub Pages, Netlify, Vercel and Cloudflare Pages.

## Before launch

- Replace the placeholder contact email in `index.html`.
- Replace the Instagram placeholder with your real profile.
- Add your real wedding / portrait / fashion images.
- Add your own domain in the hosting provider's domain settings if desired.
