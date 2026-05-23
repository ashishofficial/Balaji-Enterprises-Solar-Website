export type Location = {
  slug: string;
  city: string;
  district: string;
  distanceKm: number;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  landmarks: string[];
  pincodes: string[];
  keywords: string[];
};

export const locations: Location[] = [
  {
    slug: "solar-company-khalilabad",
    city: "Khalilabad",
    district: "Sant Kabir Nagar",
    distanceKm: 28,
    metaTitle: "Solar Company in Khalilabad | Rooftop Solar Installer | Balaji Enterprises",
    metaDescription:
      "Best solar company in Khalilabad — rooftop solar installation, on-grid, off-grid & hybrid systems with subsidy support. Serving Khalilabad from Basti. Call +91 94520 99320.",
    h1: "Solar Company in Khalilabad, Sant Kabir Nagar",
    intro:
      "Looking for a reliable solar installer in Khalilabad? Balaji Enterprises has been delivering rooftop solar systems across Sant Kabir Nagar district for years. We're just 28 km away in Basti and serve Khalilabad with same-day site survey and quick installation.",
    landmarks: [
      "Khalilabad Railway Station",
      "Sant Kabir Nagar Collectorate",
      "Magahar",
      "Mehdawal",
    ],
    pincodes: ["272175", "272171", "272148"],
    keywords: [
      "solar company Khalilabad",
      "solar installer Khalilabad",
      "rooftop solar Khalilabad",
      "Sant Kabir Nagar solar",
    ],
  },
  {
    slug: "solar-company-sant-kabir-nagar",
    city: "Sant Kabir Nagar",
    district: "Sant Kabir Nagar",
    distanceKm: 32,
    metaTitle: "Solar Company in Sant Kabir Nagar | Solar Dealer | Balaji Enterprises",
    metaDescription:
      "Solar panel dealer & installer in Sant Kabir Nagar district. Adani, Tata, Waaree panels with subsidy & EMI options. Call Balaji Enterprises +91 94520 99320.",
    h1: "Solar Company in Sant Kabir Nagar",
    intro:
      "Sant Kabir Nagar households and businesses are switching to solar fast — and Balaji Enterprises is the go-to installer in the district. From Mehdawal to Magahar to Khalilabad, we provide end-to-end solar solutions with full subsidy and net-metering paperwork.",
    landmarks: [
      "Magahar (Kabir Samadhi Sthal)",
      "Mehdawal",
      "Hainsar Bazar",
      "Belhar Kala",
    ],
    pincodes: ["272175", "272181", "272161"],
    keywords: [
      "solar company Sant Kabir Nagar",
      "solar dealer SKN",
      "rooftop solar Sant Kabir Nagar",
      "solar installer SKN",
    ],
  },
  {
    slug: "solar-company-gorakhpur",
    city: "Gorakhpur",
    district: "Gorakhpur",
    distanceKm: 70,
    metaTitle: "Solar Company in Gorakhpur | Rooftop Solar | Balaji Enterprises",
    metaDescription:
      "Top-rated solar company in Gorakhpur — rooftop solar, commercial solar, AMC and maintenance. Trusted Adani, Tata & Waaree dealer. Call +91 94520 99320.",
    h1: "Solar Company in Gorakhpur, Uttar Pradesh",
    intro:
      "Gorakhpur is one of UP's biggest cities and a major opportunity for solar adoption. Balaji Enterprises serves Gorakhpur with residential, commercial and industrial solar installations — from a 1 kW home system to 100+ kW factory plants.",
    landmarks: [
      "Gorakhnath Mandir",
      "AIIMS Gorakhpur",
      "MMMUT",
      "Mohaddipur",
    ],
    pincodes: ["273001", "273006", "273008", "273014"],
    keywords: [
      "solar company Gorakhpur",
      "solar installer Gorakhpur",
      "rooftop solar Gorakhpur",
      "solar dealer Gorakhpur",
    ],
  },
  {
    slug: "solar-company-ayodhya",
    city: "Ayodhya",
    district: "Ayodhya",
    distanceKm: 110,
    metaTitle: "Solar Company in Ayodhya | Rooftop Solar Installer | Balaji Enterprises",
    metaDescription:
      "Solar installation in Ayodhya — rooftop solar for homes, ashrams, hotels and shops. Subsidy + EMI options. Serving Ayodhya from Basti. Call +91 94520 99320.",
    h1: "Solar Company in Ayodhya, Uttar Pradesh",
    intro:
      "Ayodhya is being developed as a model solar city under MNRE's Solar City programme. Balaji Enterprises offers complete rooftop solar solutions in Ayodhya for homes, hotels, ashrams, shops and commercial complexes, with full subsidy paperwork support.",
    landmarks: [
      "Ram Mandir",
      "Hanuman Garhi",
      "Saryu Ghat",
      "Ayodhya Junction",
    ],
    pincodes: ["224001", "224123", "224135"],
    keywords: [
      "solar company Ayodhya",
      "rooftop solar Ayodhya",
      "solar installer Ayodhya",
      "Ayodhya solar city",
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
