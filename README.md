# How can the Sitemap, Robot, and manifest.json be generated in the Next.js app router?
Generate sitemap, robots, and manifest.json files in the Next.js app router without installing a third additional NPM package, [read full article](https://medium.com/frontendweb/how-can-the-sitemap-robots-and-manifest-json-be-generated-in-the-next-js-app-router-ab5df95d1c58).

## installation

### Clone the project
```bash
git clone https://github.com/officialrajdeepsingh/nextjs-app-router-sitemap.git
```
### Change the folder 
```bash
cd nextjs-app-router-sitemap
```

### Install the node package
```bash
npm install
# or
pnpm install
# or
yarn install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can edit the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Note
Remove the following code when you start your local development server. Then remove the `output` and `images.unoptimized` config in `next.config.js`file, when you deploy your site on the GitHub page.


```javascript
// next.config.js

/** @type {import('next').NextConfig} */
let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true

const nextConfig = {
  output:  process.env.NODE_ENV !== "production" ? undefined: "export", 
  images: {
    unoptimized: envImageUnoptimize,
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;


```
