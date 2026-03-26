import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "Giới thiệu", href: isHome ? "#about" : "/#about" },
    { label: "Dịch vụ", href: isHome ? "#services" : "/#services" },
    { label: "Dự án", href: "/projects" },
    { label: "Liên hệ", href: isHome ? "#contact" : "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || !isHome
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-xs tracking-tight group-hover:bg-emerald-500 transition-colors duration-300">
            TCT
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-slate-900">
            Tiệm Code Team
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.href
                  ? "text-emerald-600"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href={isHome ? "#contact" : "/#contact"}>
            <button className="bg-slate-900 hover:bg-emerald-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-300 cursor-pointer">
              Liên hệ ngay
            </button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={isHome ? "#contact" : "/#contact"} onClick={() => setMobileOpen(false)}>
              <button className="w-full mt-2 bg-slate-900 text-white font-semibold py-2.5 rounded-lg text-sm">
                Liên hệ ngay
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
