import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Apex Plumbing Co.",
  description: "Get in touch with Apex Plumbing Co. for a free estimate. Call (555) 234-5678 or fill out our contact form.",
  openGraph: { title: "Contact Us | Apex Plumbing Co." },
};

export default function Contact() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-200 text-lg">Get a free estimate — call or fill out the form below</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-bold">Phone</p>
                  <a href="tel:5552345678" className="text-orange hover:underline">(555) 234-5678</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-gray-600">info@apexplumbingco.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="font-bold">Business Hours</p>
                  <p className="text-gray-600">Mon–Sat: 7:00 AM – 8:00 PM</p>
                  <p className="text-gray-600">Sunday: Emergency Calls Only</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold">Service Area</p>
                  <p className="text-gray-600">Nashville, TN and surrounding areas</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="font-medium">Nashville, TN Service Area</p>
                <p className="text-sm">Map integration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
