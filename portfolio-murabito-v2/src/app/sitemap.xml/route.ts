export async function GET() {
  const baseUrl = "https://murabito.eu";

  /* TO BE ADDED
  const posts = [
    { slug: "first-post", updatedAt: "2025-09-01" },
    { slug: "second-post", updatedAt: "2025-08-20" },
  ];
  */

  const staticRoutes = ["", "#projects", "#contact", "#projects"];

  const allRoutes = [
    ...staticRoutes.map((route) => ({
      loc: `${baseUrl}${route}`,
      lastmod: new Date().toISOString(),
    })),
    /*
    ...posts.map((post) => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: post.updatedAt,
    })),
    */
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map(
        (route) => `
      <url>
        <loc>${route.loc}</loc>
        <lastmod>${route.lastmod}</lastmod>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
