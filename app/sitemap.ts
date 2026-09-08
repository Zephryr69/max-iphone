import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

// TODO(user) : mettre à jour SITE_URL avec le vrai domaine (même valeur que dans app/layout.tsx).
const SITE_URL = "https://max-iphone.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/produits", "/a-propos", "/contact", "/confidentialite"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const productPages = products.map((p) => ({
    url: `${SITE_URL}/produits/${p.id}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...productPages];
}
