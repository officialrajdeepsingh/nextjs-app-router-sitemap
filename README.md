
# How to deploy the Next.js App router application on GitHub Pages using PNPM?
deploy the nextjs app router demo application using pnpm, [read full article](https://medium.com/frontendweb/how-to-deploy-the-next-js-app-router-application-on-github-pages-using-pnpm-54ac72424d80).

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
const nextConfig = {
  output:  process.env.NODE_ENV !== "production" ? undefined: "export", 
}

module.exports = nextConfig;

```
