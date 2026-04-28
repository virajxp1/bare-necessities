import Link from "next/link";
import type { ProjectMeta } from "@/content/lib";

export function ProjectRow({ project }: { project: ProjectMeta }) {
  const indexLabel = project.order.toString().padStart(2, "0");
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-b border-[var(--color-ink)]/16 py-[var(--space-lg)] transition-colors hover:bg-[var(--color-bg)]/45"
    >
      <div className="grid gap-x-6 gap-y-4 md:grid-cols-[4.75rem_minmax(0,1fr)_auto] md:items-start md:gap-x-8">
        <div className="flex items-end gap-3 md:block md:pt-1">
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

        <div className="min-w-0">
          <h3 className="font-[family-name:var(--font-display)] text-[var(--text-h3)] font-bold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
            {project.title}
          </h3>
          <p className="mt-2 max-w-[60ch] text-[var(--color-ink)]/80">
            {project.summary}
          </p>
          <p className="masthead-meta mt-4 text-[var(--color-ink)]/55">
            {project.tags.join(" · ")}
          </p>
        </div>

        <span className="masthead-meta self-start text-[var(--color-blue)] transition-colors group-hover:text-[var(--color-accent-strong)] md:pt-1">
          Open dossier →
        </span>
      </div>
    </Link>
  );
}
