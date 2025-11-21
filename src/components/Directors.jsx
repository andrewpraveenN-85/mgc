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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white/95 backdrop-blur-sm border border-gray-200/60 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="h-1 bg-linear-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-8 text-center">
              <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src={per1}
                  alt="Executive Director"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Mr. Roshan Awantha
              </h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
                Chairman
              </div>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                Mr. Roshan Awantha is the visionary leader behind Model Group of Companies, known for strategic innovation and global expansion.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/95 backdrop-blur-sm border border-gray-200/60 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="h-1 bg-linear-to-r from-emerald-500 to-teal-600"></div>
            <div className="p-8 text-center">
              <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src={per2}
                  alt="Operations Director"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Mrs. Sunethra Thennakoon
              </h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-4">
                Director
              </div>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                Mrs. Sunethra Thennakoon oversees operations and corporate governance, ensuring excellence across all group entities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Directors;
