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
    ];
  },
};

export default nextConfig;
