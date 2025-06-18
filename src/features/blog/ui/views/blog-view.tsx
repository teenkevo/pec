import { HeroSection } from "@/components/hero-section";

export const BlogView = () => {
  const secondaryNavigationItems = [
    { label: "News", href: "#news" },
    { label: "Insights", href: "#insights" },
    { label: "Press Releases", href: "#press" },
    { label: "Events", href: "#events" },
  ];
  return (
    <>
      <HeroSection
        title={"Latest news and insights"}
        page={"Blog"}
        secondaryNavigationItems={secondaryNavigationItems}
        initialActiveItem="#news"
        imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_68/v1742342734/scott-blake-x-ghf9LjrVg-unsplash_nrmovu.webp"
        alt="Ocean view with offshore structures"
      />
    </>
  );
};
