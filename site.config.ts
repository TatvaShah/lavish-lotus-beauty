import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Lavish Lotus Beauty",
  tagline: "Custom nail sets in Markham. Certified nail art, booked by DM.",
  category: "Nail tech",
  schemaType: "BeautySalon",
  area: "Markham, ON",
  siteUrl: "https://lavish-lotus-beauty.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#C48B9F" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Markham nail studio",
    headline: "Pretty nails, booked by DM",
    subhead:
      "Custom nail sets and bling square looks from a certified nail tech. Send a DM to book your appointment.",
    images: [
      { src: "/images/post-3.jpg", alt: "October nail set by Lavish Lotus Beauty" },
      { src: "/images/post-6.jpg", alt: "Bling square nail set" },
      { src: "/images/post-7.jpg", alt: "Leopard and cherry nail art" },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Certified nail tech",
    "Custom sets and bling squares",
    "Markham area",
    "Book by Instagram DM",
  ],

  about: {
    title: "Lavish Lotus Beauty",
    body: [
      "Lavish Lotus Beauty is a Markham area nail studio creating custom nail sets and bling square looks. Availability opens around the third of each month, so book early for your preferred date.",
      "October bookings include a bring a bestie offer: book together and each receive 15 percent off your set. Message to reserve your spot.",
    ],
    image: { src: "/images/post-3.jpg", alt: "Nail set by Lavish Lotus Beauty" },
  },

  menu: {
    label: "Services",
    title: "What we offer",
    intro: "Popular services. Message for pricing on your look and length.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your look and length.",
    groups: [
      {
        title: "Nails",
        items: [
          { name: "Nail sets", description: "Custom colour and design sets." },
          { name: "Bling square sets", description: "Squared shapes with sparkle and detail." },
        ],
      },
    ],
    footnote: "Ask about current month promos when you book, including bring a bestie offers.",
  },

  gallery: {
    title: "Recent sets",
    items: [
      {
        src: "/images/post-3.jpg",
        width: 1080,
        height: 1440,
        alt: "October bookings nail set",
        caption: "October bookings open",
        href: "https://www.instagram.com/p/DeSw4lOjdR8/",
      },
      {
        src: "/images/post-6.jpg",
        width: 720,
        height: 1280,
        alt: "Bling square nail set",
        caption: "Bling square love",
        href: "https://www.instagram.com/p/DdpIOElhYpm/",
      },
      {
        src: "/images/post-7.jpg",
        width: 720,
        height: 1280,
        alt: "Leopard and cherry nail art",
        caption: "Leopard and cherry",
        href: "https://www.instagram.com/p/DdhsNP-OV7V/",
      },
      {
        src: "/images/post-1.jpg",
        width: 720,
        height: 1280,
        alt: "October promo nail look",
        caption: "Pretty nails all month",
        href: "https://www.instagram.com/p/DeVL87BP8-j/",
      },
      {
        src: "/images/post-5.jpg",
        width: 1080,
        height: 1920,
        alt: "Halloween bowl promo nails",
        caption: "No tricks, all treats",
        href: "https://www.instagram.com/p/DeGm2QyBkAY/",
      },
      {
        src: "/images/post-4.jpg",
        width: 720,
        height: 1280,
        alt: "October availability nail set",
        caption: "October availability",
        href: "https://www.instagram.com/p/DeK7t2zNiLU/",
      },
      {
        src: "/images/post-8.jpg",
        width: 720,
        height: 1280,
        alt: "Summer nail set",
        caption: "Summer set moment",
        href: "https://www.instagram.com/p/DZ3ZgtgOEx4/",
      },
      {
        src: "/images/post-2.jpg",
        width: 640,
        height: 1136,
        alt: "October bookings reel still",
        caption: "Bookings open",
        href: "https://www.instagram.com/p/DeU0S67Pids/",
      },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "lavishlotus.beauty",
    embeds: [
      "https://www.instagram.com/p/DeSw4lOjdR8/",
      "https://www.instagram.com/p/DdpIOElhYpm/",
      "https://www.instagram.com/p/DdhsNP-OV7V/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book your appointment",
    intro:
      "Bookings are by Instagram DM. Tap below to open a starter message, or use the Linktree for more ways to connect.",
    dmMessage:
      "Hi Lavish Lotus Beauty! I would love to book a nail appointment.\nPreferred date:\nService (nail set or bling square):\nDesign idea:",
    links: [{ label: "Linktree", href: "https://linktr.ee/Lavishlotusbeauty" }],
    note: "Availability is posted around the third of every month. October includes a bring a bestie 15 percent off offer when you book together.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I book?",
      a: "Send an Instagram DM with your preferred date, service, and design idea. You can also check the Linktree for more links.",
    },
    {
      q: "Where are you located?",
      a: "Appointments are in the Markham area (near 14th and Markham). Details are shared when you book.",
    },
    {
      q: "What services do you offer?",
      a: "Custom nail sets and bling square sets. Message for pricing on your look and length.",
    },
    {
      q: "Are there current promos?",
      a: "October bookings include a bring a bestie offer: book together and each receive 15 percent off your set. Ask about the Halloween bowl surprise when you book.",
    },
  ],

  contact: {
    title: "Contact and booking",
    area: "Markham, Ontario",
    socials: [{ label: "Linktree", href: "https://linktr.ee/Lavishlotusbeauty" }],
  },

  seo: {
    title: "Lavish Lotus Beauty | Nail tech in Markham",
    description:
      "Custom nail sets and bling square looks from a certified nail tech in Markham, ON. Book your appointment by Instagram DM.",
    keywords: [
      "nail tech Markham",
      "bling square nails Markham",
      "custom nails Markham",
      "Lavish Lotus Beauty",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
