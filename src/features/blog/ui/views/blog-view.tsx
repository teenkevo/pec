import { HeroContent } from "@/components/hero-content";
import { Navigation } from "@/components/layout/navigation";
import { BackgroundImage } from "@/features/landing/hero/background-image";
import { SecondaryNav } from "@/features/landing/secondary-nav";
import { urlFor } from "@/sanity/lib/image";

export const BlogView = () => {
  const secondaryNavigationItems = [
    { label: "News", href: "#news" },
    { label: "Insights", href: "#insights" },
    { label: "Press Releases", href: "#press" },
    { label: "Events", href: "#events" },
  ];
  return (
    <>
      <div className="relative h-[60vh] md:h-[90vh] w-full">
        <BackgroundImage
          imageUrl={
            "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_68/v1742342734/scott-blake-x-ghf9LjrVg-unsplash_nrmovu.webp"
          }
          alt="Ocean view with offshore structures"
        />
        <Navigation />
        <HeroContent
          title={"Latest news and insights"}
          page={"Blog"}
        />
      </div>
      <SecondaryNav
        initialActiveItem="#news"
        navItems={secondaryNavigationItems}
      />
    </>
  );
};
