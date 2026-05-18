"use client";

import { useEffect, useState } from "react";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(media.matches);

    updatePreference();
    media.addEventListener("change", updatePreference);

    return () => {
      media.removeEventListener("change", updatePreference);
    };
  }, []);

  return prefersReducedMotion;
}

const NOW_LINES: { text: string; cls?: string }[] = [
  { text: "$ whoami" },
  { text: "viraj parikh · engineer in Texas", cls: "p" },
  { text: "$ focus" },
  { text: "gen AI platform · full-stack systems", cls: "p" },
  { text: "$ archive" },
  { text: "work notes live at bare-necessities.studio", cls: "c" },
];

export function NowPanel() {
  const [shown, setShown] = useState<number>(0);
  const [chars, setChars] = useState<number>(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (shown >= NOW_LINES.length) return;
    const target = NOW_LINES[shown].text.length;
    if (chars < target) {
      const t = setTimeout(() => setChars((c) => c + 1), 18 + Math.random() * 28);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setShown((s) => s + 1);
      setChars(0);
    }, 420);
    return () => clearTimeout(t);
  }, [shown, chars, prefersReducedMotion]);

  return (
    <div className="li-now" aria-hidden>
      <div className="li-now__head">
        <div className="li-now__dots">
          <i />
          <i />
          <i />
        </div>
        <span>viraj@studio</span>
      </div>
      {(prefersReducedMotion ? NOW_LINES : NOW_LINES.slice(0, shown)).map((line, i) => (
        <div key={i} className="li-now__line">
          <span className={line.cls}>{line.text}</span>
        </div>
      ))}
      {!prefersReducedMotion && shown < NOW_LINES.length && (
        <div className="li-now__line">
          <span className={NOW_LINES[shown].cls}>
            {NOW_LINES[shown].text.slice(0, chars)}
          </span>
          <span className="li-now__caret" />
        </div>
      )}
    </div>
  );
}
