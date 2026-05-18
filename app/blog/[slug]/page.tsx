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
    <div className="li-root li-page">
      <section className="li-shell li-detail">
        <div className="li-detail__backbar">
          <Link href="/blog" className="li-backlink">
            <span aria-hidden>←</span>
            Journal
          </Link>
          <span className="li-mono-eyebrow">{post.date}</span>
        </div>

        <div className="li-detail__hero">
          <div>
            <div className="li-pagehead__eyebrow">
              <span className="li-pill li-pill--lime">{post.category}</span>
              <span className="li-mono-eyebrow">{post.readTime}</span>
              {post.tags?.map((tag) => (
                <span key={tag} className="li-tag">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="li-detail__title li-detail__title--wide">{post.title}</h1>

            {post.excerpt ? (
              <p className="li-detail__summary li-detail__summary--article">
                {post.excerpt}
              </p>
            ) : null}
          </div>

          <aside className="li-sidecard">
            <div className="li-sidecard__section">
              <span className="li-sidecard__label">Filed</span>
              <strong>{post.date}</strong>
            </div>
            <div className="li-sidecard__section">
              <span className="li-sidecard__label">Format</span>
              <p>{post.category}</p>
            </div>
            <div className="li-sidecard__section">
              <span className="li-sidecard__label">Byline</span>
              <p>Viraj Parikh · Texas</p>
            </div>
          </aside>
        </div>

        <div className="li-detail__body">
          <div
            className="li-prose li-prose--article"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>

        <footer className="li-detail__footer">
          <span className="li-mono-eyebrow">End of article</span>
          <Link href="/blog" className="li-backlink">
            More from the journal <span aria-hidden>→</span>
          </Link>
        </footer>
      </section>
    </div>
  );
}
