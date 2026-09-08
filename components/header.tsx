"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "./theme-provider";
import { LogoMark } from "./logo-mark";
import { waLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/produits", label: "Produits" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 h-[76px] flex items-center border-b border-white/10 dark:border-white/5 bg-surface/60 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.04)]">
      <div className="w-[min(1180px,calc(100%-2rem))] mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark />
          <div>
            <div className="font-bold text-[17px] leading-tight">Max iPhone</div>
            <div className="text-[11px] text-muted font-medium tracking-wider uppercase">
              Cotonou · Bénin
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex gap-1.5 items-center" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-full text-[14.5px] font-medium transition ${
                  active
                    ? "bg-accent-soft text-text font-semibold"
                    : "text-text-2 hover:bg-bg-2 hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Changer de thème"
            onClick={toggleTheme}
            className="w-[42px] h-[42px] rounded-xl border border-border bg-surface grid place-items-center hover:border-accent hover:text-accent-2 transition"
          >
            {theme === "dark" ? <HiOutlineSun size={19} /> : <HiOutlineMoon size={19} />}
          </button>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-[14.5px] bg-wa text-white hover:bg-wa-dark transition"
          >
            <FaWhatsapp size={17} />
            WhatsApp
          </a>
          <button
            aria-label="Ouvrir le menu"
            onClick={onMenuClick}
            className="lg:hidden w-[42px] h-[42px] rounded-xl border border-border bg-surface grid place-items-center"
          >
            <HiOutlineMenu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
