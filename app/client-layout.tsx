"use client";

import { useRef, useState, useEffect } from "react";
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
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Prevent body scrolling when sidenav is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

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
            <Navbar sideNavRef={sideNavRef} onNavToggle={setIsNavOpen} />
            <main className="flex-1">{children}</main>
            <SideNav ref={sideNavRef} onStateChange={setIsNavOpen} />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
