import { CareersSection } from "@/features/landing/careers-section";
import { ContentSection } from "../../../landing/content-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/features/projects/ui/components/projects-section";
import { IndustryBanner } from "../components/industry-banner";
import { INDUSTRIES } from "../../lib/queries";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";

interface Props {
  projects: PROJECT_TYPE[];
  industries: INDUSTRIES;
}

export default function IndustriesView({ projects, industries }: Props) {
  const secondaryNavigationItems = [
    { label: "Introduction", href: "#introduction" },
    ...industries.map((industry) => ({
      label: industry.title,
      href: `#${industry.slug}`,
    })),
  ];

  // Content for the "What we do" section
  const introduction =
    "With our wide range of assets, skills, and solutions tailored to our clients, we serve customers in our 4 key markets: transport, water and sanitation, materials and geotechnics, and structures. Together with our partners and clients, we're pushing for excellence.";

  return (
    <>
      <HeroSection
        title="Our industries of specialization"
        page="Industries"
        secondaryNavigationItems={secondaryNavigationItems}
        backgroundImage="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_66/v1742327657/IMG_7837_qicjiu.webp"
        alt="Ocean view with offshore structures"
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
      {industries.map((industry) => (
        <>
          <div key={industry.slug} id={industry.slug} className="px-4 md:px-14">
            <IndustryBanner industry={industry} />
          </div>
          <div id="projects">
            <ProjectsSection
              projects={projects
                .filter((project) => industry.slug === project.industry.slug)
                .slice(0, 3)}
              title={`${industry.title} projects`}
              linkText="Explore all"
            />
          </div>
        </>
      ))}

      {/* Careers Section */}
      <div id="careers">
        <CareersSection />
      </div>
    </>
  );
}
