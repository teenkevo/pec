"use client";

import { ContentSection } from "@/features/landing/content-section";
import { BackgroundImage } from "@/features/landing/hero/background-image";
import { Navigation } from "@/components/layout/navigation";
import { megaMenuData } from "@/features/landing/mega-menu/menu-data";
import { SecondaryNav } from "@/features/landing/secondary-nav";
import { IndustryBanner } from "../industry-banner";
import { ProjectsSection } from "@/features/landing/projects-section";
import { CareersSection } from "@/features/landing/careers-section";
import { HeroContent } from "../hero-content";
import { IndustryLead } from "../industry-lead";
import { IndustryView } from "../industry-view";
import { IndustryTopProjectBanner } from "../industry-top-project-banner";
import { ProjectsSection2 } from "@/features/landing/projects-section-2";
import { NewsSection } from "@/features/landing/news-section";
import { TechnicalPapers } from "../industry-technical-papers";
import { IndustryContactSection } from "../industry-contact";

export default function Water() {

  const secondaryNavigationItems = [
    { label: "Our view", href: "#our-view" },
    { label: "Projects", href: "#projects" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ];

  // Content for the "What we do" section
  const ourView =
    "Did you know that access to clean and reliable water remains a significant challenge in many parts of Africa? For countless communities, this vital resource is scarce, yet essential for health, agriculture, and economic growth. At PEC, we are committed to delivering innovative water engineering solutions that improve access to clean water and support sustainable resource management. From designing efficient supply systems to developing resilient drainage and treatment infrastructure, we tailor our solutions to meet your quality, sustainability, and budget needs.";

  // Define the case studies data
  const projects = [
    {
      id: "river-basin",
      title:
        "Consultancy Services for the Design Review and Construction Supervision for the Capacity Improvement of the Kampala Northern Bypass – Phase 2 (17.5 Km)",
      image:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp",
      location: "Kampala, Uganda",
      featured: true,
      industry: "Transport",
    },
    {
      id: "pipeline-surveys",
      title:
        "Geotechnical Investigations Along the EACOP Pipeline (MLBV/LLHT) Substations",
      image:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_62/v1726663404/IMG_20240821_145954_2_uozsb8.webp",
      location: "Rakai, Uganda",
      featured: false,
      industry: "Materials and Geotechnics",
    },
    {
      id: "seismic-refraction",
      title:
        "Design review and Construction Supervision of Walukuba Market in Buliisa District under World Bank funded Albertine Region Sustainable Development Project (ARSDP)",
      image:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742858084/Picture_1_fyqvib.webp",
      location: "Fortportal, Uganda",
      featured: false,
      industry: "Structures",
    },
  ];

  return (
    <>
      <div className="relative h-[60vh] md:h-[90vh] w-full">
        {/* Background Image with Gradient Overlays */}
        <BackgroundImage
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1742339704/02_1_zckrbq.webp"
          alt="Ocean view with offshore structures"
        />

        {/* Navigation and Content */}

        <Navigation
          megaMenuData={megaMenuData}
        />
        <HeroContent
          title="Engineering sustainable water & waste water management solutions"
          industry="Water"
        />
      </div>
      <SecondaryNav
        initialActiveItem="#our-view"
        navItems={secondaryNavigationItems}
      />
      {/* What We Do Section */}
      <div id="our-view">
        <IndustryView
          id="our-view"
          heading="Our view on water"
          content={ourView}
          linkText="Read about our purpose"
          linkUrl="/about-us/what-we-do"
          industryLeadTitle="Industry lead - Water"
          industryLeadImageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_56/v1742405809/elizeu-dias-2EGNqazbAMk-unsplash_ofwryg.webp"
          industryLeadName="Eng. Thomas Isanga"
        />
      </div>
      <div id="water" className="px-4 md:px-14">
        <IndustryTopProjectBanner
          industry="Water"
          description="Engineering supervision of construction works for Bugologi sewerage treatment plant"
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_57/v1742414942/ivan-bandura-Ac97OqAWDvg-unsplash_nfb7zo.webp"
          iconText="View project"
        />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects}
          title="Water projects"
          linkText="Explore all"
        />
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>

      <div id="publications">
        <TechnicalPapers />
      </div>
      {/* News Section */}
      <div id="news-highlights">
        <NewsSection />
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>
      <div id="contact">
        <IndustryContactSection
          industry="Water"
          contactPerson={{
            title: "Industry lead - Water",
            imageUrl:
              "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_56/v1742405809/elizeu-dias-2EGNqazbAMk-unsplash_ofwryg.webp",
            name: "Eng. Thomas Isanga",
          }}
        />
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 my-10"></div>
      <div id="careers">
        <CareersSection />
      </div>
    </>
  );
}
