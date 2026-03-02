import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Apex Plumbing Co.",
  description: "Emergency repairs, drain cleaning, water heater installation, pipe replacement, bathroom plumbing, and sewer line service in Nashville.",
  openGraph: { title: "Services | Apex Plumbing Co.", description: "Full-service plumbing for Nashville homes and businesses." },
};

const services = [
  {
    title: "Emergency Repairs",
    image: "/images/emergency-repair.jpg",
    description: "When a pipe bursts or a fixture fails, every minute counts. Our emergency team is on call 24/7, 365 days a year. We arrive fast, diagnose the problem, and get it fixed right the first time.",
    problems: ["Burst or frozen pipes", "Overflowing toilets", "Major leaks and water damage", "Gas line emergencies", "No hot water"],
  },
  {
    title: "Drain Cleaning",
    image: "/images/drain-cleaning.jpg",
    description: "Slow drains are more than an inconvenience — they can lead to backups and water damage. We use professional-grade equipment including hydro-jetting and camera inspection to clear even the toughest clogs.",
    problems: ["Slow kitchen or bathroom drains", "Recurring clogs", "Foul odors from drains", "Multiple fixtures backing up", "Tree root intrusion"],
  },
  {
    title: "Water Heater Installation",
    image: "/images/water-heater.jpg",
    description: "Whether you need a new tank water heater or want to upgrade to tankless, we handle the full installation including permits and disposal of your old unit. We work with all major brands.",
    problems: ["No hot water or inconsistent temperature", "Rusty or discolored water", "Leaking water heater", "High energy bills from old unit", "Strange noises from tank"],
  },
  {
    title: "Pipe Replacement",
    image: "/images/pipe-replacement.jpg",
    description: "Aging pipes corrode, crack, and fail. We replace old galvanized, polybutylene, and cast iron pipes with modern PEX and copper. Minimal disruption, clean worksite, lasting results.",
    problems: ["Low water pressure throughout house", "Discolored water", "Frequent leaks in older pipes", "Visible corrosion", "Lead pipe concerns"],
  },
  {
    title: "Bathroom Plumbing",
    image: "/images/bathroom-plumbing.jpg",
    description: "From simple fixture swaps to full bathroom remodels, we handle every aspect of bathroom plumbing. Toilets, showers, tubs, vanities, and supply lines installed to code.",
    problems: ["Running or leaking toilet", "Low shower pressure", "Dripping faucets", "Bathroom remodel plumbing rough-in", "Tub and shower valve replacement"],
  },
  {
    title: "Sewer Line Service",
    image: "/images/sewer-service.jpg",
    description: "Sewer problems are serious. We use camera inspection to pinpoint the issue, then offer trenchless repair or traditional replacement depending on the situation. Full transparency, fair pricing.",
    problems: ["Sewage backup in home", "Gurgling drains", "Wet spots in yard", "Foul smell outdoors", "Slow drains throughout house"],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-[calc(2.5rem+4rem)]">
      <section className="bg-[#1B3A5C] py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white">Our Services</h1>
        <p className="text-white/70 mt-3 max-w-xl mx-auto">Professional plumbing solutions for every need. All work guaranteed.</p>
      </section>

      {services.map((service, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section key={service.title} className={i % 2 === 1 ? "bg-[#F5F5F5]" : ""}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
              {imageLeft ? (
                <>
                  <div className="md:w-[45%] relative min-h-[300px]">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
                  </div>
                  <div className="md:w-[55%] px-6 md:px-14 py-10 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-4">{service.title}</h2>
                    <p className="text-[#1B3A5C]/70 mb-5 leading-relaxed">{service.description}</p>
                    <h4 className="font-semibold text-[#1B3A5C] mb-2">Common problems we solve:</h4>
                    <ul className="space-y-1.5 mb-6">
                      {service.problems.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[#1B3A5C]/70 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#E8762A] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="bg-[#E8762A] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 self-start">
                      Call for a Free Estimate
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-[55%] px-6 md:px-14 py-10 flex flex-col justify-center order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-4">{service.title}</h2>
                    <p className="text-[#1B3A5C]/70 mb-5 leading-relaxed">{service.description}</p>
                    <h4 className="font-semibold text-[#1B3A5C] mb-2">Common problems we solve:</h4>
                    <ul className="space-y-1.5 mb-6">
                      {service.problems.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[#1B3A5C]/70 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#E8762A] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="bg-[#E8762A] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 self-start">
                      Call for a Free Estimate
                    </Link>
                  </div>
                  <div className="md:w-[45%] relative min-h-[300px] order-1 md:order-2">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
                  </div>
                </>
              )}
            </div>
          </section>
        );
      })}
    </main>
  );
}
