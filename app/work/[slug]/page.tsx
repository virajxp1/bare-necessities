import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProject } from "@/content/lib";
import { getProjectStatus, splitTitle } from "@/components/living-index/page-utils";

type WorkProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found — bare-necessities.studio" };
  }

  return {
    title: `${project.title} — bare-necessities.studio`,
    description: project.summary,
    alternates: {
      canonical: `/work/${slug}/`,
    },
  };
}

export default async function WorkProjectPage({
  params,
}: WorkProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const [head, tail] = splitTitle(project.title);
  const status = getProjectStatus(project);

  return (
    <div className="li-root li-page">
      <section className="li-shell li-detail">
        <div className="li-detail__backbar">
          <Link href="/work" className="li-backlink">
            <span aria-hidden>←</span>
            Work archive
          </Link>
          <span className="li-mono-eyebrow">{project.year}</span>
        </div>

        <div className="li-detail__hero">
          <div>
            <div className="li-pagehead__eyebrow">
              <span className="li-pill">Project note</span>
              <span className="li-mono-eyebrow li-eyebrow-dot">
                {status.label}
              </span>
            </div>

            <h1 className="li-detail__title">
              {head}
              <em>{tail}</em>
            </h1>

            <p className="li-detail__summary">{project.summary}</p>
          </div>

          <aside className="li-sidecard">
            <div className="li-sidecard__section">
              <span className="li-sidecard__label">Shipped</span>
              <strong>{project.year}</strong>
            </div>
            <div className="li-sidecard__section">
              <span className="li-sidecard__label">Stack</span>
              <p>{project.tags.join(" · ")}</p>
            </div>
            <div className="li-sidecard__section">
              <span className="li-sidecard__label">Links</span>
              <div className="li-sidecard__actions">
                {project.projectUrl ? (
                  <a
                    href={project.projectUrl}
                    target={project.projectUrl.startsWith("/") ? undefined : "_blank"}
                    rel={
                      project.projectUrl.startsWith("/")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="li-btn li-btn--primary"
                  >
                    Live build{" "}
                    <span className="li-arrow">
                      {project.projectUrl.startsWith("/") ? "→" : "↗"}
                    </span>
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="li-btn"
                  >
                    Source <span className="li-arrow">↗</span>
                  </a>
                ) : null}
              </div>
            </div>
          </aside>
        </div>

        <div className="li-detail__body">
          <div
            className="li-prose li-prose--article"
            dangerouslySetInnerHTML={{ __html: project.html }}
          />
        </div>

        <footer className="li-detail__footer">
          <span className="li-mono-eyebrow">End of project note</span>
          <Link href="/work" className="li-backlink">
            More from the archive <span aria-hidden>→</span>
          </Link>
        </footer>
      </section>
    </div>
  );
}
