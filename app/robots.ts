import type { MetadataRoute } from "next";

// TODO(user) : mettre à jour SITE_URL avec le vrai domaine (même valeur que dans app/layout.tsx).
const SITE_URL = "https://max-iphone.example";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
