// Copies the resume PDF produced by resume/build.sh (Typst / RenderCV) into
// public/ so the static export can serve it at <basePath>/resume.pdf.
//
// The PDF is a build artifact, not part of the repo. When it hasn't been built
// (e.g. CI or a fresh clone), we skip quietly and the download button simply
// isn't rendered — see components/download-resume.tsx.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const source = join(process.cwd(), "resume", "out", "resume.pdf");
const target = join(process.cwd(), "public", "resume.pdf");

if (!existsSync(source)) {
  console.log(
    "[sync-resume] resume/out/resume.pdf not found — skipping (download button stays hidden). Run resume/build.sh to produce it.",
  );
  process.exit(0);
}

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
console.log("[sync-resume] copied resume/out/resume.pdf → public/resume.pdf");
