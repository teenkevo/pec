"use client";

import { ContentSection } from "@/features/landing/content-section";
import { BackgroundImage } from "@/features/landing/hero/background-image";
import { Navigation } from "@/features/landing/hero/navigation";
import { megaMenuData } from "@/features/landing/mega-menu/menu-data";
import { SecondaryNav } from "@/features/landing/secondary-nav";
import { ProjectsSection } from "@/features/landing/projects-section";
import { CareersSection } from "@/features/landing/careers-section";
import { Footer } from "@/features/landing/footer";
import { NewsSection } from "@/features/landing/news-section";
import { HeroContent } from "./hero-content";
import { CompanyStats } from "./company stats";
import { Section } from "./section";
import { GraphicSection } from "./graphic-section";
import { ValuesSection } from "./values";

export default function AboutUs() {
  const navigationItems = [
    { label: "Industries", href: "/industries", key: "industries" },
    { label: "Services", href: "/services", key: "services" },
    { label: "Careers", href: "/careers", key: "careers" },
    { label: "Investors", href: "/investors", key: "investors" },
    { label: "News", href: "/news", key: "news" },
    { label: "About us", href: "/about-us", key: "about-us" },
  ];

  const secondaryNavigationItems = [
    { label: "What we do", href: "#what-we-do" },
    { label: "Mission", href: "#mission" },
    { label: "Vision", href: "#vision" },
    { label: "Values", href: "#values" },
  ];

  return (
    <>
      <div className="relative h-[60vh] md:h-[90vh] w-full">
        {/* Background Image with Gradient Overlays */}
        <BackgroundImage
          imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_68/v1742342734/scott-blake-x-ghf9LjrVg-unsplash_nrmovu.webp"
          alt="Ocean view with offshore structures"
        />

        {/* Navigation and Content */}

        <Navigation
          navigationItems={navigationItems}
          megaMenuData={megaMenuData}
        />
        <HeroContent
          title="A leading engineering consultancy in Uganda "
          page="About us"
        />
      </div>
      <SecondaryNav
        initialActiveItem="#what-we-do"
        navItems={secondaryNavigationItems}
      />
      {/* What We Do Section */}
      <div id="what-we-do">
        <Section
          section="What we do"
          title="Helping design and build resilient infrastructure since 2008"
          description="At PEC Uganda, we provide expert civil engineering consultancy
              services to shape infrastructure that stands the test of time.
              From concept to completion, we design and deliver innovative
              solutions that improve communities and drive sustainable
              development.
              
              Our expertise spans roads, bridges, water systems, and urban
              planning, ensuring every project is built with precision, safety,
              and environmental responsibility in mind. By combining technical
              excellence with local insights, we create resilient infrastructure
              that enhances lives and supports economic growth."
          linkText="Explore our specialty industries"
          linkUrl="/industries"
        />
      </div>
      <CompanyStats />
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>
      <div id="mission">
        <Section
          section="Mission"
          title="To be a leader in providing sustainable engineering solutions"
          description="Our work is bigger than individual projects. That’s what we believe. We aim to contribute to a world where nature is protected and people can thrive."
        />
      </div>
      <GraphicSection
        imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_61/v1742770900/How-Solar-Panels-Are-Beneficial-for-the-Environment-2048x1365_i2ppd3.webp"
        section="Mission"
        title="Keeping the bigger picture in mind"
        linkText="More about our mission"
        linkUrl="/about-us/mission"
      />
      <div id="vision">
        <Section
          section="Vision"
          title="To be a customer-focused firm that attracts talent in pursuit of excellence"
          description="We strive to build a dynamic environment that attracts curious minds and bold problem solvers—individuals driven to tackle complex engineering challenges through creativity, collaboration, and innovation"
        />
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>
      <div id="values">
        <Section
          section="Values"
          title="Four guiding principles"
          description="At PEC, we strive to build strong relationships with each other, our clients and business associates, based on four core values. Each one as important as the other, their sum represents our strength as a team"
        />
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>
      <ValuesSection />
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>
      <div id="strategy">
        <Section
          section="Strategy"
          title="Three strategic priorities"
          description="We strive to provide expert civil engineering consultancy services to shape infrastructure that stands the test of time. Our strategy has three strategic priorities:"
          linkText="More about our strategy"
          linkUrl="/industries"
        />
      </div>
      {/* News Section */}
      <div id="news-highlights">
        <NewsSection />
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
