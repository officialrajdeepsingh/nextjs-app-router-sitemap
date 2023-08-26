import { MetadataRoute } from 'next'
 import {SITE_URL} from "@/url"
export default function manifest(): MetadataRoute.Manifest {
  
  return {
    name: 'Generate a SiteMap',
    short_name: 'SiteMap',
    description: 'Generate a SiteMap',
    start_url: SITE_URL,
    display: 'standalone',
    background_color: '#fff',
    categories: ["demo", "education", "nextjs"],
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
