import Link from "next/link";

export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
};

export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-b border-[var(--color-border)] py-8 transition-colors hover:bg-[var(--color-soft-fill)]"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-10">
        <div className="flex flex-col gap-2 md:max-w-xl">
          <div className="flex items-baseline gap-3">
            <h3 className="font-[family-name:var(--font-display)] text-[var(--text-h3)] font-semibold tracking-tight">
              {project.title}
            </h3>
            <span className="text-sm text-[var(--color-muted-text)]">
              {project.year}
            </span>
          </div>
          <p className="text-[var(--color-muted-text)]">{project.summary}</p>
          <ul className="mt-1 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[var(--color-soft-fill)] px-2.5 py-0.5 text-xs text-[var(--color-muted-text)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <span
          aria-hidden
          className="inline-flex items-center text-[var(--color-accent)] transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </Link>
  );
}
