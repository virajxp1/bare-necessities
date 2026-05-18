"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="li-root li-foot li-foot--shell">
      <div className="li-foot__signature">
        <span className="li-mono-eyebrow">Bare Necessities / Archive open</span>
        <strong>A small archive of systems, notes, and tradeoffs worth keeping.</strong>
      </div>
      <span className="li-foot__links">
        <Link href="/">Home</Link>
        <Link href="/work">Work</Link>
        <Link href="/blog">Journal</Link>
        <Link href="/about">About</Link>
        <a
          href="https://github.com/virajxp1"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/vhparikh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </span>
    </footer>
  );
}
