"use client";

import { useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "@/lib/whatsapp";

export function FloatingButtons() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        aria-label="Remonter"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-4 bottom-[84px] z-[45] w-[52px] h-[52px] rounded-full grid place-items-center border border-border bg-surface text-text shadow-lg transition-opacity ${
          showToTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <HiOutlineArrowUp size={20} />
      </button>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed right-4 bottom-[22px] z-[45] w-[52px] h-[52px] rounded-full grid place-items-center bg-wa text-white shadow-[0_0_0_1px_rgba(37,211,102,0.4),0_0_18px_4px_rgba(37,211,102,0.45)]"
      >
        <span className="absolute inset-0 rounded-full bg-wa animate-ping opacity-30" aria-hidden />
        <FaWhatsapp size={26} className="relative" />
      </a>
    </>
  );
}
