import {
  Award,
  BadgeCheck,
  FlaskConical,
  HeartHandshake,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Truck
} from "lucide-react";

export const categories = ["All", "Skin Rituals", "Hair Care", "Wellness", "Herbal Teas"];

export const products = [
  {
    id: "kumkumadi-glow-elixir",
    name: "Kumkumadi Glow Elixir",
    category: "Skin Rituals",
    price: 1890,
    tone: "maroon",
    description: "Saffron, manjistha and rosehip oil for a luminous night ritual.",
    badge: "Bestseller"
  },
  {
    id: "bhringraj-hair-nectar",
    name: "Bhringraj Hair Nectar",
    category: "Hair Care",
    price: 1420,
    tone: "green",
    description: "Cold-pressed sesame oil infused with bhringraj, amla and brahmi.",
    badge: "New"
  },
  {
    id: "triphala-daily-balance",
    name: "Triphala Daily Balance",
    category: "Wellness",
    price: 760,
    tone: "gold",
    description: "A gentle digestive tonic crafted from haritaki, bibhitaki and amla.",
    badge: "Clean"
  },
  {
    id: "tulsi-saffron-calm-tea",
    name: "Tulsi Saffron Calm Tea",
    category: "Herbal Teas",
    price: 540,
    tone: "green",
    description: "Whole-leaf tulsi, saffron threads and rose petals for evening calm.",
    badge: "Ritual"
  },
  {
    id: "neem-clarity-mask",
    name: "Neem Clarity Mask",
    category: "Skin Rituals",
    price: 980,
    tone: "green",
    description: "Neem, vetiver and fuller earth for a refined weekly detox.",
    badge: "Vegan"
  },
  {
    id: "ashwagandha-rest-drops",
    name: "Ashwagandha Rest Drops",
    category: "Wellness",
    price: 1290,
    tone: "maroon",
    description: "Adaptogenic drops for balance, sleep support and nervous system ease.",
    badge: "Doctor-loved"
  }
];

export const blogs = [
  {
    slug: "dinacharya-modern-mornings",
    title: "Dinacharya for Modern Indian Mornings",
    category: "Rituals",
    readTime: "5 min read",
    tone: "green",
    excerpt: "A realistic Ayurveda morning rhythm for busy homes, commutes and city life.",
    body: "Dinacharya is not a rigid checklist. It is a way to make the first hour of the day feel intentional. Begin with warm water, a few minutes of oil massage, gentle movement and a breakfast that suits your prakriti. The Prabhukul approach keeps the practice elegant, doable and consistent."
  },
  {
    slug: "why-saffron-still-matters",
    title: "Why Saffron Still Matters in Skincare",
    category: "Ingredients",
    readTime: "4 min read",
    tone: "maroon",
    excerpt: "The science and sensorial heritage behind kesar-led radiance rituals.",
    body: "Saffron has endured because it combines ceremony with function. Used carefully, it supports a brighter-looking complexion and brings a unmistakable sense of luxury to a nightly ritual. We pair it with manjistha and rosehip to keep the formula balanced."
  },
  {
    slug: "hair-oiling-with-bhringraj",
    title: "The Case for Slow Hair Oiling",
    category: "Hair Care",
    readTime: "6 min read",
    tone: "gold",
    excerpt: "How bhringraj, brahmi and massage create a restorative weekly practice.",
    body: "Hair oiling works best when it is slow enough to become a ritual. Warm a small amount of oil, massage from crown to ends and let the herbs rest before washing. Bhringraj and brahmi are prized in Ayurveda for scalp comfort and stronger-looking hair."
  }
];

export const testimonials = [
  { name: "Ananya Rao", city: "Bengaluru", text: "The glow elixir feels luxurious without being heavy. My skin actually looks rested in the morning." },
  { name: "Kabir Mehta", city: "Mumbai", text: "The bhringraj oil turned my Sunday champi into something I genuinely look forward to." },
  { name: "Ishita Sen", city: "Kolkata", text: "Premium packaging, honest ingredients and the tea is now part of my workday wind-down." },
  { name: "Rohan Malhotra", city: "Delhi", text: "Finally an Ayurveda brand that feels modern but not disconnected from tradition." }
];

export const benefits = [
  { label: "Natural origin formulations", value: "100%", icon: Leaf },
  { label: "Happy ritualists across India", value: "10k+", icon: HeartHandshake },
  { label: "Cruelty-free batches", value: "0", icon: ShieldCheck },
  { label: "Days farm-to-formula cycle", value: "21", icon: Sprout }
];

export const whyUs = [
  { title: "Natural Ingredients", text: "Single-origin botanicals and cold-pressed carrier oils.", icon: Sparkles },
  { title: "Ayurvedic Certification", text: "Formulated with vaidya review and batch documentation.", icon: BadgeCheck },
  { title: "No Harsh Chemicals", text: "No parabens, sulphates, mineral oils or synthetic fragrance.", icon: FlaskConical },
  { title: "Trusted Heritage", text: "Rituals inspired by household wisdom and modern testing.", icon: Award }
];

export const faqs = [
  ["Are Prabhukul products certified?", "The demo uses mock content, but the structure is ready for real certificates, batch records and product documents."],
  ["Do you support COD and pan-India shipping?", "Yes, the storefront is designed for pan-India shipping flows, order tracking and vendor fulfilment."],
  ["Can vendors manage products?", "Vendor dashboards include product listing management, order requests and sales metrics using demo data."],
  ["Is this safe for sensitive skin?", "Patch testing is always recommended. Product pages can be extended with full ingredient and allergen details."]
];

export const trustIcons = [Star, Truck, PackageCheck];
