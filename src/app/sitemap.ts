import type { MetadataRoute } from "next";

const SITE_URL = "https://www.scottmorales.dev";

// /contact is unlinked in the nav (an Easter egg — see CLAUDE.md) but is still
// listed here intentionally: it's fine for it to be searchable, the joke is
// just that nothing on the site links to it.
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/work", priority: 0.9, changeFrequency: "monthly" },
  { path: "/work/efmp", priority: 0.8, changeFrequency: "yearly" },
  { path: "/vantage-method", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/music", priority: 0.6, changeFrequency: "monthly" },
  { path: "/notes", priority: 0.7, changeFrequency: "weekly" },
  { path: "/notes/efmp-paper-to-cloud", priority: 0.6, changeFrequency: "yearly" },
  { path: "/notes/three-years-running-an-agency", priority: 0.6, changeFrequency: "yearly" },
  { path: "/notes/mcp-servers-for-business-automation", priority: 0.6, changeFrequency: "yearly" },
  { path: "/projects", priority: 0.5, changeFrequency: "monthly" },
  { path: "/projects/minesweeper", priority: 0.4, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
