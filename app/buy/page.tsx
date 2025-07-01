// app/buy/page.tsx
import BuyWrapper from "@/components/BuyWrapper";
import { siteConfig } from "@/config/site";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Buy instant VTU on ${siteConfig.name}`,
  description: `Enjoy our instant VTU sales on ${siteConfig.name} .`,
};

export default function BuyPage() {
  return <BuyWrapper />;
}
