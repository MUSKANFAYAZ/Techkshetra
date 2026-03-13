import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin, Calendar, Trophy, Download, Lock, ChevronRight, ChevronLeft } from "lucide-react";
import Hero from "../components/Hero";
import { SHORTLIST_DATE, SHORTLISTED_TEAMS } from "../constants";

const MainPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isShortlistAnnounced, setIsShortlistAnnounced] = useState(false);

  useEffect(() => {
    setIsShortlistAnnounced(new Date() >= SHORTLIST_DATE);
    const interval = setInterval(() => {
      setIsShortlistAnnounced(new Date() >= SHORTLIST_DATE);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const carouselImages = [
    "https://picsum.photos/seed/tech1/600/400",
    "https://picsum.photos/seed/tech2/600/400",
    "https://picsum.photos/seed/tech3/600/400",
    "https://picsum.photos/seed/tech4/600/400",
    "https://picsum.photos/seed/tech5/600/400",
    "https://picsum.photos/seed/tech6/600/400",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const faqs = [
    { q: "Who can participate?", a: "Students from all branches and years are welcome to participate. Inter-college teams are also allowed." },
    { q: "What is the team size?", a: "A team can consist of 2 to 4 members." },
    { q: "Is there a registration fee?", a: "Yes, a nominal fee will be collected post-shortlisting to cover event logistics." },
    { q: "What domains are accepted?", a: "We accept projects across AI/ML, IoT, Web Dev, App Dev, Cybersecurity, and Core Engineering streams." },
    { q: "How will projects be judged?", a: "Projects will be judged based on innovation, technical complexity, real-world applicability, and presentation." },
    { q: "When will shortlists be announced?", a: `Shortlists will be announced on ${SHORTLIST_DATE.toLocaleDateString()}.` },
    { q: "What should we bring on the day?", a: "Bring your laptops, prototypes, extension cords, and ID cards." },
    { q: "Are there prizes for all shortlisted teams?", a: "Top 3 teams will receive cash prizes. All participants will receive certificates of participation." }
  ];

  const now = new Date();

  return (
    <div className="w-full">
      <Hero />

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-[#050A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 text-glow">
                What is <span className="text-cyan-400">TechKshetra?</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                TechKshetra is the flagship technical project exhibition organized by the IEEE Student Branch at SJCE. It serves as a premier platform for innovative minds to showcase their technical prowess and groundbreaking projects.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Aiming to foster technical excellence, the event welcomes projects across various domains including AI/ML, IoT, Robotics, Web & App Development, and more. Join us to witness the future of technology, built by students for the world.
              </p>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
              {[
                { title: "Expected Projects", value: "100+", icon: "🏆" },
                { title: "Participants", value: "500+", icon: "👥" },
                { title: "Domains", value: "10+", icon: "🎯" },
                { title: "Prize Pool", value: "₹50K+", icon: "🏅" }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-8 flex flex-col items-center justify-center text-center hover-glow group transition-transform duration-300 hover:-translate-y-2">
                  <span className="text-3xl mb-3">{stat.icon}</span>
                  <h3 className="text-4xl font-heading font-bold text-glow-blue mb-2">{stat.value}</h3>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section id="details" className="py-24 bg-gradient-to-b from-[#050A1A] to-[#0A0F2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-glow">Event Details</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Date & Time", desc: "March 22, 2026\n09:00 AM - 05:00 PM", icon: Calendar, color: "text-blue-400" },
              { title: "Venue", desc: "SJCE Campus,\nJSS TI, Mysuru", icon: MapPin, color: "text-red-400" },
              { title: "Prizes", desc: "₹50,000+ Prize Pool\nExciting Goodies", icon: Trophy, color: "text-yellow-400" }
            ].map((detail, i) => (
              <div key={i} className="glass-card p-8 text-center hover-glow group transition-all duration-300">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <detail.icon className={`w-8 h-8 ${detail.color}`} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-white">{detail.title}</h3>
                <p className="text-gray-300 whitespace-pre-line">{detail.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <div className="flex flex-wrap gap-x-12 gap-y-6 items-center justify-center">
              <div><strong className="text-cyan-400 mr-2">Eligibility:</strong>Engineering Students</div>
              <div><strong className="text-cyan-400 mr-2">Team Size:</strong>2 - 4 Members</div>
              <div className="flex items-center flex-wrap gap-2">
                <strong className="text-cyan-400 mr-2">Domains:</strong>
                {["AI/ML", "IoT", "Robotics", "Web Dev", "Core Engg"].map(d => (
                  <span key={d} className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="py-24 bg-[#0A0F2E] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px]"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-glow">Event Timeline</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative border-l-2 border-blue-900/50 ml-6 md:ml-0 md:border-l-0">
            {/* Desktop Line */}
            <div className="hidden md:block absolute top-[40px] left-[0%] right-[0%] h-1 bg-blue-900/50 rounded-full z-0"></div>
            
            <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4">
              {[
                { title: "Registrations Open", date: "Feb 01, 2026", icon: "🚀" },
                { title: "Abstract Submission", date: "March 10, 2026", icon: "📝" },
                { title: "Shortlist Announcement", date: "March 15, 2026", icon: "📋", isShortlist: true },
                { title: "Project Expo Day", date: "March 22, 2026", icon: "🎉" }
              ].map((step, i) => (
                <div key={i} className="relative z-10 md:w-1/4 pl-8 md:pl-0 flex flex-col md:items-center text-left md:text-center group">
                  {/* Mobile Dot */}
                  <div className="md:hidden absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(0,150,255,0.8)]"></div>
                  
                  {/* Desktop Dot / Icon Area */}
                  <div className={`w-16 h-16 rounded-full bg-[#050A1A] border-4 border-[#0A0F2E] flex items-center justify-center text-2xl mb-6 shadow-lg shadow-black/50 ${step.isShortlist ? 'border-glow-blue glow-shadow transform scale-110' : 'group-hover:border-blue-500/50 transition-colors'}`}>
                    {step.icon}
                  </div>
                  
                  <h3 className={`font-heading text-lg font-bold mb-2 ${step.isShortlist ? 'text-cyan-400 text-glow' : 'text-white'}`}>{step.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{step.date}</p>
                  
                  {step.isShortlist && (
                    <div className="mt-2 text-center w-full">
                      {isShortlistAnnounced ? (
                        <div className="flex flex-col items-start md:items-center">
                          <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/50 rounded-full text-xs font-bold mb-3 shadow-[0_0_10px_rgba(34,197,94,0.3)] animate-pulse">
                            Announced!
                          </span>
                          <Link to="/shortlist" className="text-sm text-center text-white bg-blue-600/40 hover:bg-blue-600/80 border border-blue-500/50 px-4 py-2 rounded-full transition-all flex items-center gap-1 mx-auto group-hover:glow-shadow">
                            View Shortlisted Teams <ChevronRight size={16} />
                          </Link>
                        </div>
                      ) : (
                        <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/50 rounded-full text-xs font-bold shadow-[0_0_10px_rgba(249,115,22,0.3)] animate-pulse">
                          Results Awaited...
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY CAROUSEL */}
      <section id="gallery" className="py-24 bg-[#050A1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-glow">Glimpses of TechKshetra Past</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden glass-card p-2 md:p-4 border-glow">
            <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden">
              {carouselImages.map((src, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    i === carouselIndex ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
                  }`}
                >
                  <img src={src} alt={`TechKshetra Gallery ${i+1}`} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-20">
                    <p className="text-center text-white/90 font-medium tracking-wide">TechKshetra 2025 — Project Exhibition</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
              className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-glow-blue hover:text-white transition-all duration-300 z-20 backdrop-blur-sm opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselImages.length)}
              className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-glow-blue hover:text-white transition-all duration-300 z-20 backdrop-blur-sm opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-6 w-full flex justify-center gap-2 z-20">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === carouselIndex ? "bg-glow-blue scale-125 shadow-[0_0_10px_rgba(0,212,255,1)]" : "bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BROCHURE / RESOURCES */}
      <section id="brochure" className="py-24 relative overflow-hidden bg-[#030812]">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-glow">Resources</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Brochure Card */}
            <div className="glass-card flex-1 p-8 flex flex-col items-center text-center hover-glow group transition-transform duration-300 cursor-default">
              <div className="w-full h-48 bg-white/5 rounded-lg mb-6 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-blue-500/20 transition-colors">
                <img src="https://picsum.photos/seed/brochure/400/300" alt="Brochure Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3 text-white">Event Brochure</h3>
              <p className="text-gray-400 mb-8 flex-grow">Full event details, judging criteria, rules and regulations in a comprehensive document.</p>
              <a href="#" download className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium flex items-center justify-center gap-2 transition-all glow-shadow shadow-[0_0_15px_rgba(0,150,255,0.4)]">
                <Download size={20} /> Download Brochure
              </a>
            </div>

            {/* Poster Card */}
            <div className="glass-card flex-1 p-8 flex flex-col items-center text-center hover-glow group transition-transform duration-300 cursor-default">
              <div className="w-full h-48 bg-white/5 rounded-lg mb-6 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-blue-500/20 transition-colors">
                <img src="https://picsum.photos/seed/poster/400/300" alt="Poster Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3 text-white">Event Poster</h3>
              <p className="text-gray-400 mb-8 flex-grow">Share our official event poster with your team, classmates, and friends on social media.</p>
              <a href="#" download className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium flex items-center justify-center gap-2 transition-all glow-shadow shadow-[0_0_15px_rgba(0,150,255,0.4)]">
                <Download size={20} /> Download Poster
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SHORTLIST PREVIEW */}
      <section id="shortlist" className="py-24 bg-[#050A1A] relative circuit-bg">
        <div className="absolute inset-0 bg-[#050A1A]/80 mix-blend-multiply border-y border-white/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-glow">Shortlisted Projects</h2>
             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          {!isShortlistAnnounced ? (
            <div className="max-w-2xl mx-auto glass-card p-12 flex flex-col items-center text-center border-glow overflow-hidden relative">
               <div className="absolute inset-0 bg-blue-500/5"></div>
               <div className="w-24 h-24 rounded-full border border-blue-500/50 flex items-center justify-center bg-[#050A1A] mb-6 relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse-glow"></div>
                  <Lock size={40} className="text-glow-blue relative z-10" />
               </div>
               <h3 className="font-heading text-3xl font-bold mb-3 text-white">Results Locked</h3>
               <p className="text-gray-400 text-lg mb-4">Shortlist will be revealed on</p>
               <p className="text-cyan-400 font-bold text-xl tracking-wider mb-8 drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                 {SHORTLIST_DATE.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
               </p>
               <p className="text-sm text-gray-500">Check back later or view the timeline for updates.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {SHORTLISTED_TEAMS.slice(0, 6).map((team) => (
                  <div key={team.id} className="glass-card p-6 border-l-4 border-l-glow-blue hover-glow transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded">#{String(team.id).padStart(2, '0')}</span>
                      <span className="text-xs font-medium border border-white/20 px-2 py-1 rounded-full">{team.domain}</span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-white mb-2">{team.name}</h4>
                    <p className="text-sm text-gray-400 mb-2 truncate">{team.members}</p>
                    <p className="text-xs text-gray-500">{team.college}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link to="/shortlist" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 px-8 py-3 rounded-full text-white font-medium transition-all glow-shadow shadow-[0_0_15px_rgba(0,150,255,0.4)]">
                   View Full Detail List <ChevronRight size={20} />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-gradient-to-b from-[#0A0F2E] to-[#050A1A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-glow">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className={`glass-card overflow-hidden transition-all duration-300 border-l-4 ${isOpen ? 'border-l-glow-blue bg-white/10' : 'border-l-transparent hover:border-l-blue-500/50'}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex justify-between items-center focus:outline-none text-left"
                  >
                    <span className="font-medium text-lg text-white font-heading">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-glow-blue transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-5' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="px-6 text-gray-300">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section id="location" className="py-24 bg-[#050A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-glow">Find Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/3 glass-card p-8 flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold mb-6 text-white text-glow">SJCE Campus</h3>
              
              <ul className="space-y-6 mb-8">
                <li className="flex gap-4">
                  <MapPin className="text-glow-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-white mb-1">Address</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Sri Jayachamarajendra College of Engineering,<br />
                      JSS TI Campus, Manasagangothri,<br />
                      Mysuru, Karnataka - 570006
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="text-cyan-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-white mb-1">Venue</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      IS Seminar Hall & Corridors (Ground Floor)
                    </p>
                  </div>
                </li>
              </ul>
              
              <a 
                href="https://maps.google.com/?q=SJCE+Mysuru" 
                target="_blank" 
                rel="noreferrer"
                className="w-full text-center py-3 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
              >
                Get Directions
              </a>
            </div>
            
            <div className="lg:w-2/3 h-[400px] rounded-2xl overflow-hidden glass-card p-2 border-glow">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15593.479536841123!2d76.6087817029524!3d12.308779698502283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ae9cece32d5%3A0xeab5e8ce09e3e3b0!2sSri%20Jayachamarajendra%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1715893049103!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.75rem' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
