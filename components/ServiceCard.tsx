interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  showButton?: boolean;
}

export default function ServiceCard({ icon, title, description, showButton = false }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {showButton && (
        <a href="/contact" className="inline-block bg-orange text-white px-6 py-2 rounded font-semibold text-sm hover:bg-orange-hover transition">
          Schedule Service
        </a>
      )}
    </div>
  );
}
