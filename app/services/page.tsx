import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services | Apex Plumbing Co.",
  description: "Full-service plumbing in Nashville: leak repair, pipe replacement, bathroom remodeling, sewer lines, water heaters, drain cleaning, and more.",
  openGraph: { title: "Our Services | Apex Plumbing Co.", description: "Full-service plumbing in Nashville." },
};

const services = [
  { icon: "💧", title: "Leak Repair", description: "From dripping faucets to hidden slab leaks, we locate and fix leaks fast to prevent costly water damage." },
  { icon: "🔩", title: "Pipe Replacement", description: "Corroded or outdated pipes? We replace galvanized, copper, and PVC piping with modern, durable materials." },
  { icon: "🛁", title: "Bathroom Remodeling", description: "Upgrade your bathroom with new fixtures, tiling, and plumbing layouts. We handle the entire plumbing scope." },
  { icon: "🏗️", title: "Sewer Line Service", description: "Camera inspections, trenchless repair, and full sewer line replacement. We solve the toughest underground problems." },
  { icon: "🔥", title: "Water Heater Install/Repair", description: "Tank and tankless water heater installation, repair, and maintenance. Same-day service on most models." },
  { icon: "🔧", title: "Drain Cleaning", description: "Professional hydro-jetting and snake services for stubborn clogs in kitchens, bathrooms, and main lines." },
  { icon: "🚿", title: "Fixture Installation", description: "Sinks, toilets, showers, tubs, and garbage disposals installed right the first time with full warranty." },
  { icon: "💎", title: "Water Filtration", description: "Whole-home and under-sink water filtration systems for cleaner, better-tasting water throughout your home." },
];

export default function Services() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-200 text-lg">Professional plumbing solutions for every need</p>
        </div>
      </section>
      <section className="py-16 bg-gray-bg">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} showButton />
          ))}
        </div>
      </section>
    </>
  );
}
