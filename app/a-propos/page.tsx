import Image from "next/image";
import { HiOutlineLockClosed, HiOutlineCheckCircle, HiOutlineTruck, HiOutlineChatAlt2 } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "@/lib/whatsapp";

export const metadata = {
  title: "À propos — Max iPhone",
  description: "Qui est Max iPhone, notre engagement qualité, notre équipe à Cotonou.",
};

const VALUES = [
  { icon: HiOutlineLockClosed, title: "Authenticité & transparence" },
  { icon: HiOutlineCheckCircle, title: "Testés & garantis" },
  { icon: HiOutlineTruck, title: "Livraison rapide" },
  { icon: HiOutlineChatAlt2, title: "Service client réactif" },
];

export default function AboutPage() {
  return (
    <div className="w-[min(1180px,calc(100%-2rem))] mx-auto py-8 md:py-12">
      <div className="grid gap-8 md:grid-cols-2 items-center mb-14">
        <div>
          <h1 className="font-marketing font-bold text-[clamp(1.9rem,3.5vw+1rem,2.4rem)] mb-3.5">
            À propos de Max iPhone
          </h1>
          <p className="text-text-2 text-[15.5px] mb-3">
            Chez Max iPhone, nous proposons une sélection rigoureuse d&apos;iPhones neufs
            et reconditionnés, testés, débloqués et garantis.
          </p>
          <p className="text-text-2 text-[15.5px]">
            Max iPhone s&apos;est spécialisé dans la vente d&apos;iPhones au Bénin. Nous
            travaillons avec des fournisseurs fiables pour garantir à nos clients des
            produits de qualité à des prix abordables.
          </p>
        </div>
        <div className="relative h-[280px] md:h-[360px] rounded-[26px] overflow-hidden border border-border bg-bg-2">
          <Image src="/products/iphone13pro.jpeg" alt="iPhone 13 Pro Max" fill className="object-contain p-10" />
        </div>
      </div>

      <div className="mb-14">
        <h2 className="font-marketing font-bold text-[clamp(1.5rem,2.5vw+1rem,1.6rem)] mb-6 text-center">
          Nos valeurs
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="text-center bg-surface border border-border rounded-[22px] p-5 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent-2 grid place-items-center mb-3 mx-auto">
                <v.icon size={22} />
              </div>
              <h3 className="text-[15px] font-semibold">{v.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-14 max-w-[640px] mx-auto text-center">
        <h2 className="font-marketing font-bold text-[clamp(1.4rem,2vw+1rem,1.5rem)] mb-2.5">
          Pourquoi nous choisir ?
        </h2>
        <p className="text-text-2 text-[15.5px]">
          Tous nos produits sont soigneusement vérifiés. Nous assurons une livraison
          rapide partout au Bénin et une assistance après-vente efficace.
        </p>
      </div>

      <div className="text-center bg-primary text-white rounded-[28px] py-10 px-6 dark:text-[#0D1B2A]">
        <h2 className="font-marketing font-bold text-[clamp(1.3rem,2.5vw+1rem,1.9rem)] mb-2.5">
          Une question avant d&apos;acheter ?
        </h2>
        <p className="opacity-85 max-w-[440px] mx-auto mb-5">
          Contactez-nous directement sur WhatsApp, on vous répond rapidement.
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold bg-wa text-white hover:bg-wa-dark transition"
        >
          <FaWhatsapp size={19} />
          Discuter sur WhatsApp
        </a>
      </div>
    </div>
  );
}
