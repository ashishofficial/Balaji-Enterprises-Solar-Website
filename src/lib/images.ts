export const images = {
  heroOwner: {
    src: "/images/solar-installation-basti-owner.jpg",
    alt: "Balaji Enterprises owner with rooftop solar installation in Basti, Uttar Pradesh",
  },
  heroGPS: {
    src: "/images/rooftop-solar-basti-gps.jpg",
    alt: "Rooftop solar installation in Basti with GPS-tagged photo — Balaji Enterprises",
  },
  rooftop3kw: {
    src: "/images/rooftop-solar-3kw-basti.jpg",
    alt: "3 kW rooftop solar plant installed in Basti by Balaji Enterprises",
  },
  teamBasti: {
    src: "/images/balaji-solar-team-basti.jpg",
    alt: "Balaji Enterprises solar installation team in Basti — engineers and technicians",
  },
  teamEngineers: {
    src: "/images/balaji-solar-engineers.jpg",
    alt: "Balaji Enterprises solar engineers on rooftop site in Basti",
  },
  teamInstallation: {
    src: "/images/balaji-solar-installation-team.jpg",
    alt: "Solar installation team at completed rooftop in Basti",
  },
  teamHandover: {
    src: "/images/solar-team-handover-basti.jpg",
    alt: "Balaji Enterprises team after successful solar handover in Basti",
  },
  engineersHardhat: {
    src: "/images/solar-engineers-hardhat-basti.jpg",
    alt: "Solar engineers with safety gear during rooftop installation in Basti",
  },
  customerRooftop: {
    src: "/images/rooftop-solar-customer-basti.jpg",
    alt: "Happy rooftop solar customer in Basti with newly installed Balaji solar system",
  },
  commercialCarport: {
    src: "/images/commercial-solar-carport-basti.jpg",
    alt: "Commercial solar carport installation in Basti by Balaji Enterprises",
  },
  commercialInstall: {
    src: "/images/commercial-solar-installation-basti.jpg",
    alt: "Commercial solar installation in Basti — Balaji Enterprises team on site",
  },
  groundMount: {
    src: "/images/ground-mount-solar-array-basti.jpg",
    alt: "Ground-mount solar array installed by Balaji Enterprises near Basti",
  },
  rooftopArrayTeam: {
    src: "/images/solar-rooftop-array-team-basti.jpg",
    alt: "Balaji solar team with completed rooftop array in Basti",
  },
  rooftopCustomer: {
    src: "/images/rooftop-solar-installation-customer.jpg",
    alt: "Rooftop solar customer with installation in Basti, Uttar Pradesh",
  },
  teamPortrait: {
    src: "/images/balaji-solar-team-portrait.jpg",
    alt: "Balaji Enterprises full installation team portrait in front of solar array",
  },
} as const;

export type ImageKey = keyof typeof images;
