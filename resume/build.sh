#!/usr/bin/env bash
# Builds out/<name>.pdf (+ PNG preview) from <name>.typ with the Typst Python
# package and the fonts bundled in rendercv-fonts (see requirements.txt).
# Usage: ./build.sh [name]   (default: resume)
# Uses resume/.venv if present, otherwise $PYTHON (default python3), e.g. in CI.
set -euo pipefail
cd "$(dirname "$0")"
SRC=${1:-resume}
if [ -x .venv/bin/python ]; then PY=.venv/bin/python; else PY=${PYTHON:-python3}; fi
FONTS=$("$PY" -c "import rendercv_fonts,os;print(os.path.dirname(rendercv_fonts.__file__))")
mkdir -p out
rm -f out/"$SRC"-*.png
"$PY" - "$FONTS" "$SRC" <<'PY'
import sys, glob, typst
fonts, src = sys.argv[1], sys.argv[2]
dirs = [d for d in glob.glob(fonts + "/*") if not d.endswith((".py", "__pycache__"))]
typst.compile(f"{src}.typ", output=f"out/{src}.pdf", font_paths=dirs, ignore_system_fonts=True)
typst.compile(f"{src}.typ", output=f"out/{src}-{{p}}.png", font_paths=dirs, ignore_system_fonts=True, ppi=144)
PY
