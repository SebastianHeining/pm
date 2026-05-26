import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/praxis", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/praxis/team", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ueber-astrid", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/leistungen", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/karriere", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/ratgeber", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/impressum", priority: 0.1, changeFrequency: "yearly" as const },
  { path: "/datenschutz", priority: 0.1, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return staticRoutes.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
