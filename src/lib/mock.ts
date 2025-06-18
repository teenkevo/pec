// ==================== MAIN MOCK PROJECTS DATA ====================


// Projects for industries landing page
export const industriesLandingProjects = [
  {
    id: "kampala-bypass",
    title:
      "Consultancy Services for the Design Review and Construction Supervision for the Capacity Improvement of the Kampala Northern Bypass – Phase 2 (17.5 Km)",
    image:
      "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp",
    location: "Kampala, Uganda",
    industry: "Transport",
  },
  {
    id: "irrigation-schemes",
    title:
      "Consultancy Services for Feasibility Studies and Detailed Design of Medium and Large Scale Irrigation Schemes",
    image:
      "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_60/v1742873852/troy-mortier-eKY6_9W_iqY-unsplash_mrjhs7.webp",
    location: "South Western Uganda",
    industry: "Water",
  },
  {
    id: "eacop-pipeline",
    title:
      "Geotechnical Investigations Along the EACOP Pipeline (MLBV/LLHT) Substations",
    image:
      "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_56/v1726664402/IMG_1646_fvqzql.webp",
    location: "Hoima, Uganda",
    industry: "Materials",
  },
];

// ==================== DETAILED PROJECT EXAMPLE ====================
// Comprehensive project with all stage details and expertise
export const detailedProjectExample = {
  title:
    "Consultancy Services for the Design Review and Construction Supervision for the Capacity Improvement of the Kampala Northern Bypass – Phase 2 (17.5 Km)",
  location: "Kampala, Uganda",
  clientName: "Uganda National Roads Authority",
  funder: "The European Union",
  clientNarrative:
    "The project entailed capacity improvement of the Kampala Northern Bypass comprising the construction of a 17.5 km second carriageway alongside the existing carriageway (between Busega and Hoima road - on the LHS of the existing carriageway and between Gayaza Road and Namboole - on the RHS of the existing Northern Bypass), sidewalks, grade-separated junctions, junction lighting and signalization, and ancillary works. The consultant supervised swamp treatment (excavation, rockfilling, geotextile, consolidation monitoring, and preparation of stable working platforms, etc.) for the entire road, as well as RC bridge works at Sentema Road, Hoima Road, Gayaza Road and Kyebando interchanges, including asphalt trials. The total length of road section whose capacity was improved (dualled) is 17.5 Km",
  activeStage: "Construction" as const,
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
      description: "Dual carriage way along the bypass",
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
  industry: "Transport",
  valueOfServices: 1036918.17,
  currency: "USD",
};



// ==================== CONTACTS DATA ====================
export const contacts = [
  {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
  },
  {
    name: "Liam Wilson",
    email: "liam.wilson@example.com",
  },
  {
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
  },
  {
    name: "Noah Martinez",
    email: "noah.martinez@example.com",
  },
  {
    name: "Ava Taylor",
    email: "ava.taylor@example.com",
  },
  {
    name: "Lucas Brown",
    email: "lucas.brown@example.com",
  },
  {
    name: "Sophia Smith",
    email: "sophia.smith@example.com",
  },
  {
    name: "Ethan Wilson",
    email: "ethan.wilson@example.com",
  },
  {
    name: "Isabella Jackson",
    email: "isabella.jackson@example.com",
  },
  {
    name: "Mia Clark",
    email: "mia.clark@example.com",
  },
  {
    name: "Mason Lee",
    email: "mason.lee@example.com",
  },
  {
    name: "Layla Harris",
    email: "layla.harris@example.com",
  },
  {
    name: "William Anderson",
    email: "william.anderson@example.com",
  },
  {
    name: "Ella White",
    email: "ella.white@example.com",
  },
  {
    name: "James Thomas",
    email: "james.thomas@example.com",
  },
  {
    name: "Harper Lewis",
    email: "harper.lewis@example.com",
  },
  {
    name: "Benjamin Moore",
    email: "benjamin.moore@example.com",
  },
  {
    name: "Aria Hall",
    email: "aria.hall@example.com",
  },
  {
    name: "Henry Turner",
    email: "henry.turner@example.com",
  },
  {
    name: "Scarlett Adams",
    email: "scarlett.adams@example.com",
  },
];

export type Contact = (typeof contacts)[number];

// ==================== ALBUM DATA ====================
export interface Album {
  name: string;
  artist: string;
  cover: string;
}

