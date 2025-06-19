import { BackgroundImage } from "@/features/home/hero/background-image";
import { SecondaryNav } from "@/components/layout/secondary-nav";
import { Navigation } from "@/components/layout/navigation";
import { BackgroundImageSlideshow } from "@/features/home/hero/background-image-slide-show";
import { HomeHeroContent } from "@/features/home/hero/hero-content";

interface SlideShowContent {
  images: { imageUrl: string; alt: string }[];
  content: {
    title: string;
    description: string;
    industry: string;
    industryUrl: string;
  }[];
}

interface HeroSectionProps {
  title?: string;
  page?: string;
  secondaryNavigationItems: { label: string; href: string }[];
  initialActiveItem?: string;
  backgroundImage?: string;
  isHome?: boolean;
  slides?: SlideShowContent;
}

export function HeroSection({
  title,
  page,
  secondaryNavigationItems,
  initialActiveItem,
  backgroundImage,
  slides,
  isHome = false,
}: HeroSectionProps) {
  return (
    <>
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        {isHome && slides ? (
          <>
            <HomeHeroContent slides={slides.content} />
            <BackgroundImageSlideshow images={slides.images} interval={5000} />
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
        <Navigation />
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
