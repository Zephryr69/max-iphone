import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { waLink, WA_DISPLAY } from "@/lib/whatsapp";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact — Max iPhone",
  description: "Contactez Max iPhone par WhatsApp ou téléphone.",
};

const INFOS = [
  { icon: HiOutlineLocationMarker, label: "Adresse", value: "Cotonou, Bénin" },
  { icon: HiOutlinePhone, label: "Téléphone", value: WA_DISPLAY },
];

export default function ContactPage() {
  return (
    <div className="w-[min(1180px,calc(100%-2rem))] mx-auto py-8 md:py-12">
      <h1 className="font-marketing font-bold text-[clamp(1.8rem,3vw+1rem,2.3rem)] mb-2">
        Contactez Max iPhone
      </h1>
      <p className="text-text-2 max-w-[560px] mb-8">
        Une question, une commande ou un devis ? Envoyez-nous un message.
      </p>

      <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
        <div>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-wa text-white rounded-2xl p-4.5 mb-4 hover:bg-wa-dark transition"
          >
            <FaWhatsapp size={26} />
            <div>
              <div className="font-semibold text-[15.5px]">Discuter sur WhatsApp</div>
              <div className="text-[13px] opacity-85">{WA_DISPLAY}</div>
            </div>
          </a>

          <div className="grid gap-2.5">
            {INFOS.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-3 bg-surface border border-border rounded-2xl p-4"
              >
                <span className="w-10 h-10 rounded-xl bg-accent-soft text-accent-2 grid place-items-center flex-none">
                  <info.icon size={19} />
                </span>
                <div>
                  <div className="text-[12.5px] text-muted">{info.label}</div>
                  <div className="text-[14.5px] font-medium">{info.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface border border-border rounded-[24px] p-6">
          <h2 className="font-semibold text-[17px] mb-4">Envoyer un message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
