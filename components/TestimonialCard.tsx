interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
}

export default function TestimonialCard({ name, rating, text }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border-l-4 border-l-orange p-8 hover:shadow-lg transition-all duration-300">
      <div className="flex gap-1 mb-4 text-lg">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-200"}>★</span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 text-lg leading-relaxed italic relative pl-6">
        <span className="absolute left-0 top-0 text-4xl text-orange/30 font-serif leading-none">&ldquo;</span>
        {text}
      </p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-black text-navy text-lg">{name}</p>
        <p className="text-sm text-gray-500">Verified Customer</p>
      </div>
    </div>
  );
}
