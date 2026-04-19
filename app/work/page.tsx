import type { Metadata } from "next";
import { ProjectRow } from "@/components/project-row";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work — Oslo",
  description:
    "Curated projects on tools, systems, and software that solve real problems.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 py-[var(--space-2xl)] md:px-10">
      <header className="flex flex-col gap-4 md:max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
          Work
        </p>
        <h1
          className="font-[family-name:var(--font-display)] font-extrabold tracking-tight"
          style={{ fontSize: "var(--text-h1)" }}
        >
          A curated archive, not a gallery.
        </h1>
        <p className="text-[var(--color-muted-text)]">
          The strongest work first. Short, outcome-oriented descriptions. If a
          project doesn&rsquo;t belong on this page, it isn&rsquo;t on this
          page.
        </p>
      </header>

      <div className="mt-[var(--space-xl)]">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
