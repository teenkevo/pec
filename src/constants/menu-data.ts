// Define the structure for our mega menu data
export interface MegaMenuItem {
  title: string;
  href: string;
}

export interface MegaMenuSection {
  title: string;
  description?: string;
  path: string;
  items: MegaMenuItem[] | null;
  hasSubsections?: boolean;
  featuredImage?: {
    src: string;
    alt: string;
    caption: string;
  } | null;
}

export interface MegaMenuData {
  [key: string]: MegaMenuSection;
}

export const megaMenuData: MegaMenuData = {
  "about-us": {
    title: "About us",
    description: "Information about the PEC organisation",
    path: "about-us",
    hasSubsections: true,
    items: [
      { title: "What we do", href: "what-we-do" },
      { title: "Mission", href: "mission" },
      { title: "Our Values", href: "values" },
      { title: "Company Profile", href: "company-profile" },
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_75/v1743528551/A1B6E84B-AE56-4195-A303-CAA589D0DA76_1_201_a_ww70gd.webp",
      alt: "About PEC",
      caption: "Leading civil engineering consultancy",
    },
  },
  projects: {
    title: "Projects",
    description: "Explore our projects across industries",
    path: "projects",
    items: [
      { title: "Transport", href: "transport" },
      { title: "Water and Sanitation", href: "water" },
      { title: "Structures", href: "structures" },
      { title: "Materials & Geotechnics", href: "materials" },
      { title: "Surveying", href: "surveying" },
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
    path: "expertise",
    items: [
      { title: "Expertise", href: "expertise" },
      { title: "Publications", href: "publications" },
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_73/v1742873852/troy-mortier-eKY6_9W_iqY-unsplash_mrjhs7.webp",
      alt: "Technical expertise",
      caption: "Advanced technical capabilities",
    },
  },
  clients: {
    title: "Clients",
    description: "Our technical capabilities",
    path: "clients",
    items: null,
    featuredImage: null,
  },
  careers: {
    title: "Careers",
    description: "Join our global team",
    path: "careers",
    hasSubsections: true,
    items: [
      { title: "Open Positions", href: "positions" },
      { title: "Working at PEC", href: "working" },
      { title: "Development", href: "development" },
      { title: "Benefits", href: "benefits" },
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_68/v1742877869/marten-bjork-6dW3xyQvcYE-unsplash_kxslgq.webp",
      alt: "Career opportunities",
      caption: "Build your career with us",
    },
  },
  blog: {
    title: "Blog",
    path: "blog",
    hasSubsections: true,
    description: "Latest updates and insights",
    items: [
      { title: "News", href: "news" },
      { title: "Insights", href: "insights" },
      { title: "Press Releases", href: "press" },
      { title: "Events", href: "events" },
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp",
      alt: "News and updates",
      caption: "Stay informed with our latest news",
    },
  },
};
