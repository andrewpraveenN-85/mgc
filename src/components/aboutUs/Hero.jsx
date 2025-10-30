import React from "react";
import per1 from "../../assets/per1.jpeg";
import per2 from "../../assets/per2.jpeg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen text-gray-800">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/70 px-3 py-1 text-xs font-semibold text-cyan-700 backdrop-blur">
            Established in 1995
            <span className="inline-block h-1 w-1 rounded-full bg-cyan-400" />
            100% Sri Lankan-owned
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-linear-to-r from-sky-600 via-cyan-600 to-emerald-500 bg-clip-text text-transparent">
              Model Group of Companies (Pvt) Ltd
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            A pioneer in vehicle selling and conversion with a global footprint
            and a craft-forward approach to quality and trust.
          </p>

          {/* Quick actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/")}
              className="rounded-xl bg-sky-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer"
            >
              Explore Our Services
            </button>
            <button  onClick={() => navigate("/contact")}  className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer">
              Contact Us
            </button>
          </div>

          {/* Countries strip */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 text-sm">
            {[
              "Dubai",
              "UK",
              "Japan",
              "Canada",
              "Kenya",
              "USA",
              "Germany",
              "Australia",
              "Ireland",
              "Spain",
              "Finland",
              "Brazil",
            ].map((c) => (
              <span
                key={c}
                className="rounded-full border border-sky-100 bg-white px-3 py-1 text-sky-700/80"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Years of Experience", value: "30+" },
            { label: "Countries", value: "12+" },
            { label: "Core Verticals", value: "Sales · Conversions" },
            { label: "Customer Promise", value: "Quality & Trust" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-sky-700">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-sky-700">
              Who We Are
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              <strong>Model Group of Companies (Private) Limited (MGC)</strong>{" "}
              has been a driving force in the automotive industry since 1995.
              We’ve grown into an international company with operations in
              <em>
                {" "}
                Dubai, UK, Japan, Canada, Kenya, USA, Germany, Australia,
                Ireland, Spain, Finland
              </em>
              , and <em>Brazil</em>.
            </p>
            <p className="mt-3 text-lg leading-relaxed">
              With decades of expertise, MGC continues to set the benchmark for
              quality, innovation, and trust in vehicle selling and conversions
              worldwide.
            </p>

            {/* Values */}
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {[
                {
                  title: "Quality",
                  desc: "Meticulous workmanship from sourcing to delivery.",
                },
                {
                  title: "Innovation",
                  desc: "Modern conversion techniques and continuous improvement.",
                },
                {
                  title: "Trust",
                  desc: "Transparent processes and long-term partnerships.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
                >
                  <p className="text-base font-semibold text-sky-700">
                    {v.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What we do */}
          <div className="grid gap-4">
            {[
              {
                title: "Vehicle Selling",
                body: "Global sourcing and sales network ensuring the right vehicle for every need.",
              },
              {
                title: "Vehicle Conversions",
                body: "Custom, safe, and regulation-compliant conversions tailored to purpose.",
              },
              {
                title: "International Logistics",
                body: "End-to-end coordination across ports and borders with reliable partners.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-semibold text-gray-900">{f.title}</p>
                <p className="mt-2 text-gray-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* LEADERSHIP (Redesigned) */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700">
            Leadership
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Meet the team guiding MGC’s strategy, craftsmanship, and customer
            promise.
          </p>
        </div>

        <div className="mt-10 space-y-12 flex flex-row gap-10">
          <div className="text-center">
            <img
              src={per1}
              alt="Roshan Awantha"
              className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-sky-100"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Roshan Awantha
            </h3>
            <p className="text-sky-700 font-medium">Chairman / Director</p>
            <p className="mt-2 max-w-xl mx-auto text-gray-600 text-sm leading-relaxed">
              With over 30 years of leadership in the automotive industry,
              Roshan Awantha has steered MGC toward global recognition through a
              dedication to quality, integrity, and innovation.
            </p>
          </div>

          <div className="text-center">
            <img
              src={per2}
              alt="Sunethra Thennakoon"
              className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-cyan-100"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Sunethra Thennakoon
            </h3>
            <p className="text-sky-700 font-medium">Director</p>
            <p className="mt-2 max-w-xl mx-auto text-gray-600 text-sm leading-relaxed">
              Sunethra Thennakoon brings operational excellence and a
              people-first approach, fostering long-term growth and a culture of
              continuous improvement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
