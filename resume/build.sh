#!/usr/bin/env bash
# Builds out/Viraj_Parikh_Resume.pdf from resume.typ using the RenderCV venv's Typst and bundled fonts.
set -euo pipefail
cd "$(dirname "$0")"
FONTS=$(.venv/bin/python -c "import rendercv_fonts,os;print(os.path.dirname(rendercv_fonts.__file__))")
mkdir -p out
.venv/bin/python - "$FONTS" <<'PY'
import sys, glob, typst
dirs = [d for d in glob.glob(sys.argv[1] + "/*") if not d.endswith((".py", "__pycache__"))]
typst.compile("resume.typ", output="out/Viraj_Parikh_Resume.pdf", font_paths=dirs, ignore_system_fonts=True)
typst.compile("resume.typ", output="out/Viraj_Parikh_Resume-{p}.png", font_paths=dirs, ignore_system_fonts=True, ppi=144)
PY
