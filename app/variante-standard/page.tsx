import type { Metadata } from "next";
import { ThemeSwitch } from "@/components/theme/ThemeSwitch";

export const metadata: Metadata = {
  title: "Design-Variante Standard",
  robots: { index: false, follow: false },
};

export default function VarianteStandard() {
  return <ThemeSwitch mode="standard" />;
}
