import { useState, useEffect } from "react";
import { REGISTER_URL } from "../constants";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const eventDate = new Date("2026-03-22T09:00:00").getTime(); // Adjust test date

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToBrochure = () => {
    document.getElementById("brochure")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen flex border-b border-white/5 items-center justify-center overflow-hidden circuit-bg pointer-events-auto">
      {/* Particles effect background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-sm mb-6 animate-fade-in shadow-[0_0_15px_rgba(0,102,255,0.2)] hover:border-glow-blue transition-colors cursor-default">
          <span className="w-2 h-2 rounded-full bg-glow-cyan animate-pulse"></span>
          <span className="text-sm text-blue-200 font-medium tracking-wide uppercase font-heading">IEEE-SJCE Presents</span>
        </div>
        
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 text-glow leading-tight animate-fade-in [animation-delay:100ms] opacity-0" style={{ animationFillMode: "forwards" }}>
          TechKshetra
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl animate-fade-in [animation-delay:200ms] opacity-0 font-light" style={{ animationFillMode: "forwards" }}>
          Project Expo 2026 — <span className="text-cyan-400 font-medium">Where Innovation Meets Excellence</span>
        </p>
        
        <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-10 text-sm sm:text-base animate-fade-in [animation-delay:300ms] opacity-0" style={{ animationFillMode: "forwards" }}>
          <span className="text-blue-300 font-semibold drop-shadow-lg">March 22, 2026</span>
          <span className="mx-3 text-white/50">•</span>
          <span className="text-gray-200 tracking-wide">SJCE Campus, Mysuru</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in [animation-delay:400ms] opacity-0" style={{ animationFillMode: "forwards" }}>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-lg transition-all duration-300 glow-shadow hover:scale-105"
          >
            Register Now
          </a>
          <button
            onClick={scrollToBrochure}
            className="px-8 py-3.5 rounded-full border-2 border-cyan-500/50 hover:border-cyan-400 bg-transparent hover:bg-cyan-500/10 text-cyan-300 font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
          >
            View Brochure
          </button>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto animate-fade-in [animation-delay:500ms] opacity-0" style={{ animationFillMode: "forwards" }}>
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds }
          ].map((item) => (
            <div key={item.label} className="glass-card flex flex-col items-center justify-center py-4 px-2 hover-glow group cursor-default">
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-white to-blue-200 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,212,255,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(0,212,255,0.8)] transition-all">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-sm text-blue-400 uppercase tracking-widest mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
