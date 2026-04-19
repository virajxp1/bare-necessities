import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-[var(--space-2xl)] bg-[var(--color-ink)] text-[var(--color-bg)]">
      <div className="mx-auto flex w-full max-w-[var(--container-wide)] flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="space-y-2">
          <p className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
            Oslo
          </p>
          <p className="text-sm opacity-80">
            Software, stripped to what matters.
          </p>
        </div>
        <ul className="flex flex-wrap gap-5 text-sm">
          <li>
            <Link
              href="/work"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              Writing
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="mailto:hello@example.com"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-accent)]"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
