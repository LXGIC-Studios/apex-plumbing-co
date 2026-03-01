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
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Apex Plumbing Co.</h1>
          <p className="text-gray-200 text-lg">Family-owned since 2012, licensed and insured</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Apex Plumbing Co. was founded in 2012 by the Carter family with a simple mission: provide honest, reliable plumbing services at fair prices. What started as a one-truck operation has grown into one of Nashville&apos;s most trusted plumbing companies.
            </p>
            <p className="text-gray-600 mb-4">
              With over a decade of experience and thousands of satisfied customers, we&apos;ve built our reputation on showing up on time, doing the job right, and treating every home like our own.
            </p>
            <p className="text-gray-600">
              We&apos;re fully licensed, bonded, and insured — and we stand behind every job with a 100% satisfaction guarantee.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/about.jpg" alt="Apex Plumbing team member at work" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-navy mb-10">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⏰", title: "On-Time Guarantee", desc: "We respect your time. If we're late, your service call is free." },
              { icon: "💲", title: "Upfront Pricing", desc: "No surprises. We quote the job before we start, and the price is the price." },
              { icon: "✨", title: "Clean Worksite", desc: "We leave your home cleaner than we found it. Drop cloths, booties, and a thorough cleanup — every time." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-navy mb-10">Meet the Team</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { name: "Mike Carter", role: "Owner & Master Plumber" },
              { name: "Jessica Carter", role: "Operations Manager" },
              { name: "David Chen", role: "Lead Technician" },
            ].map((t) => (
              <div key={t.name} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-4xl text-gray-400">👤</div>
                <h3 className="font-bold text-navy">{t.name}</h3>
                <p className="text-gray-600 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
