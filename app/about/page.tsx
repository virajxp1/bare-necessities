import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Oslo",
  description:
    "Who I am, how I work, and the kinds of problems I care about.",
};

const principles = [
  {
    heading: "Simplicity is a competitive advantage.",
    body: "Most teams compound complexity faster than capability. I spend a lot of time resisting that drift — in code, in product, in meetings.",
  },
  {
    heading: "Useful beats impressive.",
    body: "I'd rather ship something quietly excellent than pitch something that sounds remarkable and doesn't survive contact with users.",
  },
  {
    heading: "Judgment matters as much as implementation.",
    body: "Process is a reasonable default for teams that lack shared judgment. It's an expensive substitute once you have one.",
  },
  {
    heading: "Writing is part of the work.",
    body: "If the thinking isn't clear on paper, it usually isn't clear in the code either.",
  },
];

const focus = [
  "Small, opinionated product tools",
  "Developer-facing infrastructure",
  "Editorial and content-heavy software",
  "Internal tools that quietly reduce team load",
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[var(--container-content)] px-6 py-[var(--space-2xl)] md:px-10">
      <header className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
          About
        </p>
        <h1
          className="font-[family-name:var(--font-display)] font-extrabold tracking-tight"
          style={{ fontSize: "var(--text-h1)" }}
        >
          Specific, credible, and edited.
        </h1>
      </header>

      <section className="mt-[var(--space-xl)] space-y-5 text-lg text-[var(--color-ink)]">
        <p>
          I&rsquo;m a product engineer working at the overlap of design, tooling,
          and infrastructure. I like problems that reward restraint — the ones
          where the right answer is usually less, not more.
        </p>
        <p>
          I&rsquo;ve spent the last decade building tools for small teams and
          the occasional larger one. Most of my work is in TypeScript, Go, and
          Rust, with a growing interest in local-first architectures.
        </p>
      </section>

      <section className="mt-[var(--space-2xl)]">
        <h2 className="font-[family-name:var(--font-display)] text-[var(--text-h2)] font-bold tracking-tight">
          How I work
        </h2>
        <dl className="mt-[var(--space-lg)] space-y-8">
          {principles.map((principle) => (
            <div
              key={principle.heading}
              className="border-l-2 border-[var(--color-accent)] pl-5"
            >
              <dt className="font-[family-name:var(--font-display)] text-xl font-semibold">
                {principle.heading}
              </dt>
              <dd className="mt-2 text-[var(--color-muted-text)]">
                {principle.body}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-[var(--space-2xl)]">
        <h2 className="font-[family-name:var(--font-display)] text-[var(--text-h2)] font-bold tracking-tight">
          Areas of focus
        </h2>
        <ul className="mt-[var(--space-lg)] space-y-2 text-[var(--color-ink)]">
          {focus.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="text-[var(--color-accent)]">
                ·
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-[var(--space-2xl)]">
        <h2 className="font-[family-name:var(--font-display)] text-[var(--text-h2)] font-bold tracking-tight">
          Contact
        </h2>
        <p className="mt-[var(--space-md)] text-[var(--color-muted-text)]">
          The best way to reach me is email. Short messages welcome.
        </p>
        <ul className="mt-[var(--space-md)] space-y-1 text-[var(--color-ink)]">
          <li>
            <a
              href="mailto:hello@example.com"
              className="underline underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
            >
              hello@example.com
            </a>
          </li>
          <li>
            <Link
              href="/work"
              className="underline underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
            >
              See current work
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
