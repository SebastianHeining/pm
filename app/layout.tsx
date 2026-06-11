import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { SiteFooter } from "@/components/brand/SiteFooter";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://physiotherapie-mally.de"),
  title: {
    default: "Physiotherapie Astrid Mally – Hamm-Bockum-Hövel",
    template: "%s | Physiotherapie Mally",
  },
  description:
    "Seit 2000 für Ihre Gesundheit und Beweglichkeit in Hamm-Bockum-Hövel. Spezialisierte Physiotherapie – individuell, empathisch, wirkungsvoll.",
  applicationName: "Physiotherapie Astrid Mally",
  authors: [{ name: "Astrid Mally" }],
  generator: "Next.js",
  keywords: [
    "Physiotherapie Hamm",
    "Physiotherapie Bockum-Hövel",
    "CMD Hamm",
    "Manuelle Therapie Hamm",
    "Schmerzphysiotherapie Hamm",
    "Lymphdrainage Hamm",
    "Astrid Mally",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://physiotherapie-mally.de",
    siteName: "Physiotherapie Astrid Mally",
    title: "Physiotherapie Astrid Mally – Hamm-Bockum-Hövel",
    description:
      "Individuell, empathisch, wirkungsvoll. Spezialisierte Physiotherapie seit 2000.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Praxis für Physiotherapie Astrid Mally — individuell, empathisch, wirkungsvoll",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#152D47",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-surface text-graphite">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
