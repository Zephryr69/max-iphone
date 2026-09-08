export interface Product {
  id: string;
  name: string;
  /** Reprend le texte de description de l'ancien site, tel quel */
  description: string;
  /** Prix réel (FCFA), repris de l'ancien site */
  price: number;
  image: string;
  /**
   * Mise en avant sur la page d'accueil : simple choix éditorial (pas une
   * donnée client), modifiable librement en changeant ce booléen.
   */
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    description: "Écran Super Retina XDR, triple caméra pro, A15 Bionic.",
    price: 350000,
    image: "/products/iphone13pro.jpeg",
    featured: true,
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    description: "Design amélioré, autonomie boostée.",
    price: 450000,
    image: "/products/iphone14.jpeg",
    featured: true,
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    description: "Équilibre parfait entre puissance et prix.",
    price: 300000,
    image: "/products/iphone13.jpeg",
    featured: true,
  },
  {
    id: "iphone-12-pro",
    name: "iPhone 12 Pro",
    description: "Triple caméra, scanner LiDAR, design élégant.",
    price: 280000,
    image: "/products/iphone12pro.jpeg",
    featured: true,
  },
  {
    id: "iphone-13-mini",
    name: "iPhone 13 Mini",
    description: "Petit format, grandes performances.",
    price: 200000,
    image: "/products/iphone13mini.jpeg",
    featured: true,
  },
  {
    id: "iphone-12",
    name: "iPhone 12",
    description: "Design fin et puissant, puce A14, 5G rapide.",
    price: 190000,
    image: "/products/iphone12.jpeg",
    featured: false,
  },
  {
    id: "iphone-xs-max",
    name: "iPhone XS Max",
    description: "Superbe écran OLED, performances solides.",
    price: 70000,
    image: "/products/iphonexsmax.jpeg",
    featured: false,
  },
  {
    id: "iphone-11",
    name: "iPhone 11",
    description: "Double caméra, A13 Bionic, excellent rapport qualité/prix.",
    price: 100000,
    image: "/products/iphone11.jpeg",
    featured: false,
  },
  {
    id: "iphone-se-2022",
    name: "iPhone SE (2022)",
    description: "Compact mais puissant avec la puce A15.",
    price: 50000,
    image: "/products/iphonese.jpeg",
    featured: false,
  },
  {
    id: "iphone-xr",
    name: "iPhone XR",
    description: "Écran Liquid Retina, grande autonomie.",
    price: 20000,
    image: "/products/iphonexr.jpeg",
    featured: false,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
