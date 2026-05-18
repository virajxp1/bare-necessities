import type { Metadata } from "next";
import Link from "next/link";
import { ProjectRow } from "@/components/project-row";
import { getAllProjects, getProject } from "@/content/lib";
import { getProjectStatus, splitTitle } from "@/components/living-index/page-utils";

export const metadata: Metadata = {
  title: "Work — bare-necessities.studio",
  description: "Selected projects, each with a short write-up and links to the live site or source.",
  alternates: {
    canonical: "/work/",
  },
};

export default function WorkPage() {
  const projects = getAllProjects()
    .map((project) => getProject(project.slug))
    .filter((project) => project !== null);
  const [leadProject, ...archiveProjects] = projects;

  const leadTitle = leadProject ? splitTitle(leadProject.title) : null;
  const leadStatus = leadProject ? getProjectStatus(leadProject) : null;

  return (
    <div className="li-root li-page">
      <section className="li-shell li-pagehead">
        <div className="li-pagehead__grid li-pagehead__grid--solo">
          <div>
            <div className="li-pagehead__eyebrow">
              <span className="li-pill">Archive 01</span>
              <span className="li-mono-eyebrow">Selected work</span>
            </div>

            <h1 className="li-pagehead__title">
              Built, shipped, <em>refined.</em>
            </h1>
          </div>
        </div>
      </section>

      {leadProject && leadTitle && leadStatus ? (
        <section className="li-shell li-page-section">
          <article className="li-panel li-panel--ink li-feature-panel">
            <div className="li-feature-panel__grid">
              <div>
                <div className="li-feature-panel__eyebrow">
                  <span className="li-work-card__num">
                    {String(leadProject.order).padStart(2, "0")} / {leadProject.year}
                  </span>
                  <span className={`li-status ${leadStatus.cls}`}>
                    {leadStatus.label}
                  </span>
                </div>

                <h2 className="li-feature-panel__title">
                  {leadTitle[0]}
                  <em>{leadTitle[1]}</em>
                </h2>

                <p className="li-feature-panel__summary">{leadProject.summary}</p>

                <div className="li-work-card__stack">
                  {leadProject.tags.map((tag) => (
                    <span key={tag} className="li-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="li-feature-panel__body">
                <div
                  className="li-prose li-prose--inverse li-prose--compact"
                  dangerouslySetInnerHTML={{ __html: leadProject.html }}
                />

                <div className="li-feature-panel__actions">
                  <Link className="li-btn li-btn--primary" href={`/work/${leadProject.slug}`}>
                    Read project note <span className="li-arrow">↗</span>
                  </Link>
                  {leadProject.projectUrl ? (
                    <a
                      className="li-btn"
                      href={leadProject.projectUrl}
                      target={leadProject.projectUrl.startsWith("/") ? undefined : "_blank"}
                      rel={
                        leadProject.projectUrl.startsWith("/")
                          ? undefined
                          : "noopener noreferrer"
                      }
                    >
                      Visit live build{" "}
                      <span className="li-arrow">
                        {leadProject.projectUrl.startsWith("/") ? "→" : "↗"}
                      </span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      <section className="li-shell li-page-section">
        <div className="li-section__head li-section__head--flush">
          <div>
            <span className="li-section__num">§ 01 — Project archive</span>
            <h2 className="li-section__title">
              More recent <em>builds</em>
            </h2>
          </div>
          <Link href="/blog" className="li-link li-mono li-link--caps">
            Notes around the work →
          </Link>
        </div>

        <div className="li-archive-list">
          {archiveProjects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="li-shell li-page-section li-page-section--closing">
        <div className="li-closing-note">
          <p>
            The archive stays compact on purpose. If something is listed here,
            there is a useful system behind it and at least one decision worth
            writing down.
          </p>
          <Link href="/about" className="li-backlink">
            Context around the work <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
