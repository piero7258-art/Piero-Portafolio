import { MetadataRoute } from "next";
import { getProjects } from "@/data/projects";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects().map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: new Date()
  }));

  return [
    {
      url: site.url,
      lastModified: new Date()
    },
    ...projects
  ];
}
