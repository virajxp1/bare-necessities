import Link from "next/link";
import type { ProjectMeta } from "@/content/lib";
import { getProjectStatus, splitTitle } from "@/components/living-index/page-utils";

export function ProjectRow({ project }: { project: ProjectMeta }) {
  const indexLabel = project.order.toString().padStart(2, "0");
  const [head, tail] = splitTitle(project.title);
  const status = getProjectStatus(project);

  return (
    <Link href={`/work/${project.slug}`} className="li-archive-row">
      <div className="li-archive-row__index">
        <span>{indexLabel}</span>
        <small>{project.year}</small>
      </div>

      <div className="li-archive-row__body">
        <div className="li-archive-row__meta">
          <span className={`li-status ${status.cls}`}>{status.label}</span>
          <span>{project.tags.join(" · ")}</span>
        </div>

        <h3 className="li-archive-row__title">
          {head}
          <em>{tail}</em>
        </h3>

        <p className="li-archive-row__summary">{project.summary}</p>

        <div className="li-work-card__stack">
          {project.tags.map((tag) => (
            <span key={tag} className="li-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <span className="li-archive-row__cta">
        Open note <span className="li-arrow">→</span>
      </span>
    </Link>
  );
}
