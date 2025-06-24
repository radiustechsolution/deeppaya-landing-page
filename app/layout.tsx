import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Image from "next/image";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="w-full p-5 md:p-10 relative bg-[#0f172b] flex flex-col items-center border-t border-default-100 mt-[200px]">
              {/* top footer banner */}
              <div
                className="w-[97%] sm:w-[80%] p-8 sm:p-12 md:p-20 flex flex-col -mt-[200px] mb-12 md:mb-20 gap-4 rounded-xl text-center"
                style={{
                  background:
                    "linear-gradient(120deg, #5A37C5FF 0%, #7550E3FF 60%, #8059fa 100%)",
                }}
              >
                <p className="text-white text-left sm:text-center text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                  Download {`${siteConfig.name}`} App for iOS or Android
                </p>
                <p className="text-[#d1d1d1] text-left sm:text-center text-sm sm:text-base">
                  All in one payment from your smartphone! No cards, no cash. As
                  easy as you tap.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 justify-center w-full mt-4">
                  <div className="relative cursor-pointer h-12 sm:h-14 md:h-16 w-full sm:w-40 md:w-44">
                    <Image
                      src="/play.png"
                      alt="Google Play Store"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="relative cursor-pointer h-12 sm:h-14 md:h-16 w-full sm:w-40 md:w-44">
                    <Image
                      src="/apple-logo.png"
                      alt="Apple App Store"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="max-w-[90%] w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-7 justify-between">
                  <Link href="/" className="shrink-0">
                    <div className="relative h-8 w-24 md:h-10 md:w-28">
                      <Image
                        src="/logo.png"
                        alt={`${siteConfig.name} Logo`}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </Link>

                  <div className="flex items-center space-x-5">
                    {siteConfig.navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-[13px] font-medium text-white hover:text-primary transition-colors whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://x.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter)"
                      className="text-white hover:text-primary transition-colors"
                    >
                      <svg
                        width="15"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17.53 3H21.5l-7.19 8.21L22.5 21h-6.56l-5.15-6.19L4.47 21H0.5l7.67-8.76L1.5 3h6.68l4.68 5.61L17.53 3zm-1.13 15h1.82L7.61 5.06H5.67L16.4 18z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="text-white hover:text-primary transition-colors"
                    >
                      <svg
                        width="15"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-white hover:text-primary transition-colors"
                    >
                      <svg
                        width="15"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.567 5.783 2.296 7.149 2.234 8.415 2.176 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.771.13 4.659.392 3.678 1.373 2.697 2.354 2.435 3.466 2.377 4.747 2.319 6.027 2.305 6.436 2.305 12c0 5.564.014 5.973.072 7.253.058 1.281.32 2.393 1.301 3.374.981.981 2.093 1.243 3.374 1.301 1.28.058 1.689.072 7.253.072s5.973-.014 7.253-.072c1.281-.058 2.393-.32 3.374-1.301.981-.981 1.243-2.093 1.301-3.374.058-1.28.072-1.689.072-7.253s-.014-5.973-.072-7.253c-.058-1.281-.32-2.393-1.301-3.374C21.393.392 20.281.13 19 .072 17.719.014 17.309 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* hr */}
                <span className="w-full h-[1px] mt-14 bg-[#2d3448] inline-block"></span>
                <div className="flex gap-4 md:gap-0 flex-col sm:flex-row mt-5 md:items-center justify-between">
                  <p className="text-[#96a6d0] text-[13px]">
                    2025 {`${siteConfig.name}. All right reserved.`}
                  </p>
                  <ul className="text-[#96a6d0] flex gap-2 flex-col sm:flex-row text-[13px]">
                    <li className="underline">Privacy Policy</li>
                    <li className="underline">Terms of Service</li>
                    <li className="underline">Cookie settings</li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
