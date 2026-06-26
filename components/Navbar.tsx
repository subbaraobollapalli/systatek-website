import { siteContent } from "@/data/siteContent";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Systatek Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-blue-400">
            {siteContent.companyName}
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm md:text-base">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-blue-400 transition">
            Services
          </a>
          <a href="#technologies" className="hover:text-blue-400 transition">
            Technologies
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}