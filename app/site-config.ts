import { siteDescription, siteName, siteTitle } from "./site-metadata";

const defaultSiteUrl = "https://bare-necessities.studio";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  name: siteName,
  title: siteTitle,
  description: siteDescription,
  url: normalizeSiteUrl(process.env.PAGES_BASE_URL ?? defaultSiteUrl),
} as const;

export const siteUrl = new URL(siteConfig.url);
