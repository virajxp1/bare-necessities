import type { Metadata } from "next";
import Link from "next/link";
import { ProjectRow } from "@/components/project-row";
import { getAllProjects, getProject } from "@/content/lib";

export const metadata: Metadata = {
  title: "Work — bare-necessities.studio",
  description: "Selected projects, each with a short write-up and links to the live site or source.",
  alternates: {
    canonical: "/work/",
  },
};

export default function WorkPage() {
  const projects = getAllProjects()
    .map((project) => getProject(project.slug))
    .filter((project) => project !== null);
  const [leadProject, ...archiveProjects] = projects;

  return (
    <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 py-[var(--space-2xl)] md:px-10">
      <div className="masthead-meta flex items-center justify-between gap-4 pb-[var(--space-md)] text-[var(--color-ink)]">
        <span className="flex items-center gap-3">
          <span style={{ color: "var(--color-blue)" }}>N° 01</span>
          <span aria-hidden className="h-px w-10 bg-[var(--color-ink)]/60" />
          <span>Work · Selected Projects</span>
        </span>
        <span className="hidden text-[var(--color-ink)]/70 md:inline">
          {projects.length} projects
        </span>
      </div>
      <hr className="rule-double" />

      <header className="mt-[var(--space-xl)]">
        <p className="eyebrow">Selected work</p>
        <h1
          className="mt-[var(--space-sm)] font-[family-name:var(--font-display)] font-extrabold tracking-tight"
          style={{ fontSize: "var(--text-h1)" }}
        >
          What I&rsquo;ve{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[var(--color-accent-strong)]">
              built.
            </span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-[0.08em] -z-0 h-[0.18em] bg-[var(--color-blue)]/18"
            />
          </span>
        </h1>
      </header>

      <hr className="rule-accent mt-[var(--space-lg)]" />

      {leadProject ? (
        <article className="mt-[var(--space-xl)] border-b border-[var(--color-ink)]/16 pb-[var(--space-xl)]">
          <div className="grid gap-[var(--space-lg)] lg:grid-cols-[minmax(0,1.8fr)_minmax(18rem,1fr)]">
            <div>
              <p className="masthead-meta" style={{ color: "var(--color-blue)" }}>
                Lead dossier
              </p>
              <Link href={`/work/${leadProject.slug}`} className="group block">
                <div className="mt-[var(--space-sm)] flex flex-wrap items-center gap-3 text-[var(--color-ink)]/60">
                  <span className="section-mark tabular">
                    {leadProject.order.toString().padStart(2, "0")}
                  </span>
                  <span className="masthead-meta tabular">
                    {leadProject.year}
                  </span>
                </div>
                <h2
                  className="mt-[var(--space-sm)] max-w-[12ch] font-[family-name:var(--font-display)] font-extrabold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]"
                  style={{ fontSize: "var(--text-h1)" }}
                >
                  {leadProject.title}
                </h2>
                <p className="mt-[var(--space-md)] max-w-[52ch] text-lg text-[var(--color-ink)]/84">
                  {leadProject.summary}
                </p>
                <div className="mt-[var(--space-md)] flex flex-wrap gap-2">
                  {leadProject.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className={index === 0 ? "chip" : "chip chip-blue-soft"}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </div>

            <div className="flex flex-col justify-between gap-[var(--space-md)] border-t border-[var(--color-ink)]/14 pt-[var(--space-md)] lg:border-l lg:border-t-0 lg:pl-[var(--space-lg)] lg:pt-0">
              <div
                className="prose-content text-[var(--color-ink)]/74 [&_p:last-child]:mb-0"
                dangerouslySetInnerHTML={{ __html: leadProject.html }}
              />
              <Link
                href={`/work/${leadProject.slug}`}
                className="masthead-meta text-[var(--color-accent-strong)] transition-colors hover:text-[var(--color-ink)]"
              >
                Open full project note →
              </Link>
            </div>
          </div>
        </article>
      ) : null}

      {archiveProjects.length > 0 ? (
        <div className="mt-[var(--space-sm)]">
          {archiveProjects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      ) : null}

      <div className="mt-[var(--space-xl)] grid gap-[var(--space-md)] pt-[var(--space-lg)] md:grid-cols-12 md:items-start">
        <p className="max-w-[56ch] text-[var(--color-ink)]/72 md:col-span-8">
          The archive stays compact on purpose: each entry is a short case note
          with context, decisions, and links to what actually shipped.
        </p>
        <Link
          href="/blog"
          className="masthead-meta text-[var(--color-blue)] transition-colors hover:text-[var(--color-accent-strong)] md:col-span-4 md:justify-self-end"
        >
          Read the notes around the work →
        </Link>
      </div>
    </div>
  );
}
