"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "../mega-menu/mega-menu";
import type { MegaMenuData } from "../mega-menu/menu-data";
import Image from "next/image";

interface NavigationItem {
  label: string;
  href: string;
  key: string;
}

interface NavigationProps {
  navigationItems: NavigationItem[];
  megaMenuData: MegaMenuData;
}

export function Navigation({ navigationItems, megaMenuData }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isNavbarWhite, setIsNavbarWhite] = useState(false);

  // Handle mouse enter on navigation item
  const handleMouseEnter = (key: string) => {
    setActiveMenu(key);
    setIsNavbarWhite(true);
  };

  // Handle mouse leave from navigation area
  const handleMouseLeave = () => {
    setActiveMenu(null);
    setIsNavbarWhite(false);
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <motion.header
        className={`relative z-50 ${isNavbarWhite ? "bg-white" : "bg-transparent"}`}
        animate={{
          backgroundColor: isNavbarWhite ? "#ffffff" : "transparent",
        }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 py-6 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.span
                className="text-3xl font-bold"
                animate={{
                  color: isNavbarWhite ? "#111827" : "#ffffff",
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={
                    isNavbarWhite
                      ? "/PEC-logo-on-light.svg"
                      : "/PEC-logo-on-dark.svg"
                  }
                  width={200}
                  height={200}
                  alt="PEC logo"
                />
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.key)}
                >
                  <Link href={item.href} className="py-2">
                    <motion.span
                      className={`${activeMenu === item.key ? "border-b-2 border-blue-600 font-medium" : ""}`}
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

            {/* Right Side Icons and Button */}
            <div className="hidden md:flex items-center space-x-4">
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
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-white border-white hover:bg-white/10"
                }
              >
                Get in touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden"
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

      {/* Mega Menu with Framer Motion */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            className="absolute left-0 right-0 w-full bg-white shadow-lg z-40"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.5, y: -300, transition: { duration: 0.2 } }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
              y: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            }}
            style={{ marginTop: "-1px", backgroundColor: "red" }}
          >
            <MegaMenu activeMenu={activeMenu} data={megaMenuData} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-black/90 p-4 z-30"
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
                className="text-white border-white hover:bg-white/10 mt-4"
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