export const listenNowAlbums: Album[] = [
  {
    name: "React Rendezvous",
    artist: "Ethan Byte",
    cover:
      "https://static.wixstatic.com/media/e3b802_b6288f8bcc3a432a8e0afc844be0e93d~mv2.jpg/v1/fill/w_293,h_220,q_75/e3b802_b6288f8bcc3a432a8e0afc844be0e93d~mv2.webp%201x,%20https://static.wixstatic.com/media/e3b802_b6288f8bcc3a432a8e0afc844be0e93d~mv2.jpg/v1/fill/w_586,h_440,q_75/e3b802_b6288f8bcc3a432a8e0afc844be0e93d~mv2.webp%202x,%20https://static.wixstatic.com/media/e3b802_b6288f8bcc3a432a8e0afc844be0e93d~mv2.jpg/v1/fill/w_879,h_660,q_75/e3b802_b6288f8bcc3a432a8e0afc844be0e93d~mv2.webp%203x,%20https://static.wixstatic.com/media/e3b802_b6288f8bcc3a432a8e0afc844be0e93d~mv2.jpg/v1/fill/w_1172,h_880,q_75/e3b802_b6288f8bcc3a432a8e0afc844be0e93d~mv2.webp%204x,%20https://static.wixstatic.com/media/e3b802_b6288f8bcc3a432a8e0afc844be0e93d~mv2.jpg/v1/fill/w_1465,h_1100,q_75/e3b802_b6288f8bcc3a432a8e0afc844be0e93d~mv2.webp%205x",
  },
  {
    name: "Async Awakenings",
    artist: "Nina Netcode",
    cover:
      "https://static.wixstatic.com/media/e3b802_c03caa220038452790b1d4b561a17e58~mv2.jpg/v1/fill/w_294,h_220,q_75/e3b802_c03caa220038452790b1d4b561a17e58~mv2.webp 1x, https://static.wixstatic.com/media/e3b802_c03caa220038452790b1d4b561a17e58~mv2.jpg/v1/fill/w_588,h_440,q_75/e3b802_c03caa220038452790b1d4b561a17e58~mv2.webp 2x, https://static.wixstatic.com/media/e3b802_c03caa220038452790b1d4b561a17e58~mv2.jpg/v1/fill/w_882,h_660,q_75/e3b802_c03caa220038452790b1d4b561a17e58~mv2.webp 3x, https://static.wixstatic.com/media/e3b802_c03caa220038452790b1d4b561a17e58~mv2.jpg/v1/fill/w_1025,h_767,q_75/e3b802_c03caa220038452790b1d4b561a17e58~mv2.webp 4x, https://static.wixstatic.com/media/e3b802_c03caa220038452790b1d4b561a17e58~mv2.jpg/v1/fill/w_1025,h_767,q_75/e3b802_c03caa220038452790b1d4b561a17e58~mv2.webp 5x",
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover:
      "https://static.wixstatic.com/media/e3b802_6368cc782cf9423390b543c849f719c1~mv2.jpg/v1/fill/w_293,h_220,q_75/e3b802_6368cc782cf9423390b543c849f719c1~mv2.webp 1x, https://static.wixstatic.com/media/e3b802_6368cc782cf9423390b543c849f719c1~mv2.jpg/v1/fill/w_586,h_440,q_75/e3b802_6368cc782cf9423390b543c849f719c1~mv2.webp 2x, https://static.wixstatic.com/media/e3b802_6368cc782cf9423390b543c849f719c1~mv2.jpg/v1/fill/w_879,h_660,q_75/e3b802_6368cc782cf9423390b543c849f719c1~mv2.webp 3x, https://static.wixstatic.com/media/e3b802_6368cc782cf9423390b543c849f719c1~mv2.jpg/v1/fill/w_1172,h_880,q_75/e3b802_6368cc782cf9423390b543c849f719c1~mv2.webp 4x, https://static.wixstatic.com/media/e3b802_6368cc782cf9423390b543c849f719c1~mv2.jpg/v1/fill/w_1465,h_1100,q_75/e3b802_6368cc782cf9423390b543c849f719c1~mv2.webp 5x",
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover:
      "https://static.wixstatic.com/media/e3b802_ece9eee27e2b4affa0fa11fcb3be393c~mv2.jpg/v1/fill/w_293,h_220,q_75/e3b802_ece9eee27e2b4affa0fa11fcb3be393c~mv2.webp 1x, https://static.wixstatic.com/media/e3b802_ece9eee27e2b4affa0fa11fcb3be393c~mv2.jpg/v1/fill/w_586,h_440,q_75/e3b802_ece9eee27e2b4affa0fa11fcb3be393c~mv2.webp 2x, https://static.wixstatic.com/media/e3b802_ece9eee27e2b4affa0fa11fcb3be393c~mv2.jpg/v1/fill/w_879,h_660,q_75/e3b802_ece9eee27e2b4affa0fa11fcb3be393c~mv2.webp 3x, https://static.wixstatic.com/media/e3b802_ece9eee27e2b4affa0fa11fcb3be393c~mv2.jpg/v1/fill/w_1172,h_880,q_75/e3b802_ece9eee27e2b4affa0fa11fcb3be393c~mv2.webp 4x, https://static.wixstatic.com/media/e3b802_ece9eee27e2b4affa0fa11fcb3be393c~mv2.jpg/v1/fill/w_1465,h_1100,q_75/e3b802_ece9eee27e2b4affa0fa11fcb3be393c~mv2.webp 5x",
  },
];

