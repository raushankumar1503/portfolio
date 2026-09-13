import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [], // nothing sensitive to hide on a public portfolio
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}