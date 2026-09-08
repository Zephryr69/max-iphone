"use client";

import { useMemo, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export function CatalogClient({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => p.name.toLowerCase().includes(q));
  }, [products, query]);

  return (
    <div>
      <div className="relative w-full max-w-[320px] mb-5">
        <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" size={16} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un modèle…"
          className="w-full rounded-full border border-border bg-surface pl-10 pr-4 py-2.5 outline-none focus:border-accent focus:ring-4 focus:ring-[rgba(196,163,90,0.25)]"
        />
      </div>

      <p className="text-muted text-[13px] mb-3.5">
        {filtered.length} modèle{filtered.length > 1 ? "s" : ""}
      </p>

      {filtered.length === 0 ? (
        <p className="text-center text-muted py-16">Aucun modèle ne correspond à ta recherche.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-4.5">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
