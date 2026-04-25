import Link from "next/link";
import type { ProjectMeta } from "@/content/lib";

export function ProjectRow({ project }: { project: ProjectMeta }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-b border-[var(--color-ink)]/20 py-[var(--space-lg)] transition-colors hover:bg-[var(--color-bg)]/60"
    >
      <div className="grid items-baseline gap-x-8 gap-y-2 md:grid-cols-[7rem_1fr_auto]">
        <span
          className="font-[family-name:var(--font-display)] font-extrabold tabular leading-none text-[var(--color-accent-strong)] transition-colors group-hover:text-[var(--color-accent)]"
          style={{ fontSize: "clamp(2.25rem, 3.2vw, 3.25rem)" }}
        >
          {project.year}
        </span>
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-[var(--text-h3)] font-bold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
            {project.title}
          </h3>
          <p className="mt-1 max-w-2xl text-[var(--color-ink)]/80">
            {project.summary}
          </p>
          <p className="masthead-meta mt-3 text-[var(--color-ink)]/60">
            {project.tags.join(" · ")}
          </p>
        </div>
        <span
          aria-hidden
          className="self-center font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]/40 transition-all group-hover:translate-x-1 group-hover:text-[var(--color-accent)]"
        >
          →
        </span>
      </div>
    </Link>
  );
}
