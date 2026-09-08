"use client";

import { useState, FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WA_NUMBER } from "@/lib/whatsapp";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Max iPhone 👋 Je m'appelle ${name || "(nom non renseigné)"}${
      phone ? ` (${phone})` : ""
    }.\n\n${message || "J'aimerais avoir des renseignements."}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    const win = window.open(url, "_blank");
    if (!win) {
      // Le navigateur a bloqué l'ouverture automatique : on redirige dans l'onglet actuel.
      window.location.href = url;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3.5">
      <div>
        <label className="text-[13px] font-semibold text-text-2 block mb-1.5">Nom</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none focus:border-accent focus:ring-4 focus:ring-[rgba(196,163,90,0.25)]"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label className="text-[13px] font-semibold text-text-2 block mb-1.5">Téléphone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none focus:border-accent focus:ring-4 focus:ring-[rgba(196,163,90,0.25)]"
          placeholder="+229 …"
        />
      </div>
      <div>
        <label className="text-[13px] font-semibold text-text-2 block mb-1.5">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none focus:border-accent focus:ring-4 focus:ring-[rgba(196,163,90,0.25)] resize-none"
          placeholder="Votre message…"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold bg-wa text-white hover:bg-wa-dark transition"
      >
        <FaWhatsapp size={19} />
        Envoyer sur WhatsApp
      </button>
    </form>
  );
}
