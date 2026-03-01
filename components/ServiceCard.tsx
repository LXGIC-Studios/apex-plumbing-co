interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  showButton?: boolean;
}

export default function ServiceCard({ icon, title, description, showButton = false }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-black text-navy mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-5">{description}</p>
      {showButton && (
        <a href="/contact" className="inline-block bg-orange text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-orange-hover hover:shadow-lg transition-all duration-300">
          Schedule Service
        </a>
      )}
    </div>
  );
}
