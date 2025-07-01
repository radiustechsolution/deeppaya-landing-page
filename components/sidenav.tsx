"use client";
import { useState, forwardRef, useImperativeHandle } from "react";
import Link from "next/link";
import {
  IoClose,
  IoHome,
  IoCard,
  IoAnalytics,
  IoStorefront,
  IoHelpCircle,
  IoSettings,
  IoLogOut,
  //   IoChevronRight,
  IoPersonCircle,
  IoNotifications,
  IoWallet,
} from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MdAdminPanelSettings } from "react-icons/md";

export interface SideNavRef {
  openNav: () => void;
  closeNav: () => void;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: string;
  subItems?: { label: string; href: string }[];
}

const SideNav = forwardRef<SideNavRef>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const closeNav = () => {
    setIsOpen(false);
    setExpandedItem(null);
  };

  const openNav = () => {
    setIsOpen(true);
  };

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    openNav,
    closeNav,
  }));

  const toggleSubMenu = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  const navItems: NavItem[] = [
    {
      icon: <IoHome size={22} />,
      label: "Home",
      href: "/",
    },
    {
      icon: <MdAdminPanelSettings size={22} />,
      label: siteConfig.name,
      href: "/payments",
      badge: "2",
      subItems: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Condition", href: "/terms-conditions" },
      ],
    },
    {
      icon: <IoCard size={22} />,
      label: "Bills & Top-up",
      href: "/bills",
      subItems: [
        { label: "Airtime", href: "/buy" },
        { label: "Data", href: "/buy" },
        { label: "Electricity", href: "/buy" },
        { label: "Cable TV", href: "/buy" },
        { label: "Education", href: "/buy" },
      ],
    },
    // {
    //   icon: <IoAnalytics size={22} />,
    //   label: "Analytics",
    //   href: "/analytics",
    // },
    {
      icon: <IoStorefront size={22} />,
      label: `${siteConfig.name} Business`,
      href: "/pos",
      subItems: [
        { label: "Own Your POS", href: "/pos" },
        { label: "VTU Proper", href: "/vtu-proper" },
      ],
    },
    // {
    //   icon: <IoNotifications size={22} />,
    //   label: "Notifications",
    //   href: "/notifications",
    //   badge: "5",
    // },
  ];

  const bottomNavItems: NavItem[] = [
    // {
    //   icon: <IoSettings size={22} />,
    //   label: "Settings",
    //   href: "/settings",
    // },
    {
      icon: <IoHelpCircle size={22} />,
      label: "Help & Support",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed flex flex-col md:hidden inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeNav}
        />
      )}

      {/* Side Navigation */}
      <div
        className={`fixed top-0 flex flex-col md:hidden  left-0 z-50 h-screen w-80 bg-white dark:bg-gray-900 shadow-2xl transition-all duration-300 ease-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-95"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
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
          <button
            onClick={closeNav}
            className="p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-500 hover:text-red-500 transition-all duration-200 group"
          >
            <IoClose
              size={24}
              className="group-hover:rotate-90 transition-transform duration-200"
            />
          </button>
        </div>

        {/* User Profile Section */}
        {/* <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <IoPersonCircle
                size={48}
                className="text-gray-400 dark:text-gray-500"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                John Doe
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                john.doe@example.com
              </p>
              <div className="mt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div> */}

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={item.label}>
                {/* Main Nav Item */}
                <div
                  className={`group flex items-center justify-between px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer ${
                    item.subItems ? "hover:shadow-sm" : ""
                  }`}
                  onClick={() =>
                    item.subItems ? toggleSubMenu(item.label) : null
                  }
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={item.subItems ? "#" : item.href}
                    className="flex items-center flex-1"
                    onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault();
                      } else {
                        closeNav();
                      }
                    }}
                  >
                    <span className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {item.icon}
                    </span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                  {item.subItems && (
                    <FiChevronRight
                      size={16}
                      className={`text-gray-400 transition-transform duration-200 ${
                        expandedItem === item.label ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Sub Items */}
                {item.subItems && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedItem === item.label
                        ? "max-h-96 opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-6 space-y-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={closeNav}
                          className="group flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                          style={{
                            animationDelay: `${index * 50 + subIndex * 25}ms`,
                            transform:
                              expandedItem === item.label
                                ? "translateX(0)"
                                : "translateX(-10px)",
                          }}
                        >
                          <div className="w-2 h-2 rounded-full bg-current opacity-30 group-hover:opacity-60 transition-opacity duration-200"></div>
                          <span className="ml-3">{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-3">
          <nav className="space-y-1">
            {bottomNavItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeNav}
                className="group flex items-center px-3 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
              >
                <span className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {item.icon}
                </span>
                <span className="ml-3">{item.label}</span>
              </Link>
            ))}

            {/* Logout Button */}
            {/* <button
              onClick={() => {
                // Handle logout logic here
                closeNav();
              }}
              className="w-full group flex items-center px-3 py-3 text-sm font-medium text-red-600 dark:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
            >
              <IoLogOut
                size={22}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
              <span className="ml-3">Sign Out</span>
            </button> */}
          </nav>
        </div>
      </div>
    </>
  );
});

SideNav.displayName = "SideNav";

export default SideNav;
