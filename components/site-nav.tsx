import Link from "next/link";

const links = [
  { href: "/work", label: "Work", num: "01" },
  { href: "/blog", label: "Journal", num: "02" },
  { href: "/about", label: "About", num: "03" },
];

export function SiteNav() {
  return (
    <header className="border-b border-[var(--color-ink)]/20">
      <nav
        className="mx-auto flex w-full max-w-[var(--container-wide)] items-center justify-between px-6 py-5 md:px-10"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2 font-[family-name:var(--font-display)] text-base font-extrabold tracking-tight"
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
        <ul className="flex items-center gap-5 text-sm md:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative inline-flex items-baseline gap-1.5 py-1 text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent-strong)]"
              >
                <span
                  className="tabular text-[0.65rem] font-semibold opacity-60 transition-opacity group-hover:opacity-100"
                  style={{ color: "var(--color-blue)" }}
                >
                  {link.num}
                </span>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/virajxp1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent-strong)]"
            >
              GitHub
              <span aria-hidden className="ml-1 text-[var(--color-ink)]/50">
                ↗
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
