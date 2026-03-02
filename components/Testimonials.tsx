"use client";
import { useState } from "react";

const testimonials = [
  {
    quote: "Called at 11pm on a Saturday with a burst pipe. They were here in 30 minutes. Incredible service.",
    name: "Mike D.",
    location: "Brentwood",
  },
  {
    quote: "Upfront pricing, no surprises. They replaced our water heater and cleaned up after themselves.",
    name: "Karen W.",
    location: "Green Hills",
  },
  {
    quote: "Best plumber we've ever used. On time, professional, and fairly priced. Our go-to from now on.",
    name: "Roberto S.",
    location: "East Nashville",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Big quote mark */}
        <div className="text-[#1B3A5C] text-8xl font-serif leading-none mb-4">&ldquo;</div>
        <p className="text-xl md:text-2xl text-[#1B3A5C] font-medium leading-relaxed mb-6">
          {t.quote}
        </p>
        <p className="font-bold text-[#1B3A5C]">{t.name}</p>
        <p className="text-[#1B3A5C]/60 text-sm">{t.location}</p>

        {/* Arrows */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full border-2 border-[#1B3A5C] text-[#1B3A5C] flex items-center justify-center hover:bg-[#1B3A5C] hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === idx ? "bg-[#1B3A5C]" : "bg-[#1B3A5C]/20"}`} />
            ))}
          </div>
          <button
            onClick={() => setIdx((idx + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full border-2 border-[#1B3A5C] text-[#1B3A5C] flex items-center justify-center hover:bg-[#1B3A5C] hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
