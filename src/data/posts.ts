import type { ImageKey } from "@/lib/images";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  image: ImageKey;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
};

export const posts: Post[] = [
  {
    slug: "benefits-of-solar-panels-in-basti",
    title: "10 Real Benefits of Installing Solar Panels in Basti",
    excerpt:
      "From 90% bill savings to 25-year warranty, here are the practical reasons Basti homeowners are switching to rooftop solar in 2026.",
    metaTitle: "10 Benefits of Solar Panels in Basti (2026 Guide) | Balaji Enterprises",
    metaDescription:
      "Discover the top 10 benefits of installing rooftop solar panels in Basti, Uttar Pradesh — from 90% bill savings to subsidy support and 25-year warranty.",
    image: "rooftopCustomer",
    date: "2026-01-15",
    readTime: "14 min",
    category: "Solar Education",
    keywords: [
      "solar panel benefits Basti",
      "why install solar Basti",
      "solar savings Basti",
      "rooftop solar advantages",
    ],
  },
  {
    slug: "solar-subsidy-in-uttar-pradesh",
    title: "Solar Subsidy in Uttar Pradesh — Complete 2026 Guide",
    excerpt:
      "Step-by-step guide to claiming up to ₹78,000 subsidy under PM Surya Ghar Muft Bijli Yojana for your rooftop solar in UP.",
    metaTitle: "Solar Subsidy in Uttar Pradesh 2026 | PM Surya Ghar | Balaji Enterprises",
    metaDescription:
      "Get up to ₹78,000 solar subsidy in Uttar Pradesh under PM Surya Ghar Muft Bijli Yojana. Eligibility, application steps, and documents explained.",
    image: "heroGPS",
    date: "2026-02-02",
    readTime: "15 min",
    category: "Subsidy & Policy",
    keywords: [
      "solar subsidy UP",
      "PM Surya Ghar Muft Bijli Yojana",
      "Uttar Pradesh solar subsidy",
      "UPPCL solar subsidy",
    ],
  },
  {
    slug: "on-grid-vs-off-grid-solar",
    title: "On-Grid vs Off-Grid vs Hybrid Solar — Which is Best for Your Home?",
    excerpt:
      "Confused between on-grid, off-grid and hybrid solar? Here's a side-by-side comparison with costs, pros and cons for Indian homes.",
    metaTitle: "On-Grid vs Off-Grid vs Hybrid Solar — 2026 Comparison | Balaji Enterprises",
    metaDescription:
      "On-grid, off-grid or hybrid solar? Detailed comparison of cost, features, payback and best use-cases for homes and businesses in India.",
    image: "rooftopArrayTeam",
    date: "2026-02-20",
    readTime: "14 min",
    category: "Solar Education",
    keywords: [
      "on grid vs off grid solar",
      "hybrid solar system",
      "best solar type for home",
      "solar comparison India",
    ],
  },
  {
    slug: "best-solar-panels-in-india",
    title: "Best Solar Panels in India for 2026 (Adani vs Tata vs Waaree)",
    excerpt:
      "An honest comparison of India's top solar panel brands — Adani, Tata, Waaree, Vikram, Loom — across efficiency, warranty and price.",
    metaTitle: "Best Solar Panels in India 2026 | Brand Comparison | Balaji Enterprises",
    metaDescription:
      "Compare Adani, Tata, Waaree, Vikram and Loom solar panels for 2026. Efficiency, warranty, prices and which is best for your home in India.",
    image: "commercialInstall",
    date: "2026-03-10",
    readTime: "16 min",
    category: "Brand Reviews",
    keywords: [
      "best solar panel India",
      "Adani vs Tata solar",
      "top solar brands India",
      "solar panel comparison",
    ],
  },
  {
    slug: "how-much-electricity-can-solar-save",
    title: "How Much Electricity Can Solar Save? Real Numbers for Indian Homes",
    excerpt:
      "Calculate your actual savings: a clear breakdown of generation, bill reduction and ROI for 1 kW to 10 kW rooftop solar systems.",
    metaTitle: "How Much Can Solar Save? (Real Numbers) | Balaji Enterprises",
    metaDescription:
      "Real savings from rooftop solar in India — generation, monthly bill reduction and payback period for 1 kW to 10 kW systems explained.",
    image: "rooftop3kw",
    date: "2026-04-05",
    readTime: "15 min",
    category: "Savings & ROI",
    keywords: [
      "solar electricity savings",
      "solar payback India",
      "rooftop solar generation",
      "solar ROI calculator",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
