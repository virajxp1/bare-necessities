import type { Project } from "@/components/project-row";

export const projects: Project[] = [
  {
    slug: "ledger-tools",
    title: "Ledger Tools",
    year: "2025",
    summary:
      "A minimal double-entry accounting CLI for people who'd rather write text than click through tabs.",
    tags: ["TypeScript", "CLI", "SQLite"],
  },
  {
    slug: "quiet-analytics",
    title: "Quiet Analytics",
    year: "2024",
    summary:
      "Drop-in product analytics focused on honest numbers, not vanity dashboards.",
    tags: ["Next.js", "Postgres", "Edge"],
  },
  {
    slug: "plainmail",
    title: "Plainmail",
    year: "2023",
    summary:
      "Newsletter publishing without the stack of third-party embeds — just writing and a subscribe form.",
    tags: ["Go", "SMTP", "Postmark"],
  },
  {
    slug: "shelfwarm",
    title: "Shelfwarm",
    year: "2023",
    summary:
      "A reading log that treats reading as an ongoing practice, not a leaderboard.",
    tags: ["Remix", "SQLite"],
  },
  {
    slug: "mono-runner",
    title: "Mono Runner",
    year: "2022",
    summary:
      "A small task runner that replaced a 400-line Makefile across a six-service monorepo.",
    tags: ["Rust", "Tooling"],
  },
];
