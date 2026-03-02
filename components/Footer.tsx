import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A5C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          <h3 className="font-black text-xl mb-3">Apex Plumbing Co.</h3>
          <p className="text-white/70 text-sm mb-4">
            Licensed &amp; insured plumbing services for Nashville and surrounding areas.
          </p>
          <p className="text-white/60 text-sm">123 Commerce St, Nashville, TN 37203</p>
          <p className="text-white/60 text-sm mt-1">License #12345</p>
        </div>
        {/* Right */}
        <div>
          <div className="flex flex-col gap-2 mb-4">
            <Link href="/" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">Home</Link>
            <Link href="/services" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">Services</Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">About</Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">Contact</Link>
          </div>
          <p className="text-white/70 text-sm">(555) 234-5678</p>
          <p className="text-white/70 text-sm">info@apexplumbingco.com</p>
          <p className="text-white/70 text-sm mt-1">Mon-Fri 7am-6pm | Emergency 24/7</p>
        </div>
      </div>
      {/* Bottom credit */}
      <div className="border-t border-white/20 py-4 text-center">
        <p className="text-white/50 text-xs">
          Built by{" "}
          <a href="https://lxgicstudios.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors duration-300">
            LXGIC Studios
          </a>
        </p>
      </div>
    </footer>
  );
}
