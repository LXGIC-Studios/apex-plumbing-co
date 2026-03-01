"use client";

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
        <input id="name" type="text" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone *</label>
          <input id="phone" type="tel" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input id="email" type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange" />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1">Service Needed</label>
        <select id="service" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange">
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
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea id="message" rows={4} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange" />
      </div>
      <button type="submit" className="bg-orange text-white px-8 py-3 rounded font-bold text-lg hover:bg-orange-hover transition w-full sm:w-auto">
        Send Request
      </button>
    </form>
  );
}
