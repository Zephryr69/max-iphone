import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produits/${product.id}`}
      className="flex flex-col bg-surface border border-border rounded-[22px] overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-[200px] bg-bg-2">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 78vw, 280px"
          className="object-contain p-5"
        />
      </div>
      <div className="flex flex-col gap-1.5 p-4 flex-1">
        <h3 className="text-[16.5px] font-semibold">{product.name}</h3>
        <p className="text-muted text-[13px] line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-auto pt-2.5">
          <div className="font-marketing font-bold text-[18px]">{formatPrice(product.price)}</div>
          <span className="text-[12.5px] font-semibold px-3 py-1.5 rounded-full border border-border">
            Détails
          </span>
        </div>
      </div>
    </Link>
  );
}
