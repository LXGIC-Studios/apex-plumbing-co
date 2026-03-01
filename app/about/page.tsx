import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Apex Plumbing Co.",
  description: "Family-owned since 2012. Licensed, insured, and committed to honest, affordable plumbing in Nashville.",
  openGraph: { title: "About Us | Apex Plumbing Co." },
};

export default function About() {
  return (
    <>
      <section className="relative bg-navy text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-navy" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">About Apex Plumbing Co.</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">Family-owned since 2012, licensed and insured</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">Since 2012</p>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">Our Story</h2>
            <p className="text-gray-600 mb-5 text-lg leading-relaxed">
              Apex Plumbing Co. was founded in 2012 by the Carter family with a simple mission: provide honest, reliable plumbing services at fair prices. What started as a one-truck operation has grown into one of Nashville&apos;s most trusted plumbing companies.
            </p>
            <p className="text-gray-600 mb-5 text-lg leading-relaxed">
              With over a decade of experience and thousands of satisfied customers, we&apos;ve built our reputation on showing up on time, doing the job right, and treating every home like our own.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We&apos;re fully licensed, bonded, and insured — and we stand behind every job with a 100% satisfaction guarantee.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/about.jpg" alt="Apex Plumbing team member at work" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-bg">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest text-center mb-3">What Drives Us</p>
          <h2 className="text-3xl md:text-4xl font-black text-center text-navy mb-14">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "OT", title: "On-Time Guarantee", desc: "We respect your time. If we're late, your service call is free." },
              { icon: "UP", title: "Upfront Pricing", desc: "No surprises. We quote the job before we start, and the price is the price." },
              { icon: "CW", title: "Clean Worksite", desc: "We leave your home cleaner than we found it. Drop cloths, booties, and a thorough cleanup — every time." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-300">
                  <span className="text-orange font-black text-xl">{v.icon}</span>
                </div>
                <h3 className="text-xl font-black text-navy mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest text-center mb-3">The People Behind the Work</p>
          <h2 className="text-3xl md:text-4xl font-black text-center text-navy mb-14">Meet the Team</h2>
          <div className="grid sm:grid-cols-3 gap-10">
            {[
              { name: "Mike Carter", role: "Owner & Master Plumber", initials: "MC" },
              { name: "Jessica Carter", role: "Operations Manager", initials: "JC" },
              { name: "David Chen", role: "Lead Technician", initials: "DC" },
            ].map((t) => (
              <div key={t.name} className="text-center group">
                <div className="w-36 h-36 rounded-full bg-gray-100 mx-auto mb-5 flex items-center justify-center text-3xl font-black text-gray-400 group-hover:bg-orange/10 group-hover:text-orange transition-all duration-300 shadow-sm">{t.initials}</div>
                <h3 className="font-black text-navy text-lg">{t.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
