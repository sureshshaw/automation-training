export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://your-site-url.netlify.app/sitemap.xml",
  };
}
