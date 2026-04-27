import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/content/lib";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Post not found — bare-necessities.studio" };
  }

  return {
    title: `${post.title} — bare-necessities.studio`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}/`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-[var(--container-content)] px-6 py-[var(--space-2xl)] md:px-10">
      <div className="masthead-meta flex items-center justify-between gap-4 pb-[var(--space-md)] text-[var(--color-ink)]">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-[var(--color-accent-strong)] transition-colors hover:text-[var(--color-ink)]"
        >
          <span
            aria-hidden
            className="inline-block transition-transform group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Back to journal
        </Link>
        <span className="text-[var(--color-ink)]/70">
          <span className="tabular">{post.date}</span>
        </span>
      </div>
      <hr className="rule-double" />

      <header className="mt-[var(--space-xl)]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="chip chip-blue">{post.category}</span>
          <span className="masthead-meta text-[var(--color-ink)]/60">
            {post.readTime}
          </span>
        </div>
        <h1
          className="mt-[var(--space-md)] font-[family-name:var(--font-display)] font-extrabold tracking-tight"
          style={{ fontSize: "var(--text-h1)" }}
        >
          {post.title}
        </h1>
        {post.excerpt && (
          <p
            className="mt-[var(--space-md)] max-w-[42ch] font-[family-name:var(--font-display)] font-medium tracking-tight text-[var(--color-ink)]/85"
            style={{ fontSize: "var(--text-lead)", lineHeight: 1.22 }}
          >
            {post.excerpt}
          </p>
        )}
        <p className="masthead-meta mt-[var(--space-lg)] flex flex-wrap items-center gap-x-3 gap-y-1 text-[var(--color-ink)]/60">
          <span style={{ color: "var(--color-blue)" }}>By Viraj Parikh</span>
          <span aria-hidden>·</span>
          <span className="tabular">{post.date}</span>
          <span aria-hidden>·</span>
          <span>Austin, Texas</span>
        </p>
      </header>

      <hr className="rule-accent mt-[var(--space-lg)]" />

      <div
        className="prose-content prose-lead mt-[var(--space-lg)] space-y-5 text-[var(--color-ink)]"
        dangerouslySetInnerHTML={{ __html: post.html }}
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
          End of article
        </p>
        <span aria-hidden className="h-px flex-1 bg-[var(--color-ink)]/15" />
        <Link
          href="/blog"
          className="masthead-meta text-[var(--color-accent-strong)] transition-colors hover:text-[var(--color-ink)]"
        >
          More from the journal →
        </Link>
      </footer>
    </article>
  );
}
