"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const scrollingRef = useRef(false);

  // Separate "Jump to" from the navigation items
  const jumpToLabel = { label: "Jump to", hasDropdown: true };

  const navItems = [
    { label: "What we do", href: "#what-we-do" },
    { label: "Our industries", href: "#our-industries" },
    { label: "Projects", href: "#projects" },
    { label: "Organisation", href: "#organisation" },
    { label: "Careers", href: "#careers" },
    { label: "News highlights", href: "#news-highlights" },
    { label: "History", href: "#history" },
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

  // Set up intersection observer to track which section is in view
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const observerOptions = {
      root: null, // viewport
      rootMargin: "-10% 0px -80% 0px", // Consider section in view when it's 10% from the top
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5], // Multiple thresholds for smoother transitions
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Don't update during programmatic scrolling
      if (scrollingRef.current) return;

      // Find the most visible section
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries.length > 0) {
        const newActiveItem = `#${visibleEntries[0].target.id}`;
        if (activeItem !== newActiveItem) {
          setActiveItem(newActiveItem);
        }
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Cleanup
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [navItems, activeItem]);

  // Handle navigation item click
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveItem(href);

    // Set scrolling flag to prevent intersection observer from changing active item during programmatic scroll
    scrollingRef.current = true;

    // Get the target element
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate offset to account for sticky header
      const navHeight = navRef.current?.offsetHeight || 0;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

      // Smooth scroll to the target
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Reset scrolling flag after animation completes (shorter timeout)
      setTimeout(() => {
        scrollingRef.current = false;
      }, 800); // Reduced from 1000ms for quicker response
    }
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
                className={`whitespace-nowrap py-4 px-4 text-gray-700 hover:text-[#EB3300] transition-colors block ${
                  activeItem === item.href ? "text-[#EB3300]" : ""
                }`}
                onClick={(e) => handleNavClick(item.href, e)}
              >
                {item.label}
              </Link>
              <div
                className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#EB3300] transition-all duration-300 ease-in-out ${
                  activeItem === item.href ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
