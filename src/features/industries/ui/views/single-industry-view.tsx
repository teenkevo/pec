"use client";

import { ContentSection } from "@/features/landing/content-section";
import { BackgroundImage } from "@/features/landing/hero/background-image";
import { Navigation } from "@/components/layout/navigation";
import { SecondaryNav } from "@/features/landing/secondary-nav";
import { ProjectsSection } from "@/features/landing/projects-section";
import { CareersSection } from "@/features/landing/careers-section";
import { HeroContent } from "../../hero-content";
import { IndustryView } from "../../industry-view";
import { IndustryTopProjectBanner } from "../../industry-top-project-banner";
import { ProjectsSection2 } from "@/features/landing/projects-section-2";
import { NewsSection } from "@/features/landing/news-section";
import { TechnicalPapers } from "../../industry-technical-papers";
import { IndustryContactSection } from "../../industry-contact";
import { PROJECT_TYPE, SINGLE_INDUSTRY_RESULT } from "../../lib/queries";

import { urlFor } from "@/sanity/lib/image";

interface Props {
  industry: SINGLE_INDUSTRY_RESULT;
  projects: PROJECT_TYPE[];
}

export function SingleIndustryView({
  industry,
  projects,
}: Props) {
  const secondaryNavigationItems = [
    { label: "Our view", href: "#our-view" },
    { label: "Projects", href: "#projects" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="relative h-[60vh] md:h-[90vh] w-full">
        {/* Background Image with Gradient Overlays */}
        <BackgroundImage
          imageUrl={
            urlFor(industry.mainImage).url() ??
            "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_66/v1725968449/D1MqaczXcAUaOuB_o9n01n.webp"
          }
          alt="Ocean view with offshore structures"
        />

        {/* Navigation and Content */}

        <Navigation />
        <HeroContent
          title={
            industry.subtitle ??
            "Connecting cities and communities with reliable transportation corridors"
          }
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
          content={industry.ourView.content}
          linkText="Read about our purpose"
          linkUrl="/about-us/what-we-do"
          industryLeadTitle={industry.ourView.author.role}
          industryLeadImageUrl={urlFor(industry.ourView.author.image).url()}
          industryLeadName={industry.ourView.author.name}
        />
      </div>
      <div id="transport" className="px-4 md:px-14">
        <IndustryTopProjectBanner
          industry="Transport"
          description={industry.featuredProject.title}
          imageUrl={urlFor(industry.featuredProject.mainImage).url()}
          iconText="View project"
        />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects.slice(0,3)}
          title="Transport projects"
          linkText="Explore all"
        />
      </div>
      <div id="projects">
        <ProjectsSection2
          projects={projects.slice(3,6)}
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
