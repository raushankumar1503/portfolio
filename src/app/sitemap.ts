import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/portfolio";

/**
 * Sitemap — generated at build. Replace SITE_URL (and add real sections)
 * when you deploy. Single-page site, so the home URL is the primary entry.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}