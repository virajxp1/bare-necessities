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
    <div className="li-root li-page">
      <section className="li-shell li-pagehead">
        <div className="li-pagehead__grid">
          <div>
            <div className="li-pagehead__eyebrow">
              <span className="li-pill">Archive 02</span>
              <span className="li-mono-eyebrow">Journal</span>
              <span className="li-mono-eyebrow li-eyebrow-dot">
                {posts.length} posts filed
              </span>
            </div>

            <h1 className="li-pagehead__title">
              Notes from the <em>middle</em> of the work.
            </h1>

            <p className="li-pagehead__lede">
              Short essays on systems in progress: what worked, what broke, and
              which tradeoffs were worth preserving after the fact.
            </p>
          </div>

          <aside className="li-pagehead__aside">
            <p>
              The journal is intentionally sparse. I only publish something here
              when there is a decision, failure, or pattern that will still be
              useful later.
            </p>
            <dl className="li-pagehead__meta">
              <div>
                <dt>Latest filing</dt>
                <dd>{featured?.date ?? "Soon"}</dd>
              </div>
              <div>
                <dt>Default mode</dt>
                <dd>Case study</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {featured ? (
        <section className="li-shell li-page-section">
          <Link href={`/blog/${featured.slug}`} className="li-feature-story">
            <div className="li-feature-story__meta">
              <span className="li-pill li-pill--lime">{featured.category}</span>
              <span className="li-mono-eyebrow">{featured.date}</span>
              <span className="li-mono-eyebrow">{featured.readTime}</span>
            </div>

            <div className="li-feature-story__grid">
              <div>
                <h2 className="li-feature-story__title">{featured.title}</h2>
                <p className="li-feature-story__excerpt">{featured.excerpt}</p>
              </div>

              <div className="li-feature-story__aside">
                <div className="li-work-card__stack">
                  {featured.tags?.map((tag) => (
                    <span key={tag} className="li-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="li-backlink">
                  Continue reading <span aria-hidden>→</span>
                </span>
              </div>
            </div>
          </Link>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <section className="li-shell li-page-section">
          <div className="li-section__head li-section__head--flush">
            <div>
              <span className="li-section__num">§ 02 — Filed entries</span>
              <h2 className="li-section__title">
                Recent <em>writing</em>
              </h2>
            </div>
            <Link href="/work" className="li-link li-mono li-link--caps">
              See the projects behind it →
            </Link>
          </div>

          <div className="li-post-list">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="li-post-row">
                <div className="li-post-row__meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="li-post-row__body">
                  <div className="li-post-row__topline">
                    <span className="li-pill">{post.category}</span>
                    {post.tags?.map((tag) => (
                      <span key={tag} className="li-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="li-post-row__title">{post.title}</h3>
                  <p className="li-post-row__excerpt">{post.excerpt}</p>
                </div>
                <span className="li-post-row__cta">
                  Read entry <span className="li-arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
