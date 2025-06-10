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

export default function Materials() {

  const secondaryNavigationItems = [
    { label: "Our view", href: "#our-view" },
    { label: "Projects", href: "#projects" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ];

  // Content for the "What we do" section
  const ourView =
    "The ground beneath our feet is the foundation of every structure, yet it presents some of the most complex engineering challenges. In many parts of Africa, diverse soil conditions, unstable terrain, and resource constraints add further complexity to building safe and resilient infrastructure. Our materials and geotechnics experts provide innovative solutions that ensure stability, durability, and performance. Through advanced site investigations, soil analysis, and material testing, we deliver data-driven insights that guide smart design and construction decisions. From highways to high-rises, we help build strong foundations that support safer communities and sustainable development.";

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
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1726662738/IMG_20240817_112347_umok4y.webp"
          alt="Ocean view with offshore structures"
        />

        {/* Navigation and Content */}

        <Navigation
          megaMenuData={megaMenuData}
        />
        <HeroContent
          title="Building strong foundations with innovative geotechnical and materials solutions"
          industry="Geotechnics"
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
          heading="Our view on materials and geotechnics"
          content={ourView}
          linkText="Read about our purpose"
          linkUrl="/about-us/what-we-do"
          industryLeadTitle="Industry lead - Materials and Geotechnics"
          industryLeadImageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_56/v1742405809/elizeu-dias-2EGNqazbAMk-unsplash_ofwryg.webp"
          industryLeadName="Eng. Ivan Masuba"
        />
      </div>
      <div id="top-project" className="px-4 md:px-14">
        <IndustryTopProjectBanner
          industry="Transport"
          description="Geotechnical Investigations Along the EACOP Pipeline (MLBV/LLHT) Substations"
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_62/v1726505468/AdobeStock_187573481_1_bvqpk5.webp"
          iconText="View project"
        />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects}
          title="Materials projects"
          linkText="Explore all"
        />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-20"></div>
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
          industry="Transport"
          contactPerson={{
            title: "Industry lead - Materials and Geotechnics",
            imageUrl:
              "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_56/v1742405809/elizeu-dias-2EGNqazbAMk-unsplash_ofwryg.webp",
            name: "Eng. Ivan Masuba",
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
