import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Crown, Users, Award, Globe } from "lucide-react";
import per1 from "../assets/per1.jpeg";
import per2 from "../assets/per2.jpeg";

const Directors = () => {
  const directors = [
    {
      name: "Mr. Roshan Awantha",
      title: "Chairman",
      image: per1,
      description:
        "Mr. Roshan Awantha is the visionary leader behind Model Group of Companies, known for strategic innovation and global expansion.",
      icon: Crown,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      glowColor: "shadow-blue-500/20",
    },
    {
      name: "Mrs. Sunethra Thennakoon",
      title: "Director",
      image: per2,
      description:
        "Mrs. Sunethra Thennakoon oversees operations and corporate governance, ensuring excellence across all group entities.",
      icon: Users,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      glowColor: "shadow-emerald-500/20",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-indigo-500/10 to-purple-500/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">
              Leadership Team
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black bg-linear-to-r from-sky-700 via-cyan-700 to-blue-600 bg-clip-text text-transparent leading-tight mb-6"
          >
            Our Directors
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
            Established in 1995, Model Group of Companies (Private) Limited
            (MGC) is a 100% Sri Lankan-owned Company at the forefront of vehicle
            selling and conversion. We have expanded our operations to various
            countries including Dubai, UK, Japan, Canada, Kenya, USA, Germany,
            Australia, Ireland, Spain, Finland and Brazil.
          </p>
        </motion.div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {directors.map((director, index) => {
            const IconComponent = director.icon;
            return (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-white shadow-xl ${director.glowColor} hover:shadow-2xl transition-all duration-500 border border-gray-100`}
                >
                  {/* Gradient border */}
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${director.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                  ></div>
                  <div className="relative bg-white rounded-2xl p-8 m-0.5">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div
                        className={`w-32 h-32 mx-auto rounded-full overflow-hidden border-4 ${director.bgColor} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <img
                          src={director.image}
                          alt={director.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      {/* Icon badge */}
                      <div
                        className={`absolute -top-2 -right-2 w-10 h-10 rounded-full bg-linear-to-r ${director.color} flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                        {director.name}
                      </h3>
                      <div
                        className={`inline-flex items-center px-4 py-2 rounded-full ${director.bgColor} ${director.textColor} text-sm font-semibold mb-4 shadow-sm`}
                      >
                        {director.title}
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {director.description}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div
                      className={`absolute bottom-4 right-4 w-20 h-20 bg-linear-to-br ${director.color} opacity-5 rounded-full`}
                    ></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-emerald-500 rounded-full max-w-md mx-auto origin-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default Directors;
