import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { num: "01", label: "PROFILE", href: "#hero" },
  { num: "02", label: "SKILLS", href: "#skills" },
  { num: "03", label: "EXPERIENCE", href: "#projects" },
  { num: "04", label: "METRICS", href: "#metrics" },
  { num: "05", label: "METHODS", href: "#methodology" },
  { num: "06", label: "PERSONALITY", href: "#traits" },
  { num: "07", label: "CONTACT", href: "#vision" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Nav */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-colors duration-200
          ${scrolled ? "bg-black text-white border-b-2 border-white" : "bg-white text-black border-b-2 border-black"}
        `}
      >
        <div className="px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className="font-black text-lg tracking-tighter uppercase hover:text-swiss-red transition-colors"
          >
            LM<span className="text-swiss-red">.</span>PM
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.num}
                onClick={() => handleNav(item.href)}
                className="flex items-center gap-1 px-3 py-2 text-xs font-bold tracking-widest uppercase hover:text-swiss-red transition-colors group"
              >
                <span className="text-swiss-red opacity-60">{item.num}.</span>
                <span className="relative overflow-hidden">
                  <span className="group-hover:-translate-y-full transition-transform duration-200 block">
                    {item.label}
                  </span>
                  <span className="absolute inset-0 text-swiss-red group-hover:translate-y-0 transition-transform duration-200 -translate-y-full">
                    {item.label}
                  </span>
                </span>
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => handleNav("#vision")}
            className={`
              hidden md:block px-4 py-2 text-xs font-black tracking-widest uppercase border-2
              ${scrolled
                ? "border-white hover:bg-white hover:text-black"
                : "border-black hover:bg-black hover:text-white"}
              transition-colors duration-150
            `}
          >
            联系我
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40 bg-black text-white flex flex-col justify-center
          transition-transform duration-300 lg:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <nav className="px-8 py-16 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.num}
              onClick={() => handleNav(item.href)}
              className="flex items-center gap-4 w-full py-4 border-b border-white/10 hover:text-swiss-red transition-colors"
            >
              <span className="text-swiss-red font-black text-lg">{item.num}.</span>
              <span className="text-xl font-black tracking-widest uppercase">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="px-8">
          <button
            onClick={() => handleNav("#vision")}
            className="w-full bg-swiss-red text-white py-4 font-black tracking-widest uppercase"
          >
            联系我
          </button>
        </div>
      </div>
    </>
  );
}
