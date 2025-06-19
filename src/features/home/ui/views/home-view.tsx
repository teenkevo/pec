"use client";

import { INDUSTRIES } from "@/features/industries/lib/queries";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";
import { HeroSection } from "@/components/sections/hero-section";
import { ContentSection } from "@/components/sections/content-section";
import { IndustriesSection } from "../components/industries-section";
import { ProjectsSection } from "@/features/projects/ui/components/projects-section";
import { OrganisationSection } from "../components/organization-section";
import { CareersSection } from "../components/careers-section";
import { NewsSection } from "../components/news-section";
import { HistorySection } from "../components/history-section";

interface Props {
  projects: PROJECT_TYPE[];
  industries: INDUSTRIES;
}

export default function HomeView({ projects, industries }: Props) {
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
      <HeroSection
        secondaryNavigationItems={secondaryNavigationItems}
        slides={{
          content: heroSlides,
          images: backgroundImages,
        }}
        initialActiveItem="#what-we-do"
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
