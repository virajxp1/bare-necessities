import Link from "next/link";
import { ProjectRow } from "@/components/project-row";
import { YearText } from "@/components/year-text";
import { getAllPosts, getAllProjects } from "@/content/lib";

export default function Home() {
  const featuredProjects = getAllProjects().slice(0, 3);
  const recentPosts = getAllPosts().slice(0, 3);
  const [leadProject, ...supportProjects] = featuredProjects;
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

        <div className="mt-[var(--space-xl)] mx-auto flex max-w-[56rem] flex-col items-center text-center">
          <div>
            <p
              className="eyebrow inline-flex items-center gap-2"
              style={{ color: "var(--color-blue)" }}
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--color-blue)" }}
              />
              Work and writing
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
          </div>
          <div className="mt-[var(--space-lg)] flex flex-col gap-3 sm:flex-row">
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

          {leadProject ? (
            <Link
              href={`/work/${leadProject.slug}`}
              className="group mt-[var(--space-xl)] block border-b border-[var(--color-ink)]/16 pb-[var(--space-lg)]"
            >
              <div className="grid gap-[var(--space-lg)] md:grid-cols-[minmax(0,1.5fr)_minmax(16rem,1fr)]">
                <div>
                  <p className="masthead-meta" style={{ color: "var(--color-blue)" }}>
                    Featured dossier
                  </p>
                  <h3
                    className="mt-[var(--space-sm)] max-w-[14ch] font-[family-name:var(--font-display)] font-extrabold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]"
                    style={{ fontSize: "var(--text-h2)" }}
                  >
                    {leadProject.title}
                  </h3>
                  <p className="mt-[var(--space-sm)] max-w-[48ch] text-[var(--color-ink)]/82">
                    {leadProject.summary}
                  </p>
                </div>
                <div className="grid content-start gap-[var(--space-sm)] border-t border-[var(--color-ink)]/15 pt-[var(--space-md)] md:border-l md:border-t-0 md:pl-[var(--space-lg)] md:pt-0">
                  <p className="masthead-meta text-[var(--color-ink)]/58">
                    {leadProject.tags.join(" · ")}
                  </p>
                  <p className="masthead-meta text-[var(--color-accent-strong)]">
                    Open full project note →
                  </p>
                </div>
              </div>
            </Link>
          ) : null}

          {supportProjects.length > 0 ? (
            <div className="mt-[var(--space-sm)]">
              {supportProjects.map((project) => (
                <ProjectRow key={project.slug} project={project} />
              ))}
            </div>
          ) : null}
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
          {sidePosts.length > 0 ? (
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
          ) : (
            <div className="grid content-start gap-[var(--space-sm)] border-t border-[var(--color-ink)]/15 pt-[var(--space-md)] md:col-span-5 md:border-l md:border-t-0 md:pl-[var(--space-lg)] md:pt-0">
              <p className="eyebrow-cool">Filed next</p>
              <p className="max-w-[30ch] text-[var(--color-ink)]/72">
                The journal stays intentionally small. Entries only land here
                when there&rsquo;s a concrete lesson, tradeoff, or system worth
                keeping.
              </p>
              <Link
                href="/about"
                className="masthead-meta text-[var(--color-blue)] transition-colors hover:text-[var(--color-accent-strong)]"
              >
                More about how I work →
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
