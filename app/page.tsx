import Link from "next/link";
import Image from "next/image";
import { HiOutlineShieldCheck, HiOutlineTruck, HiOutlineTag, HiOutlineBadgeCheck } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { getFeaturedProducts } from "@/lib/products";
import { waLink } from "@/lib/whatsapp";
import { FeaturedCarousel } from "@/components/featured-carousel";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero — photo en arrière-plan sur mobile, panneau dédié sur desktop */}
      <section className="w-[min(1180px,calc(100%-2rem))] mx-auto pt-5 md:pt-14 pb-10 md:pb-14">
        <div className="relative rounded-[28px] overflow-hidden md:overflow-visible md:rounded-none md:grid md:gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          {/* Fond photo (mobile uniquement) */}
          <div className="absolute inset-0 md:hidden">
            <Image
              src="/products/promo-iphone.jpeg"
              alt="iPhone en vitrine chez Max iPhone"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
          </div>

          <div className="relative z-10 min-h-[64svh] md:min-h-0 flex flex-col justify-end md:justify-center px-6 py-8 md:p-0">
            <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-white mb-3 md:text-accent-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-1.5 md:bg-transparent md:backdrop-blur-none md:border-none md:px-0 md:py-0 w-fit">
              <HiOutlineBadgeCheck size={18} className="text-[#E7C77E] md:text-accent-2" />
              Testé et garanti avant chaque vente
            </div>
            <h1 className="font-marketing font-bold text-[clamp(2.1rem,4vw+1rem,3.4rem)] leading-[1.05] mb-3.5 text-white md:text-text">
              L&apos;iPhone que vous méritez.{" "}
              <span className="bg-gradient-to-r from-[#E7C77E] via-accent-2 to-[#E7C77E] md:from-accent-2 md:via-[#E0C37A] md:to-primary bg-clip-text text-transparent">
                Sans compromis.
              </span>
            </h1>
            <p className="text-[16.5px] md:text-[17.5px] text-white/85 md:text-text-2 max-w-[520px] mb-5">
              Neufs ou reconditionnés, un prix juste, et un conseiller au bout du
              WhatsApp.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/produits"
                className="inline-flex items-center rounded-full px-6 py-3.5 font-semibold bg-primary text-white shadow-lg shadow-black/20 hover:bg-primary-2 transition dark:text-[#0D1B2A]"
              >
                Voir les produits
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold border border-white/40 text-white hover:bg-white/10 md:border-border md:text-text md:hover:border-accent md:hover:bg-transparent transition"
              >
                <FaWhatsapp size={18} />
                Parler à un conseiller
              </a>
            </div>
          </div>

          {/* Panneau image (desktop uniquement) */}
          <div className="hidden md:block relative min-h-[300px]">
            <div className="bg-bg-2 border border-border rounded-[28px] p-8 shadow-lg overflow-hidden">
              <div className="relative w-full h-[340px]">
                <Image
                  src="/products/promo-iphone.jpeg"
                  alt="iPhone en vitrine chez Max iPhone"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-14 bg-bg-2/40">
        <div className="w-[min(1180px,calc(100%-2rem))] mx-auto">
          <h2 className="font-marketing font-bold text-[clamp(1.6rem,2.5vw+1rem,2.2rem)] mb-7 max-w-[520px]">
            La confiance, avant la vente.
          </h2>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            <div className="relative overflow-hidden bg-primary text-white rounded-[26px] p-6 sm:col-span-2 lg:row-span-2 flex flex-col justify-between min-h-[220px] dark:text-[#0D1B2A]">
              <div
                aria-hidden
                className="absolute -right-10 -bottom-14 w-56 h-56 rounded-full bg-white/10 dark:bg-black/10"
              />
              <div
                aria-hidden
                className="absolute -right-2 -top-10 w-32 h-32 rounded-full bg-accent/20"
              />
              <div className="relative w-12 h-12 rounded-2xl bg-white/15 dark:bg-black/10 grid place-items-center mb-3.5">
                <HiOutlineShieldCheck size={24} />
              </div>
              <div className="relative">
                <h3 className="text-[20px] font-semibold mb-2">Testés &amp; garantis</h3>
                <p className="text-[14.5px] opacity-85 max-w-[280px]">
                  Chaque appareil est vérifié avant la vente : authenticité et transparence
                  sur l&apos;état du produit.
                </p>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-[22px] p-5 lg:col-span-2 transition hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent-2 grid place-items-center mb-3.5">
                <HiOutlineTruck size={22} />
              </div>
              <h3 className="text-[18px] font-semibold mb-1.5">Livraison rapide</h3>
              <p className="text-text-2 text-[14.5px]">
                Livraison partout au Bénin, avec un emballage soigné.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-[22px] p-5 lg:col-span-2 transition hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent-2 grid place-items-center mb-3.5">
                <HiOutlineTag size={22} />
              </div>
              <h3 className="text-[18px] font-semibold mb-1.5">Prix abordables</h3>
              <p className="text-text-2 text-[14.5px]">
                Des produits de qualité sélectionnés auprès de fournisseurs fiables, à
                prix juste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-14">
        <div className="w-[min(1180px,calc(100%-2rem))] mx-auto">
          <div className="flex justify-between items-end gap-4 flex-wrap mb-6">
            <h2 className="font-marketing font-bold text-[clamp(1.6rem,2.5vw+1rem,2.2rem)]">
              Produits phares
            </h2>
            <Link
              href="/produits"
              className="inline-flex items-center rounded-full px-5 py-2.5 font-semibold border border-border hover:border-accent transition"
            >
              Tout le catalogue
            </Link>
          </div>
          <FeaturedCarousel products={featured} />
        </div>
      </section>
    </div>
  );
}
