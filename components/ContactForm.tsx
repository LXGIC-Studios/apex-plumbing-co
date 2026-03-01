"use client";

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-navy mb-2">Name *</label>
        <input id="name" type="text" required className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all min-h-[48px]" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-navy mb-2">Phone *</label>
          <input id="phone" type="tel" required className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all min-h-[48px]" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-navy mb-2">Email</label>
          <input id="email" type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all min-h-[48px]" />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-bold text-navy mb-2">Service Needed</label>
        <select id="service" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all min-h-[48px]">
          <option value="">Select a service...</option>
          <option>Leak Repair</option>
          <option>Pipe Replacement</option>
          <option>Bathroom Remodeling</option>
          <option>Sewer Line Service</option>
          <option>Water Heater Install/Repair</option>
          <option>Drain Cleaning</option>
          <option>Fixture Installation</option>
          <option>Water Filtration</option>
          <option>Emergency Plumbing</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-navy mb-2">Message</label>
        <textarea id="message" rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all" />
      </div>
      <button type="submit" className="bg-orange text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-hover hover:shadow-lg transition-all duration-300 w-full sm:w-auto min-h-[56px]">
        Send Request
      </button>
    </form>
  );
}
