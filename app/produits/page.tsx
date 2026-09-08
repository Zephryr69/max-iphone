import { products } from "@/lib/products";
import { CatalogClient } from "@/components/catalog-client";

export const metadata = {
  title: "Produits — Max iPhone",
  description: "Tous nos iPhones neufs et reconditionnés, garantis et testés.",
};

export default function ProduitsPage() {
  return (
    <div className="w-[min(1180px,calc(100%-2rem))] mx-auto py-8 md:py-12">
      <h1 className="font-marketing font-bold text-[clamp(1.8rem,3vw+1rem,2.3rem)] mb-2">
        Tous nos iPhones
      </h1>
      <p className="text-text-2 max-w-[560px] mb-6">
        Tous nos iPhones sont garantis, testés et disponibles à prix réduit. Livraison
        rapide partout au Bénin.
      </p>
      <CatalogClient products={products} />
    </div>
  );
}
