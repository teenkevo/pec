"use client";

import { CareersSection } from "../landing/careers-section";
import { ContentSection } from "../landing/content-section";
import { Footer } from "../landing/footer";
import { BackgroundImage } from "../landing/hero/background-image";
import { HeroContent } from "./hero-content";
import { Navigation } from "../landing/hero/navigation";
import { megaMenuData } from "../landing/mega-menu/menu-data";
import { ProjectsSection } from "../landing/projects-section";
import { SecondaryNav } from "../landing/secondary-nav";
import { IndustryBanner } from "./industry-banner";

export default function Landing() {
  const navigationItems = [
    { label: "Industries", href: "/industries", key: "industries" },
    { label: "Services", href: "/services", key: "services" },
    { label: "Careers", href: "/careers", key: "careers" },
    { label: "Investors", href: "/investors", key: "investors" },
    { label: "News", href: "/news", key: "news" },
    { label: "About us", href: "/about-us", key: "about-us" },
  ];

  const secondaryNavigationItems = [
    { label: "Introduction", href: "#introduction" },
    { label: "Transport", href: "#transport" },
    { label: "Water", href: "#water" },
    { label: "Materials & Geotechnics", href: "#materials" },
    { label: "Structures", href: "#structures" },
    { label: "Surveying", href: "#surveying" },
  ];

  // Content for the "What we do" section
  const introduction =
    "With our wide range of assets, skills, and solutions tailored to our clients, we serve customers in our three key markets: energy, water and infrastructure. Together with our partners and clients, we're building a safer and more liveable world.";

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
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_66/v1742327657/IMG_7837_qicjiu.webp"
          alt="Ocean view with offshore structures"
        />

        {/* Navigation and Content */}

        <Navigation
          navigationItems={navigationItems}
          megaMenuData={megaMenuData}
        />
        <HeroContent title="Creating a safe and liveable world" />
      </div>
      <SecondaryNav
        initialActiveItem="#what-we-do"
        navItems={secondaryNavigationItems}
      />
      {/* What We Do Section */}
      <div id="introduction">
        <ContentSection
          id="introduction"
          heading="Introduction"
          content={introduction}
          linkText="Read about our purpose"
          linkUrl="/about-us/what-we-do"
        />
      </div>
      <div id="transport" className="px-4 md:px-14">
        <IndustryBanner
          industry="Transport"
          description="Connecting cities and communities with reliable transportation corridors"
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_66/v1725968449/D1MqaczXcAUaOuB_o9n01n.webp"
          iconText="View transport industry"
        />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects}
          title="Transport projects"
          linkText="All transport projects"
        />
      </div>
      <div id="water" className="px-4 md:px-14">
        <IndustryBanner
          industry="Water"
          description="Engineering sustainable water & waste water management solutions"
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1742339704/02_1_zckrbq.webp"
          iconText="View water industry"
        />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects}
          title="Water projects"
          linkText="All water projects"
        />
      </div>
      <div id="materials" className="px-4 md:px-14">
        <IndustryBanner
          industry="Materials"
          description="Building strong foundations with innovative geotechnical and materials solutions"
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1726662738/IMG_20240817_112347_umok4y.webp"
          iconText="View materials and geotechnics industry"
        />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects}
          title="Materials & Geotechnics projects"
          linkText="All materials & geotechnics projects"
        />
      </div>
      <div id="structures" className="px-4 md:px-14">
        <IndustryBanner
          industry="Structures"
          description="Designing strong, safe and resilient structures"
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1742339703/DJI_0013-UG_1_wrmkeg.webp"
          iconText="View structures industry"
        />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects}
          title="Structures projects"
          linkText="All structures projects"
        />
      </div>
      <div id="surveying" className="px-4 md:px-14">
        <IndustryBanner
          industry="Surveying"
          description="Delivering accurate surveying solutions for projects of any size"
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1742342946/survey-engineering-surveyor-industry_l0uxbx.webp"
          iconText="View surveying industry"
        />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects}
          title="Surveying projects"
          linkText="All surveying projects"
        />
      </div>
      {/* Careers Section */}
      <div id="careers">
        <CareersSection />
      </div>
      <Footer />
    </>
  );
}
