"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface SecondaryNavProps {
  className?: string;
  initialActiveItem?: string;
}

export function SecondaryNav({
  className = "",
  initialActiveItem = "#what-we-do",
}: SecondaryNavProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [activeItem, setActiveItem] = useState(initialActiveItem);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Separate "Jump to" from the navigation items
  const jumpToLabel = { label: "Jump to", hasDropdown: true };

  const navItems = [
    { label: "What we do", href: "#what-we-do" },
    { label: "Our industries", href: "#our-industries" },
    { label: "Case studies", href: "#case-studies" },
    { label: "Organisation", href: "#organisation" },
    { label: "Careers", href: "#careers" },
    { label: "News highlights", href: "#news-highlights" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navPosition = navRef.current.getBoundingClientRect().top;
        setIsSticky(navPosition <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation item click
  const handleNavClick = (href: string) => {
    setActiveItem(href);
  };

  return (
    <div
      ref={navRef}
      className={`w-full border-b border-gray-200 bg-white ${className} ${
        isSticky ? "sticky top-0 z-30 shadow-sm" : ""
      }`}
    >
      <div className="mx-auto px-4 md:px-14">
        <nav className="flex items-center overflow-x-auto">
          {/* Jump to label (not a link) */}
          <div className="whitespace-nowrap py-4 pr-4 pl-0 font-semibold text-black flex items-center">
            {jumpToLabel.label}
          </div>

          {/* Navigation links */}
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <Link
                href={item.href}
                className={`whitespace-nowrap py-4 px-4 text-gray-700 hover:text-orange-500 transition-colors block ${
                  activeItem === item.href ? "text-orange-500" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </Link>
              {activeItem === item.href && (
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
