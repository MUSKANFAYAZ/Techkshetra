import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Cpu } from "lucide-react";
import { REGISTER_URL } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      // Need a small timeout to let the page render before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Timeline", id: "timeline" },
    { name: "Gallery", id: "gallery" },
    { name: "FAQ", id: "faq" },
    { name: "Location", id: "location" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050A1A]/90 backdrop-blur-md shadow-lg border-b border-blue-500/10"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/ieeelogo.png"
                alt="TechKshetra logo"
                className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
              />
              <div>
                <h1 className="font-heading text-xl sm:text-2xl font-bold text-white text-glow">
                  TechKshetra
                </h1>
                <p className="text-[10px] sm:text-xs text-blue-300 -mt-1 uppercase tracking-wider">
                  by IEEE-SJCE
                </p>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-gray-300 hover:text-glow-blue hover:text-glow transition-all duration-300 text-sm font-medium uppercase tracking-wider"
                >
                  {link.name}
                </button>
              ))}
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 glow-shadow hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-glow-blue" />
              ) : (
                <Menu className="w-6 h-6 text-glow-blue" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#050A1A]/95 backdrop-blur-md border-b border-blue-500/20">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollTo(link.id)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md uppercase tracking-wider"
            >
              {link.name}
            </button>
          ))}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="block text-center w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-md font-medium shadow-[0_0_15px_rgba(0,150,255,0.4)]"
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
