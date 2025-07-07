import { BackgroundImage } from "@/components/background-image";
import { SecondaryNav } from "@/components/layout/secondary-nav";
import { Navigation } from "@/components/layout/navigation";
import { BackgroundImageSlideshow } from "@/features/home/ui/components/background-image-slide-show";
import { HomeHeroContent } from "@/features/home/ui/components/home-hero-content";
import { cn } from "@/lib/utils";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { sanityFetch } from "@/sanity/lib/live";
import {
  INDUSTRIES_MENU_DATA,
  MENU_INDUSTRIES_QUERY,
} from "@/features/industries/lib/queries";
import { MegaMenuData, megaMenuData } from "@/constants/menu-data";
import { urlFor } from "@/sanity/lib/image";

export interface SlideShowContent {
  images: { alt: string; asset: SanityAsset }[];
  content: {
    title: string;
    description: string;
    industry: string;
    projectSlug: string;
    industrySlug: string;
  }[];
}

interface HeroSectionProps {
  title?: string;
  page?: string;
  secondaryNavigationItems: { title: string; href: string }[];
  initialActiveItem?: string;
  backgroundImage?: string;
  isHome?: boolean;
  slides?: SlideShowContent;
}

/**
 * Renders a hero section with dynamic background imagery, navigation, and optional slideshow content.
 *
 * Displays either a slideshow with content overlays for the home page or a static background image with title and page text for other pages. Integrates navigation menus with dynamically fetched industry data and renders a secondary navigation bar.
 *
 * @param title - The main heading text for the hero section
 * @param page - The page label or subtitle displayed above the title
 * @param secondaryNavigationItems - List of secondary navigation items to display below the hero section
 * @param initialActiveItem - The href of the initially active secondary navigation item; defaults to the first item if not provided
 * @param backgroundImage - URL of the background image to display when not on the home page
 * @param slides - Slideshow content and images for the home page hero section
 * @param isHome - Whether the hero section is rendered on the home page, enabling slideshow mode
 * @returns The rendered hero section as a React element
 */
export async function HeroSection({
  title,
  page,
  secondaryNavigationItems,
  initialActiveItem,
  backgroundImage,
  slides,
  isHome = false,
}: HeroSectionProps) {
  const {
    data,
  }: {
    data: INDUSTRIES_MENU_DATA;
  } = await sanityFetch({
    query: MENU_INDUSTRIES_QUERY,
  });

  const megaData: MegaMenuData = {
    ...megaMenuData,
    projects: {
      ...megaMenuData["projects"],
      items: data.industries,
      featuredImage: megaMenuData.projects.featuredImage,
    },
  };

  return (
    <>
      <div
        className={cn(
          "relative  w-full isolate",
          isHome ? "h-[80vh] md:h-[90vh]" : "h-[60vh] md:h-[70vh]"
        )}
      >
        {isHome && slides ? (
          <>
            <BackgroundImageSlideshow images={slides.images} interval={8000} />
            <HomeHeroContent slides={slides.content} />
          </>
        ) : (
          <>
            <BackgroundImage
              imageUrl={
                backgroundImage ??
                "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1742339703/DJI_0013-UG_1_wrmkeg.webp"
              }
              alt={title ?? "PEC Homepage"}
            />
            <div className="px-4 md:px-14 absolute bottom-5 md:bottom-16 max-w-5xl">
              <span className="text-white py-1 text-lg">{page}</span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tighter leading-10 mt-5">
                {title}
              </h1>
            </div>
          </>
        )}
        <Navigation megaData={megaData} />
      </div>
      <SecondaryNav
        initialActiveItem={
          initialActiveItem ?? secondaryNavigationItems[0].href
        }
        navItems={secondaryNavigationItems}
      />
    </>
  );
}
