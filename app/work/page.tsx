import type { Metadata } from "next";
import { ProjectRow } from "@/components/project-row";
import { getAllProjects } from "@/content/lib";

export const metadata: Metadata = {
  title: "Work — bare-necessities.studio",
  description: "Projects and things I've built.",
  alternates: {
    canonical: "/work/",
  },
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 py-[var(--space-2xl)] md:px-10">
      <div className="masthead-meta flex items-center justify-between gap-4 pb-[var(--space-md)] text-[var(--color-ink)]">
        <span className="flex items-center gap-3">
          <span style={{ color: "var(--color-blue)" }}>N° 01</span>
          <span aria-hidden className="h-px w-10 bg-[var(--color-ink)]/60" />
          <span>Archive · Work</span>
        </span>
        <span className="hidden text-[var(--color-ink)]/70 md:inline">
          {projects.length} entries
        </span>
      </div>
      <hr className="rule-double" />

      <header className="mt-[var(--space-xl)] grid gap-[var(--space-md)] md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="eyebrow">Selected work</p>
          <h1
            className="mt-[var(--space-sm)] font-[family-name:var(--font-display)] font-extrabold tracking-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            An archive of things I&rsquo;ve shipped.
          </h1>
        </div>
        <p className="md:col-span-4 md:pb-2 max-w-[36ch] text-[var(--color-ink)]/75">
          Most recent first. Each entry is a link to a longer write-up — what
          it was, what it cost, and what it changed.
        </p>
      </header>

      <hr className="rule-accent mt-[var(--space-lg)]" />

      <div className="mt-[var(--space-sm)]">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
