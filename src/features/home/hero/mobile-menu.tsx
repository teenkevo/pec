import Link from "next/link";
import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  items: NavigationItem[];
}

export function MobileMenu({ items }: MobileMenuProps) {
  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 p-4 z-30">
      <nav className="flex flex-col space-y-4">
        {items.map((item) => (
          <Link
            key={item.href}
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
    </div>
  );
}
