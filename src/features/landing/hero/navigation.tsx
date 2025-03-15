"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import Image from "next/image";

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
}

export function Navigation({ items }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative px-4 py-6 md:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/PEC-logo-on-dark.svg"
            width={200}
            height={200}
            alt="PEC logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Icons and Button */}
        <div className="hidden md:flex items-center space-x-4">
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
          <div className="h-6 w-px bg-gray-400 mx-2"></div>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            Get in touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu items={items} />}
    </header>
  );
}
