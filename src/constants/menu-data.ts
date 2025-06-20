// Define the structure for our mega menu data
export interface MegaMenuItem {
  title: string;
  href: string;
}

export interface MegaMenuSection {
  title: string;
  description?: string;
  items: MegaMenuItem[];
  featuredImage?: {
    src: string;
    alt: string;
    caption: string;
  };
}

export interface MegaMenuData {
  [key: string]: MegaMenuSection;
}

export const megaMenuData = {
  industries: {
    title: "Industries",
    description: "Explore our industry solutions",
    items: [
      { title: "Transport", href: "industries/transport" },
      { title: "Water and Sanitation", href: "industries/water" },
      { title: "Structures", href: "industries/structures" },
      { title: "Materials & Geotechnics", href: "industries/materials" },
      { title: "Surveying", href: "industries/surveying" },
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp",
      alt: "Industry solutions",
      caption:
        "Delivering sustainable infrastructure that connects people, businesses, and communities",
    },
  },
  expertise: {
    title: "Expertise",
    description: "Our technical capabilities",
    items: [
      { title: "Expertise", href: "expertise" },
      { title: "Publications", href: "publications" },
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_55/v1742876740/william-topa-x9AZgR25G-k-unsplash_pfi9zf.webp",
      alt: "Technical expertise",
      caption: "Advanced technical capabilities",
    },
  },
  careers: {
    title: "Careers",
    description: "Join our global team",
    items: [
      { title: "Open Positions", href: "#positions" },
      { title: "Working at PEC", href: "#working" },
      { title: "Development", href: "#development" },
      { title: "Benefits", href: "#benefits" },
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_68/v1742877869/marten-bjork-6dW3xyQvcYE-unsplash_kxslgq.webp",
      alt: "Career opportunities",
      caption: "Build your career with us",
    },
  },

  blog: {
    title: "Blog",
    description: "Latest updates and insights",
    items: [
      { title: "News", href: "#news" },
      { title: "Insights", href: "#insights" },
      { title: "Press Releases", href: "#press" },
      { title: "Events", href: "#events" },
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp",
      alt: "News and updates",
      caption: "Stay informed with our latest news",
    },
  },
  "about-us": {
    title: "About us",
    description: "Information about the Fugro organisation",
    path: "",
    items: [
      { title: "What we do", href: "#what-we-do" },
      { title: "Mission", href: "#mission" },
      { title: "Our Values", href: "#values"},
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_59/v1742877982/maarten-van-den-heuvel-yAsKqYbUQzY-unsplash_ckjwmx.webp",
      alt: "About PEC",
      caption: "Leading geo-data specialist",
    },
  },
};
