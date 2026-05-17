import type { MetadataRoute } from "next";

const SITE_URL = "https://www.scottmorales.dev";

// Allow everything and point crawlers at the sitemap. /contact stays
// crawlable (it's only "hidden" in the sense that nothing links to it).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
