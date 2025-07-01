import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

// Server Component exports (must stay at the top level)
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Making Your Payment Faster and Easier`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: siteConfig.siteColors.primary,
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: siteConfig.siteColors.primary,
    },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Client component that will contain all client-side functionality
import ClientLayout from "./client-layout";

// Default export remains a Server Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
