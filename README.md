# Nivas Potharaju — Portfolio

Personal portfolio site. Static, dependency-free, and deployable to GitHub Pages, Netlify, Vercel, or any static host.

**Live site:** https://nivaspotharaju.github.io *(update after first deploy)*

---

## Stack

No build step, no framework, no `node_modules`. Just HTML, CSS, and a small amount of vanilla JavaScript.

That's a deliberate choice: a portfolio should load instantly, stay readable years from now, and never break because a dependency went stale.

| Layer | Choice |
|---|---|
| Markup | Semantic HTML5 |
| Styles | Hand-written CSS with custom properties |
| Behaviour | Vanilla JS (`IntersectionObserver` for scroll reveals) |
| Fonts | Google Fonts — Space Grotesk, Inter, JetBrains Mono |
| Hosting | GitHub Pages via GitHub Actions |

---

## Structure

```
.
├── index.html                  # All page content
├── assets/
│   ├── css/styles.css          # All styles, design tokens at the top
│   ├── js/main.js              # Scroll reveal + visibility fallback
│   └── img/favicon.svg         # Blueprint-node favicon
├── .github/workflows/deploy.yml # Auto-deploy to GitHub Pages on push
├── netlify.toml                # Netlify config (if hosting there instead)
├── vercel.json                 # Vercel config (if hosting there instead)
├── robots.txt
├── sitemap.xml
├── .gitignore
├── LICENSE
└── README.md
```

---

## Run it locally

No install needed. Either open `index.html` directly in a browser, or serve it:

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## Deploy

### GitHub Pages (recommended — already configured)

1. Create a repository named `<your-username>.github.io` (for a root domain) or any name (for a `/repo-name` subpath).
2. Push this code to the `main` branch.
3. In the repository, go to **Settings → Pages → Build and deployment**, and set **Source** to **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically.

Every subsequent push to `main` redeploys the site.

### Netlify

Drag the project folder into the Netlify dashboard, or connect the repository. `netlify.toml` is already configured — no build command, publish directory is the repository root.

### Vercel

Import the repository. `vercel.json` marks it as a static site. No build step required.

### Any other static host

Upload the repository contents as-is. There is nothing to compile.

---

## Custom domain

1. Add a file named `CNAME` at the repository root containing only your domain, e.g. `nivaspotharaju.com`
2. At your DNS provider, point the domain at your host:
   - **GitHub Pages:** create a `CNAME` record for `www` → `<username>.github.io`, plus `A` records for the apex domain pointing to GitHub's Pages IPs (see GitHub's current documentation, as these can change).
3. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS**.

After adding a custom domain, update the `og:url` and `canonical` values in `index.html` and the URL in `sitemap.xml`.

---

## Editing content

Everything lives in `index.html`, organised into clearly commented sections:

| Section | What to edit |
|---|---|
| `HERO` | Headline, positioning line, proof strip |
| `ABOUT` | Narrative copy and the career timeline |
| `WHAT I DO` | The five recurring themes |
| `EXPERIENCE` | Roles, bullets, and tech tags |
| `PROJECTS` | Expandable case studies |
| `SKILLS` | Capability groupings |
| `NOW` | Current focus — worth updating every month or two |
| `LEADERSHIP` | Positions of responsibility |
| `CONTACT` | Email, LinkedIn, phone |

### Changing the colour scheme

All colours are defined once as custom properties at the top of `assets/css/styles.css`:

```css
:root{
  --ink:#0F2A44;      /* background */
  --line:#BFE3F0;     /* schematic lines and body highlights */
  --amber:#E8A33D;    /* accent */
  --paper:#F4F7F5;    /* primary text */
  --slate:#7C93A6;    /* secondary text */
}
```

Change these values and the entire site follows.

---

## Accessibility and performance notes

- Responsive down to 390px width
- Visible keyboard focus states (`:focus-visible`)
- `prefers-reduced-motion` respected — all animation is disabled for users who ask for it
- Scroll-reveal animations have a timeout fallback, so content can never be permanently hidden if `IntersectionObserver` fails to fire
- No tracking, no analytics, no cookies

---

## A note on content accuracy

Metrics on this site describe specific experimental results, not universal production benchmarks. Where exact figures aren't public or finalised, the copy uses qualitative language deliberately rather than approximate numbers.

Before publishing changes that reference employer work, confirm that nothing proprietary or confidential is included.

---

## License

Code is MIT licensed — see [LICENSE](LICENSE). Reuse the structure freely.

Written content, personal details, and project descriptions are not covered by that license. Please don't copy them verbatim for your own portfolio.
