import Link from "next/link";
import { ProjectRow } from "@/components/project-row";
import { YearText } from "@/components/year-text";
import { getAllPosts, getAllProjects } from "@/content/lib";

export default function Home() {
  const featuredProjects = getAllProjects().slice(0, 3);
  const recentPosts = getAllPosts().slice(0, 3);
  const [leadPost, ...sidePosts] = recentPosts;
  const buildYear = new Date().getFullYear();

  return (
    <div>
      <section className="mx-auto w-full max-w-[var(--container-wide)] px-6 pb-[var(--space-2xl)] pt-[var(--space-xl)] md:px-10 md:pt-[var(--space-2xl)]">
        <div className="masthead-meta flex items-center justify-between gap-4 pb-[var(--space-md)] text-[var(--color-ink)]">
          <span className="flex items-center gap-3">
            <span style={{ color: "var(--color-blue)" }}>Vol. I</span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ink)]/60" />
            <span>
              Issue <YearText fallbackYear={buildYear} />
            </span>
          </span>
          <span className="hidden text-[var(--color-ink)]/70 md:inline">
            Austin · Texas
          </span>
        </div>
        <hr className="rule-double" />

        <div className="mt-[var(--space-xl)] grid gap-[var(--space-xl)] md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p
              className="eyebrow flex items-center gap-2"
              style={{ color: "var(--color-blue)" }}
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--color-blue)" }}
              />
              Backend engineer — open to new work
            </p>
            <h1
              className="mt-[var(--space-md)] font-[family-name:var(--font-display)] font-extrabold tracking-tight"
              style={{ fontSize: "var(--text-display)" }}
            >
              Hi, I&rsquo;m{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--color-accent)]">
                  Viraj.
                </span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-[0.1em] -z-0 h-[0.22em] bg-[var(--color-accent-strong)]/25"
                />
              </span>
            </h1>
            <p
              className="mt-[var(--space-md)] max-w-[28ch] font-[family-name:var(--font-display)] font-medium tracking-tight text-[var(--color-ink)]"
              style={{ fontSize: "var(--text-lead)", lineHeight: 1.2 }}
            >
              I build clean, fast tools I wish existed.
            </p>
          </div>
          <div className="md:col-span-4 md:pb-3">
            <p className="max-w-[32ch] text-[var(--color-muted-text)]">
              I&rsquo;m a backend engineer. I write here about simplicity,
              small teams, and systems that age well.
            </p>
            <div className="mt-[var(--space-md)] flex flex-col gap-3 sm:flex-row">
              <Link
                href="/work"
                className="group inline-flex h-12 items-center justify-between gap-6 rounded-sm px-5 text-sm font-semibold tracking-wide transition-colors hover:bg-[var(--color-blue-deep)]"
                style={{
                  background: "var(--color-ink)",
                  color: "var(--color-bg)",
                }}
              >
                <span>View work</span>
                <span
                  aria-hidden
                  className="inline-block transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="/blog"
                className="group inline-flex h-12 items-center justify-between gap-6 rounded-sm border-2 border-[var(--color-blue)] px-5 text-sm font-semibold tracking-wide text-[var(--color-blue)] transition-colors hover:bg-[var(--color-blue)] hover:text-[var(--color-bg)]"
              >
                <span>Read the blog</span>
                <span
                  aria-hidden
                  className="inline-block transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-alt)]">
        <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 py-[var(--space-2xl)] md:px-10">
          <div className="flex items-end justify-between gap-6 pb-[var(--space-sm)]">
            <div className="flex items-end gap-4">
              <span className="section-mark tabular">N° 01</span>
              <div>
                <p className="eyebrow">Selected work</p>
                <h2
                  className="mt-1 font-[family-name:var(--font-display)] font-bold tracking-tight"
                  style={{ fontSize: "var(--text-h2)" }}
                >
                  A few recent things.
                </h2>
              </div>
            </div>
            <Link
              href="/work"
              className="group shrink-0 text-sm font-medium text-[var(--color-accent-strong)] transition-colors hover:text-[var(--color-ink)]"
            >
              View all
              <span
                aria-hidden
                className="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
          <hr className="rule-accent" />
          <div className="mt-[var(--space-sm)]">
            {featuredProjects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-[var(--color-bg)]">
        <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 py-[var(--space-2xl)] md:px-10">
          <div className="grid gap-[var(--space-lg)] md:grid-cols-12 md:items-center">
            <div className="md:col-span-2">
              <p className="masthead-meta text-[var(--color-accent)]">
                Credo
              </p>
            </div>
            <blockquote className="md:col-span-8">
              <p
                className="font-[family-name:var(--font-display)] font-semibold tracking-tight text-[var(--color-bg)]"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 3rem)",
                  lineHeight: 1.15,
                }}
              >
                Code as if the person maintaining it is a{" "}
                <span className="text-[var(--color-accent)]">tired</span>{" "}
                version of you.
              </p>
            </blockquote>
            <p className="masthead-meta text-right text-[var(--color-bg)]/70 md:col-span-2">
              ¶ 001
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[var(--container-wide)] px-6 py-[var(--space-2xl)] md:px-10">
        <div className="flex items-end justify-between gap-6 pb-[var(--space-sm)]">
          <div className="flex items-end gap-4">
            <span className="section-mark tabular">N° 02</span>
            <div>
              <p className="eyebrow-cool">Journal</p>
              <h2
                className="mt-1 font-[family-name:var(--font-display)] font-bold tracking-tight"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Recent dispatches.
              </h2>
            </div>
          </div>
          <Link
            href="/blog"
            className="group shrink-0 text-sm font-medium transition-colors hover:text-[var(--color-ink)]"
            style={{ color: "var(--color-blue)" }}
          >
            All posts
            <span
              aria-hidden
              className="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
        <hr className="rule-accent" />
        <div className="mt-[var(--space-xl)] grid gap-[var(--space-xl)] md:grid-cols-12 md:gap-[var(--space-lg)]">
          {leadPost && (
            <Link
              href={`/blog/${leadPost.slug}`}
              className="group md:col-span-7 block"
            >
              <p className="eyebrow-cool">{leadPost.category}</p>
              <h3
                className="mt-[var(--space-sm)] font-[family-name:var(--font-display)] font-extrabold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-blue)]"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {leadPost.title}
              </h3>
              <p className="mt-[var(--space-sm)] max-w-[58ch] text-[var(--color-ink)]/80">
                {leadPost.excerpt}
              </p>
              <p className="masthead-meta mt-[var(--space-md)] flex items-center gap-3 text-[var(--color-ink)]/55">
                <span className="tabular">{leadPost.date}</span>
                <span aria-hidden>·</span>
                <span>{leadPost.readTime}</span>
                <span
                  aria-hidden
                  className="h-px flex-1 border-t border-dotted border-[var(--color-ink)]/30"
                />
                <span
                  aria-hidden
                  className="text-[var(--color-accent-strong)] transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </p>
            </Link>
          )}
          {sidePosts.length > 0 && (
            <ul className="md:col-span-5 flex flex-col gap-[var(--space-md)] md:border-l md:border-[var(--color-ink)]/15 md:pl-[var(--space-lg)]">
              {sidePosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block border-t border-[var(--color-ink)]/15 pt-[var(--space-md)]"
                  >
                    <p className="masthead-meta flex items-center gap-2 text-[var(--color-ink)]/55">
                      <span
                        className="tabular"
                        style={{ color: "var(--color-blue)" }}
                      >
                        {post.date}
                      </span>
                      <span aria-hidden>·</span>
                      <span>{post.category}</span>
                    </p>
                    <h4 className="mt-2 font-[family-name:var(--font-display)] text-[var(--text-h3)] font-bold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-blue)]">
                      {post.title}
                    </h4>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
