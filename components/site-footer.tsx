import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-bg)]">
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 py-[var(--space-xl)] md:px-10 md:py-[var(--space-2xl)]">
        <div className="grid gap-[var(--space-lg)] md:grid-cols-12 md:items-start">
          <div className="md:col-span-6">
            <p
              className="max-w-[10ch] font-[family-name:var(--font-display)] font-bold tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 4vw, 4.2rem)", lineHeight: 0.96 }}
            >
              A small archive.
            </p>
            <p className="mt-4 max-w-[42ch] text-[var(--color-bg)]/74">
              Engineer in Austin. Work, notes, and a few links.
            </p>
          </div>
          <nav className="md:col-span-3 md:pt-1" aria-label="Footer">
            <p className="masthead-meta" style={{ color: "var(--color-blue-soft)" }}>
              Navigate
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <Link
                  href="/work"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--color-blue-soft)]"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--color-blue-soft)]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--color-blue-soft)]"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:col-span-3 md:pt-1">
            <p className="masthead-meta" style={{ color: "var(--color-blue-soft)" }}>
              Elsewhere
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a
                  href="https://github.com/virajxp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--color-blue-soft)]"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vhparikh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--color-blue-soft)]"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
