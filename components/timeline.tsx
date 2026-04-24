import type { TimelineChapter } from "@/content/lib";

export function Timeline({
  chapters,
  inverted = false,
}: {
  chapters: TimelineChapter[];
  inverted?: boolean;
}) {
  const textColor = inverted ? "var(--color-bg)" : "var(--color-ink)";
  const mutedColor = inverted
    ? "rgb(253 240 213 / 0.7)"
    : "var(--color-ink)";
  const ringColor = inverted ? "var(--color-ink)" : "var(--color-bg)";
  const ruleColor = inverted
    ? "rgb(253 240 213 / 0.25)"
    : "var(--color-rule)";

  return (
    <ol className="flex flex-col gap-[var(--space-xl)]">
      {chapters.map((chapter) => (
        <li
          key={chapter.slug}
          className="grid gap-x-6 gap-y-3 md:grid-cols-[7rem_1px_1fr] md:gap-x-8"
        >
          <div className="flex items-center gap-3 md:block md:justify-self-end md:text-right">
            <span className="relative flex h-3.5 w-3.5 shrink-0 items-center justify-center md:hidden">
              <span
                aria-hidden
                className="h-3.5 w-3.5 rounded-full"
                style={{
                  background: "var(--color-accent)",
                  boxShadow: `0 0 0 4px ${ringColor}`,
                }}
              />
            </span>
            <span
              className="font-[family-name:var(--font-display)] text-2xl font-bold tabular md:text-3xl"
              style={{ color: textColor }}
            >
              {chapter.label}
            </span>
          </div>

          <div aria-hidden className="relative hidden md:block">
            <span
              className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2"
              style={{ background: ruleColor }}
            />
            <span
              className="absolute left-1/2 top-[0.55rem] h-3.5 w-3.5 -translate-x-1/2 rounded-full"
              style={{
                background: "var(--color-accent)",
                boxShadow: `0 0 0 4px ${ringColor}`,
              }}
            />
          </div>

          <article>
            <p
              className="eyebrow"
              style={inverted ? { color: "var(--color-accent)" } : undefined}
            >
              {chapter.eyebrow}
            </p>
            <h3
              className="mt-1 font-[family-name:var(--font-display)] text-[var(--text-h3)] font-bold tracking-tight"
              style={{ color: textColor }}
            >
              {chapter.title}
            </h3>
            <div
              className="prose-content mt-3 max-w-[62ch]"
              style={{ color: mutedColor }}
              dangerouslySetInnerHTML={{ __html: chapter.html }}
            />
          </article>
        </li>
      ))}
    </ol>
  );
}
