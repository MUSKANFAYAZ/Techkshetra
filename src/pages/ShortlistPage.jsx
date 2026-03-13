import { useState, useEffect } from "react";
import { Search, Lock } from "lucide-react";
import { SHORTLISTED_TEAMS, SHORTLIST_DATE } from "../constants";

const ShortlistPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [domainFilter, setDomainFilter] = useState("All");
  const [isAnnounced, setIsAnnounced] = useState(false);

  useEffect(() => {
    // Check if current time is past shortlist date
    const checkAnnouncement = () => {
      setIsAnnounced(new Date() >= SHORTLIST_DATE);
    };
    checkAnnouncement();
    // Re-check every minute
    const interval = setInterval(checkAnnouncement, 60000);
    return () => clearInterval(interval);
  }, []);

  const domains = ["All", ...new Set(SHORTLISTED_TEAMS.map((team) => team.domain))];

  const filteredTeams = SHORTLISTED_TEAMS.filter((team) => {
    const matchesSearch =
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.members.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.college.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = domainFilter === "All" || team.domain === domainFilter;
    return matchesSearch && matchesDomain;
  });

  {/* Locked view if not yet announced */}
  if (!isAnnounced) {
    return (
      <div className="min-h-screen py-24 circuit-bg relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A1A]/80 via-transparent to-[#050A1A]/90 z-0"></div>
        <div className="max-w-2xl w-full mx-auto px-4 z-10 text-center">
          <div className="glass-card p-12 flex flex-col items-center justify-center border-glow relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500"></div>
            
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse-glow"></div>
              <div className="w-24 h-24 rounded-full border border-blue-500/50 flex items-center justify-center bg-[#050A1A]">
                <Lock size={40} className="text-glow-blue" />
              </div>
            </div>
            
            <h2 className="font-heading text-4xl font-bold mb-4 text-glow">Results Locked</h2>
            <p className="text-gray-300 text-lg max-w-md mx-auto">
              The shortlist will be revealed on 
              <span className="block text-glow-blue font-bold mt-2 text-xl tracking-wider">
                {SHORTLIST_DATE.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 circuit-bg relative">
      <div className="absolute inset-0 bg-[#050A1A]/70 mix-blend-multiply pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow">
            Shortlisted <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Congratulations to all the teams who made it to the next round of TechKshetra!
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-glow-blue transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search teams, members, or college..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-blue-900/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-glow-blue/50 focus:border-glow-blue text-white transition-all duration-300 placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setDomainFilter(domain)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  domainFilter === domain
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(0,150,255,0.4)]"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeams.map((team, idx) => (
            <div
              key={team.id}
              className="glass-card p-6 border-l-4 border-l-glow-blue hover-glow relative overflow-hidden group transition-all duration-500 translate-y-8 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              {/* Subtle background glow element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-900/30 text-cyan-300 text-xs font-bold rounded-lg border border-blue-500/30 uppercase tracking-widest font-heading">
                    Team #{team.id.toString().padStart(2, "0")}
                  </span>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs font-bold rounded-lg border border-purple-500/30">
                    {team.domain}
                  </span>
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-glow-blue transition-colors">
                  {team.name}
                </h3>
                
                <div className="space-y-3 mt-6">
                  <div>
                    <p className="text-xs text-blue-400 uppercase tracking-wider font-semibold mb-1">Members</p>
                    <p className="text-gray-300 text-sm whitespace-pre-wrap">{team.members}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-blue-400 uppercase tracking-wider font-semibold mb-1">College</p>
                    <p className="text-gray-300 text-sm">{team.college}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {filteredTeams.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 text-gray-400">
              <p className="text-xl">No teams found matching your search criteria.</p>
              <button 
                onClick={() => { setSearchTerm(""); setDomainFilter("All"); }}
                className="mt-4 text-glow-blue hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortlistPage;
