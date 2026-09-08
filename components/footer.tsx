import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlinePhone, HiOutlineLocationMarker, HiOutlineArrowRight } from "react-icons/hi";
import { LogoMark } from "./logo-mark";
import { waLink } from "@/lib/whatsapp";

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/produits", label: "Produits" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const SERVICES = [
  { href: "/produits", label: "iPhones neufs" },
  { href: "/produits", label: "Reconditionnés" },
  { href: "/a-propos", label: "Garantie" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1.5 py-1 text-[14px] text-[#C9C2B4] hover:text-accent transition"
    >
      <HiOutlineArrowRight
        size={13}
        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
      />
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-2 text-[#E8E0D0] pt-12 pb-6 mt-5 dark:bg-[#05070B]">
      <div className="w-[min(1180px,calc(100%-2rem))] mx-auto grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-3 text-white">
            <LogoMark />
            <div className="font-bold text-[17px]">Max iPhone</div>
          </div>
          <p className="text-[14px] max-w-[280px] text-[#C9C2B4] mb-3">
            Vos iPhones à prix imbattables !
          </p>
          <div className="flex items-center gap-2 text-[13.5px] text-[#C9C2B4]">
            <span className="w-7 h-7 rounded-lg bg-white/5 grid place-items-center flex-none">
              <HiOutlineLocationMarker size={15} className="text-accent" />
            </span>
            Cotonou, Bénin
          </div>
        </div>

        <div>
          <h4 className="text-white mb-2.5 text-[15px]">Navigation</h4>
          {NAV.map((l) => (
            <FooterLink key={l.href} {...l} />
          ))}
        </div>

        <div>
          <h4 className="text-white mb-2.5 text-[15px]">Services</h4>
          {SERVICES.map((l) => (
            <FooterLink key={l.label} {...l} />
          ))}
        </div>

        <div>
          <h4 className="text-white mb-2.5 text-[15px]">Contact</h4>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-1 text-[14px] text-[#C9C2B4] hover:text-accent transition"
          >
            <span className="w-7 h-7 rounded-lg bg-white/5 grid place-items-center flex-none">
              <FaWhatsapp size={14} className="text-[#25D366]" />
            </span>
            WhatsApp
          </a>
          <a
            href="tel:+2290169118745"
            className="flex items-center gap-2 py-1 text-[14px] text-[#C9C2B4] hover:text-accent transition"
          >
            <span className="w-7 h-7 rounded-lg bg-white/5 grid place-items-center flex-none">
              <HiOutlinePhone size={15} className="text-accent" />
            </span>
            +229 01 69 11 87 45
          </a>
        </div>
      </div>

      <div className="w-[min(1180px,calc(100%-2rem))] mx-auto border-t border-white/10 mt-7 pt-4 text-[12.5px] text-[#9AA3A0] flex justify-between gap-2 flex-wrap">
        <span>© {new Date().getFullYear()} Max iPhone. Tous droits réservés.</span>
        <Link href="/confidentialite" className="hover:text-accent">
          Politique de confidentialité
        </Link>
      </div>
    </footer>
  );
}
