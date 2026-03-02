import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Apex Plumbing Co.",
  description: "Family-owned since 2012. Learn about our team, values, and commitment to Nashville.",
  openGraph: { title: "About | Apex Plumbing Co.", description: "Family-owned plumbing since 2012." },
};

const values = [
  { title: "On-Time Guarantee", desc: "We respect your time. If we're late, the service call is free." },
  { title: "Upfront Pricing", desc: "You approve the price before we start. No surprises on your bill." },
  { title: "Clean Worksite", desc: "We leave your home cleaner than we found it. Every time." },
  { title: "Licensed & Insured", desc: "Fully licensed, bonded, and insured for your peace of mind." },
];

export default function AboutPage() {
  return (
    <main className="pt-[calc(2.5rem+4rem)]">
      <section className="bg-[#1B3A5C] py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white">About Us</h1>
        <p className="text-white/70 mt-3 max-w-xl mx-auto">Family-owned, Nashville-rooted since 2012.</p>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-[45%] relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image src="/images/about-team.jpg" alt="Apex Plumbing team" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
        </div>
        <div className="md:w-[55%]">
          <h2 className="text-3xl font-bold text-[#1B3A5C] mb-4">Our Story</h2>
          <p className="text-[#1B3A5C]/70 leading-relaxed mb-4">
            Apex Plumbing Co. started in 2012 with a single truck and a simple promise: show up on time, do honest work, and charge a fair price. What began as a one-man operation has grown into one of Nashville&apos;s most trusted plumbing companies.
          </p>
          <p className="text-[#1B3A5C]/70 leading-relaxed mb-4">
            We&apos;re still family-owned. Every plumber on our team is someone we&apos;d trust in our own home. We hire for character and train for skill. That&apos;s why our customers keep coming back — and keep referring their neighbors.
          </p>
          <p className="text-[#1B3A5C]/70 leading-relaxed">
            Over 5,000 jobs later, we still answer our own phone, still show up when we say we will, and still stand behind every repair with a full satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1B3A5C] text-center mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">{v.title}</h3>
                <p className="text-[#1B3A5C]/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A5C] py-16 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Ready to Work With Us?</h2>
        <a href="tel:5552345678" className="inline-block bg-[#E8762A] text-white font-bold text-lg px-10 py-4 rounded-lg hover:opacity-90 transition-opacity duration-300">
          Call (555) 234-5678
        </a>
      </section>
    </main>
  );
}
