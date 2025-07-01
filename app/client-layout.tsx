"use client";

import { useRef } from "react";
import clsx from "clsx";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import SideNav, { SideNavRef } from "@/components/sidenav";
import { fontSans } from "@/config/fonts";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideNavRef = useRef<SideNavRef>(null);

  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <head />
      <body
        className={clsx(
          "h-svh bg-background text-foreground font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-svh">
            <Navbar sideNavRef={sideNavRef} />
            <main className="flex-1">{children}</main>
            <SideNav ref={sideNavRef} />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
