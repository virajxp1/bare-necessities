import Link from "next/link";

export type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
};

export function ArticlePreview({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col gap-3 border-t border-[var(--color-border)] py-6 transition-colors hover:bg-[var(--color-soft-fill)]"
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
        <span>{article.category}</span>
        <span aria-hidden className="text-[var(--color-muted-text)]">·</span>
        <span className="normal-case tracking-normal text-[var(--color-muted-text)]">
          {article.readTime}
        </span>
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-[var(--text-h3)] font-semibold tracking-tight transition-colors group-hover:text-[var(--color-accent)]">
        {article.title}
      </h3>
      <p className="text-[var(--color-muted-text)]">{article.excerpt}</p>
      <span className="text-xs text-[var(--color-muted-text)]">
        {article.date}
      </span>
    </Link>
  );
}
