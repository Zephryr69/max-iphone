"use client";

import { FaWhatsapp } from "react-icons/fa";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { waLink } from "@/lib/whatsapp";

export function ProductDetailActions({ product }: { product: Product }) {
  const message = `Bonjour Max iPhone 👋 Je suis intéressé(e) par le ${product.name} à ${formatPrice(
    product.price
  )}. Est-il toujours disponible ?`;

  return (
    <div>
      <div className="font-marketing font-bold text-[2rem] mb-4">{formatPrice(product.price)}</div>
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold bg-wa text-white hover:bg-wa-dark transition w-full md:w-auto"
      >
        <FaWhatsapp size={19} />
        Commander sur WhatsApp
      </a>
    </div>
  );
}
