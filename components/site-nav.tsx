"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Journal" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="li-root">
      <nav className="li-nav" aria-label="Primary">
        <Link href="/" className="li-nav__brand">
          <span
            aria-hidden
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "var(--lime-deep)",
            }}
          />
          <b>bare-necessities</b>
          <span style={{ color: "var(--ink-3)", letterSpacing: 0 }}>.studio</span>
        </Link>

        <div className="li-nav__links">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "is-active" : undefined}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="https://github.com/virajxp1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>

        <div className="li-nav__clock">Texas</div>
      </nav>
    </header>
  );
}
