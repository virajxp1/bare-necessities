import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { ProjectRow } from "@/components/project-row";
import { ArticlePreview } from "@/components/article-preview";
import { projects } from "@/content/projects";
import { posts } from "@/content/posts";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const recentPosts = posts.slice(0, 3);

  return (
    <div>
      <section className="mx-auto w-full max-w-[var(--container-wide)] px-6 pb-[var(--space-2xl)] pt-[var(--space-xl)] md:px-10 md:pt-[var(--space-2xl)]">
        <div className="flex flex-col gap-6 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--color-soft-fill)] px-3 py-1 text-xs text-[var(--color-ink)]">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
            />
            Available for a new project
          </span>
          <h1
            className="font-[family-name:var(--font-display)] font-extrabold tracking-tight"
            style={{ fontSize: "var(--text-display)" }}
          >
            Software, stripped to{" "}
            <span className="text-[var(--color-accent)]">what matters</span>.
          </h1>
          <p className="max-w-2xl text-lg text-[var(--color-muted-text)]">
            I build useful systems with a bias toward clarity, speed, and
            restraint. Selected work on tools, infrastructure, and quiet
            products that solve real problems.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/work"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--color-ink)] px-5 text-sm font-medium text-[var(--color-bg)] transition-colors hover:bg-[var(--color-cta-hover)]"
            >
              View work
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--color-ink)] px-5 text-sm font-medium transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[var(--container-wide)] px-6 py-[var(--space-2xl)] md:px-10">
        <SectionHeader
          eyebrow="Selected work"
          title="Recent projects"
          action={{ href: "/work", label: "View work" }}
        >
          A short selection of tools, systems, and software that solve real
          problems.
        </SectionHeader>
        <div className="mt-[var(--space-lg)]">
          {featuredProjects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-surface-alt)]/60">
        <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 py-[var(--space-2xl)] md:px-10">
          <SectionHeader
            eyebrow="Latest writing"
            title="Notes on building"
            action={{ href: "/blog", label: "All posts" }}
          >
            Writing on building, simplification, and engineering judgment.
          </SectionHeader>
          <div className="mt-[var(--space-lg)] grid gap-0 md:grid-cols-3 md:gap-8">
            {recentPosts.map((post) => (
              <ArticlePreview key={post.slug} article={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[var(--container-default)] px-6 py-[var(--space-2xl)] md:px-10">
        <SectionHeader eyebrow="About" title="How I work">
          I care about judgment as much as implementation. Writing is part of
          the work, not separate from it.
        </SectionHeader>
        <div className="mt-[var(--space-lg)] space-y-5 text-[var(--color-muted-text)] md:max-w-2xl">
          <p>
            I work at the overlap of product thinking and systems engineering.
            The most interesting problems tend to sit there — small decisions
            that compound over years, for better or worse.
          </p>
          <p>
            Most of my work reduces complexity, sharpens defaults, and removes
            the features that are quietly taxing every future decision.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-strong)]"
            >
              More about me
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
