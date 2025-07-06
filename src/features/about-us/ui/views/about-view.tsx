import { CareersSection } from "@/features/home/ui/components/careers-section";
import { HeroSection } from "@/components/sections/hero-section";
import { CompanyStats } from "../components/company stats";
import { Section } from "../components/section";
import { GraphicSection } from "../components/graphic-section";
import { ValuesSection } from "../components/values";
import { type AboutUs } from "../../../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { BlogPosts } from "@/features/blog/lib/queries";
import { NewsSection } from "@/components/sections/news-section";
import { megaMenuData } from "@/constants/menu-data";

interface Props {
  aboutData: {
    aboutContent: AboutUs;
    posts: BlogPosts;
  };
}

export default function AboutView({ aboutData }: Props) {
  const { aboutContent, posts } = aboutData;

  return (
    <>
      <HeroSection
        title={
          aboutContent.hero?.subtitle ??
          "A leading engineering consultancy in Uganda "
        }
        page={aboutContent.hero?.title ?? "About us"}
        secondaryNavigationItems={megaMenuData["about-us"].items || []}
        backgroundImage={
          aboutContent.hero?.heroImage
            ? urlFor(aboutContent.hero?.heroImage).format("webp").url()
            : "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_68/v1742342734/scott-blake-x-ghf9LjrVg-unsplash_nrmovu.webp"
        }
      />

      {/* What We Do Section */}
      <div id="what-we-do">
        <Section
          section={aboutContent.whatWeDo?.title ?? "What we do"}
          title={
            aboutContent.whatWeDo?.subtitle ??
            "Helping design and build resilient infrastructure since 2008"
          }
          description={
            aboutContent.whatWeDo?.description ??
            "At PEC Uganda, we provide expert civil engineering consultancy services to shape infrastructure that stands the test of time."
          }
          linkText="Explore our specialty industries"
          linkUrl="/industries"
        />
      </div>
      <CompanyStats statistics={aboutContent.statistics} />
      {/* Divider */}
      <div className="border-t border-gray-200 mt-5"></div>
      <div id="mission">
        <Section
          section={aboutContent.mission?.title ?? "Mission"}
          title={
            aboutContent.mission?.missionStatement ??
            "To be a leader in providing sustainable engineering solutions"
          }
          description={
            aboutContent.mission?.description ??
            "Our work is bigger than individual projects. That's what we believe. We aim to contribute to a world where nature is protected and people can thrive."
          }
        />
      </div>
      <GraphicSection
        imageUrl={
          aboutContent?.mission?.missionImage
            ? urlFor(aboutContent?.mission?.missionImage)
                .format("webp")
                .width(800)
                .height(800)
                .url()
            : ""
        }
        section={aboutContent.mission?.title ?? "Mission"}
        title={
          aboutContent.mission?.additionalTitle ??
          "Keeping the bigger picture in mind"
        }
        linkText="More about our mission"
        linkUrl="/about-us/mission"
      />
      <div id="vision">
        <Section
          section={aboutContent.vision?.title ?? "Vision"}
          title={
            aboutContent.vision?.visionStatement ??
            "To be a customer-focused firm that attracts talent in pursuit of excellence"
          }
          description={
            aboutContent.vision?.description ??
            "We strive to build a dynamic environment that attracts curious minds and bold problem solvers—individuals driven to tackle complex engineering challenges through creativity, collaboration, and innovation"
          }
        />
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10 mx-2"></div>
      <div id="values">
        <Section
          section={aboutContent.values?.title ?? "Our Values"}
          title={aboutContent.values?.subtitle ?? "Four guiding principles"}
          description={
            aboutContent.values?.description ??
            "At PEC, we strive to build strong relationships with each other, our clients and business associates, based on four core values. Each one as important as the other, their sum represents our strength as a team"
          }
        />
      </div>
      {/* Divider */}
      {/* <div className="border-t border-gray-200 mt-10 mx-2"></div> */}
      <ValuesSection values={aboutContent.values?.valuesList} />
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>
      <div id="strategy">
        <Section
          section={aboutContent.strategy?.title ?? "Strategy"}
          title={
            aboutContent.strategy?.subtitle ?? "Three strategic priorities"
          }
          description={
            aboutContent.strategy?.description ??
            "We strive to provide expert civil engineering consultancy services to shape infrastructure that stands the test of time. Our strategy has three strategic priorities:"
          }
          linkText="More about our strategy"
          linkUrl="/industries"
        />
      </div>
      <div className="border-t border-gray-200 mt-16 mx-2"></div>
      {/* News Section */}
      <div id="news-highlights">
        <NewsSection allPosts={posts} />
      </div>
      {/* Divider */}
      {/* <div className="border-t border-gray-200 my-10 mx-2"></div> */}
      <div id="careers">
        <CareersSection />
      </div>
    </>
  );
}
