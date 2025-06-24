// components/BuyWrapper.tsx
"use client";

import dynamic from "next/dynamic";
const Buy = dynamic(() => import("./Buy"), { ssr: false });

export default function BuyWrapper() {
  return <Buy />;
}
