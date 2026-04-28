import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/content/lib";

export const metadata: Metadata = {
  title: "Blog — bare-necessities.studio",
  description: "Notes on what I'm building and learning.",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="mx-auto w-full max-w-[var(--container-default)] px-6 py-[var(--space-2xl)] md:px-10">
      <div className="masthead-meta flex items-center justify-between gap-4 pb-[var(--space-md)] text-[var(--color-ink)]">
        <span className="flex items-center gap-3">
          <span style={{ color: "var(--color-blue)" }}>N° 02</span>
          <span aria-hidden className="h-px w-10 bg-[var(--color-ink)]/60" />
          <span>Journal · Writing</span>
        </span>
        <span className="hidden text-[var(--color-ink)]/70 md:inline">
          {posts.length} posts
        </span>
      </div>
      <hr className="rule-double" />

      <header className="mt-[var(--space-xl)] grid gap-[var(--space-md)] md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="eyebrow">Journal</p>
          <h1
            className="mt-[var(--space-sm)] font-[family-name:var(--font-display)] font-extrabold tracking-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Thinking{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[var(--color-blue)]">
                out loud.
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-[0.08em] -z-0 h-[0.18em] bg-[var(--color-accent)]/18"
              />
            </span>
          </h1>
        </div>
        <p className="md:col-span-4 md:pb-2 max-w-[36ch] text-[var(--color-ink)]/75">
          Short essays on the systems I&rsquo;m in the middle of — what
          worked, what broke, what I&rsquo;d do differently.
        </p>
      </header>

      <hr className="rule-accent mt-[var(--space-lg)]" />

      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mt-[var(--space-xl)] block"
        >
          <div className="relative rounded-sm bg-[var(--color-surface-alt)] px-[var(--space-lg)] py-[var(--space-xl)] md:px-[var(--space-xl)] md:py-[var(--space-2xl)]">
            <span
              aria-hidden
              className="masthead-meta absolute right-[var(--space-lg)] top-[var(--space-lg)] text-[var(--color-ink)]/45 md:right-[var(--space-xl)] md:top-[var(--space-xl)]"
            >
              ¶ 01
            </span>
            <div className="relative grid gap-[var(--space-md)] md:grid-cols-12 md:gap-[var(--space-lg)]">
              <div className="md:col-span-3">
                <p
                  className="masthead-meta"
                  style={{ color: "var(--color-accent-strong)" }}
                >
                  Latest entry
                </p>
                <p className="masthead-meta mt-2 tabular text-[var(--color-ink)]/65">
                  {featured.date}
                </p>
                <p className="masthead-meta mt-1 text-[var(--color-ink)]/65">
                  {featured.readTime}
                </p>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip">{featured.category}</span>
                  {featured.tags?.map((tag) => (
                    <span key={tag} className="chip chip-blue-soft">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2
                  className="mt-[var(--space-md)] font-[family-name:var(--font-display)] font-extrabold tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent-strong)]"
                  style={{ fontSize: "var(--text-h1)" }}
                >
                  {featured.title}
                </h2>
                <p className="mt-[var(--space-md)] max-w-[60ch] text-lg text-[var(--color-ink)]/85">
                  {featured.excerpt}
                </p>
                <p className="masthead-meta mt-[var(--space-md)] inline-flex items-center gap-2 text-[var(--color-accent-strong)]">
                  Continue reading
                  <span
                    aria-hidden
                    className="inline-block transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <>
          <div className="masthead-meta mt-[var(--space-2xl)] flex items-center gap-3 text-[var(--color-ink)]/60">
            <span style={{ color: "var(--color-blue)" }}>Also filed</span>
            <span aria-hidden className="h-px flex-1 bg-[var(--color-ink)]/20" />
            <span className="tabular">{rest.length}</span>
          </div>
          <ol className="mt-[var(--space-md)]">
            {rest.map((post, i) => {
              const palette = i % 3;
              const chipClass =
                palette === 0
                  ? "chip"
                  : palette === 1
                    ? "chip chip-blue"
                    : "chip chip-blue-soft";
              const hoverTextClass =
                palette === 0
                  ? "group-hover:text-[var(--color-accent-strong)]"
                  : "group-hover:text-[var(--color-blue)]";
              return (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid items-center gap-x-6 gap-y-2 border-b border-[var(--color-ink)]/15 py-[var(--space-md)] transition-colors hover:bg-[var(--color-soft-fill)]/40 md:grid-cols-[6rem_1fr_8rem_auto]"
                  >
                    <span className="masthead-meta tabular text-[var(--color-ink)]/55">
                      {post.date}
                    </span>
                    <div>
                      <h3
                        className={`font-[family-name:var(--font-display)] text-[var(--text-h3)] font-bold tracking-tight text-[var(--color-ink)] transition-colors ${hoverTextClass}`}
                      >
                        {post.title}
                      </h3>
                      <p className="mt-1 max-w-[60ch] text-[var(--color-ink)]/70">
                        {post.excerpt}
                      </p>
                    </div>
                    <span className={`${chipClass} hidden md:inline-flex`}>
                      {post.category}
                    </span>
                    <span
                      aria-hidden
                      className={`hidden self-center font-[family-name:var(--font-display)] text-xl text-[var(--color-ink)]/40 transition-all group-hover:translate-x-1 ${hoverTextClass} md:inline`}
                    >
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </>
      )}

      {rest.length === 0 && (
        <section className="mt-[var(--space-2xl)] grid gap-[var(--space-md)] border-t border-[var(--color-ink)]/16 pt-[var(--space-lg)] md:grid-cols-12 md:items-start">
          <div className="md:col-span-3">
            <p className="eyebrow-cool">Filed next</p>
          </div>
          <div className="md:col-span-6">
            <p className="max-w-[46ch] text-[var(--color-ink)]/72">
              The journal is intentionally sparse. I only add to it when
              there&rsquo;s a specific decision, failure, or tradeoff worth
              preserving for later.
            </p>
          </div>
          <div className="md:col-span-3 md:justify-self-end">
            <Link
              href="/work"
              className="masthead-meta text-[var(--color-blue)] transition-colors hover:text-[var(--color-accent-strong)]"
            >
              See the projects behind it →
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
