import { ProjectPage, Project } from "@/features/projects/project";

export default function ProjectExamplePage() {
  // Example project data
  const projectData: Project = {
    title:
      "Consultancy Services for the Design Review and Construction Supervision for the Capacity Improvement of the Kampala Northern Bypass – Phase 2 (17.5 Km)",
    location: "Kampala, Uganda",
    clientName: "Uganda National Roads Authority",
    funder: "The European Union",
    clientNarrative:
      "The project entailed capacity improvement of the Kampala Northern Bypass comprising the construction of a 17.5 km second carriageway alongside the existing carriageway (between Busega and Hoima road - on the LHS of the existing carriageway and between Gayaza Road and Namboole - on the RHS of the existing Northern Bypass), sidewalks, grade-separated junctions, junction lighting and signalization, and ancillary works. The consultant supervised swamp treatment (excavation, rockfilling, geotextile, consolidation monitoring, and preparation of stable working platforms, etc.) for the entire road, as well as RC bridge works at Sentema Road, Hoima Road, Gayaza Road and Kyebando interchanges, including asphalt trials. The total length of road section whose capacity was improved (dualled) is 17.5 Km",
    activeStage: "Construction",
    imageSrc:
      "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_62/v1742072211/IMG_7455_2_i3bpiw.webp",
    imageAlt: "Drilling equipment for shaft construction at Hinkley Point C",
    projectImages: [
      {
        src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_59/v1742868484/IMG_7464_cxicny.webp",
        alt: "Shaft drilling operation",
        description: "Dual-carriage way along the bypass",
      },
      {
        src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_63/v1742868484/IMG_7460_wmbhev.webp",
        alt: "Cooling system installation",
        description:
          "Installation of key components for the Hinkley Point C cooling system",
      },
      {
        src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/v1742072211/IMG_7560_3_imaovc.jpg",
        alt: "Bristol Channel site",
        description: "Aerial view of Ntinda interchange along the carriageway",
      },
      {
        src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_61/v1742869047/1920px-Location_tagged_26_tklond.webp",
        alt: "Approach to Bwaise interchange",
        description:
          "Our specialized technical team implementing innovative drilling solutions",
      },
    ],
    stageDetails: {
      "Planning, feasibility, conceptual design": {
        isInProject: false,
        expertise: [],
      },
      Design: {
        isInProject: false,
        expertise: [],
      },
      Construction: {
        isInProject: true,
        expertise: [
          {
            title: "Foundations and geotechnical services",
            description: "Specialized drilling services",
            image:
              "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_56/v1726664402/IMG_1646_fvqzql.webp",
          },
          {
            title: "Construction supervision",
            description:
              "Comprehensive seabed and subsurface analysis for optimal foundation design",
            image:
              "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_60/v1742873852/troy-mortier-eKY6_9W_iqY-unsplash_mrjhs7.webp",
          },
        ],
      },
      "Operations and maintenance": {
        isInProject: false,
        expertise: [],
      },
      Decommissioning: {
        isInProject: false,
        expertise: [],
      },
    },
  };

  return <ProjectPage project={projectData} />;
}