export const madeForYouAlbums: Album[] = [
  {
    name: "Thinking Components",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    name: "Functional Fury",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    name: "React Rendezvous",
    artist: "Ethan Byte",
    cover:
      "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    artist: "Nina Netcode",
    cover:
      "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
];

// ==================== REAL PROJECTS DATA (FROM JSON) ====================
// This contains the comprehensive real project data from projects.json
// Note: This is a large dataset - you may want to import the JSON file directly
// or use a subset for performance reasons

export const realProjectsData = {
  "Transportation Engineering": [
    {
      "Project Name": "Consultancy Services for the Emergency Reconstruction of Ssezibwa Bridge (1.6 Km) along Kalagi – Kayunga Road Under Design and Build",
      "Client": "Uganda National Roads Authority",
      "Funder": "Government of Uganda",
      "Start Date": "Jun 2024",
      "End Date": "To date",
      "Value": { "Amount": 4138975753, "Currency": "UGX" },
      "Role": "Sole Consultant",
      "Associated Consultant": "None",
      "Description": [
        "Design review and supervision of the design and build contract for reconstruction of the bridge and approach roads (1.6 Km).",
        "The new bridge and approach roads will be designed to be climate-resilient, capable of withstanding a design flood event of 1 in 200 years.",
        "Measures will include elevated road levels and increasing the number of water crossing points.",
        "The main bridge structure will span 60 meters.",
        "The bridge will be complemented by multi-barrel box culverts on either side."
      ]
    },
    // Additional transportation projects would go here...
    // (truncated for brevity - full data available in projects.json)
  ],
  "Water and Sanitation Engineering": [
    {
      "Project Name": "Consultancy Services for the Design and Supervision of Proposed Optimization Works in Water Supply Areas of Zone 1 of Bidi-bidi Refugee Settlement in Yumbe district",
      "Client": "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH represented by German Development Cooperation GIZ",
      "Funder": "German Development Cooperation GIZ",
      "Start Date": "Nov 2024",
      "End Date": "To date",
      "Value": { "Amount": 265952.43, "Currency": "USD" },
      "Role": "Sole Consultant",
      "Description": [
        "The project involves the following works:",
        "Design Phase: This includes Preliminary and Detailed Design studies, Environmental and Social Impact Assessment (ESIA) studies, detailed field investigations including topographical surveys, water quality analyses, among others.",
        "Construction Supervision Phase: This phase primarily consists of construction supervision services, which can broadly be categorised into cost control, time control, and quality control of the various construction activities."
      ]
    },
    // Additional water projects would go here...
  ],
  "Structural Engineering": [
    {
      "Project Name": "Consultancy Services for Supervision of Neonatal Intensive Care Unit (NICU) at Mbarara Regional Referral Hospital",
      "Client": "Ministry of Health",
      "Funder": "The World Bank",
      "Start Date": "May 2024",
      "End Date": "To date",
      "Value": { "Amount": 100619.55, "Currency": "USD" },
      "Role": "Sole Consultant",
      "Associated Consultant": "None",
      "Description": [
        "The project involves design review and construction supervision of the 5-floor Neonatal Intensive Care Unit (NICU) facility.",
        "The unit is designed to provide comprehensive care for new-born, particularly focusing on those who are born prematurely, have breathing difficulties, or face other critical health challenges at birth."
      ]
    },
    // Additional structural projects would go here...
  ]
};

// ==================== TYPE EXPORTS ====================
export type ProjectStage =
  | "Planning, feasibility, conceptual design"
  | "Design"
  | "Construction"
  | "Operations and maintenance"
  | "Decommissioning";

export interface Expertise {
  title: string;
  description: string;
  image: string;
}

export interface StageDetails {
  expertise: Expertise[];
  isInProject: boolean;
}

export interface DetailedProject {
  title: string;
  location: string;
  clientName: string;
  funder?: string;
  clientNarrative: string;
  activeStage: ProjectStage;
  imageSrc: string;
  imageAlt: string;
  projectImages: {
    src: string;
    alt: string;
    description: string;
  }[];
  stageDetails: Record<ProjectStage, StageDetails>;
  industry: string;
  valueOfServices: number;
  currency: string;
}

export interface IndustryProject {
  id: string;
  title: string;
  image: string;
  location: string;
  featured?: boolean;
  industry: string;
}