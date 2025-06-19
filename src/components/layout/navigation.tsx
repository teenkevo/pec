"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Search, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { MegaMenu } from "@/components/mega-menu/mega-menu";
import {
  megaMenuData,
  type MegaMenuData,
} from "@/components/mega-menu/menu-data";

interface NavigationItem {
  label: string;
  href: string;
  key: string;
}

const navigationItems: NavigationItem[] = [
  { label: "Industries", href: "/industries", key: "industries" },
  { label: "Expertise", href: "/expertise", key: "expertise" },
  { label: "Projects", href: "/projects", key: "projects" },
  { label: "Clients", href: "/clients", key: "clients" },
  { label: "About us", href: "/about-us", key: "about-us" },
  { label: "Careers", href: "/careers", key: "careers" },
  { label: "Blog", href: "/blog", key: "blog" },
];

interface NavigationProps {
  megaMenuData: MegaMenuData;
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isNavbarWhite, setIsNavbarWhite] = useState(false);
  const scrollPositionRef = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle mouse enter on navigation item
  const handleMouseEnter = (key: string) => {
    // Only store scroll position when first opening the menu
    if (!activeMenu && typeof window !== "undefined") {
      scrollPositionRef.current = window.scrollY;
    }
    setActiveMenu(key);
    setIsNavbarWhite(true);
  };

  // Handle mouse leave from navigation area
  const handleMouseLeave = () => {
    setActiveMenu(null);
    setIsNavbarWhite(false);
  };

  // Disable/enable scrolling when mega menu is open/closed
  useEffect(() => {
    if (typeof window === "undefined") return;

    const disableScroll = () => {
      // Add styles to body to prevent scrolling
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
    };

    const enableScroll = () => {
      // Remove styles from body
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPositionRef.current);
    };

    if (activeMenu) {
      disableScroll();
    } else {
      enableScroll();
    }

    // Cleanup function to ensure scrolling is re-enabled
    return () => {
      if (
        typeof window !== "undefined" &&
        document.body.style.position === "fixed"
      ) {
        enableScroll();
      }
    };
  }, [activeMenu]);

  return (
    <div className="relative" onMouseLeave={handleMouseLeave} ref={navRef}>
      <motion.header
        className={`relative z-50 ${isNavbarWhite ? "bg-white" : "bg-transparent"}`}
        animate={{
          backgroundColor: isNavbarWhite ? "#ffffff" : "transparent",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="mx-auto px-4 py-6 md:px-14">
          <div className="flex items-center justify-between">
            <div className="flex space-x-10">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src={
                    isNavbarWhite
                      ? "/PEC-logo-on-light.svg"
                      : "/PEC-logo-on-dark.svg"
                  }
                  width={150}
                  height={150}
                  alt="PEC logo"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.key)}
                  >
                    <Link href={item.href} className="py-2">
                      <motion.span
                        className={`${activeMenu === item.key ? "border-b-2 border-[#EB3301] font-medium" : ""}`}
                        animate={{
                          color: isNavbarWhite ? "#374151" : "#ffffff",
                        }}
                        whileHover={{ color: "#111827" }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Side Icons and Button */}
            <div className="hidden xl:flex items-center space-x-4">
              <motion.button
                aria-label="Search"
                animate={{
                  color: isNavbarWhite ? "#374151" : "#ffffff",
                }}
                whileHover={{ color: isNavbarWhite ? "#111827" : "#d1d5db" }}
                transition={{ duration: 0.2 }}
              >
                <Search className="h-5 w-5" />
              </motion.button>
              <motion.button
                aria-label="User account"
                animate={{
                  color: isNavbarWhite ? "#374151" : "#ffffff",
                }}
                whileHover={{ color: isNavbarWhite ? "#111827" : "#d1d5db" }}
                transition={{ duration: 0.2 }}
              >
                <User className="h-5 w-5" />
              </motion.button>
              <div
                className={`h-6 w-px ${isNavbarWhite ? "bg-gray-300" : "bg-gray-400"} mx-2`}
              ></div>
              <Button
                variant={isNavbarWhite ? "default" : "outline"}
                className={
                  isNavbarWhite
                    ? "bg-[#128191] text-white hover:bg-[#128191]"
                    : "text-white border-white hover:bg-white"
                }
              >
                Get in touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="xl:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              animate={{
                color: isNavbarWhite ? "#111827" : "#ffffff",
              }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>
      <hr
        className={`border-t ${isNavbarWhite ? "border-gray-600" : "border-white"} mx-4 md:mx-14`}
      />

      {/* Mega Menu with Framer Motion */}
      <AnimatePresence mode="wait">
        {activeMenu && (
          <motion.div
            className="fixed left-0 right-0 w-full bg-white shadow-lg z-40"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              y: "-100%",
              opacity: 0,
              transition: {
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              y: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            }}
            style={{
              top: 0,
              paddingTop: "calc(var(--header-height, 30px))",
            }}
          >
            <MegaMenu activeMenu={activeMenu} data={megaMenuData} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="xl:hidden absolute top-full left-0 right-0 bg-black p-4 z-30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <button
                  aria-label="Search"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
                <button
                  aria-label="User account"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <User className="h-5 w-5" />
                </button>
              </div>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-[#128191] mt-4"
              >
                Get in touch
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
