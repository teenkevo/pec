"use client";

import { ContentSection } from "@/features/landing/content-section";
import { BackgroundImage } from "@/features/landing/hero/background-image";
import { Navigation } from "@/components/layout/navigation";
import { SecondaryNav } from "@/features/landing/secondary-nav";
import { ProjectsSection } from "@/features/landing/projects-section";
import { CareersSection } from "@/features/landing/careers-section";
import { Footer } from "@/components/layout/footer";
import { NewsSection } from "@/features/landing/news-section";
import { HeroContent } from "../about-us/hero-content";
import { CompanyStats } from "../about-us/company stats";
import { Section } from "../about-us/section";
import { GraphicSection } from "../about-us/graphic-section";
import { ValuesSection } from "../about-us/values";
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
