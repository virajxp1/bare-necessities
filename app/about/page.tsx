import type { Metadata } from "next";
import { Timeline } from "@/components/timeline";
import { getTimeline } from "@/content/lib";

export const metadata: Metadata = {
  title: "About — bare-necessities.studio",
  description: "A short bio and a timeline of chapters so far.",
};

export default function AboutPage() {
  const chapters = getTimeline();

  return (
    <div>
      <section className="mx-auto w-full max-w-[var(--container-default)] px-6 pb-[var(--space-2xl)] pt-[var(--space-xl)] md:px-10 md:pt-[var(--space-2xl)]">
        <div className="masthead-meta flex items-center justify-between gap-4 pb-[var(--space-md)] text-[var(--color-ink)]">
          <span className="flex items-center gap-3">
            <span style={{ color: "var(--color-blue)" }}>N° 03</span>
            <span aria-hidden className="h-px w-10 bg-[var(--color-ink)]/60" />
            <span>About</span>
          </span>
          <span className="hidden text-[var(--color-ink)]/70 md:inline">
            Austin · Texas
          </span>
        </div>
        <hr className="rule-double" />

        <header className="mt-[var(--space-xl)]">
          <h1
            className="font-[family-name:var(--font-display)] font-extrabold tracking-tight"
            style={{ fontSize: "var(--text-h1)" }}
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
        </header>

        <hr className="rule-accent mt-[var(--space-lg)]" />

        <section className="mt-[var(--space-xl)] grid gap-[var(--space-lg)] md:grid-cols-12">
          <div className="md:col-span-8 space-y-[var(--space-md)]">
            <p className="max-w-[60ch] text-lg text-[var(--color-ink)]">
              <span
                className="float-left mr-3 font-[family-name:var(--font-display)] font-extrabold leading-[0.85]"
                style={{
                  color: "var(--color-accent-strong)",
                  fontSize: "clamp(3.5rem, 6vw, 5rem)",
                  paddingTop: "0.1em",
                }}
              >
                W
              </span>
              hen I&rsquo;m not at a keyboard, I&rsquo;m chasing beaches
              and mountains, hunting for fresh snow, or finding a coffee
              shop I&rsquo;ll definitely become a regular at.
            </p>

            <p className="max-w-[60ch] text-[var(--color-ink)]/90">
              Family dinners, long drives with no real plan, dance and
              music that remind me where I come from. The people around
              the thing usually matter more than the thing itself.
            </p>
          </div>

          <aside className="md:col-span-4 md:pt-2">
            <p className="masthead-meta" style={{ color: "var(--color-blue)" }}>
              Find me on
            </p>
            <ul className="mt-[var(--space-sm)] flex flex-wrap gap-2">
              <li>
                <a
                  href="https://github.com/virajxp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip chip-blue transition-opacity hover:opacity-90"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vhparikh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip transition-opacity hover:opacity-90"
                  style={{ background: "var(--color-blue-deep)" }}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </aside>
        </section>
      </section>

      <section className="bg-[var(--color-ink)] text-[var(--color-bg)]">
        <div className="mx-auto w-full max-w-[var(--container-default)] px-6 py-[var(--space-2xl)] md:px-10">
          <div className="flex items-end justify-between gap-6 pb-[var(--space-sm)]">
            <div className="flex items-end gap-4">
              <span
                className="section-mark tabular"
                style={{ color: "var(--color-accent)" }}
              >
                N° 04
              </span>
              <h2
                className="font-[family-name:var(--font-display)] font-bold tracking-tight"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Where I&rsquo;ve been, where I am.
              </h2>
            </div>
          </div>
          <hr
            className="rule-accent"
            style={{ background: "var(--color-accent)" }}
          />
          <div className="mt-[var(--space-xl)]">
            <Timeline chapters={chapters} inverted />
          </div>
        </div>
      </section>
    </div>
  );
}
