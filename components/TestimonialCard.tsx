interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
}

export default function TestimonialCard({ name, rating, text }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic">&ldquo;{text}&rdquo;</p>
      <p className="font-bold text-navy">{name}</p>
    </div>
  );
}
