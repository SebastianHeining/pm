import type { Metadata } from "next";
import { ThemeSwitch } from "@/components/theme/ThemeSwitch";

export const metadata: Metadata = {
  title: "Design-Variante Rot/Grau",
  robots: { index: false, follow: false },
};

export default function VarianteRot() {
  return <ThemeSwitch mode="rot" />;
}
