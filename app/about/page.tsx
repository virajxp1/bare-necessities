import type { Metadata } from "next";
import { Timeline } from "@/components/timeline";
import { getTimeline } from "@/content/lib";

export const metadata: Metadata = {
  title: "About — bare-necessities.studio",
  description: "A short bio and a timeline of chapters so far.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  const chapters = getTimeline();

  return (
    <div className="li-root li-page">
      <section className="li-shell li-pagehead">
        <div className="li-pagehead__grid">
          <div>
            <div className="li-pagehead__eyebrow">
              <span className="li-pill">Archive 03</span>
              <span className="li-mono-eyebrow">About</span>
              <span className="li-mono-eyebrow li-eyebrow-dot">Texas</span>
            </div>

            <h1 className="li-pagehead__title">
              A little context <em>around</em> the work.
            </h1>
          </div>

          <aside className="li-pagehead__aside">
            <p>
              Career-wise I’ve moved from distributed systems into AI platform
              work. Outside of code, beaches, mountains, music, coffee, and the
              people around the thing matter more than the thing itself.
            </p>
            <dl className="li-pagehead__meta">
              <div>
                <dt>Current lane</dt>
                <dd>Gen AI platform</dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>Texas / remote</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="li-shell li-page-section">
        <div className="li-about-grid">
          <div className="li-about-copy">
            <p className="li-about-copy__lead">
              When I&rsquo;m not at a keyboard, I&rsquo;m chasing beaches and
              mountains, hunting for fresh snow, or finding a coffee shop I&rsquo;ll
              definitely become a regular at.
            </p>

            <p>
              Family dinners, long drives with no real plan, dance and music
              that remind me where I come from. The people around the thing
              usually matter more than the thing itself.
            </p>
          </div>

          <aside className="li-sidecard">
            <div className="li-sidecard__section">
              <span className="li-sidecard__label">Find me on</span>
              <div className="li-sidecard__actions">
                <a
                  href="https://github.com/virajxp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="li-btn li-btn--primary"
                >
                  GitHub <span className="li-arrow">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vhparikh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="li-btn"
                >
                  LinkedIn <span className="li-arrow">↗</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="li-quote li-about-quote">
        <div className="li-quote__eyebrow">
          <span className="li-eyebrow-dot" style={{ color: "var(--lime)" }}>
            Personal rule
          </span>
          <span>—</span>
          <span>§ 01</span>
        </div>
        <p className="li-quote__text">
          The people around the thing usually matter more than the{" "}
          <em>thing itself.</em>
        </p>
      </section>

      <section className="li-shell li-page-section">
        <div className="li-section__head li-section__head--flush">
          <div>
            <span className="li-section__num">§ 02 — Chapters</span>
            <h2 className="li-section__title">
              Where I&rsquo;ve been, where I <em>am</em>
            </h2>
          </div>
        </div>

        <Timeline chapters={chapters} />
      </section>
    </div>
  );
}
