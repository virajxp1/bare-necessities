import { existsSync } from "node:fs";
import { join } from "node:path";

// The resume PDF is built ahead of time by resume/build.sh and copied into
// public/ by scripts/sync-resume.mjs (runs as `prebuild`). We check for it at
// build time so the static export never renders a link to a missing file —
// once a PDF exists, the button shows up with no further changes.
export function ResumeLink() {
  if (!existsSync(join(process.cwd(), "public", "resume.pdf"))) {
    return null;
  }

  // public/ assets are served under the configured basePath on GitHub Pages,
  // and plain <a> tags don't get Next's basePath prefixing — add it manually.
  // Links to the hosted PDF page (no download attribute) so it opens in the
  // browser at /resume.pdf.
  const basePath = process.env.PAGES_BASE_PATH ?? "";

  return (
    <a href={`${basePath}/resume.pdf`} className="li-btn li-btn--primary">
      Résumé <span className="li-arrow">↗</span>
    </a>
  );
}
