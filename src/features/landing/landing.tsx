"use client";

import { BackgroundImageSlideshow } from "./hero/background-image-slide-show";
import { Navigation } from "../../components/layout/navigation";
import { HeroContent } from "./hero/hero-content";
import { SecondaryNav } from "./secondary-nav";
import { ContentSection } from "./content-section";
import { IndustriesSection } from "./industries-section";
import { OrganisationSection } from "./organization-section";
import { CareersSection } from "./careers-section";
import { NewsSection } from "../blog/ui/components/news-section";
import { HistorySection } from "./history-section";
import { PROJECT_TYPE } from "../projects/lib/queries";
import { INDUSTRIES } from "../industries/lib/queries";
import { ProjectsSection } from "../projects/ui/components/projects-section";

interface Props {
  projects: PROJECT_TYPE[];
  industries: INDUSTRIES;
}

export default function Landing({ projects, industries }: Props) {
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

  const heroSlides = [
    {
      title: "Engineering tomorrow's solutions today",
      description:
        "Consultancy services for construction supervision of the design and build contract for the upgrading of Kira-Matugga road (21.3 Km) and improvement of 5 No. junctions – Lot 1",
      industry: "Transport",
      industryUrl: "transport",
    },
    {
      title: "Engineering tomorrow's solutions today",
      description:
        "Consultancy Services for the Design and Supervision of Proposed Optimization Works in Water Supply Areas of Zone 1 of Bidi-bidi Refugee Settlement in Yumbe district",
      industry: "Water and Sanitation",
      industryUrl: "water",
    },
    {
      title: "Engineering tomorrow's solutions today",
      description:
        "Geotechnical Investigations Along the East Africa Crude Oil Pipeline (MLBV/LLHT) Substations",
      industry: "Materials and Geotechnics",
      industryUrl: "materials",
    },
    {
      title: "Engineering tomorrow's solutions today",
      description:
        "Consultancy services to conduct technical feasibility studies for the enhancement of biogas production at National Water and Sewerage Corporation Nakivubo wastewater treatment plant",
      industry: "Structures",
      industryUrl: "structures",
    },
  ];

  // Define background images that will change with slides
  const backgroundImages = [
    {
      imageUrl:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_60/v1742072212/IMG_7398_yum9au.webp",
      alt: "Kiira-Matugga Road PEC",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_64/v1743528565/69790D60-4A3D-4638-96B5-DAF4243A17D2_1_201_a_soin4z.webp",
      alt: "NWSC Nakivubo Sewerage Treatment Plant",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1726662738/IMG_20240817_112347_umok4y.webp",
      alt: "EACOP Pipeline investigations GETLAB-PEC",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1742339703/DJI_0013-UG_1_wrmkeg.webp",
      alt: "NWSC Nakivubo Sewerage Treatment Plant",
    },
  ];

  return (
    <>
      <div className="relative h-[620px] md:h-[90vh] w-full">
        {/* Background Image Slideshow with Gradient Overlays */}
        <BackgroundImageSlideshow images={backgroundImages} interval={5000} />

        {/* Navigation and Content */}

        <Navigation />
        <HeroContent slides={heroSlides} />
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
          linkUrl="/about-us"
        />
      </div>
      <div id="industries" className="px-4 md:px-14">
        <IndustriesSection industries={industries} />
      </div>
      <div id="projects">
        <ProjectsSection
          projects={projects}
          title="Projects"
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
    </>
  );
}
