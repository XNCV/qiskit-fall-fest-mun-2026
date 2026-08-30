# Qiskit Fall Fest — Memorial University of Newfoundland

A single-page static website for the MUN chapter of Qiskit Fall Fest. Pure HTML/CSS/JS —
no build step, no framework, no dependencies. Deploys directly to GitHub Pages.

## 📁 Project structure

```
.
├── index.html          # All page content/sections
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── config.js       # ⭐ EDIT THIS — event name, date, registration link, FAQ, socials...
│   └── main.js         # Site behaviour (nav, FAQ accordion, register button, animations)
├── assets/
│   └── favicon.svg     # Browser tab icon
├── LICENSE
└── README.md
```

## ✏️ Editing content

Almost everything you'll want to change lives in **[js/config.js](js/config.js)**:

- `registrationUrl` — leave `""` empty to show a disabled "Registration Opening Soon"
  button everywhere. Paste a Google Form / Eventbrite / Luma link here once you have one,
  and every "Register" button on the site will automatically activate.
- `dateText`, `venueName`, `venueAddress`, `mapEmbedSrc` — event date and location.
- `contactEmail` — replace the placeholder before publishing.
- `social` — add Instagram/LinkedIn/Discord/Twitter/GitHub URLs; icons for empty ones
  stay hidden automatically.
- `faq` — array of `{ q, a }` objects rendered as an accordion.

Other content (hero headline, highlight cards, schedule timeline, speaker/sponsor
placeholders) lives directly in [index.html](index.html) — search for the relevant
`<section id="...">` block and edit the text/markup in place.

## 🖥️ Preview locally

Just open `index.html` in a browser — or, for the best experience (so relative
paths behave exactly like they will on GitHub Pages), serve it locally:

```bash
# Python 3
python -m http.server 8000

# or with Node.js
npx serve .
```

Then visit `http://localhost:8000`.

## 🚀 Publish with GitHub Pages

See the step-by-step git instructions the assistant provided in-chat, or follow this
quick version:

1. Create a new **public** repository on GitHub (no README/license/gitignore — this
   folder already has them).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Qiskit Fall Fest MUN website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch → Branch: `main` / `root`** → Save.
4. Your site will be live in a minute or two at:
   `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`

## License

MIT — see [LICENSE](LICENSE).
