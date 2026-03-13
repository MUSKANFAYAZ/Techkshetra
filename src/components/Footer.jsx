import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { REGISTER_URL } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#030812] border-t border-blue-900/40 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-white text-glow mb-4">
              TechKshetra
            </h2>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              IEEE Student Branch at Sri Jayachamarajendra College of Engineering, Mysuru. Fostering technical excellence and innovation since 1991.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600/20 hover:text-glow-blue border border-transparent hover:border-blue-500/50 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600/20 hover:text-pink-400 border border-transparent hover:border-pink-500/50 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-white border border-transparent hover:border-white/50 transition-all duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider font-heading">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About", id: "about" },
                { name: "Timeline", id: "timeline" },
                { name: "Gallery", id: "gallery" },
                { name: "FAQ", id: "faq" },
                { name: "Location", id: "location" }
              ].map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm hover:text-glow-blue transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all"></span>
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/shortlist" className="text-sm hover:text-glow-blue transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all"></span>
                  Shortlisted Teams
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider font-heading">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-glow-blue mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white mb-1">Coordinator 1</p>
                  <p className="text-gray-400">+91 98XXX XXXXX (TODO)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-glow-blue mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white mb-1">Coordinator 2</p>
                  <p className="text-gray-400">+91 97XXX XXXXX (TODO)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-glow-blue mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white mb-1">Email</p>
                  <p className="text-gray-400">ieee@sjce.ac.in (TODO)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider font-heading">Event Details</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <Calendar size={18} className="text-glow-blue flex-shrink-0" />
                <span className="text-sm">March 22, 2025</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-glow-blue mt-1 flex-shrink-0" />
                <span className="text-sm">SJCE Campus, JSS TI, Mysuru - 570006</span>
              </li>
            </ul>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 glow-shadow hover:scale-105"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2025 TechKshetra · IEEE-SJCE. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-red-500 text-sm">❤️</span> by Web Development Board, IEEE-SJCE
          </p>
          <div className="font-heading tracking-widest text-[#00629B] font-bold text-sm">
            IEEE SJCE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
