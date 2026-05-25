export const siteConfig = {
  name: "Balaji Enterprises",
  shortName: "Balaji Solar",
  tagline: "Trusted Solar Panel Dealer & Installer in Basti, Uttar Pradesh",
  description:
    "Balaji Enterprises is a leading solar company in Basti offering rooftop solar installation, on-grid, off-grid, and hybrid solar systems for homes and businesses across Uttar Pradesh. Authorized dealer of top solar brands with end-to-end installation and maintenance.",
  url: "https://balajienterprisesbasti.in",
  ogImage: "/og-image.jpg",
  locale: "en_IN",
  phone: "+919452099320",
  phoneDisplay: "+91 94520 99320",
  whatsapp: "919452099320",
  whatsappLink: "https://wa.me/919452099320",
  email: "balajisolarbasti@gmail.com",
  address: {
    street: "Bansi Road, Badeban Rd, Bargadwa",
    locality: "Basti",
    region: "Uttar Pradesh",
    postalCode: "272001",
    country: "IN",
    landmark: "Habeli Khas",
    fullAddress:
      "Bansi Road, Badeban Rd, Bargadwa, Basti, Habeli Khas, Uttar Pradesh 272001",
  },
  geo: {
    latitude: 26.8124,
    longitude: 82.7332,
  },
  hours: [
    { day: "Monday", open: "09:00", close: "19:00" },
    { day: "Tuesday", open: "09:00", close: "19:00" },
    { day: "Wednesday", open: "09:00", close: "19:00" },
    { day: "Thursday", open: "09:00", close: "19:00" },
    { day: "Friday", open: "09:00", close: "19:00" },
    { day: "Saturday", open: "09:00", close: "19:00" },
    { day: "Sunday", open: "10:00", close: "16:00" },
  ],
  social: {
    facebook: "https://www.facebook.com/share/1G7pmUE1GA/",
    instagram: "https://www.instagram.com/balajisolarbasti?igsh=amR2NG80czhrYTg0",
    youtube: "",
    twitter: "https://x.com/balajisolarwale",
  },
  founder: "Balaji Enterprises Team",
  yearFounded: 2018,
  gstNumber: "",
  mapEmbed:
    "https://www.google.com/maps/embed/v1/place?q=Bansi+Road,+Bargadwa,+Basti,+Uttar+Pradesh+272001&key=",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Bansi+Road+Bargadwa+Basti+Uttar+Pradesh+272001",
};

export type SiteConfig = typeof siteConfig;
