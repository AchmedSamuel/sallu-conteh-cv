# Sallu Conteh — Portfolio & Online CV

A static website (plain HTML, CSS and JavaScript, no build step) for **GitHub Pages**.

## Files

```
index.html                     Main page: Home, About, Experience, Education, Project, Skills, Training & References, Contact
styles.css                     Design (forest green + solar amber). Colours are tokens at the top; includes a dark theme
script.js                      Theme switch, mobile menu, and rendering of the lists from data/content.js
data/content.js                ★ EDIT HERE: experience, education, projects, training, references
cv.html                        Printable one-page CV (reads the same data file)
404.html                       "Page not found" page
assets/profile.jpg             Photo (480×480, used for link previews)
assets/profile-260.jpg         Photo (used on the page and CV)
assets/cv/Sallu_Conteh_CV.pdf  The "Download CV" file
assets/fonts/                  Manrope + Source Sans 3, self-hosted (SIL Open Font License)
.nojekyll, .gitignore          GitHub Pages / repository housekeeping
```

All paths are relative, so the site works at `https://USERNAME.github.io/REPO-NAME/` or `https://USERNAME.github.io/`.

## Publish on GitHub Pages (about 5 minutes, free)

1. Sign in at https://github.com (create a free account if needed).
2. **+ → New repository** → name it `sallu-conteh` → **Public** → **Create repository**.
   *(Name it exactly `USERNAME.github.io` instead if you want the shorter address `https://USERNAME.github.io`.)*
3. Click **uploading an existing file**, unzip this package, and drag **everything inside the folder**
   (`index.html`, `styles.css`, `script.js`, `cv.html`, `404.html`, `README.md`, and the `data` and `assets` folders)
   into the box → **Commit changes**.
4. **Settings → Pages → Build and deployment → Source: Deploy from a branch** → Branch **main**, folder **/ (root)** → **Save**.
5. After 1–2 minutes the page shows **"Your site is live at …"** — e.g. `https://USERNAME.github.io/sallu-conteh/`.
6. Optional: add the live address to the Contact list in `cv.html`, then regenerate the PDF (see below).

No GitHub Actions workflow is needed.

## Edit content

On GitHub: open a file → pencil ✏️ → edit → **Commit changes** → wait ~1 minute → reload with **Ctrl + Shift + R**.

| I want to… | Edit |
|---|---|
| Add a new job | `data/content.js` → `experience` → copy a `{ ... },` block to the top and change it |
| Add the MSc university and dates | `data/content.js` → `education` → first entry → `school: "..."`, `dates: "..."` |
| Add a certificate or training | `data/content.js` → `training` |
| Add a project | `data/content.js` → `projects` |
| Change the About text, skills or headline | `index.html` (Ctrl+F to find the text; change only the words between tags) |
| Change colours | `styles.css` → tokens at the top (`--accent`, `--sun`, `--deep`…) |
| Change the photo | Upload new `assets/profile.jpg` (480×480) and `assets/profile-260.jpg` (260×260) with the same names |

If a list shows *"This list could not be loaded"*, a comma or quote is missing in `data/content.js`.

### Update the PDF CV
The PDF is a print of `cv.html`. After editing, open `…/cv.html` on the live site → **Print / Save as PDF** →
Destination **Save as PDF**, Paper **A4**, Margins **None**, **Background graphics on**, Headers/footers **off** →
save as `Sallu_Conteh_CV.pdf` and upload it to `assets/cv/`.

## Privacy
The street address, phone numbers and the referees' phone numbers and emails from the original resume are
**not published**. Referees are listed by name and role only — ask each referee for permission first.

## Checklist after publishing
- [ ] Repository is Public; Settings → Pages shows "Your site is live"
- [ ] Photo and fonts display; menu items scroll to each section (also from ☰ on a phone)
- [ ] **Download CV** downloads the PDF; **Printable CV** opens
- [ ] Dark/light switch works
- [ ] Email link opens a new message
- [ ] A wrong address (e.g. `/sallu-conteh/xyz`) shows the 404 page
