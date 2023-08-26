import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  
  let URL = process.env.NEXT_URL;

  let Items = Array.from({ length: 10 }, (_v,i) => ({   url: `${URL}/read/${i+1}`, lastModified: new Date() }));
  
  return [
    {
      url: `${URL}`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date(),
    },
    ...Items
  ];

}
