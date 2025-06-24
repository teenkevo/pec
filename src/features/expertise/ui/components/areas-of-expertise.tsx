"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Define the structure for expertise items
interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  division: string;
  link: string;
}

export function AreasOfExpertise() {
  // Define expertise data
  const expertiseItems: ExpertiseItem[] = [
    // Transport Engineering Division
    {
      id: "feasibility-studies-transport",
      title: "Feasibility studies and design for transport infrastructure",
      description:
        "We provide comprehensive feasibility studies, detailed engineering design, tender documentation, and supervision for highways, urban roads, railways and airports.",
      division: "Transport Engineering",
      link: "/expertise/transport-feasibility",
    },
    {
      id: "traffic-engineering",
      title: "Traffic engineering",
      description:
        "Our traffic engineering services help optimize traffic flow, improve safety, and enhance mobility in urban and rural environments.",
      division: "Transport Engineering",
      link: "/expertise/traffic-engineering",
    },
    {
      id: "transport-planning",
      title: "Transport policy and planning",
      description:
        "We develop sustainable transport policies and plans that address current needs while anticipating future demands and environmental considerations.",
      division: "Transport Engineering",
      link: "/expertise/transport-planning",
    },

    // Water Engineering Division
    {
      id: "water-supply-systems",
      title: "Water supply systems",
      description:
        "We design and supervise construction of efficient water supply systems, both pumped and gravity flow, to ensure reliable access to clean water.",
      division: "Water Engineering",
      link: "/expertise/water-supply",
    },
    {
      id: "sewage-treatment",
      title: "Sewage treatment plants",
      description:
        "Our expertise in sewage treatment plant design and construction helps communities manage wastewater effectively while protecting public health and the environment.",
      division: "Water Engineering",
      link: "/expertise/sewage-treatment",
    },
    {
      id: "stormwater-management",
      title: "Stormwater collection and disposal",
      description:
        "We design comprehensive stormwater management systems that prevent flooding and protect infrastructure while considering environmental impacts.",
      division: "Water Engineering",
      link: "/expertise/stormwater-management",
    },

    // Materials and Geotechnical Engineering Division
    {
      id: "geotechnical-investigations",
      title: "Geotechnical and materials investigations",
      description:
        "Our team conducts thorough geotechnical and materials investigations for civil engineering infrastructure projects, ensuring solid foundations for construction.",
      division: "Materials and Geotechnical Engineering",
      link: "/expertise/geotechnical-investigations",
    },
    {
      id: "road-condition-surveys",
      title: "Road condition surveys",
      description:
        "We perform detailed road condition surveys to assess pavement quality, identify maintenance needs, and develop effective rehabilitation strategies.",
      division: "Materials and Geotechnical Engineering",
      link: "/expertise/road-surveys",
    },
    {
      id: "laboratory-testing",
      title: "Laboratory testing and quality control",
      description:
        "Our laboratory testing services ensure materials meet required specifications, providing quality control and assurance for construction projects.",
      division: "Materials and Geotechnical Engineering",
      link: "/expertise/laboratory-testing",
    },

    // Structural Engineering Division
    {
      id: "structural-analysis",
      title: "Structural analysis and design",
      description:
        "We provide comprehensive structural analysis and design for all types of building structures, including preparation of detailed structural engineering drawings.",
      division: "Structural Engineering",
      link: "/expertise/structural-analysis",
    },
    {
      id: "structural-evaluation",
      title: "Structural evaluation of existing buildings",
      description:
        "Our team conducts thorough evaluations of existing buildings and structural units to assess integrity, safety, and potential for renovation or repurposing.",
      division: "Structural Engineering",
      link: "/expertise/structural-evaluation",
    },

    // Surveying, Mapping, and GIS Division
    {
      id: "gps-surveys",
      title: "GPS and geodetic control surveys",
      description:
        "We utilize advanced GPS technology for precise geodetic control surveys, differential GPS surveys, and real-time kinematic surveys for various applications.",
      division: "Surveying, Mapping, and GIS",
      link: "/expertise/gps-surveys",
    },
    {
      id: "topographic-surveys",
      title: "Topographic and route surveys",
      description:
        "Our topographic and route surveys provide accurate terrain data, site analysis, and calculations essential for infrastructure planning and design.",
      division: "Surveying, Mapping, and GIS",
      link: "/expertise/topographic-surveys",
    },
    {
      id: "satellite-image-analysis",
      title: "Satellite image analysis and mapping",
      description:
        "We analyze satellite images to derive detailed maps at scales up to 1:10,000, providing valuable spatial data for planning and development projects.",
      division: "Surveying, Mapping, and GIS",
      link: "/expertise/satellite-mapping",
    },

    // Environmental Division
    {
      id: "environmental-monitoring",
      title: "Environmental monitoring and management",
      description:
        "We establish comprehensive environmental monitoring and management plans for projects to ensure compliance with regulations and minimize ecological impact.",
      division: "Environmental",
      link: "/expertise/environmental-monitoring",
    },
    {
      id: "environmental-impact",
      title: "Environmental impact assessment",
      description:
        "Our environmental impact assessments for roads and water projects identify potential effects and develop mitigation strategies to protect natural resources.",
      division: "Environmental",
      link: "/expertise/environmental-impact",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="px-4 md:px-14">
        <motion.h2
          className="text-3xl font-bold text-navy-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our areas of expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {expertiseItems.map((item, index) => (
            <Link key={item.id} href={item.link}>
              <motion.div
                key={item.id}
                className="border-t border-gray-200 pt-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(0.1 * index, 0.5),
                }}
              >
                <h3 className="text-xl font-bold text-navy-800 tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 tracking-tight mb-4">
                  {item.description}
                </p>
                <div className="inline-flex items-center text-navy-800 group-hover:text-[#EB3300] font-medium group">
                  <span>Read more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
