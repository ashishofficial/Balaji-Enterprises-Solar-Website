export type Testimonial = {
  name: string;
  location: string;
  role: string;
  rating: number;
  quote: string;
  system: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ramesh Pandey",
    location: "Bargadwa, Basti",
    role: "Home owner",
    rating: 5,
    quote:
      "Balaji Enterprises installed a 3 kW rooftop solar at my home in Bargadwa. My UPPCL bill came down from ₹2,800 to under ₹400 a month. They handled all subsidy paperwork — very professional.",
    system: "3 kW On-Grid Solar",
  },
  {
    name: "Sunita Singh",
    location: "Walterganj, Basti",
    role: "School Principal",
    rating: 5,
    quote:
      "We installed a 10 kW solar plant at our school through Balaji. Even during long power cuts our classes never stop. Excellent service and quick maintenance whenever called.",
    system: "10 kW Hybrid Solar",
  },
  {
    name: "Mohammad Aslam",
    location: "Khalilabad",
    role: "Shop owner",
    rating: 5,
    quote:
      "I run a kirana store in Khalilabad. Balaji installed a 5 kW system on my rooftop with Tata panels. Genuine product, fair price and very supportive team.",
    system: "5 kW On-Grid Solar",
  },
  {
    name: "Anjali Mishra",
    location: "Basti town",
    role: "Doctor",
    rating: 5,
    quote:
      "I was looking for a reliable solar installer near my clinic. Balaji Enterprises gave me clear answers, fair pricing and finished installation in 4 days. Highly recommended.",
    system: "5 kW Hybrid Solar",
  },
  {
    name: "Suresh Yadav",
    location: "Bansi Road, Basti",
    role: "Farmer",
    rating: 4,
    quote:
      "Installed off-grid solar for my tube well and farmhouse. No more diesel costs. Balaji team explained everything in simple Hindi and gave proper warranty papers.",
    system: "7.5 kW Off-Grid Solar",
  },
  {
    name: "Vinod Gupta",
    location: "Captainganj, Basti",
    role: "Hotel owner",
    rating: 5,
    quote:
      "Got a 25 kW commercial solar plant for my hotel. Payback is less than 4 years. Balaji's after-sales service is what makes them stand out from other dealers.",
    system: "25 kW Commercial Solar",
  },
];
