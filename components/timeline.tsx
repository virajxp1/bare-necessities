import type { TimelineChapter } from "@/content/lib";

export function Timeline({
  chapters,
}: {
  chapters: TimelineChapter[];
  inverted?: boolean;
}) {
  return (
    <ol className="li-timeline">
      {chapters.map((chapter) => (
        <li
          key={chapter.slug}
          className={`li-timeline__item li-timeline__item--${chapter.tone}`}
        >
          <div className="li-timeline__label">{chapter.label}</div>

          <div className="li-timeline__rail" aria-hidden>
            <span className="li-timeline__dot" />
          </div>

          <article className="li-timeline__content">
            <p className="li-timeline__eyebrow">{chapter.eyebrow}</p>
            <h3 className="li-timeline__title">{chapter.title}</h3>
            <div
              className="li-timeline__body"
              dangerouslySetInnerHTML={{ __html: chapter.html }}
            />
          </article>
        </li>
      ))}
    </ol>
  );
}
