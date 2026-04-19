import type { Metadata } from "next";
import { ArticlePreview } from "@/components/article-preview";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Writing — Oslo",
  description:
    "Notes on building, simplification, and engineering judgment.",
};

export default function BlogIndex() {
  return (
    <div className="mx-auto w-full max-w-[var(--container-default)] px-6 py-[var(--space-2xl)] md:px-10">
      <header className="flex flex-col gap-4 md:max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
          Writing
        </p>
        <h1
          className="font-[family-name:var(--font-display)] font-extrabold tracking-tight"
          style={{ fontSize: "var(--text-h1)" }}
        >
          Notes on building.
        </h1>
        <p className="text-[var(--color-muted-text)]">
          Essays on simplification, judgment, and the quiet parts of shipping
          software.
        </p>
      </header>

      <ul className="mt-[var(--space-xl)]">
        {posts.map((post) => (
          <li key={post.slug}>
            <ArticlePreview article={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
