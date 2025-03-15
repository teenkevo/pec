"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MegaMenuData } from "./menu-data";

interface MegaMenuProps {
  activeMenu: string | null;
  data: MegaMenuData;
}

export function MegaMenu({ activeMenu, data }: MegaMenuProps) {
  if (!activeMenu || !data[activeMenu]) return null;

  const menuData = data[activeMenu];

  return (
    <div className="absolute left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out transform origin-top">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left section - Title and description */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {menuData.title}
          </h2>
          {menuData.description && (
            <p className="text-gray-600 mb-4">{menuData.description}</p>
          )}

          {/* Main link to section */}
          <Link
            href={`#${activeMenu}`}
            className="inline-flex items-center text-gray-900 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50"
          >
            <span>{menuData.title}</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Middle section - Menu items */}
        <div className="col-span-1">
          <ul className="space-y-4">
            {menuData.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right section - Featured image */}
        {menuData.featuredImage && (
          <div className="col-span-1 relative">
            <div className="relative h-60 w-full overflow-hidden rounded-lg">
              <Image
                src={menuData.featuredImage.src || "/placeholder.svg"}
                alt={menuData.featuredImage.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-wider bg-white/20 px-2 py-1 rounded-sm mb-2 inline-block">
                    {menuData.title}
                  </span>
                  <p className="text-lg font-medium">
                    {menuData.featuredImage.caption}
                  </p>
                  <button className="mt-2 p-2 border border-white rounded-sm">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
