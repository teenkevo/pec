"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type MegaMenuData } from "../../constants/menu-data";
import { motion } from "framer-motion";

interface MegaMenuProps {
  activeMenu: string | null;
  data: MegaMenuData;
}

export function MegaMenu({ activeMenu, data }: MegaMenuProps) {
  if (!activeMenu || !data[activeMenu]) return null;

  const menuData = data[activeMenu];

  if (!menuData || menuData.items === null) return;

  return (
    <div className="absolute left-0 right-0 bg-gray-100 z-90 transition-all duration-300 ease-in-out transform origin-top pt-20">
      <div className="mx-auto px-4 py-10 md:px-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left section - Title and description */}
        <div className="col-span-1">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            {menuData.title}
          </h2>
          {menuData.description && (
            <p className="text-gray-600 mb-4">{menuData.description}</p>
          )}

          {/* Main link to section */}
          <Link
            href={`/${activeMenu}`}
            className="inline-flex items-center text-gray-900 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50"
          >
            <span>{menuData.title}</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Middle section - Menu items */}
        <div className="col-span-1 border-l pl-10 border-l-gray-400">
          <ul className="space-y-4">
            {menuData.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={
                    menuData.hasSubsections
                      ? `/${menuData.path}#${item.href} `
                      : menuData.path === "projects"
                        ? `/industries/${item.href}`
                        : `/${item.href}`
                  }
                  className="text-gray-700 text-xl font-semibold hover:text-gray-900 hover:underline"
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right section - Featured image */}
        {menuData.featuredImage && (
          <div className="col-span-1 relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <Image
                src={menuData.featuredImage.src || "/placeholder.svg"}
                alt={menuData.featuredImage.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <div className="flex space-x-4 justify-between items-center">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider bg-white/20 px-2 py-1 rounded-sm mb-2 inline-block">
                      {menuData.title}
                    </span>
                    <p className="text-lg font-medium line-clamp-3">
                      {menuData.featuredImage.caption}
                    </p>
                  </div>
                  <div className="mt-5">
                    <Link
                      href="/expertise"
                      className={`inline-flex items-center text-white font-medium group`}
                    >
                      <span className="group-hover:bg-white border border-white p-1 group-hover:translate-x-1 transition-transform mr-5">
                        <ArrowRight className="group-hover:text-[#EB3300]" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
