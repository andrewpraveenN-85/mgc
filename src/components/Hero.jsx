import React, { useMemo, useState } from "react";
import {
  Building2,
  Globe,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Search,
  X,
} from "lucide-react";
import mgcNgoIcon from "../assets/card/logo.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  // --- DATA ---------------------------------------------------------------
  const companies = useMemo(
    () => {
      const base = [
      {
        name: "MGC GROUP NGO",
        website: "https://www.mgcgroupngo.com/",
        description:
          "Non‑profit initiatives focused on education, health, and community development through targeted social programs.",
      },
      {
        name: "BARCLAYS FINANCE LIMITED",
        website: "https://modelgroupof.com/",
        description:
          "Fixed deposits, lending, and secure financial solutions with flexible tenures and competitive returns.",
      },
      {
        name: "USA FINANCE LLP",
        website: "https://modelgroupof.com/",
        description:
          "Financial services for individuals and businesses, offering deposits, credit, and tailored advisory.",
      },
      {
        name: "MGC CASINO LIMITED",
        website: "https://modelgroupof.com/",
        description:
          "Premium entertainment and responsible gaming experiences across multiple venues.",
      },
      {
        name: "MODEL GROUP FINANCE LIMITED",
        website: "https://modelgroupof.com/",
        description:
          "Stable returns and financing solutions including deposits and loan facilities for diverse needs.",
      },
      {
        name: "MODEL GROUP OF COMPANIES LTD",
        website: "https://modelgroupof.com/",
        description:
          "Diversified group with interests across mobility, finance, and international trade.",
      },
      {
        name: "ABU DHABI BIG TIKAT",
        website: "https://modelgroupof.com/",
        description:
          "Raffle and prize draw platform focused on transparent, responsible participation.",
      },
      {
        name: "BARCLAYS GROUP OF COMPANIES LTD",
        website: "https://modelgroupof.com/",
        description:
          "Multi‑sector holding company with finance and services operations.",
      },
      {
        name: "CANADIN FINANCE",
        website: "https://modelgroupof.com/",
        description:
          "Savings, deposits, and lending services with customer‑centric policies.",
      },
      {
        name: "CASINO UK",
        website: "https://modelgroupof.com/",
        description:
          "Curated gaming and entertainment experiences in the UK market.",
      },
      {
        name: "CHASE FINANCE LLP",
        website: "https://modelgroupof.com/",
        description:
          "Financial products spanning deposits, credit lines, and business support.",
      },
      {
        name: "CITI FINANCE LIMITED",
        website: "https://modelgroupof.com/",
        description:
          "Deposit programs with flexible terms and accessible lending facilities.",
      },
      {
        name: "DUBAI BIG TIKAT",
        website: "https://modelgroupof.com/",
        description:
          "Large‑format raffle events offering compliant prize draws and promotions.",
      },
      {
        name: "DUTCH FINANCE",
        website: "https://modelgroupof.com/",
        description:
          "Traditional and digital finance services with an emphasis on security and returns.",
      },
      {
        name: "JP MORGAN FINANCE",
        website: "https://modelgroupof.com/",
        description:
          "Comprehensive financial services for retail and corporate clients.",
      },
      {
        name: "MGC BIG TIKAT",
        website: "https://modelgroupof.com/",
        description: "Prize draw and raffle experiences under the MGC brand.",
      },
      {
        name: "MGC U WIN LOTTERY LIMITED",
        website: "https://modelgroupof.com/",
        description:
          "Lottery and instant‑win experiences operated with a focus on fairness and compliance.",
      },
      {
        name: "MODEL GROUP OF COMPANIES",
        website: "https://modelgroupof.com/",
        description:
          "Global operations spanning exports, procurement, and strategic partnerships.",
      },
      {
        name: "MODEL GROUP OF COMPANIES LIMITED",
        website: "https://modelgroupof.com/",
        description:
          "International corporate group providing mobility, finance, and services.",
      },
      {
        name: "MODEL GROUP U WIN LOTTERY LIMITED",
        website: "https://modelgroupof.com/",
        description:
          "Lottery and sweepstake operations with responsible gaming practices.",
      },
      {
        name: "OCBC FINANCE LTD",
        website: "https://modelgroupof.com/",
        description:
          "Deposit and lending services with flexible tenure and competitive rates.",
      },
      {
        name: "PAYPAL FINANCE LLP",
        website: "https://modelgroupof.com/",
        description:
          "Digital‑first financial services, deposits, and payment solutions.",
      },
      {
        name: "S L TOBACCO",
        website: "https://modelgroupof.com/",
        description:
          "Tobacco products distribution and related trade services.",
      },
      {
        name: "STANDARD CHARTERED FINANCE LLP",
        website: "https://modelgroupof.com/",
        description:
          "Finance solutions including deposits and personal/business lending products.",
      },
      {
        name: "STARLING FINANCE LLP",
        website: "https://modelgroupof.com/",
        description:
          "Retail and SME finance offerings with modern, digital workflows.",
      },
      {
        name: "STRIPE FINANCE LIMITED",
        website: "https://modelgroupof.com/",
        description:
          "Technology‑driven finance services for individuals and merchants.",
      },
      {
        name: "SWISS FINANCE LTD",
        website: "https://modelgroupof.com/",
        description:
          "Private and retail finance services with a focus on stability and privacy.",
      },
      {
        name: "UNICEF NGO LIMITED",
        website: "https://modelgroupof.com/",
        description:
          "Non‑profit initiatives focused on children’s welfare, education, and health programs.",
      },
      {
        name: "UNITED NATIONS NGO LTD",
        website: "https://modelgroupof.com/",
        description:
          "International NGO programs covering development and humanitarian support.",
      },
      {
        name: "WELLS FARGO FINANCE LIMITED",
        website: "https://modelgroupof.com/",
        description:
          "Full‑suite finance services for consumers and enterprises.",
      },
      {
        name: "WISEBANK & FINANCE LIMITED",
        website: "https://modelgroupof.com/",
        description:
          "Banking and finance solutions with modern digital access and secure deposits.",
      },
      {
        name: "WORLD VISION NGO LTD",
        website: "https://modelgroupof.com/",
        description:
          "NGO initiatives delivering community development and disaster response programs.",
      },
    ];
      // List of companies to ensure are present
      const extraCompanies = [
        {
          name: "MG GROUP NGO",
          website: "https://modelgroupof.com/",
          description:
            "International NGO initiatives focused on education, healthcare, and social upliftment programs across regions.",
        },
        {
          name: "BANK USA",
          website: "https://modelgroupof.com/",
          description:
            "U.S.-based banking and finance services for retail, SME, and corporate customers.",
        },
        {
          name: "WISE BANK UK",
          website: "https://modelgroupof.com/",
          description:
            "UK-headquartered smart banking unit providing digital payments, deposits, and remittance services.",
        },
        {
          name: "MGC CASINO USA",
          website: "https://modelgroupof.com/",
          description:
            "U.S. division of MGC’s gaming and entertainment business, offering regulated casino experiences.",
        },
        {
          name: "MG GROUP NGO UK , USA",
          website: "https://modelgroupof.com/",
          description:
            "Cross-border NGO chapters operating in the UK and USA with community and child-welfare programs.",
        },
        {
          name: "MODEL GROUP FINANCE UK , USA",
          website: "https://modelgroupof.com/",
          description:
            "Regional finance operations serving both UK and U.S. markets with lending and investment products.",
        },
        {
          name: "MODEL GROUP INTERNATIONAL (PVT) LTD , SRI LANKA",
          website: "https://modelgroupof.com/",
          description:
            "Sri Lankan private limited entity coordinating Model Group’s South Asian projects and investments.",
        },
        {
          name: "MODEL GROUP OF COMPANIES LLC, USA",
          website: "https://modelgroupof.com/",
          description:
            "U.S.-registered entity overseeing Model Group’s American operations in finance, trade, and services.",
        },
        {
          name: "MODEL GROUP OF COMPANIES LLC, CANADA",
          website: "https://modelgroupof.com/",
          description:
            "Canadian branch for North American compliance, finance, and trading activities.",
        },
        {
          name: "MODEL GROUP OF COMPANIES LTD , UK",
          website: "https://modelgroupof.com/",
          description:
            "UK-registered limited company for European business development, banking, and mobility projects.",
        },
        {
          name: "MODEL USED AUTOMOBILE TRADING FOR EXPORT L.L.C , DUBAI",
          website: "https://modelgroupof.com/",
          description:
            "Dubai-based company specializing in sourcing and exporting used vehicles to global markets.",
        },
        {
          name: "MODEL GROUP COMPANIES LLC,GERMANY",
          website: "https://modelgroupof.com/",
          description:
            "German subsidiary focused on EU logistics, industry partnerships, and financial services.",
        },
        {
          name: "MODEL GROUP COMPANIES PVT,AUSTRALIA",
          website: "https://modelgroupof.com/",
          description:
            "Australia-based private company handling regional investment and trade operations.",
        },
        {
          name: "MODEL GROUP COMPANIES LLC, FINLAND",
          website: "https://modelgroupof.com/",
          description:
            "Nordic office responsible for green finance, technology collaboration, and EU partnerships.",
        },
        {
          name: "MODEL GROUP COMPANIES LLC,SPAIN",
          website: "https://modelgroupof.com/",
          description:
            "Spanish subsidiary supporting Mediterranean business and hospitality ventures.",
        },
        {
          name: "MODEL GROUP COMPANIES LLC,MIDDLE EAST",
          website: "https://modelgroupof.com/",
          description:
            "Regional coordination office for Middle East infrastructure, finance, and public-private projects.",
        },
        {
          name: "MODEL GROUP COMPANIES LTD,KENYA",
          website: "https://modelgroupof.com/",
          description:
            "East African unit working on finance, agriculture, and community development in Kenya.",
        },
        {
          name: "MODEL GROUP KOKSAI,JAPAN",
          website: "https://modelgroupof.com/",
          description:
            "Japan-based international (KOKSAI) arm enabling trade, technology exchange, and financial services.",
        },
      ];
      // Names already present
      const presentNames = new Set(base.map(c => c.name));
      // Only add those not present
      const missing = extraCompanies.filter(c => !presentNames.has(c.name));
      return [...base, ...missing];
    },
    []
  );

  const TYPE_ORDER = useMemo(
    () => ({
      Finance: 0,
      Trading: 1,
      Gaming: 2,
      "Non-Profit": 3,
      Corporation: 4,
    }),
    []
  );

  const getLocation = (full) => {
    if (!full) return "";
    const idx = full.lastIndexOf(",");
    if (idx === -1) return "";
    return full
      .slice(idx + 1)
      .replace(/\s+/g, " ")
      .trim();
  };

  const getCompanyType = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes("bank") || nameLower.includes("finance"))
      return "Finance";
    if (nameLower.includes("ngo")) return "Non-Profit";
    if (nameLower.includes("casino")) return "Gaming";
    if (nameLower.includes("automobile") || nameLower.includes("trading"))
      return "Trading";
    return "Corporation";
  };

  const sortedCompanies = useMemo(() => {
    return [...companies].sort((a, b) => {
      const ta = getCompanyType(a.name);
      const tb = getCompanyType(b.name);
      const oa = TYPE_ORDER[ta] ?? 999;
      const ob = TYPE_ORDER[tb] ?? 999;
      if (oa !== ob) return oa - ob;
      return a.name.localeCompare(b.name);
    });
  }, [companies, TYPE_ORDER]);

  // --- NEW: UI STATE (search + filters) ----------------------------------
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All");

  const ALL_TYPES = [
    "All",
    "Finance",
    "Trading",
    "Gaming",
    "Non-Profit",
    "Corporation",
  ];

  const locations = useMemo(() => {
    const set = new Set(
      sortedCompanies.map((c) => getLocation(c.name) || "Global")
    );
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [sortedCompanies]);

  const filteredCompanies = useMemo(() => {
    return sortedCompanies.filter((c) => {
      const loc = getLocation(c.name) || "Global";
      const type = getCompanyType(c.name);
      const matchesType = activeType === "All" || type === activeType;
      const matchesLoc = activeLocation === "All" || loc === activeLocation;
      const matchesQuery = query
        ? c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesType && matchesLoc && matchesQuery;
    });
  }, [sortedCompanies, activeType, activeLocation, query]);

  // --- helpers ------------------------------------------------------------
  const getIcon = (type, size = "w-6 h-6", color = "text-white") => {
    switch (type) {
      case "Finance":
        return <Globe className={`${size} ${color}`} />;
      case "Non-Profit":
        return <Sparkles className={`${size} ${color}`} />;
      case "Gaming":
        return <ExternalLink className={`${size} ${color}`} />;
      case "Trading":
        return <ArrowUpRight className={`${size} ${color}`} />;
      default:
        return <Building2 className={`${size} ${color}`} />;
    }
  };

  const getTypeColors = (type) => {
    const colors = {
      Finance: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
        gradient: "from-blue-500 via-blue-600 to-cyan-600",
        icon: "bg-blue-500",
        glow: "shadow-blue-500/20",
      },
      "Non-Profit": {
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        border: "border-emerald-200",
        gradient: "from-emerald-500 via-green-600 to-teal-600",
        icon: "bg-emerald-500",
        glow: "shadow-emerald-500/20",
      },
      Gaming: {
        bg: "bg-purple-50",
        text: "text-purple-700",
        border: "border-purple-200",
        gradient: "from-purple-500 via-fuchsia-600 to-pink-600",
        icon: "bg-purple-500",
        glow: "shadow-purple-500/20",
      },
      Trading: {
        bg: "bg-orange-50",
        text: "text-orange-700",
        border: "border-orange-200",
        gradient: "from-orange-500 via-amber-600 to-yellow-600",
        icon: "bg-orange-500",
        glow: "shadow-orange-500/20",
      },
      Corporation: {
        bg: "bg-indigo-50",
        text: "text-indigo-700",
        border: "border-indigo-200",
        gradient: "from-indigo-500 via-purple-600 to-violet-600",
        icon: "bg-indigo-500",
        glow: "shadow-indigo-500/20",
      },
    };
    return colors[type] || colors.Corporation;
  };

  const getDomain = (url = "") => {
    try {
      const u = new URL(url);
      return u.hostname.replace("www.", "");
    } catch {
      return url;
    }
  };

  // Make entire card clickable (open in new tab)
  const onCardClick = (url) => {
    if (!url) return;
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      // fallback: set location if popup blocked
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <style>
        {`
          @keyframes pulseGlow { 0%,100%{box-shadow:0 0 10px rgba(0,0,0,.06);} 50%{box-shadow:0 0 24px rgba(0,0,0,.12);} }
          .animate-pulse-glow{ animation:pulseGlow 1.6s ease-in-out infinite; }
        `}
      </style>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-indigo-500/10 to-purple-500/10 rounded-full">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">
              Global Presence
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black bg-linear-to-r from-sky-700 via-cyan-700 to-blue-600 bg-clip-text text-transparent leading-tight">
            Our Global Network
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-700 font-medium max-w-3xl mx-auto">
            Discover our diverse portfolio of companies spanning across
            continents, delivering excellence worldwide
          </p>
        </motion.div>

        {/* NEW: Toolbar (search + filters) */}
        <div className="mb-10 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                aria-label="Search companies"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or description..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-gray-100"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {ALL_TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActiveType(t)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition ${
                    activeType === t
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                  aria-pressed={activeType === t}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">Location</label>
            <select
              aria-label="Filter by location"
              value={activeLocation}
              onChange={(e) => setActiveLocation(e.target.value)}
              className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            <span className="ml-auto text-sm text-gray-500">
              Showing <strong>{filteredCompanies.length}</strong> of{" "}
              {sortedCompanies.length}
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCompanies.map((c, i) => {
            const location = getLocation(c.name) || "Global";
            const type = getCompanyType(c.name);
            const colors = getTypeColors(type);
            const isNgo = c.name === "MGC GROUP NGO";

            return (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
                className="group relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden"
                role="link"
                aria-label={`Open ${c.name} website`}
                tabIndex={0}
                onClick={() => onCardClick(c.website)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onCardClick(c.website);
                  }
                }}
              >
                {/* Subtle top accent */}
                <div className={`h-1 w-full ${colors.icon}`}></div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Header with icon and type */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-md ${colors.bg}`}>
                      {isNgo ? (
                        <img
                          src={mgcNgoIcon}
                          alt="MGC GROUP NGO"
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        getIcon(type, "w-6 h-6", colors.text)
                      )}
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded border ${colors.border} ${colors.text} bg-gray-50`}>
                      {type}
                    </span>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {c.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                    {c.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      {getDomain(c.website)}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onCardClick(c.website);
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                      aria-label={`Visit ${c.name} website`}
                    >
                      Visit
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600">No companies match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
