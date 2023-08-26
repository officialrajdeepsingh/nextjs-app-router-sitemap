import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  
  let URL= `${process.env.NEXT_URL}/`

  return {
    name: 'Generate a SiteMap',
    short_name: 'SiteMap',
    description: 'Generate a SiteMap',
    start_url: URL,
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
