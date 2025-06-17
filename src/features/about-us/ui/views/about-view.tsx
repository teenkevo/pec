"use client";

import { BackgroundImage } from "@/features/landing/hero/background-image";
import { Navigation } from "@/components/layout/navigation";
import { SecondaryNav } from "@/features/landing/secondary-nav";
import { CareersSection } from "@/features/landing/careers-section";
import { NewsSection } from "@/features/landing/news-section";
import { HeroContent } from "../components/hero-content";
import { CompanyStats } from "../components/company stats";
import { Section } from "../components/section";
import { GraphicSection } from "../components/graphic-section";
import { ValuesSection } from "../components/values";
import { type AboutUs } from "../../../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  aboutData: AboutUs;
}

export default function AboutView({ aboutData }: Props) {
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
        <Navigation />
        <HeroContent
          title={
            aboutData.hero?.subtitle ??
            "A leading engineering consultancy in Uganda "
          }
          page={aboutData.hero?.title ?? "About us"}
        />
      </div>
      <SecondaryNav
        initialActiveItem="#what-we-do"
        navItems={secondaryNavigationItems}
      />
      {/* What We Do Section */}
      <div id="what-we-do">
        <Section
          section={aboutData.whatWeDo?.title ?? "What we do"}
          title={
            aboutData.whatWeDo?.subtitle ??
            "Helping design and build resilient infrastructure since 2008"
          }
          description={
            aboutData.whatWeDo?.description ??
            "At PEC Uganda, we provide expert civil engineering consultancy services to shape infrastructure that stands the test of time."
          }
          linkText="Explore our specialty industries"
          linkUrl="/industries"
        />
      </div>
      <CompanyStats statistics={aboutData.statistics} />
      {/* Divider */}
      <div className="border-t border-gray-200 mt-5"></div>
      <div id="mission">
        <Section
          section={aboutData.mission?.title ?? "Mission"}
          title={
            aboutData.mission?.missionStatement ??
            "To be a leader in providing sustainable engineering solutions"
          }
          description={
            aboutData.mission?.description ??
            "Our work is bigger than individual projects. That's what we believe. We aim to contribute to a world where nature is protected and people can thrive."
          }
        />
      </div>
      <GraphicSection
        imageUrl={aboutData?.mission?.missionImage?urlFor(aboutData?.mission?.missionImage).url():""}
        section={aboutData.mission?.title ?? "Mission"}
        title={
          aboutData.mission?.additionalTitle ??
          "Keeping the bigger picture in mind"
        }
        linkText="More about our mission"
        linkUrl="/about-us/mission"
      />
      <div id="vision">
        <Section
          section={aboutData.vision?.title ?? "Vision"}
          title={
            aboutData.vision?.visionStatement ??
            "To be a customer-focused firm that attracts talent in pursuit of excellence"
          }
          description={
            aboutData.vision?.description ??
            "We strive to build a dynamic environment that attracts curious minds and bold problem solvers—individuals driven to tackle complex engineering challenges through creativity, collaboration, and innovation"
          }
        />
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>
      <div id="values">
        <Section
          section={aboutData.values?.title ?? "Values"}
          title={aboutData.values?.subtitle ?? "Four guiding principles"}
          description={
            aboutData.values?.description ??
            "At PEC, we strive to build strong relationships with each other, our clients and business associates, based on four core values. Each one as important as the other, their sum represents our strength as a team"
          }
        />
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>
      <ValuesSection values={aboutData.values?.valuesList} />
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>
      <div id="strategy">
        <Section
          section={aboutData.strategy?.title ?? "Strategy"}
          title={aboutData.strategy?.subtitle ?? "Three strategic priorities"}
          description={
            aboutData.strategy?.description ??
            "We strive to provide expert civil engineering consultancy services to shape infrastructure that stands the test of time. Our strategy has three strategic priorities:"
          }
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
    </>
  );
}