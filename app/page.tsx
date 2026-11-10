import Link from "next/link";
import { getAllPosts, getAllProjects } from "@/content/lib";
import { getProjectStatus, splitTitle } from "@/components/living-index/page-utils";
import { NowPanel } from "@/components/living-index/hero-effects";

function buildIndexedProjects() {
  return getAllProjects().slice(0, 3).map((p, i) => ({
    ...p,
    index: String(i + 1).padStart(2, "0"),
    status: getProjectStatus(p),
  }));
}

export default function Home() {
  const projects = buildIndexedProjects();
  const posts = getAllPosts().slice(0, 4);

  return (
    <div className="li-root">
      {/* ── HERO ── */}
      <section className="li-hero">
        <div>
          <div className="li-hero__eyebrow">
            <span className="li-pill li-pill--lime">Portfolio · 2026</span>
            <span className="li-stamp">Open to chat</span>
          </div>

          <h1 className="li-hero__headline">
            I build <em>small,</em>
            <br />
            <span className="scribble">
              useful
              <svg viewBox="0 0 300 30" preserveAspectRatio="none" aria-hidden>
                <path d="M2,18 C 60,4 140,28 230,10 S 296,18 298,14" />
              </svg>
            </span>{" "}
            systems<span className="ampersand">&amp;</span>
            <br />
            then write
            <br />
            them <em>down.</em>
            <span className="cursor" />
          </h1>

          <p className="li-hero__sub">
            Engineer in Texas. Full-stack: mostly <em>Java</em>, plus Python
            and small LLM side projects.
          </p>

          <div className="li-hero__cta">
            <Link className="li-btn li-btn--primary" href="/work">
              View work <span className="li-arrow">↗</span>
            </Link>
            <Link className="li-btn" href="/blog">
              Read writing
            </Link>
            <a
              className="li-btn"
              href="https://github.com/virajxp1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <em style={{ marginLeft: 4 }}>↗</em>
            </a>
          </div>
        </div>

        <aside className="li-hero__aside">
          <figure className="li-about-photo li-hero__portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/viraj-portrait.jpg"
              alt="Viraj Parikh in a suit, leaning against a classic car"
              width={800}
              height={800}
              loading="eager"
            />
            <figcaption>Usually behind the camera.</figcaption>
          </figure>
          <NowPanel />
        </aside>
      </section>

      {/* ── SELECTED WORK ── */}
      <section className="li-section">
        <div className="li-section__head">
          <div>
            <span className="li-section__num">§ 01 · Selected work</span>
            <h2 className="li-section__title">
              A few recent <em>systems</em>
            </h2>
          </div>
          <Link
            href="/work"
            className="li-link li-mono"
            style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            See all →
          </Link>
        </div>

        <div className="li-grid-work">
          {projects.map((project, i) => {
            const [head, tail] = splitTitle(project.title);
            const isFeature = i === 0;
            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`li-work-card${isFeature ? " li-work-card--feature" : ""}`}
              >
                <div className="li-work-card__top">
                  <span className="li-work-card__num">
                    {project.index} / {project.year}
                    {isFeature ? " · featured" : ""}
                  </span>
                  <span className={`li-status ${project.status.cls}`}>
                    {project.status.label}
                  </span>
                </div>
                <h3 className="li-work-card__title">
                  {head}
                  <em>{tail}</em>
                </h3>
                <p className="li-work-card__desc">{project.summary}</p>

                <div className="li-work-card__stack">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span key={tag} className="li-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="li-work-card__cta">
                  <span>{isFeature ? "Read project" : "Read more"}</span>
                  <span className="li-arrow">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="li-quote">
        <div className="li-quote__eyebrow">
          <span className="li-eyebrow-dot" style={{ color: "var(--lime)" }}>
            The rule I keep
          </span>
          <span>·</span>
          <span>§ 02</span>
        </div>
        <p className="li-quote__text">
          Code as if the person <span className="hl">maintaining it</span> is a
          tired version of you, because in <em>six weeks,</em> it will be.
        </p>
      </section>

      {/* ── JOURNAL ── */}
      <section className="li-section" style={{ paddingTop: 80 }}>
        <div className="li-section__head">
          <div>
            <span className="li-section__num">§ 03 · Recent writing</span>
            <h2 className="li-section__title">
              From the <em>journal</em>
            </h2>
          </div>
          <Link
            href="/blog"
            className="li-link li-mono"
            style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            All posts →
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="li-journal">
            {posts.map((post) => {
              const [head, tail] = splitTitle(post.title);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="li-journal-item"
                >
                  <span className="li-journal-item__date">{post.date}</span>
                  <h3 className="li-journal-item__title">
                    {head}
                    <em>{tail}</em>
                  </h3>
                  <span className="li-journal-item__meta">
                    <span>{post.readTime}</span>
                    <span className="li-arrow">→</span>
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <p style={{ color: "var(--ink-3)", fontFamily: "var(--mono)", fontSize: 13 }}>
            The journal is quiet right now.
          </p>
        )}
      </section>

      {/* ── FOOT ── */}
      <footer className="li-foot">
        <span>© 2026 · Viraj Parikh</span>
        <span className="li-foot__links">
          <a href="https://github.com/virajxp1" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/vhparikh/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <Link href="/about">Colophon →</Link>
        </span>
      </footer>
    </div>
  );
}
