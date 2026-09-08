import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteChrome } from "@/components/site-chrome";
import { WA_NUMBER } from "@/lib/whatsapp";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700"],
});

// TODO(user) : remplacer par le vrai nom de domaine une fois le site déployé.
// Tant que ce n'est pas fait, les URLs canoniques/OG pointent vers un domaine provisoire.
const SITE_URL = "https://max-iphone.example";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Max iPhone — iPhones neufs & reconditionnés au Bénin",
    template: "%s",
  },
  description:
    "Max iPhone — iPhones neufs et reconditionnés, testés et garantis, au Bénin. Livraison rapide, prix abordables. Cotonou.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Max iPhone",
  url: SITE_URL,
  telephone: `+${WA_NUMBER}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${outfit.variable} ${poppins.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          // Anti-flash : applique le thème sauvegardé avant l'hydratation React
          dangerouslySetInnerHTML={{
            __html: `try {
              var t = localStorage.getItem('theme');
              if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
            } catch (e) {}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2.5 focus:rounded-full"
        >
          Aller au contenu principal
        </a>
        <ThemeProvider>
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
