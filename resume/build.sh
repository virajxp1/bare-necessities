#!/usr/bin/env bash
# Builds out/<name>.pdf (+ PNG preview) from <name>.typ using the RenderCV venv's Typst and bundled fonts.
# Usage: ./build.sh [resume|modern]   (default: resume)
set -euo pipefail
cd "$(dirname "$0")"
SRC=${1:-resume}
FONTS=$(.venv/bin/python -c "import rendercv_fonts,os;print(os.path.dirname(rendercv_fonts.__file__))")
mkdir -p out
rm -f out/"$SRC"-*.png
.venv/bin/python - "$FONTS" "$SRC" <<'PY'
import sys, glob, typst
fonts, src = sys.argv[1], sys.argv[2]
dirs = [d for d in glob.glob(fonts + "/*") if not d.endswith((".py", "__pycache__"))]
typst.compile(f"{src}.typ", output=f"out/{src}.pdf", font_paths=dirs, ignore_system_fonts=True)
typst.compile(f"{src}.typ", output=f"out/{src}-{{p}}.png", font_paths=dirs, ignore_system_fonts=True, ppi=144)
PY
