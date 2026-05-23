export type Location = {
  slug: string;
  city: string;
  district: string;
  distanceKm: number;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  address?: string;
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
  {
    slug: "solar-company-hardoi",
    city: "Hardoi",
    district: "Hardoi",
    distanceKm: 235,
    metaTitle: "Solar Company in Hardoi | Rooftop Solar Installer | Balaji Enterprises",
    metaDescription:
      "Solar installation in Hardoi for homes, shops, schools and businesses. Rooftop solar, subsidy paperwork, net metering and AMC by Balaji Enterprises.",
    h1: "Solar Company in Hardoi, Uttar Pradesh",
    intro:
      "Balaji Enterprises provides complete rooftop solar installation in Hardoi for residential, commercial and institutional customers. We help with system design, genuine solar panels, subsidy paperwork, net-metering support and long-term maintenance.",
    landmarks: [
      "Hardoi Railway Station",
      "Numaish Chauraha",
      "Sandila",
      "Shahabad",
    ],
    pincodes: ["241001", "241122", "241124", "241125"],
    keywords: [
      "solar company Hardoi",
      "rooftop solar Hardoi",
      "solar installer Hardoi",
      "solar panel dealer Hardoi",
    ],
  },
  {
    slug: "solar-company-lucknow",
    city: "Lucknow",
    district: "Lucknow",
    distanceKm: 205,
    metaTitle: "Solar Company in Lucknow | Rooftop Solar Installer | Balaji Enterprises",
    metaDescription:
      "Rooftop solar installation in Lucknow with subsidy assistance, net metering, genuine solar panels and AMC support. Visit Balaji Enterprises in Gomti Nagar.",
    h1: "Solar Company in Lucknow, Uttar Pradesh",
    intro:
      "Balaji Enterprises serves Lucknow customers with end-to-end rooftop solar solutions for homes, apartments, shops, offices, schools and commercial buildings. Our team supports site survey, solar design, installation, subsidy filing, net-metering and after-sales service.",
    address:
      "1st Floor, Vivek Plaza, Vibhuti Khand, Gomti Nagar, Lucknow 226010",
    landmarks: [
      "Gomti Nagar",
      "Vibhuti Khand",
      "Indira Nagar",
      "Hazratganj",
    ],
    pincodes: ["226010", "226016", "226001", "226028"],
    keywords: [
      "solar company Lucknow",
      "rooftop solar Lucknow",
      "solar installer Gomti Nagar",
      "solar panel dealer Lucknow",
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
