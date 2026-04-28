import Link from "next/link";
import { getProjectLink, type Project } from "@/content/lib";

export function ProjectCard({ project }: { project: Project }) {
  const link = getProjectLink(project);
  const orderLabel = project.order.toString().padStart(2, "0");
  const content = (
    <article className="group relative flex h-full flex-col justify-between border border-[var(--color-ink)]/15 bg-[var(--color-bg)] px-[var(--space-md)] py-[var(--space-md)] transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-soft-fill)]/30">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="masthead-meta text-[var(--color-ink)]/55">
            <span style={{ color: "var(--color-blue)" }}>{orderLabel}</span>
            <span aria-hidden className="mx-2 text-[var(--color-ink)]/30">
              /
            </span>
            <span className="tabular">{project.year}</span>
          </div>
          <span className="masthead-meta text-[var(--color-blue)] transition-colors group-hover:text-[var(--color-accent-strong)]">
            {link.label}
          </span>
        </div>

        <h2 className="mt-[var(--space-sm)] font-[family-name:var(--font-display)] text-[var(--text-h3)] font-bold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
          {project.title}
        </h2>
        <p className="mt-[var(--space-sm)] max-w-[46ch] text-[var(--color-ink)]/82">
          {project.summary}
        </p>
        <div className="mt-[var(--space-md)] flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={tag}
              className={index === 0 ? "chip" : "chip chip-blue-soft"}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="mt-[var(--space-lg)] border-t border-[var(--color-ink)]/10 pt-[var(--space-sm)] text-sm leading-6 text-[var(--color-ink)]/72 [&_p:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: project.html }}
      />
    </article>
  );

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    );
  }

  return <Link href={link.href}>{content}</Link>;
}
