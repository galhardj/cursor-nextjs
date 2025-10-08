export type FooterSection = {
  title: string;
  links: { label: string; href: string }[];
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "About Us",
    links: [
      { label: "Allergen Guide", href: "/allergen-guide" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact Us", href: "/contact" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
      { label: "Covid-19 Response", href: "/covid-19" },
      { label: "Shop Finder", href: "/shops" },
      { label: "Do Not Sell or Share My Information", href: "/privacy/ccpa" },
    ],
  },
  {
    title: "Joy of Pret",
    links: [
      { label: "Rewards", href: "/rewards" },
      { label: "Gift Cards", href: "/gift-cards" },
    ],
  },
  {
    title: "Corporate",
    links: [
      { label: "Media Center", href: "/media" },
      { label: "Careers at Pret", href: "/careers" },
      { label: "Modern Slavery Statement", href: "/modern-slavery" },
      { label: "ESG Report", href: "/esg" },
      { label: "Franchise a Pret", href: "/franchise" },
    ],
  },
  {
    title: "Club Pret",
    links: [
      { label: "Subscribe", href: "/club/subscribe" },
      { label: "Manage My Account", href: "/club/account" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: "f" },
  { label: "TikTok", href: "https://tiktok.com", icon: "x" },
  { label: "Instagram", href: "https://instagram.com", icon: "i" },
];


