import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="w-[min(1180px,calc(100%-2rem))] mx-auto py-24 text-center">
      <div className="font-marketing font-bold text-[clamp(3rem,6vw+1rem,5rem)] text-accent-2 mb-2">
        404
      </div>
      <h1 className="font-marketing font-bold text-[1.6rem] md:text-[2rem] mb-3">
        Cette page n&apos;existe pas
      </h1>
      <p className="text-text-2 max-w-[440px] mx-auto mb-7">
        Le lien est peut-être obsolète, ou la page a été déplacée. Retournez au catalogue
        ou écrivez-nous directement.
      </p>
      <div className="flex flex-wrap gap-2.5 justify-center">
        <Link
          href="/produits"
          className="inline-flex items-center rounded-full px-6 py-3.5 font-semibold bg-primary text-white hover:bg-primary-2 transition dark:text-[#0D1B2A]"
        >
          Voir les produits
        </Link>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold border border-border hover:border-accent transition"
        >
          <FaWhatsapp size={18} />
          Nous écrire
        </a>
      </div>
    </div>
  );
}
