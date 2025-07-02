"use client";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { isIOS, isAndroid } from "react-device-detect";
import { SideNavRef } from "./sidenav";
interface NavbarProps {
  sideNavRef: React.RefObject<SideNavRef>;
  onNavToggle?: (isOpen: boolean) => void;
}

export const Navbar = ({ sideNavRef, onNavToggle }: NavbarProps) => {
  // When you trigger the sidenav, call onNavToggle
  const handleOpenNav = () => {
    sideNavRef.current?.openNav();
    onNavToggle?.(true);
  };
  const pathName = usePathname();

  const handleDownload = () => {
    if (isIOS) {
      window.location.href = "https://apps.apple.com/app/YOUR_APP_ID";
    } else if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME";
    } else {
      // window.location.href = `${siteConfig.baseUrl}/download`;
    }
  };

  const handleMenuClick = () => {
    sideNavRef.current?.openNav();
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-sm border-b border-default-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-6 md:gap-10">
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-default-600 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href={"/buy"}>
              <Button className="w-full text-primary sm:w-auto bg-transparent border-1 border-borderGray">
                Purchase
              </Button>
            </Link>

            <Button
              onClick={handleDownload}
              className="text-white download-button"
            >
              Download App
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-4">
            {pathName !== "/buy" ? (
              <Link href={"/buy"}>
                <button className="font-[700] text-sm whitespace-nowrap">
                  Quick Purchase
                </button>
              </Link>
            ) : (
              <button
                onClick={handleDownload}
                className="font-[700] text-sm whitespace-nowrap download-button"
              >
                Download App
              </button>
            )}

            <button onClick={handleMenuClick} aria-label="Menu">
              <FiMenu className="text-default-600" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
