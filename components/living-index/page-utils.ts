import type { ProjectMeta } from "@/content/lib";

const STATUS_BY_SLUG: Record<string, { label: string; cls: string }> = {
  forkfolio: { label: "In flight", cls: "li-status--wip" },
  "auto-browse": { label: "Live", cls: "li-status--live" },
  "called-it": { label: "Live", cls: "li-status--live" },
};

export function splitTitle(title: string): [string, string] {
  const trimmed = title.trim();
  const camelMatch = trimmed.match(/^(\w+?)([A-Z]\w*)$/);
  if (camelMatch) return [camelMatch[1], camelMatch[2]];

  const lastSpace = trimmed.lastIndexOf(" ");
  if (lastSpace > 0) {
    return [trimmed.slice(0, lastSpace + 1), trimmed.slice(lastSpace + 1)];
  }

  const midpoint = Math.ceil(trimmed.length / 2);
  return [trimmed.slice(0, midpoint), trimmed.slice(midpoint)];
}

export function getProjectStatus(project: Pick<ProjectMeta, "slug">) {
  return STATUS_BY_SLUG[project.slug] ?? {
    label: "Live",
    cls: "li-status--live",
  };
}
