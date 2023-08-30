import { MetadataRoute } from "next";
import { SITE_URL } from "@/url"

let Items = Array.from({ length: 10 }, (_v,i) => ({   url: `${SITE_URL}/read/${i+1}`, lastModified: new Date() }));

export default function sitemap(): MetadataRoute.Sitemap {
 
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
    },
    ...Items,
   ];

}
