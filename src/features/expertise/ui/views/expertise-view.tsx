import { HeroSection } from "@/components/sections/hero-section";
import { GraphicSection } from "@/features/about-us/ui/components/graphic-section";
import { AreasOfExpertise } from "../components/areas-of-expertise";
import { PublicationsSection } from "@/features/publications/ui/components/publications-section";
import { Publication } from "@/features/publications/lib/queries";
import { Expertise } from "../../../../../sanity.types";

interface Props {
  publications: Publication[];
  expertise: Expertise[];
}

export default function ExpertiseView({ publications, expertise }: Props) {
  const secondaryNavigationItems = [
    { title: "Areas of expertise", href: "areas-of-expertise" },
    { title: "Publications", href: "publications" },
  ];

  return (
    <>
      <HeroSection
        title="PEC: An all-round quality civil engineering consultancy"
        page="Expertise"
        secondaryNavigationItems={secondaryNavigationItems}
        backgroundImage="https://res.cloudinary.com/teenkevo-cloud/image/upload/v1750822879/d3867f63-e7bc-4fb3-962e-4c2bd7677a70_j5rzoa.webp"
      />

      {/* What We Do Section */}
      <div id="areas-of-expertise">
        <AreasOfExpertise expertise={expertise} />
      </div>

      <div id="publications">
        <PublicationsSection publications={publications} />
      </div>

      <GraphicSection
        imageUrl="https://res.cloudinary.com/teenkevo-cloud/image/upload/q_61/v1742770900/How-Solar-Panels-Are-Beneficial-for-the-Environment-2048x1365_i2ppd3.webp"
        section="About us"
        title="What we do at PEC"
        linkText="Learn more"
        linkUrl="/about-us"
      />
    </>
  );
}
