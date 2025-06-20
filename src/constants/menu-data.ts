// Define the structure for our mega menu data
export interface MegaMenuItem {
  title: string;
  href: string;
}

export interface MegaMenuSection {
  title: string;
  description?: string;
  path: string | null;
  items: MegaMenuItem[] | null;
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
  projects: {
    title: "Projects",
    description: "Explore our projects across industries",
    path: "/projects",
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
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_55/v1742876740/william-topa-x9AZgR25G-k-unsplash_pfi9zf.webp",
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
  "about-us": {
    title: "About us",
    description: "Information about the Fugro organisation",
    path: "about-us",
    items: [
      { title: "What we do", href: "what-we-do" },
      { title: "Mission", href: "mission" },
      { title: "Our Values", href: "values" },
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_59/v1742877982/maarten-van-den-heuvel-yAsKqYbUQzY-unsplash_ckjwmx.webp",
      alt: "About PEC",
      caption: "Leading geo-data specialist",
    },
  },
};
