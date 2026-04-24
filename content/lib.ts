import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDir = path.join(process.cwd(), "content");
const postsDir = path.join(contentDir, "posts");
const projectsDir = path.join(contentDir, "projects");
const timelineDir = path.join(contentDir, "timeline");

export type PostMeta = {
  slug: string;
  title: string;
  category: string;
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

export function getAllPosts(): PostMeta[] {
  return readMarkdownDir(postsDir)
    .map(({ slug, data }) => ({ slug, ...(data as Omit<PostMeta, "slug">) }))
    .sort((a, b) => a.order - b.order);
}

export function getPost(slug: string): Post | null {
  const file = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const parsed = matter(raw);
  const html = marked.parse(parsed.content, { async: false }) as string;
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
  const file = path.join(projectsDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const parsed = matter(raw);
  const html = marked.parse(parsed.content, { async: false }) as string;
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
      html: marked.parse(content, { async: false }) as string,
    }))
    .sort((a, b) => b.order - a.order);
}
