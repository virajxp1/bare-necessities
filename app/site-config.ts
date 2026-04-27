const defaultSiteUrl = "https://bare-necessities.studio";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  name: "bare-necessities.studio",
  title: "bare-necessities.studio — Viraj Parikh",
  description:
    "Backend engineer in Austin. Notes on simplicity, small teams, and systems that age well.",
  url: normalizeSiteUrl(process.env.PAGES_BASE_URL ?? defaultSiteUrl),
} as const;

export const siteUrl = new URL(siteConfig.url);
