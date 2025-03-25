"use client";

import { ContentSection } from "@/features/landing/content-section";
import { BackgroundImage } from "@/features/landing/hero/background-image";
import { Navigation } from "@/features/landing/hero/navigation";
import { megaMenuData } from "@/features/landing/mega-menu/menu-data";
import { SecondaryNav } from "@/features/landing/secondary-nav";
import { IndustryBanner } from "../industry-banner";
import { ProjectsSection } from "@/features/landing/projects-section";
import { CareersSection } from "@/features/landing/careers-section";
import { Footer } from "@/features/landing/footer";
import { HeroContent } from "../hero-content";
import { IndustryLead } from "../industry-lead";
import { IndustryView } from "../industry-view";
import { IndustryTopProjectBanner } from "../industry-top-project-banner";
import { ProjectsSection2 } from "@/features/landing/projects-section-2";
import { NewsSection } from "@/features/landing/news-section";
import { TechnicalPapers } from "../industry-technical-papers";
import { IndustryContactSection } from "../industry-contact";

export default function Transport() {
  const navigationItems = [
    { label: "Industries", href: "/industries", key: "industries" },
    { label: "Services", href: "/services", key: "services" },
    { label: "Careers", href: "/careers", key: "careers" },
    { label: "Investors", href: "/investors", key: "investors" },
    { label: "News", href: "/news", key: "news" },
    { label: "About us", href: "/about-us", key: "about-us" },
  ];

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
      title: "Kızılırmak river basin hydrogeological investigation",
      image:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp",
      location: "Kampala, Uganda",
      featured: true,
      industry: "Hydrology",
    },
    {
      id: "pipeline-surveys",
      title: "Beyond tradition: redefining pipeline surveys with remote...",
      image:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_64/v1742072211/IMG_7455_2_i3bpiw.webp",
      location: "Kampala, Uganda",
      featured: false,
      industry: "Surveying",
    },
    {
      id: "seismic-refraction",
      title: "Seismic Refraction: 85% Faster Island Data",
      image:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_66/v1725968449/D1MqaczXcAUaOuB_o9n01n.webp",
      location: "Fortportal, Uganda",
      featured: false,
      industry: "Geophysics",
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
          navigationItems={navigationItems}
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
      <Footer />
    </>
  );
}
