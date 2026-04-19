import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  return (
    <header className="border-b border-[var(--color-border)]">
      <nav
        className="mx-auto flex w-full max-w-[var(--container-wide)] items-center justify-between px-6 py-5 md:px-10"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight"
        >
          Oslo
        </Link>
        <ul className="flex items-center gap-6 text-sm md:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent-strong)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="mailto:hello@example.com"
              className="rounded-full border border-[var(--color-ink)] px-4 py-1.5 text-sm transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]"
            >
              Let&rsquo;s talk
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
