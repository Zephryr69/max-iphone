import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiOutlineShieldCheck, HiOutlineTruck, HiOutlineChatAlt2 } from "react-icons/hi";
import { getProductById, products } from "@/lib/products";
import { ProductDetailActions } from "@/components/product-detail-actions";
import { ProductCard } from "@/components/product-card";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: `${product.name} — Max iPhone`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const others = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="w-[min(1180px,calc(100%-2rem))] mx-auto py-8 md:py-12">
      <div className="text-[13px] text-muted mb-5">
        <Link href="/produits" className="hover:text-text">
          Produits
        </Link>{" "}
        / {product.name}
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-14">
        <div className="relative h-[280px] sm:h-[340px] md:h-[440px] bg-bg-2 border border-border rounded-[26px] overflow-hidden">
          <Image src={product.image} alt={product.name} fill className="object-contain p-8" priority />
        </div>

        <div>
          <h1 className="font-marketing font-bold text-[clamp(1.8rem,3vw+1rem,2.2rem)] mb-1.5">
            {product.name}
          </h1>
          <p className="text-text-2 text-[15.5px] mb-5">{product.description}</p>

          <ProductDetailActions product={product} />

          <div className="grid gap-2.5 mt-7">
            <div className="flex items-center gap-2.5 bg-surface border border-border rounded-2xl p-3.5">
              <HiOutlineShieldCheck className="text-accent-2 flex-none" size={20} />
              <span className="text-[14px] font-medium">Testé et garanti avant la vente</span>
            </div>
            <div className="flex items-center gap-2.5 bg-surface border border-border rounded-2xl p-3.5">
              <HiOutlineTruck className="text-accent-2 flex-none" size={20} />
              <span className="text-[14px] font-medium">Livraison rapide partout au Bénin</span>
            </div>
            <div className="flex items-center gap-2.5 bg-surface border border-border rounded-2xl p-3.5">
              <HiOutlineChatAlt2 className="text-accent-2 flex-none" size={20} />
              <span className="text-[14px] font-medium">Assistance après-vente sur WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-marketing font-bold text-[clamp(1.3rem,2vw+1rem,1.4rem)] mb-4">
          Autres modèles
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {others.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
