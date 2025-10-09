import laptopSunset from "@/images/laptop-sunset.png";
import type { CateringPromo } from "@/types/constants";

export const CATERING_PROMO = {
  heading: "Handmade. Hand delivered.",
  lead: "Freshly made breakfast, lunch and sweet platters – from our kitchen to yours.",
  body: "In-laws popping by? Busy teams need a boost? Whenever you need to fuel a crowd for breakfast, lunch or snacks, order by 10 am for same-day delivery.",
  cta: { label: "Find out more", href: "/catering" },
  image: {
    src: laptopSunset,
    alt: "Catering platter with sandwiches and snacks",
    aspectRatio: "16/13",
  },
} as const satisfies CateringPromo;
