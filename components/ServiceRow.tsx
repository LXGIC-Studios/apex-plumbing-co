import Image from "next/image";
import Link from "next/link";

interface ServiceRowProps {
  title: string;
  description: string;
  image: string;
  imageLeft: boolean;
}

export default function ServiceRow({ title, description, image, imageLeft }: ServiceRowProps) {
  const textContent = (
    <div className="flex-1 flex flex-col justify-center px-6 py-8 md:px-12">
      <h3 className="text-2xl font-bold text-[#1B3A5C] mb-3">{title}</h3>
      <p className="text-[#1B3A5C]/70 mb-5 leading-relaxed">{description}</p>
      <Link
        href="/contact"
        className="text-[#E8762A] font-semibold hover:opacity-80 transition-opacity duration-300 inline-flex items-center gap-1"
      >
        Schedule Service
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
      </Link>
    </div>
  );

  const imageContent = (
    <div className="flex-1 relative min-h-[280px] md:min-h-[320px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 45vw"
      />
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row">
      {imageLeft ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{textContent}</div>
          <div className="order-1 md:order-2 flex-1 relative min-h-[280px] md:min-h-[320px]">
            <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
          </div>
        </>
      )}
    </div>
  );
}
