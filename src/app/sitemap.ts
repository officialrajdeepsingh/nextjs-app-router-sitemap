import { MetadataRoute } from "next";
import {SITE_URL} from "@/url"
export default function sitemap(): MetadataRoute.Sitemap {
  
  let URL = "https://officialrajdeepsingh.github.io/nextjs-app-router-sitemap"

  let Items = Array.from({ length: 10 }, (_v,i) => ({   url: `${URL}/read/${i+1}`, lastModified: new Date() }));
  
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
    ...Items
  ];

}
