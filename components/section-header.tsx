import Link from "next/link";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  action?: { href: string; label: string };
  children?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  action,
  children,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-[family-name:var(--font-display)] text-[var(--text-h2)] font-bold tracking-tight">
          {title}
        </h2>
        {children ? (
          <p className="max-w-xl text-[var(--color-muted-text)]">{children}</p>
        ) : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className="group inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-strong)]"
        >
          {action.label}
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      ) : null}
    </div>
  );
}
