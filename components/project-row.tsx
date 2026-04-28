import Link from "next/link";
import { getProjectLink, type ProjectMeta } from "@/content/lib";

export function ProjectRow({ project }: { project: ProjectMeta }) {
  const link = getProjectLink(project);
  const indexLabel = project.order.toString().padStart(2, "0");
  const content = (
    <div className="grid gap-x-8 gap-y-4 md:grid-cols-[5rem_1fr_auto] md:items-start">
      <div className="md:pt-1">
        <span
          className="font-[family-name:var(--font-display)] font-extrabold tabular leading-none text-[var(--color-accent-strong)] transition-colors group-hover:text-[var(--color-accent)]"
          style={{ fontSize: "clamp(2.1rem, 2.8vw, 3rem)" }}
        >
          {indexLabel}
        </span>
        <p className="masthead-meta mt-2 text-[var(--color-ink)]/50">
          {project.year}
        </p>
      </div>

      <div>
        <h3 className="font-[family-name:var(--font-display)] text-[var(--text-h3)] font-bold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
          {project.title}
        </h3>
        <p className="mt-2 max-w-[60ch] text-[var(--color-ink)]/80">
          {project.summary}
        </p>
        <p className="masthead-meta mt-3 text-[var(--color-ink)]/60">
          {project.tags.join(" · ")}
        </p>
      </div>

      <span className="masthead-meta self-start text-[var(--color-blue)] transition-colors group-hover:text-[var(--color-accent-strong)] md:pt-1">
        {link.label}
      </span>
    </div>
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className="group block border-b border-[var(--color-ink)]/20 py-[var(--space-lg)] transition-colors hover:bg-[var(--color-bg)]/60"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      className="group block border-b border-[var(--color-ink)]/20 py-[var(--space-lg)] transition-colors hover:bg-[var(--color-bg)]/60"
    >
      {content}
    </Link>
  );
}
