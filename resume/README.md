# Resume

**The real resume is `resume/resume.typ`.** Everything else in this folder is tooling or generated output.

| What | Where |
|---|---|
| Source of truth (edit this) | `resume/resume.typ` |
| Live PDF (rebuilt on every deploy) | https://bare-necessities.studio/resume.pdf |
| Local build output | `resume/out/resume.pdf` (+ `resume/out/resume-1.png` preview) |
| Download button | About page, "Résumé ↓" |

There is no `resume.yaml` anymore. It was an older RenderCV draft that nothing built from, and it was deleted in #21. Don't recreate it.

## Build it

```sh
python3 -m venv resume/.venv
resume/.venv/bin/pip install -r resume/requirements.txt
resume/build.sh            # writes resume/out/resume.pdf and resume/out/resume-1.png
```

`build.sh` uses `resume/.venv` if it exists, otherwise `$PYTHON` (default `python3`). The layout comes from the open-source Typst package `@preview/modern-cv` (downloaded on first build). Fonts come from `rendercv-fonts`, and system fonts are ignored, so local and CI builds come out pixel-identical.

## How it reaches the site

1. `.github/workflows/deploy-pages.yml` installs `requirements.txt` and runs `resume/build.sh`.
2. `npm run build` runs `scripts/sync-resume.mjs` first (`prebuild`), which copies the PDF to `public/resume.pdf`.
3. `components/download-resume.tsx` renders the About page button, but only if that PDF exists.

`resume/out/` and `public/resume.pdf` are generated and gitignored. Never commit them, and never edit them by hand.

## Rules for editing

- **One page.** Check with `pdfinfo resume/out/resume.pdf | grep Pages`.
- **No internal HubSpot names** (project, product, or system names). Describe what the thing does instead.
- **No vendor names in experience bullets**, and nothing that reads as criticism of a vendor. Braintrust appears only as a skill and in ForkFolio's stack.
- **Clean job titles** so resume scanners can parse them. Put context in the bullets, not the title.
- **Sound human.** Vary the verbs, vary bullet length, and avoid semicolon chains and stock phrases like "specializing in".
- **Typst gotchas:** `~` renders as a non-breaking space (write "about"), `$` must be escaped as `\$`, and `@` in plain text must be escaped as `\@`.

`resume/career-profile.yaml`, if you have it locally, is a private fact sheet with internal names. It's gitignored on purpose and must stay out of this public repo.
