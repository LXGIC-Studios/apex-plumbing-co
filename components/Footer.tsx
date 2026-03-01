import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <h4 className="font-black text-2xl mb-4">Apex Plumbing Co.</h4>
          <p className="text-gray-400 leading-relaxed">Fast, honest, affordable plumbing in Nashville. Licensed and insured since 2012.</p>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-orange mb-5">Services</h4>
          <nav className="flex flex-col gap-3 text-gray-400">
            <Link href="/services" className="hover:text-white transition-colors">Leak Repair</Link>
            <Link href="/services" className="hover:text-white transition-colors">Drain Cleaning</Link>
            <Link href="/services" className="hover:text-white transition-colors">Water Heaters</Link>
            <Link href="/services" className="hover:text-white transition-colors">Pipe Replacement</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-orange mb-5">Company</h4>
          <nav className="flex flex-col gap-3 text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-orange mb-5">Contact</h4>
          <div className="text-gray-400 space-y-3">
            <p><a href="tel:5552345678" className="text-white font-bold text-lg hover:text-orange transition-colors">(555) 234-5678</a></p>
            <p>info@apexplumbingco.com</p>
            <p>Mon&ndash;Sat: 7AM&ndash;8PM</p>
            <p>Sun: Emergency Only</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Apex Plumbing Co. All rights reserved.</p>
        <p>Built by <a href="https://lxgicstudios.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline transition-colors">LXGIC Studios</a></p>
      </div>
    </footer>
  );
}
