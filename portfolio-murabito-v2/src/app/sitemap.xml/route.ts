export async function GET() {
  const baseUrl = "https://murabito.eu";

  /* TO BE ADDED
  const posts = [
    { slug: "first-post", updatedAt: "2025-09-01" },
    { slug: "second-post", updatedAt: "2025-08-20" },
  ];
  */

  const staticRoutes = [
    { path: "", priority: "1.0", changefreq: "weekly" },
    { path: "/en", priority: "1.0", changefreq: "weekly" },
    { path: "/it", priority: "1.0", changefreq: "weekly" },
    { path: "/#aboutme", priority: "0.9", changefreq: "monthly" },
    { path: "/#projects", priority: "0.9", changefreq: "weekly" },
    { path: "/#contact", priority: "0.8", changefreq: "monthly" },
    { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  ];

  const allRoutes = [
    ...staticRoutes.map((route) => ({
      loc: `${baseUrl}${route.path}`,
      lastmod: new Date().toISOString(),
      priority: route.priority,
      changefreq: route.changefreq,
    })),
    /*
    ...posts.map((post) => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: post.updatedAt,
      priority: "0.7",
      changefreq: "monthly",
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
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
