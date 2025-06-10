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

export default function Transport() {

  const secondaryNavigationItems = [
    { label: "Our view", href: "#our-view" },
    { label: "Projects", href: "#projects" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ];

  // Content for the "What we do" section
  const ourView =
    "Efficient and reliable transportation networks are vital for economic growth and community well-being. As urbanisation accelerates and mobility demands increase, the need for sustainable, innovative transport solutions has never been greater. At PEC we are committed to shaping the future of transportation by delivering sustainable infrastructure that connects people, businesses, and communities";

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
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_66/v1725968449/D1MqaczXcAUaOuB_o9n01n.webp"
          alt="Ocean view with offshore structures"
        />

        {/* Navigation and Content */}

        <Navigation
          megaMenuData={megaMenuData}
        />
        <HeroContent
          title="Connecting cities and communities with reliable transportation corridors"
          industry="Transport"
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
          heading="Our view on transport"
          content={ourView}
          linkText="Read about our purpose"
          linkUrl="/about-us/what-we-do"
          industryLeadTitle="Industry lead - Transport"
          industryLeadImageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_56/v1742405809/elizeu-dias-2EGNqazbAMk-unsplash_ofwryg.webp"
          industryLeadName="Eng. Bakaki Charles"
        />
      </div>
      <div id="transport" className="px-4 md:px-14">
        <IndustryTopProjectBanner
          industry="Transport"
          description="Consultancy services for the emergency reconstruction of Ssezibwa bridge"
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_60/v1742411220/alexander-schimmeck-VWDwCIITqO8-unsplash_q3qrdk.webp"
          iconText="View project"
        />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects}
          title="Transport projects"
          linkText="Explore all"
        />
      </div>
      <div id="projects">
        <ProjectsSection2
          projects={projects}
          title="Transport projects"
          linkText="All transport projects"
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
            title: "Industry lead - Tranport",
            imageUrl:
              "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_56/v1742405809/elizeu-dias-2EGNqazbAMk-unsplash_ofwryg.webp",
            name: "Eng. Bakaki Charles",
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
