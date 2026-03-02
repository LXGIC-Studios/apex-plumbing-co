import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Apex Plumbing Co.",
  description: "Get in touch for a free estimate. Emergency plumbing available 24/7 in Nashville.",
  openGraph: { title: "Contact | Apex Plumbing Co.", description: "Request a free plumbing estimate." },
};

export default function ContactPage() {
  return (
    <main className="pt-[calc(2.5rem+4rem)]">
      <section className="bg-[#1B3A5C] py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white">Contact Us</h1>
        <p className="text-white/70 mt-3 max-w-xl mx-auto">Request a free estimate or schedule a service call.</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        {/* Emergency note */}
        <div className="bg-[#E8762A]/10 border border-[#E8762A]/30 rounded-xl p-4 mb-10 text-center">
          <p className="text-[#E8762A] font-semibold">
            For emergencies, call us directly at{" "}
            <a href="tel:5552345678" className="underline">(555) 234-5678</a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />

          {/* Business hours */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#1B3A5C] mb-3">Business Hours</h3>
              <div className="space-y-2 text-[#1B3A5C]/70 text-sm">
                <div className="flex justify-between"><span>Monday - Friday</span><span>7:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span>8:00 AM - 2:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                <p className="text-[#E8762A] font-medium mt-3">Emergency service available 24/7</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1B3A5C] mb-3">Get in Touch</h3>
              <div className="space-y-2 text-[#1B3A5C]/70 text-sm">
                <p>Phone: (555) 234-5678</p>
                <p>Email: info@apexplumbingco.com</p>
                <p>123 Commerce St, Nashville, TN 37203</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
