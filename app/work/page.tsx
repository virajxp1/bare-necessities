import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects, getProject } from "@/content/lib";

export const metadata: Metadata = {
  title: "Work — bare-necessities.studio",
  description: "Selected projects with notes and links to the live site or repo.",
  alternates: {
    canonical: "/work/",
  },
};

export default function WorkPage() {
  const projects = getAllProjects()
    .map((project) => getProject(project.slug))
    .filter((project) => project !== null);

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

      <header className="mt-[var(--space-xl)] grid gap-[var(--space-md)] md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="eyebrow">Selected work</p>
          <h1
            className="mt-[var(--space-sm)] font-[family-name:var(--font-display)] font-extrabold tracking-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            A tighter record of what I&rsquo;ve built.
          </h1>
        </div>
        <div className="md:col-span-5 md:pb-2">
          <p className="max-w-[38ch] text-[var(--color-ink)]/75">
            Each card points to the live project when there is one, and falls
            back to the repo when there isn&rsquo;t. Recent work is up top,
            with City Hopper and Music Recognition kept in the mix.
          </p>
        </div>
      </header>

      <hr className="rule-accent mt-[var(--space-lg)]" />

      <div className="mt-[var(--space-xl)] grid gap-[var(--space-md)] md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
