export const siteConfig = {
  name: "bare-necessities.studio",
  title: "bare-necessities.studio — Viraj Parikh",
  description:
    "Backend engineer in Austin. Notes on simplicity, small teams, and systems that age well.",
  url: "https://bare-necessities.studio",
} as const;

export const siteUrl = new URL(siteConfig.url);
