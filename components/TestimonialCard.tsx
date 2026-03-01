import { StarIcon } from "./Icons";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
}

export default function TestimonialCard({ name, location, text }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border-l-4 border-l-orange p-8 hover:shadow-lg transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-orange" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 text-lg leading-relaxed italic relative pl-6">
        <span className="absolute left-0 top-0 text-4xl text-orange/30 font-serif leading-none">&ldquo;</span>
        {text}
      </p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-black text-navy text-lg">{name}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
}
