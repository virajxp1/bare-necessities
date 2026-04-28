import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

const contentDir = path.join(process.cwd(), "content");
const postsDir = path.join(contentDir, "posts");
const projectsDir = path.join(contentDir, "projects");
const timelineDir = path.join(contentDir, "timeline");
const slugPattern = /^[a-z0-9-]+$/;

export type PostMeta = {
  slug: string;
  title: string;
  category: string;
  tags?: string[];
  readTime: string;
  date: string;
  order: number;
  excerpt: string;
};

export type Post = PostMeta & { html: string };

export type ProjectMeta = {
  slug: string;
  title: string;
  year: string;
  order: number;
  summary: string;
  tags: string[];
  projectUrl?: string;
  repoUrl?: string;
};

export type Project = ProjectMeta & { html: string };

export type TimelineTone = "formation" | "current" | "permanent";

export type TimelineChapter = {
  slug: string;
  tone: TimelineTone;
  label: string;
  eyebrow: string;
  title: string;
  order: number;
  html: string;
};

function readMarkdownDir(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const parsed = matter(raw);
      return { slug, data: parsed.data, content: parsed.content };
    });
}

function resolveMarkdownFile(dir: string, slug: string): string | null {
  if (!slugPattern.test(slug)) return null;
  const filePath = path.resolve(dir, `${slug}.md`);
  const relativePath = path.relative(dir, filePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    return null;
  }

  return filePath;
}

function parseMarkdownSafe(content: string): string {
  const html = marked.parse(content, { async: false }) as string;
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading", "decoding"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
  });
}

export function getAllPosts(): PostMeta[] {
  return readMarkdownDir(postsDir)
    .map(({ slug, data }) => ({ slug, ...(data as Omit<PostMeta, "slug">) }))
    .sort((a, b) => a.order - b.order);
}

export function getPost(slug: string): Post | null {
  const file = resolveMarkdownFile(postsDir, slug);
  if (!file) return null;
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const parsed = matter(raw);
  const html = parseMarkdownSafe(parsed.content);
  return {
    slug,
    ...(parsed.data as Omit<PostMeta, "slug">),
    html,
  };
}

export function getAllProjects(): ProjectMeta[] {
  return readMarkdownDir(projectsDir)
    .map(({ slug, data }) => ({
      slug,
      ...(data as Omit<ProjectMeta, "slug">),
    }))
    .sort((a, b) => a.order - b.order);
}

export function getProject(slug: string): Project | null {
  const file = resolveMarkdownFile(projectsDir, slug);
  if (!file) return null;
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const parsed = matter(raw);
  const html = parseMarkdownSafe(parsed.content);
  return {
    slug,
    ...(parsed.data as Omit<ProjectMeta, "slug">),
    html,
  };
}

export function getTimeline(): TimelineChapter[] {
  return readMarkdownDir(timelineDir)
    .map(({ slug, data, content }) => ({
      slug,
      ...(data as Omit<TimelineChapter, "slug" | "html">),
      html: parseMarkdownSafe(content),
    }))
    .sort((a, b) => b.order - a.order);
}
