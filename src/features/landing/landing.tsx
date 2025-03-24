"use client";

import { BackgroundImage } from "./hero/background-image";
import { Navigation } from "./hero/navigation";
import { HeroContent } from "./hero/hero-content";
import { megaMenuData } from "./mega-menu/menu-data";
import { SecondaryNav } from "./secondary-nav";
import { ContentSection } from "./content-section";
import { IndustriesSection } from "./industries-section";
import { ProjectsSection } from "./projects-section";
import { OrganisationSection } from "./organization-section";
import { CareersSection } from "./careers-section";
import { NewsSection } from "./news-section";
import { HistorySection } from "./history-section";
import { Footer } from "./footer";

export default function Landing() {
  const navigationItems = [
    { label: "Industries", href: "/industries", key: "industries" },
    { label: "Services", href: "/services", key: "services" },
    { label: "Projects", href: "/projects", key: "projects" },
    { label: "Careers", href: "/careers", key: "careers" },
    { label: "Investors", href: "/investors", key: "investors" },
    { label: "News", href: "/news", key: "news" },
    { label: "About us", href: "/about-us", key: "about-us" },
  ];

  const secondaryNavigationItems = [
    { label: "What we do", href: "#what-we-do" },
    { label: "Our industries", href: "#industries" },
    { label: "Projects", href: "#projects" },
    { label: "Organisation", href: "#organisation" },
    { label: "Careers", href: "#careers" },
    { label: "News highlights", href: "#news-highlights" },
    { label: "History", href: "#history" },
  ];

  // Content for the "What we do" section
  const whatWeDoContent =
    "Professional Engineering Consultants (PEC) is a limited liability Company, established in Uganda in 2008 by a team of six (6) extensively skilled practicing consulting professionals. Since then, PEC has grown into one of the leading design, engineering and project management consultancies in Uganda, with an establishment of more than 50 staff some of whom have joined its shareholding. PEC’s success is as a result of the firm’s deliberate emphasis on professionalism, quality services and customer satisfaction.";

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
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_60/v1742072212/IMG_7398_yum9au.webp"
          alt="Ocean view with offshore structures"
        />

        {/* Navigation and Content */}

        <Navigation
          navigationItems={navigationItems}
          megaMenuData={megaMenuData}
        />
        <HeroContent title="Engineering tomorrow's solutions today" />
      </div>
      <SecondaryNav
        initialActiveItem="#what-we-do"
        navItems={secondaryNavigationItems}
      />
      {/* What We Do Section */}
      <div id="what-we-do">
        <ContentSection
          id="what-we-do"
          heading="What we do"
          content={whatWeDoContent}
          linkText="Read more"
          linkUrl="#"
        />
      </div>
      <div id="industries" className="px-4 md:px-14">
        <IndustriesSection />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects}
          title="Some of our projects"
          linkText="All projects"
        />
      </div>

      {/* Organisation Section */}
      <div id="organisation">
        <OrganisationSection />
      </div>

      {/* Careers Section */}
      <div id="careers">
        <CareersSection />
      </div>

      {/* News Section */}
      <div id="news-highlights">
        <NewsSection />
      </div>
      <div id="history">
        <HistorySection />
      </div>
      <Footer />
    </>
  );
}
