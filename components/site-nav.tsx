"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work", num: "01" },
  { href: "/blog", label: "Journal", num: "02" },
  { href: "/about", label: "About", num: "03" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--color-ink)]/15">
      <nav
        className="mx-auto w-full max-w-[var(--container-wide)] px-6 py-4 md:px-10 md:py-5"
        aria-label="Primary"
      >
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div className="flex min-w-0 flex-col gap-1">
            <Link
              href="/"
              className="group inline-flex min-h-11 items-baseline gap-2 self-start font-[family-name:var(--font-display)] text-base font-extrabold tracking-tight"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full transition-colors group-hover:bg-[var(--color-accent)]"
                style={{ background: "var(--color-blue)" }}
              />
              <span>bare-necessities</span>
              <span className="font-medium text-[var(--color-muted-text)]">
                .studio
              </span>
            </Link>
            <p className="masthead-meta text-[var(--color-ink)]/55">
              <span style={{ color: "var(--color-blue)" }}>Volume I</span>
              <span aria-hidden className="mx-2 text-[var(--color-ink)]/30">
                /
              </span>
              Austin, Texas
            </p>
          </div>

          <div className="flex min-h-11 flex-wrap items-center justify-end gap-x-3 gap-y-1 text-sm md:gap-x-5">
            <ul className="flex flex-wrap items-center gap-x-1 gap-y-1">
              {links.map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`group inline-flex min-h-11 items-center gap-2 border-b px-2 py-1 transition-colors ${
                        isActive
                          ? "border-[var(--color-accent)] text-[var(--color-accent-strong)]"
                          : "border-transparent text-[var(--color-ink)] hover:text-[var(--color-accent-strong)]"
                      }`}
                    >
                      <span
                        className={`tabular text-[0.65rem] font-semibold transition-opacity ${
                          isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                        }`}
                        style={{ color: "var(--color-blue)" }}
                      >
                        {link.num}
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href="https://github.com/virajxp1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 px-2 py-1 text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent-strong)]"
            >
              <span>GitHub</span>
              <span aria-hidden className="text-[var(--color-ink)]/45">
                ↗
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
