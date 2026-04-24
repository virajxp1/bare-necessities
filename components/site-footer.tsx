import Link from "next/link";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="mt-[var(--space-2xl)] bg-[var(--color-ink)] text-[var(--color-bg)]">
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 py-[var(--space-xl)] md:px-10">
        <div className="grid gap-[var(--space-lg)] md:grid-cols-12 md:items-start">
          <div className="md:col-span-6">
            <p className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
              Quietly building.
            </p>
            <p className="mt-3 max-w-[40ch] text-sm opacity-70">
              Backend engineer. Writing here so I have to think clearly.
            </p>
          </div>
          <nav className="md:col-span-3" aria-label="Footer">
            <p
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--color-blue-soft)" }}
            >
              Navigate
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <Link href="/work" className="transition-colors hover:text-[var(--color-blue-soft)]">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-[var(--color-blue-soft)]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-[var(--color-blue-soft)]">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--color-blue-soft)" }}
            >
              Elsewhere
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a
                  href="https://github.com/virajxp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-blue-soft)]"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vhparikh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-blue-soft)]"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[var(--space-xl)] flex flex-col gap-3 border-t border-[var(--color-bg)]/15 pt-6 text-xs opacity-70 md:flex-row md:items-center md:justify-between">
          <p className="tabular">
            <span
              style={{ color: "var(--color-blue-soft)" }}
            >
              MMXXVI
            </span>{" "}
            · © {currentYear} · bare-necessities.studio · Austin, TX
          </p>
          <p className="italic">
            Set in Cabinet Grotesk &amp; Instrument Sans. Typeset by hand.
          </p>
        </div>
      </div>
    </footer>
  );
}
