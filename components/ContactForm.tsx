"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <div className="bg-white p-8 rounded-xl shadow-sm text-center">
      <h3 className="text-2xl font-bold text-[#1B3A5C] mb-2">Thank You</h3>
      <p className="text-[#1B3A5C]/70">We&apos;ll be in touch shortly.</p>
    </div>
  ) : (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="bg-white p-8 rounded-xl shadow-sm space-y-5"
    >
      <div>
        <label className="block text-sm font-medium text-[#1B3A5C] mb-1">Name</label>
        <input type="text" required className="w-full border border-[#1B3A5C]/20 rounded-lg px-4 py-2.5 text-[#1B3A5C] focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/30 transition-all duration-300" />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1B3A5C] mb-1">Phone</label>
        <input type="tel" required className="w-full border border-[#1B3A5C]/20 rounded-lg px-4 py-2.5 text-[#1B3A5C] focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/30 transition-all duration-300" />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1B3A5C] mb-1">Email</label>
        <input type="email" required className="w-full border border-[#1B3A5C]/20 rounded-lg px-4 py-2.5 text-[#1B3A5C] focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/30 transition-all duration-300" />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1B3A5C] mb-1">Service Needed</label>
        <select required className="w-full border border-[#1B3A5C]/20 rounded-lg px-4 py-2.5 text-[#1B3A5C] focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/30 transition-all duration-300">
          <option value="">Select a service</option>
          <option>Emergency Repair</option>
          <option>Drain Cleaning</option>
          <option>Water Heater</option>
          <option>Pipe Replacement</option>
          <option>Bathroom Plumbing</option>
          <option>Sewer Service</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1B3A5C] mb-1">Message</label>
        <textarea rows={4} className="w-full border border-[#1B3A5C]/20 rounded-lg px-4 py-2.5 text-[#1B3A5C] focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/30 transition-all duration-300" />
      </div>
      <button type="submit" className="w-full bg-[#E8762A] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity duration-300">
        Send Message
      </button>
    </form>
  );
}
