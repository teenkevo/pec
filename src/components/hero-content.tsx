import { BackgroundImage } from "@/features/landing/hero/background-image";
import { SecondaryNav } from "@/features/landing/secondary-nav";
import { Navigation } from "./layout/navigation";

interface HeroSectionProps {
  title: string;
  page?: string;
  secondaryNavigationItems: { label: string; href: string }[];
  initialActiveItem?: string;
  imageUrl: string;
  alt: string;
}

export function HeroSection({ title, page, secondaryNavigationItems, initialActiveItem, imageUrl, alt }: HeroSectionProps) {
  return (
    <>
      <div className="relative h-[60vh] md:h-[90vh] w-full">
        <BackgroundImage
          imageUrl={imageUrl}
          alt={alt}
        />
        <Navigation />
        <div className="px-4 md:px-14 absolute bottom-5 md:bottom-16 max-w-5xl">
          <span className="text-white py-1 text-lg">{page}</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tighter leading-10 mt-5">
            {title}
          </h1>
        </div>
      </div>
      <SecondaryNav
        initialActiveItem={initialActiveItem?? secondaryNavigationItems[0].href}
        navItems={secondaryNavigationItems}
      />
    </>
  );
}
