import React from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const contacts = [
    { country: "Sri Lanka", number: "+94 77 3 61 90 94" },
    { country: "UK", number: "+44 73 62 01 84 94" },
    { country: "USA", number: "+1 51 67 48 88 94" },
    { country: "Australia", number: "+6 14 82 09 65 94" },
    { country: "Kenya", number: "+94 77 3 61 90 94" },
    { country: "Germany", number: "+94 77 3 61 90 94" },
    { country: "Spain", number: "+94 77 3 61 90 94" },
    { country: "Canada", number: "+1 22 66 39 57 94" },
    { country: "Dubai", number: "+97 15 05 61 90 94" },
    { country: "Japan", number: "+81 50 18 07 30 94" },
    { country: "Brazil", number: "+94 77 3 61 90 94" },
    { country: "Finland", number: "+94 77 3 61 90 94" },
    { country: "Ireland", number: "+94 77 3 61 90 94" },
    { country: "Austria", number: "+43 72 0 77 51 94" },
  ];

  const branches = [
    "MODEL GROUP OF COMPANIES (PVT) LTD, SRI LANKA",
    "MODEL GROUP OF COMPANIES LTD , UK",
    "MODEL GROUP OF COMPANIES LLC, USA",
    "MODEL GROUP OF COMPANIES LLC, CANADA",
    "MODEL GROUP FINANCE UK , USA",
    "MG GROUP NGO UK , USA",
    "MGC CASINO UK , USA",
    "MODEL USED AUTOMOBILE TRADING FOR EXPORT L.L.C , DUBAI",
    "MODEL GROUP INTERNATIONAL (PVT) LTD , SRI LANKA",
    "MODEL GROUP COMPANIES LLC, FINLAND",
    "MODEL GROUP COMPANIES LLC,SPAIN",
    "MODEL GROUP COMPANIES LLC,MIDDLE EAST",
    "MODEL GROUP COMPANIES PVT,AUSTRALIA",
    "MODEL GROUP COMPANIES LLC,GERMANY",
    "MODEL GROUP COMPANIES LTD,KENYA",
    "MODEL GROUP KOKSAI,JAPAN",
  ];

  const quickLinks = ["Home", "About Us", "Contact Us", "Privacy Policy"];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* CALL US TODAY */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
            <Phone size={18} /> CALL US TODAY
          </h3>
          <ul className="space-y-2 text-sm">
            {contacts.map((c, i) => (
              <li key={i}>
                <span className="font-medium text-white">{c.country}:</span>{" "}
                {c.number}
              </li>
            ))}
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
            <Mail size={18} /> GET IN TOUCH
          </h3>
          <p className="text-sm mb-2">model@modelgroupof.com</p>
          <h4 className="text-white text-lg font-semibold mt-4">
            MODEL GROUP OF COMPANIES
          </h4>
          <p className="text-sm mt-2 leading-relaxed">
            With years of experience in vehicle selling and conversion, Model
            Group of Companies has built a solid reputation with global
            customers.
          </p>
          <p className="text-sm mt-4 font-semibold text-gray-400">Bank Details</p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, i) => (
              <li
                key={i}
                className="hover:text-white transition duration-200 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* BRANCHES */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">BRANCHES</h3>
          <ul className="space-y-2 text-sm max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {branches.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-500">
        <p>
          Copyright © 1995 - 2025 -{" "}
          <span className="text-white font-semibold">
            Model Group Of Companies
          </span>{" "}
          - All Rights Reserved.
        </p>
        <p className="mt-1 text-gray-400">
          Concept, Design & Development By{" "}
          <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer">
            Jaan Network
          </span>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;