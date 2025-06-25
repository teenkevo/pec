"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { MegaMenu } from "@/components/layout/mega-menu";
import { megaMenuData, type MegaMenuData } from "@/constants/menu-data";

interface NavigationItem {
  label: string;
  href: string;
}

const navigationItems: NavigationItem[] = Object.entries(megaMenuData).map(
  ([, section]) => ({
    label: section.title,
    href: section.path,
  })
);

interface Props {
  megaData?: MegaMenuData;
}

/**
 * Slide‑in drawer + backdrop mounted in a React portal.
 * The drawer remains outside every intermediate stacking context,
 * so z‑index bugs disappear.
 */
function MobileDrawer({
  navigationItems,
  close,
}: {
  navigationItems: NavigationItem[];
  close: () => void;
}) {
  return createPortal(
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        className="fixed inset-0 bg-black/50 z-[60] xl:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={close}
      />

      {/* Drawer */}
      <motion.div
        key="drawer"
        className="fixed inset-0 z-[70] flex flex-col bg-[#1a1a1a] xl:hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <Image
            src="/PEC-logo-on-dark.svg"
            width={120}
            height={120}
            alt="PEC logo"
            priority
          />
          <button
            onClick={close}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-6 py-8 overflow-y-auto">
          <div className="space-y-6">
            {navigationItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <Link
                  href={`/${item.href}`}
                  className="block text-white text-lg font-medium hover:text-[#EB3301] transition-colors py-2"
                  onClick={close}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-700 space-y-4">
          <div className="flex items-center space-x-4">
            <a
              aria-label="Webmail"
              href="https://pec.co.ug/webmail"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-[#EB3301] transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className=" text-gray-400 hover:text-[#EB3301] text-sm">
                Webmail
              </span>
            </a>
            <span className="hidden md:block text-gray-400 text-sm">
              Webmail
            </span>
          </div>

          <Button
            variant="outline"
            className="w-full text-white border-white hover:bg-white transition-colors"
            onClick={close}
          >
            Get in touch
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export function Navigation({ megaData }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isNavbarWhite, setIsNavbarWhite] = useState(false);
  const scrollPositionRef = useRef(0);

  // === mega‑menu hover logic (unchanged) ===
  const handleMouseEnter = (key: string) => {
    if (!activeMenu && typeof window !== "undefined") {
      scrollPositionRef.current = window.scrollY;
    }
    setActiveMenu(key);
    setIsNavbarWhite(true);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setIsNavbarWhite(false);
  };

  // === page‑scroll lock when mega‑menu open ===
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
    };
    const enableScroll = () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPositionRef.current);
    };

    if (activeMenu) disableScroll();
    else enableScroll();

    return enableScroll;
  }, [activeMenu]);

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      {/* === Header === */}
      <motion.header
        className="relative z-50"
        animate={{ backgroundColor: isNavbarWhite ? "#ffffff" : "transparent" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="mx-auto px-4 py-6 md:px-14">
          <div className="flex items-center justify-between">
            {/* Left cluster */}
            <div className="flex space-x-10">
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

              {/* Desktop nav */}
              <nav className="hidden xl:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.href)}
                  >
                    <Link href={`/${item.href}`} className="py-2">
                      <motion.span
                        className={
                          activeMenu === item.href
                            ? "border-b-2 border-[#EB3301] font-medium"
                            : ""
                        }
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

            {/* Right cluster */}
            <div className="hidden xl:flex items-center space-x-4">
              <motion.a
                aria-label="Webmail"
                animate={{ color: isNavbarWhite ? "#374151" : "#ffffff" }}
                whileHover={{ color: isNavbarWhite ? "#111827" : "#d1d5db" }}
                transition={{ duration: 0.2 }}
                href="https://pec.co.ug/webmail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
              </motion.a>

              <div
                className={`h-6 w-px ${isNavbarWhite ? "bg-gray-300" : "bg-gray-400"} mx-2`}
              />
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

            {/* Mobile burger */}
            <motion.button
              className="xl:hidden z-[80] relative"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Toggle menu"
              animate={{
                color: isMenuOpen
                  ? "#ffffff"
                  : isNavbarWhite
                    ? "#111827"
                    : "#ffffff",
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

      {/* === Mega menu === */}
      <AnimatePresence mode="wait">
        {activeMenu && (
          <motion.div
            className="fixed left-0 right-0 w-full bg-white shadow-lg z-40"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              y: "-100%",
              opacity: 0,
              transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              y: { type: "spring", stiffness: 300, damping: 30 },
            }}
            style={{ top: 0, paddingTop: "calc(var(--header-height, 30px))" }}
          >
            <MegaMenu activeMenu={activeMenu} data={megaData || megaMenuData} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Mobile drawer mounted through portal === */}
      {isMenuOpen && (
        <MobileDrawer
          navigationItems={navigationItems}
          close={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}
