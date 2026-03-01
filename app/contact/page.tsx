import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Apex Plumbing Co.",
  description: "Get in touch with Apex Plumbing Co. for a free estimate. Call (555) 234-5678 or fill out our contact form.",
};

export default function Contact() {
  return (
    <>
      <section className="relative bg-navy text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-navy" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Contact Us</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">Get a free estimate. Call or fill out the form below.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            {/* Emergency note */}
            <div className="bg-orange/10 border-l-4 border-orange rounded-r-lg p-4 mb-8">
              <p className="font-bold text-navy">For emergencies, call us directly at{" "}
                <a href="tel:5552345678" className="text-orange hover:underline">(555) 234-5678</a>
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <div>
                  <p className="font-black text-navy">Phone</p>
                  <a href="tel:5552345678" className="text-orange text-lg font-bold hover:underline">(555) 234-5678</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <div>
                  <p className="font-black text-navy">Email</p>
                  <p className="text-gray-600 text-lg">info@apexplumbingco.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                </span>
                <div>
                  <p className="font-black text-navy">Business Hours</p>
                  <p className="text-gray-600">Mon - Sat: 7:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: Emergency Calls Only</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <div>
                  <p className="font-black text-navy">Service Area</p>
                  <p className="text-gray-600">Nashville, Brentwood, Franklin, Green Hills, East Nashville, Bellevue, Hermitage, Mt. Juliet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
