import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Der KI-Chat liest Team- und Blog-Markdown zur Laufzeit — die Dateien
  // müssen mit in das Serverless-Bundle der Route.
  outputFileTracingIncludes: {
    "/api/chat": ["./content/**/*"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Rot/Grau ist seit Feedbackrunde 2 das Standard-Design —
      // die früheren Umschalt-Links leiten auf die Startseite.
      { source: "/variante-rot", destination: "/", permanent: false },
      { source: "/variante-standard", destination: "/", permanent: false },
      // FB2: kombinierte Massage/Wärme-Seite wurde in zwei Kassenleistungen geteilt
      {
        source: "/leistungen/massage-und-waerme",
        destination: "/leistungen/massage-bgm",
        permanent: true,
      },
      // FB4: Ratgeber vorerst ausgeblendet (Praxis pflegt den Blog nicht
      // aktiv) — temporäre Redirects, Inhalte bleiben im Repo erhalten
      { source: "/ratgeber", destination: "/", permanent: false },
      { source: "/ratgeber/:slug*", destination: "/", permanent: false },
      // Heimserver-Hosting: Nebendomains und www bündeln per 301 auf die
      // Hauptdomain (Canonical/SEO). Greift erst, wenn die Domains auf den
      // Server zeigen — auf Vercel matchen diese Hosts nie.
      ...[
        "www.physiotherapie-mally.de",
        "physio-astrid-mally.de",
        "www.physio-astrid-mally.de",
        "physiotherapie-astrid-mally.de",
        "www.physiotherapie-astrid-mally.de",
      ].map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://physiotherapie-mally.de/:path*",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
