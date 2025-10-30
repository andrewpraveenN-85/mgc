import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import per1 from "../assets/per1.jpeg";
import per2 from "../assets/per2.jpeg";

const Directors = () => {
  return (
    <section className="relative flex flex-col justify-center items-center pb-20 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col items-center text-center px-4">
        <h2 className="text-5xl md:text-7xl font-black bg-linear-to-r from-sky-700 via-cyan-700 to-blue-600 bg-clip-text text-transparent leading-tight">
          Directors
        </h2>

        <p className="mt-4 text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto">
          Our experience is our advantage
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-10 max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div
              className="relative rounded-full overflow-hidden w-56 h-56 md:w-64 md:h-64 ring-4 ring-sky-200 shadow-md"
              tabIndex={0}
              aria-label="About Mr. Roshan Awantha"
            >
              <img
                src={per1}
                alt="Executive Director"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">
              Mr. Roshan Awantha
            </h3>
            <p className="text-sm text-gray-500">Chairman</p>
            <div className="mt-3 w-56 md:w-64">
              <div className="relative rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-white/40 ring-1 ring-sky-100/60 p-4">
                {/* top gradient accent bar */}
                <div className="absolute -top-px left-2 right-2 h-0.5 rounded-full bg-linear-to-r from-sky-500 via-cyan-500 to-blue-600" />
                {/* subtle corner glow */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-br from-sky-500/0 via-sky-500/0 to-sky-500/10" />
                <div className="relative flex gap-2">
                  {/* inline quote icon */}
                  <svg className="mt-0.5 w-4 h-4 shrink-0 text-sky-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.17 6A4.17 4.17 0 0 0 3 10.17V21h7.5v-9.5H6.5c0-2.1.7-3.5 2.67-4.23L7.17 6Zm9 0A4.17 4.17 0 0 0 12 10.17V21h7.5v-9.5h-4c0-2.1.7-3.5 2.67-4.23L16.17 6Z"/></svg>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    Mr. Roshan Awantha is the visionary leader behind Model Group of Companies, known for strategic innovation and global expansion.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div
              className="relative rounded-full overflow-hidden w-56 h-56 md:w-64 md:h-64 ring-4 ring-cyan-200 shadow-md"
              tabIndex={0}
              aria-label="About Mrs. Sunethra Thennakoon"
            >
              <img
                src={per2}
                alt="Operations Director"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">
              Mrs. Sunethra Thennakoon
            </h3>
            <p className="text-sm text-gray-500">Director</p>
            <div className="mt-3 w-56 md:w-64">
              <div className="relative rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-white/40 ring-1 ring-teal-100/60 p-4">
                <div className="absolute -top-px left-2 right-2 h-0.5 rounded-full bg-linear-to-r from-teal-500 via-emerald-500 to-cyan-600" />
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-br from-teal-500/0 via-teal-500/0 to-teal-500/10" />
                <div className="relative flex gap-2">
                  <svg className="mt-0.5 w-4 h-4 shrink-0 text-teal-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.17 6A4.17 4.17 0 0 0 3 10.17V21h7.5v-9.5H6.5c0-2.1.7-3.5 2.67-4.23L7.17 6Zm9 0A4.17 4.17 0 0 0 12 10.17V21h7.5v-9.5h-4c0-2.1.7-3.5 2.67-4.23L16.17 6Z"/></svg>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    Mrs. Sunethra Thennakoon oversees operations and corporate governance, ensuring excellence across all group entities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Directors;
