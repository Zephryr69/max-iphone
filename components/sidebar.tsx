"use client";

import Link from "next/link";
import { HiOutlineX, HiOutlineHome, HiOutlineShoppingBag, HiOutlineInformationCircle, HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { LogoMark } from "./logo-mark";
import { waLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "/", label: "Accueil", icon: HiOutlineHome },
  { href: "/produits", label: "Produits", icon: HiOutlineShoppingBag },
  { href: "/a-propos", label: "À propos", icon: HiOutlineInformationCircle },
  { href: "/contact", label: "Contact", icon: HiOutlineMail },
];

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-[rgba(8,11,17,0.55)] z-[60] transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        aria-label="Menu mobile"
        className={`fixed top-0 left-0 h-full w-[min(86vw,360px)] bg-surface z-[70] p-6 flex flex-col gap-5 shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-[105%]"
        }`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <LogoMark />
            <div className="font-bold text-[17px]">Max iPhone</div>
          </Link>
          <button
            aria-label="Fermer"
            onClick={onClose}
            className="w-[42px] h-[42px] rounded-xl border border-border bg-surface grid place-items-center"
          >
            <HiOutlineX size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1.5">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-3 px-3.5 py-3 rounded-2xl text-[16px] font-medium hover:bg-bg-2"
              >
                <span className="w-9 h-9 rounded-[10px] bg-accent-soft text-accent-2 grid place-items-center">
                  <Icon size={18} />
                </span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-semibold text-center bg-wa text-white hover:bg-wa-dark transition"
        >
          <FaWhatsapp size={18} />
          Discuter sur WhatsApp
        </a>
        <p className="text-muted text-[13px]">Cotonou, Bénin</p>
      </aside>
    </>
  );
}
