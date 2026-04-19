import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

type WorkProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found — Oslo",
    };
  }

  return {
    title: `${project.title} — Work — Oslo`,
    description: project.summary,
  };
}

export default async function WorkProjectPage({ params }: WorkProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-[var(--container-content)] px-6 py-[var(--space-2xl)] md:px-10">
      <Link
        href="/work"
        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-strong)]"
      >
        <span aria-hidden>←</span>
        Back to work
      </Link>

      <header className="mt-[var(--space-lg)] space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
          Project
        </p>
        <h1
          className="font-[family-name:var(--font-display)] font-extrabold tracking-tight"
          style={{ fontSize: "var(--text-h1)" }}
        >
          {project.title}
        </h1>
        <p className="text-lg text-[var(--color-muted-text)]">{project.summary}</p>
      </header>

      <dl className="mt-[var(--space-xl)] grid gap-6 border-y border-[var(--color-border)] py-6 md:grid-cols-2">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted-text)]">
            Year
          </dt>
          <dd className="mt-2 text-[var(--color-ink)]">{project.year}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted-text)]">
            Stack
          </dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--color-soft-fill)] px-2.5 py-0.5 text-xs text-[var(--color-muted-text)]"
              >
                {tag}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <section className="mt-[var(--space-xl)] space-y-5 text-[var(--color-muted-text)]">
        <p>
          This project page is part of the static portfolio archive and is
          generated from local content data.
        </p>
        <p>
          The card links on the home and work index now resolve to dedicated
          routes instead of falling through to a 404.
        </p>
      </section>
    </article>
  );
}
