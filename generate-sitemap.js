const fs = require('fs');
const path = require('path');
const globby = require('globby'); // Make sure to install globby first

(async () => {
  // Paths under the pages directory that should be in the sitemap
  const pages = await globby([
    'pages/*.js', // All JS files in the pages directory
    '!pages/_*.js', // Exclude Next.js special files
    '!pages/api', // Exclude API routes
  ]);

  // Path to the posts directory containing Markdown files
  const posts = await globby('posts/**/*.md');

  // Combine and convert both lists to URL paths
  const sitemapUrls = [...pages, ...posts].map((file) => {
    const filePath = file
      .replace('pages', '')
      .replace('posts', '/posts')
      .replace(/\.js$/, '')
      .replace(/\.md$/, '')
      .replace(/index$/, ''); // Remove index to avoid duplicate home page entry
    return `https://glamaura.me${filePath}`;
  });

  // Create the sitemap.xml content
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapUrls
      .map(
        (url) => `
  <url>
    <loc>${url}</loc>
  </url>`
      )
      .join('')}
</urlset>`;

  // Write the sitemap.xml to the public directory
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);
})();
