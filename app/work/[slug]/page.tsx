import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { getAllProjects, getProject, getProjectLink } from "@/content/lib";

type WorkProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found — bare-necessities.studio" };
  }

  return {
    title: `${project.title} — bare-necessities.studio`,
    description: project.summary,
    alternates: {
      canonical: `/work/${slug}/`,
    },
  };
}

export default async function WorkProjectPage({
  params,
}: WorkProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  if (project.projectUrl || project.repoUrl) {
    const link = getProjectLink(project);
    permanentRedirect(link.href);
  }

  return (
    <article className="mx-auto w-full max-w-[var(--container-content)] px-6 py-[var(--space-2xl)] md:px-10">
      <div className="masthead-meta flex items-center justify-between gap-4 pb-[var(--space-md)] text-[var(--color-ink)]">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-[var(--color-accent-strong)] transition-colors hover:text-[var(--color-ink)]"
        >
          <span
            aria-hidden
            className="inline-block transition-transform group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Back to archive
        </Link>
        <span className="tabular text-[var(--color-ink)]/70">
          {project.year}
        </span>
      </div>
      <hr className="rule-double" />

      <header className="mt-[var(--space-xl)]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="chip">Project</span>
          <span className="masthead-meta tabular text-[var(--color-ink)]/60">
            {project.year}
          </span>
        </div>
        <h1
          className="mt-[var(--space-md)] font-[family-name:var(--font-display)] font-extrabold tracking-tight"
          style={{ fontSize: "var(--text-h1)" }}
        >
          {project.title}
        </h1>
        <p
          className="mt-[var(--space-md)] max-w-[48ch] font-[family-name:var(--font-display)] font-medium tracking-tight text-[var(--color-ink)]/85"
          style={{ fontSize: "var(--text-lead)", lineHeight: 1.22 }}
        >
          {project.summary}
        </p>
        <dl className="masthead-meta mt-[var(--space-lg)] grid gap-x-6 gap-y-2 text-[var(--color-ink)]/60 sm:grid-cols-[auto_1fr]">
          <dt style={{ color: "var(--color-blue)" }}>Shipped</dt>
          <dd className="tabular">{project.year}</dd>
          <dt style={{ color: "var(--color-blue)" }}>Stack</dt>
          <dd>{project.tags.join(" · ")}</dd>
        </dl>
      </header>

      <hr className="rule-accent mt-[var(--space-lg)]" />

      <div
        className="prose-content prose-lead mt-[var(--space-lg)] space-y-5 text-[var(--color-ink)]"
        dangerouslySetInnerHTML={{ __html: project.html }}
      />

      <footer className="mt-[var(--space-2xl)] flex items-center gap-4 border-t border-[var(--color-ink)]/15 pt-[var(--space-md)]">
        <span
          aria-hidden
          className="font-[family-name:var(--font-display)] text-2xl"
          style={{ color: "var(--color-accent)" }}
        >
          ¶
        </span>
        <p className="masthead-meta text-[var(--color-ink)]/55">
          End of entry
        </p>
        <span aria-hidden className="h-px flex-1 bg-[var(--color-ink)]/15" />
        <Link
          href="/work"
          className="masthead-meta text-[var(--color-accent-strong)] transition-colors hover:text-[var(--color-ink)]"
        >
          More from the archive →
        </Link>
      </footer>
    </article>
  );
}
