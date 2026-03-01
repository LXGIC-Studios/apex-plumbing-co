import type { Metadata } from "next";
import { WrenchIcon, DropletIcon, FlameIcon, PipeIcon, ShowerIcon, SewerIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Services | Apex Plumbing Co.",
  description: "Full-service plumbing in Nashville: emergency repairs, drain cleaning, water heaters, pipe replacement, bathroom plumbing, and sewer line service.",
};

const services = [
  {
    icon: <WrenchIcon className="w-10 h-10 text-orange" />,
    title: "Emergency Repairs",
    description: "When a pipe bursts at 2am or your toilet overflows during dinner, you need a plumber you can count on. Our emergency team is available 24/7, 365 days a year with an average response time of under 45 minutes.",
    problems: ["Burst or frozen pipes", "Sewage backups", "Overflowing toilets", "Major water leaks", "No hot water"],
  },
  {
    icon: <DropletIcon className="w-10 h-10 text-orange" />,
    title: "Drain Cleaning",
    description: "Slow drains and stubborn clogs are more than an inconvenience. Left untreated, they can lead to pipe damage and sewage backups. We use professional hydro-jetting and mechanical snake equipment to clear any blockage.",
    problems: ["Slow-draining sinks or tubs", "Recurring clogs", "Gurgling drains", "Foul drain odors", "Multiple clogged fixtures"],
  },
  {
    icon: <FlameIcon className="w-10 h-10 text-orange" />,
    title: "Water Heater Installation",
    description: "Whether you need a new tank water heater or want to upgrade to a tankless system, we install and service all major brands. Same-day installation available on most models with full manufacturer warranty.",
    problems: ["No hot water", "Inconsistent water temperature", "Rusty or discolored water", "Leaking water heater", "High energy bills from old unit"],
  },
  {
    icon: <PipeIcon className="w-10 h-10 text-orange" />,
    title: "Pipe Replacement",
    description: "Old galvanized or corroded pipes can cause low water pressure, discolored water, and eventual leaks. We replace outdated piping with modern, durable materials like PEX and copper to protect your home for decades.",
    problems: ["Low water pressure", "Discolored water", "Frequent leaks", "Old galvanized pipes", "Pinhole leaks in copper"],
  },
  {
    icon: <ShowerIcon className="w-10 h-10 text-orange" />,
    title: "Bathroom Plumbing",
    description: "From installing a new shower to a complete bathroom remodel, we handle every aspect of bathroom plumbing. Fixtures, supply lines, drains, and venting done right the first time with a clean, professional finish.",
    problems: ["Leaking shower or tub", "Running toilet", "Dripping faucets", "Poor water pressure in bathroom", "Outdated fixtures needing replacement"],
  },
  {
    icon: <SewerIcon className="w-10 h-10 text-orange" />,
    title: "Sewer Line Service",
    description: "Sewer line problems are serious and need expert attention. We offer camera inspections to diagnose issues, trenchless repair options to minimize yard disruption, and complete sewer line replacement when necessary.",
    problems: ["Sewage smell in yard", "Multiple drain backups", "Soggy patches in lawn", "Tree root intrusion", "Aging clay or cast iron sewer pipes"],
  },
];

export default function Services() {
  return (
    <>
      <section className="relative bg-navy text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-navy" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Our Services</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">Professional plumbing solutions for every need</p>
        </div>
      </section>

      <section className="py-24 bg-gray-bg">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 hidden md:flex">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center md:hidden">
                      {s.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-navy">{s.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{s.description}</p>
                  <div className="mb-6">
                    <h3 className="font-bold text-navy mb-3">Common Problems We Solve:</h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {s.problems.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-gray-600">
                          <svg className="w-4 h-4 text-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="/contact" className="inline-block bg-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-hover hover:shadow-lg transition-all duration-300">
                    Call for a Free Estimate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Plumbing Emergency? Don&apos;t Wait.</h2>
          <p className="text-xl mb-8 text-gray-300">Call us now for fast, reliable service.</p>
          <a href="tel:5552345678" className="inline-block bg-orange text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover hover:shadow-xl hover:scale-105 transition-all duration-300">
            Call Now - (555) 234-5678
          </a>
        </div>
      </section>
    </>
  );
}
