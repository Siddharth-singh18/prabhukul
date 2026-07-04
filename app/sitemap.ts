import type { MetadataRoute } from "next";
import { blogs } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prabhukul.example";
  return [
    { url: baseUrl, lastModified: new Date() },
    ...blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date()
    }))
  ];
}
