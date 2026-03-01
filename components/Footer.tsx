import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-3">Apex Plumbing Co.</h4>
          <p className="text-gray-300 text-sm">Fast, honest, affordable plumbing in Nashville. Licensed and insured since 2012.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">Contact</h4>
          <div className="text-sm text-gray-300 space-y-1">
            <p>📞 <a href="tel:5552345678" className="hover:text-white">(555) 234-5678</a></p>
            <p>✉️ info@apexplumbingco.com</p>
            <p>🕐 Mon–Sat: 7AM–8PM | Sun: Emergency Only</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-white/20 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Apex Plumbing Co. All rights reserved.</p>
        <p className="mt-1">Built by <a href="https://lxgicstudios.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">LXGIC Studios</a></p>
      </div>
    </footer>
  );
}
