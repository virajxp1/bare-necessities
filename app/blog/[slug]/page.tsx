import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/content/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found — Oslo",
    };
  }

  return {
    title: `${post.title} — Writing — Oslo`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-[var(--container-content)] px-6 py-[var(--space-2xl)] md:px-10">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-strong)]"
      >
        <span aria-hidden>←</span>
        Back to writing
      </Link>

      <header className="mt-[var(--space-lg)] space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
          <span>{post.category}</span>
          <span aria-hidden className="text-[var(--color-muted-text)]">
            ·
          </span>
          <span className="normal-case tracking-normal text-[var(--color-muted-text)]">
            {post.readTime}
          </span>
        </div>
        <h1
          className="font-[family-name:var(--font-display)] font-extrabold tracking-tight"
          style={{ fontSize: "var(--text-h1)" }}
        >
          {post.title}
        </h1>
        <p className="text-sm text-[var(--color-muted-text)]">{post.date}</p>
      </header>

      <section className="mt-[var(--space-xl)] space-y-5 text-[var(--color-ink)]">
        <p className="text-lg text-[var(--color-muted-text)]">{post.excerpt}</p>
        <p>
          This entry is rendered from the local post dataset and provides a
          canonical destination for article cards across the site.
        </p>
        <p>
          A fuller long-form body can be added later without changing routing
          behavior.
        </p>
      </section>
    </article>
  );
}
