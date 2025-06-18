"use client";

import { BackgroundImage } from "@/features/landing/hero/background-image";
import { Navigation } from "@/components/layout/navigation";
import { SecondaryNav } from "@/features/landing/secondary-nav";
import { HeroContent } from "@/components/hero-content";
import { GraphicSection } from "../about-us/ui/components/graphic-section";
import { AreasOfExpertise } from "./areas-of-expertise";

export default function Expertise() {
  const secondaryNavigationItems = [
    { label: "Areas of expertise", href: "#areas-of-expertise" },
    { label: "Publications", href: "#publications" },
  ];

  return (
    <>
      <div className="relative h-[60vh] md:h-[90vh] w-full">
        {/* Background Image with Gradient Overlays */}
        <BackgroundImage
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_55/v1742876740/william-topa-x9AZgR25G-k-unsplash_pfi9zf.webp"
          alt="Ocean view with offshore structures"
        />

        {/* Navigation and Content */}

        <Navigation />
        <HeroContent
          title="PEC: An all-round quality civil engineering consultancy"
          page="Expertise"
        />
      </div>
      <SecondaryNav
        initialActiveItem="#what-we-do"
        navItems={secondaryNavigationItems}
      />
      {/* What We Do Section */}
      <div id="areas-of-expertise">
        <AreasOfExpertise />
      </div>

      <GraphicSection
        imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_61/v1742770900/How-Solar-Panels-Are-Beneficial-for-the-Environment-2048x1365_i2ppd3.webp"
        section="About us"
        title="What we do at PEC"
        linkText="Learn more"
        linkUrl="/about-us"
      />
    </>
  );
}
