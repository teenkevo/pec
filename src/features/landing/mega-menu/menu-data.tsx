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

// Sample data for our mega menu
export const megaMenuData: MegaMenuData = {
  industries: {
    title: "Industries",
    description: "Explore our industry solutions",
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
      caption: "Innovative industry solutions",
    },
  },
  services: {
    title: "Services",
    description: "Our technical capabilities",
    items: [
      { title: "Data Acquisition", href: "#data-acquisition" },
      { title: "Analysis", href: "#analysis" },
      { title: "Consulting", href: "#consulting" },
      { title: "Solutions", href: "#solutions" },
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp",
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
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp",
      alt: "Career opportunities",
      caption: "Build your career with us",
    },
  },
  investors: {
    title: "Investors",
    description: "Information for investors",
    items: [
      { title: "Financial Results", href: "#results" },
      { title: "Annual Reports", href: "#reports" },
      { title: "Shareholder Information", href: "#shareholders" },
      { title: "Governance", href: "#governance" },
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp",
      alt: "Investor relations",
      caption: "Sustainable growth and value",
    },
  },
  news: {
    title: "News",
    description: "Latest updates and insights",
    items: [
      { title: "Press Releases", href: "#press" },
      { title: "Blog", href: "#blog" },
      { title: "Events", href: "#events" },
      { title: "Media Library", href: "#media" },
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
    items: [
      { title: "About us", href: "#about" },
      { title: "Purpose", href: "#purpose" },
      { title: "Strategy", href: "#strategy" },
      { title: "Our values", href: "#values" },
      { title: "Governance", href: "#governance" },
      { title: "Sustainability", href: "#sustainability" },
      { title: "Health and safety", href: "#safety" },
      { title: "Our locations", href: "#locations" },
    ],
    featuredImage: {
      src: "https://res.cloudinary.com/teenkevo-cloud/image/upload/q_65/v1742072211/IMG_7560_3_imaovc.webp",
      alt: "About PEC",
      caption: "Leading geo-data specialist",
    },
  },
};
