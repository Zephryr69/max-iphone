"use client";

import { useRef } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import type { Product } from "@/lib/products";
import { ProductCard } from "./product-card";

export function FeaturedCarousel({ products }: { products: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-carousel-item]");
    const step = card ? card.offsetWidth + 16 : 300;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Précédent"
        onClick={() => scroll(-1)}
        className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-full border border-white/30 bg-surface/70 backdrop-blur-md grid place-items-center shadow-lg hover:bg-surface transition"
      >
        <HiOutlineChevronLeft size={18} />
      </button>
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-4 pt-1.5 px-0.5 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((p) => (
          <div key={p.id} data-carousel-item className="flex-none w-[78vw] max-w-[280px] snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
      <button
        type="button"
        aria-label="Suivant"
        onClick={() => scroll(1)}
        className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-full border border-white/30 bg-surface/70 backdrop-blur-md grid place-items-center shadow-lg hover:bg-surface transition"
      >
        <HiOutlineChevronRight size={18} />
      </button>
    </div>
  );
}
