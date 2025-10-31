import React, { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import bank from "../assets/carousel/bank.jpg";
import bank2 from "../assets/carousel/bank2.jpg";
import bank4 from "../assets/carousel/bank4.jpg";
import bank5 from "../assets/carousel/bank5.jpg";

import bank6 from "../assets/carousel/bank6.jpg";
import bank7 from "../assets/carousel/bank7.jpg";
import bank8 from "../assets/carousel/bank8.jpg";
import bank9 from "../assets/carousel/bank9.jpg";
// import bank10 from "../assets/carousel/bank10.jpg";
import bank11 from "../assets/carousel/bank11.jpg";
import bank12 from "../assets/carousel/bank12.jpg";

import bank13 from "../assets/carousel/bank13.jpg";
import bank14 from "../assets/carousel/bank14.jpg";
import bank15 from "../assets/carousel/bank15.jpg";
import bank16 from "../assets/carousel/bank16.jpg";
import bank17 from "../assets/carousel/bank17.jpg";
// import bank18 from "../assets/carousel/bank18.jpg";
// import bank19 from "../assets/carousel/bank19.jpg";
import bank20 from "../assets/carousel/bank20.jpg";
import bank21 from "../assets/carousel/bank21.jpg";
import bank22 from "../assets/carousel/bank22.jpg";
import bank23 from "../assets/carousel/bank23.jpg";
import bank24 from "../assets/carousel/bank24.jpg";
import bank25 from "../assets/carousel/bank25.jpg";
import bank26 from "../assets/carousel/bank26.jpg";
import bank27 from "../assets/carousel/bank27.jpg";
import bank28 from "../assets/carousel/bank28.jpg";
import bank29 from "../assets/carousel/bank29.jpg";
import bank30 from "../assets/carousel/bank30.jpg";
import bank31 from "../assets/carousel/bank31.jpg";
import bank32 from "../assets/carousel/bank32.jpg";
import bank33 from "../assets/carousel/bank33.jpg";
import bank34 from "../assets/carousel/bank34.jpg";
import bank35 from "../assets/carousel/bank35.jpg";

import ngo from "../assets/carousel/ngo.jpg";
import vehicle from "../assets/carousel/vehicle.jpg";
import casino from "../assets/carousel/casino.jpg";

import lottery from "../assets/carousel/lottery.jpg";
import lottery2 from "../assets/carousel/lottery2.jpg";
import lottery3 from "../assets/carousel/lottery3.jpeg";
// import lottery4 from "../assets/carousel/lottery4.jpg";
import lottery5 from "../assets/carousel/lottery5.jpg";
import lottery6 from "../assets/carousel/lottery6.jpg";

import tobacco from "../assets/carousel/tobacco.jpg";
import ngo2 from "../assets/carousel/ngo2.jpg";
import ngo3 from "../assets/carousel/ngo3.jpg";
import unicef from "../assets/carousel/unicef.jpg";
import jp from "../assets/carousel/jp.jpg";

import stripe from "../assets/carousel/stripe.jpg";
import swiss from "../assets/carousel/swiss.jpg";
import casino2 from "../assets/carousel/casino2.jpg";

const slides = [
  {
    title: "BARCLAYS FINANCE LIMITED",
    description:
      "A leading global finance and investment company specializing in personal loans, corporate banking, and asset management.",
    image: bank,
    alt: "BARCLAYS FINANCE LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "USA FINANCE LLP",
    description:
      "A reputable American financial services firm providing investment solutions, wealth management, and lending services to individuals and businesses.",
    image: bank2,
    alt: "USA FINANCE LLP",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MGC CASINO LIMITED",
    description:
      "An international entertainment company offering luxury casino experiences and online gaming services worldwide.",
    image: casino,
    alt: "MGC CASINO LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP FINANCE LIMITED",
    description:
      "A diversified financial institution delivering tailored banking, investment, and insurance products to a global clientele.",
    image: bank4,
    alt: "MODEL GROUP FINANCE LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MG GROUP NGO",
    description:
      "A non-profit organization dedicated to education, health, and community development initiatives across developing regions.",
    image: ngo,
    alt: "MG GROUP NGO",
    link: "https://www.mgcgroupngo.com/",
  },
  {
    title: "MODEL GROUP OF COMPANIES LTD",
    description:
      "A multinational conglomerate with interests in finance, real estate, energy, and technology sectors.",
    image: bank5,
    alt: "MODEL GROUP OF COMPANIES LTD",
    link: "https://modelgroupof.com/",
  },
  {
    title: "ABU DHABI BIG TIKAT",
    description:
      "A premier ticketing and event management company providing access to global entertainment and sports events.",
    image: lottery6,
    alt: "ABU DHABI BIG TIKAT",
    link: "https://modelgroupof.com/",
  },
  {
    title: "BARCLAYS GROUP OF COMPANIES LTD",
    description:
      "A diversified group offering banking, insurance, and investment solutions with a global reach.",
    image: bank6,
    alt: "BARCLAYS GROUP OF COMPANIES LTD",
    link: "https://modelgroupof.com/",
  },
  {
    title: "CANADIN FINANCE",
    description:
      "A Canadian-based financial services provider known for innovative banking, credit, and mortgage solutions.",
    image: bank7,
    alt: "CANADIN FINANCE",
    link: "https://modelgroupof.com/",
  },
  {
    title: "CASINO UK",
    description:
      "A top-tier casino brand in the United Kingdom, delivering premium in-person and online gaming experiences.",
    image: casino2,
    alt: "CASINO UK",
    link: "https://modelgroupof.com/",
  },
  {
    title: "CHASE FINANCE LLP",
    description:
      "A trusted financial partner offering a wide range of banking, lending, and investment services for individuals and enterprises.",
    image: bank8,
    alt: "CHASE FINANCE LLP",
    link: "https://modelgroupof.com/",
  },
  {
    title: "CITI FINANCE LIMITED",
    description:
      "A global financial powerhouse delivering commercial banking, consumer finance, and capital market solutions.",
    image: bank9,
    alt: "CITI FINANCE LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "DUBAI BIG TIKAT",
    description:
      "A leading ticketing agency in Dubai, specializing in concerts, sports, and exclusive entertainment events.",
    image: lottery3,
    alt: "DUBAI BIG TIKAT",
    link: "https://modelgroupof.com/",
  },
  {
    title: "DUTCH FINANCE",
    description:
      "A Netherlands-based finance company known for transparent banking, investment, and international remittance services.",
    image: bank21,
    alt: "DUTCH FINANCE",
    link: "https://modelgroupof.com/",
  },
  {
    title: "JP MORGAN FINANCE",
    description:
      "A world-renowned provider of investment banking, asset management, and financial advisory services.",
    image: jp,
    alt: "JP MORGAN FINANCE",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MGC BIG TIKAT",
    description:
      "A global lottery and ticketing company offering high-value draws and instant-win opportunities.",
    image: lottery2,
    alt: "MGC BIG TIKAT",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MGC U WIN LOTTERY LIMITED",
    description:
      "A leading lottery operator providing secure, transparent, and exciting lottery experiences for participants worldwide.",
    image: lottery,
    alt: "MGC U WIN LOTTERY LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP OF COMPANIES",
    description:
      "An international business group with interests spanning finance, manufacturing, real estate, and technology.",
    image: bank11,
    alt: "MODEL GROUP OF COMPANIES",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP OF COMPANIES LIMITED",
    description:
      "A global holding company managing investments and operations across multiple industries and regions.",
    image: bank12,
    alt: "MODEL GROUP OF COMPANIES LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP U WIN LOTTERY LIMITED",
    description:
      "A trusted lottery brand offering innovative games and life-changing prizes to customers worldwide.",
    image: lottery5,
    alt: "MODEL GROUP U WIN LOTTERY LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "OCBC FINANCE LTD",
    description:
      "A well-established financial institution providing comprehensive banking, wealth management, and investment services.",
    image: bank13,
    alt: "OCBC FINANCE LTD",
    link: "https://modelgroupof.com/",
  },
  {
    title: "PAYPAL FINANCE LLP",
    description:
      "A global digital payments leader enabling secure, fast, and convenient financial transactions for businesses and consumers.",
    image: bank14,
    alt: "PAYPAL FINANCE LLP",
    link: "https://modelgroupof.com/",
  },
  {
    title: "S L TOBACCO",
    description:
      "A major producer and distributor of premium tobacco products with a commitment to quality and compliance.",
    image: tobacco,
    alt: "S L TOBACCO",
    link: "https://modelgroupof.com/",
  },
  {
    title: "STANDARD CHARTERED FINANCE LLP",
    description:
      "An international bank offering personal, commercial, and investment banking services across emerging markets.",
    image: bank15,
    alt: "STANDARD CHARTERED FINANCE LLP",
    link: "https://modelgroupof.com/",
  },
  {
    title: "STARLING FINANCE LLP",
    description:
      "A digital-first bank providing innovative mobile banking, payment, and lending solutions for modern consumers.",
    image: bank16,
    alt: "STARLING FINANCE LLP",
    link: "https://modelgroupof.com/",
  },
  {
    title: "STRIPE FINANCE LIMITED",
    description:
      "A technology-driven finance company delivering seamless payment processing and financial infrastructure for businesses.",
    image: stripe,
    alt: "STRIPE FINANCE LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "SWISS FINANCE LTD",
    description:
      "A Swiss-based financial institution renowned for private banking, wealth management, and investment advisory services.",
    image: swiss,
    alt: "SWISS FINANCE LTD",
    link: "https://modelgroupof.com/",
  },
  {
    title: "UNICEF NGO LIMITED",
    description:
      "A humanitarian organization focused on improving the lives of children and families through education, health, and emergency relief.",
    image: unicef,
    alt: "UNICEF NGO LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "UNITED NATIONS NGO LTD",
    description:
      "A global non-governmental organization working to promote peace, human rights, and sustainable development worldwide.",
    image: ngo2,
    alt: "UNITED NATIONS NGO LTD",
    link: "https://modelgroupof.com/",
  },
  {
    title: "WELLS FARGO FINANCE LIMITED",
    description:
      "A leading provider of banking, mortgage, and financial services with a strong presence across international markets.",
    image: bank17,
    alt: "WELLS FARGO FINANCE LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "WISEBANK & FINANCE LIMITED",
    description:
      "A modern financial institution offering smart banking, digital wallets, and innovative lending products.",
    image: bank20,
    alt: "WISEBANK & FINANCE LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "WORLD VISION NGO LTD",
    description:
      "A global humanitarian organization committed to tackling poverty and injustice by empowering children and communities.",
    image: ngo3,
    alt: "WORLD VISION NGO LTD",
    link: "https://modelgroupof.com/",
  },
  {
    title: "BANK USA",
    description:
      "A U.S.-based commercial bank providing retail, corporate, and international banking solutions.",
    image: bank22,
    alt: "BANK USA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "WISE BANK UK",
    description:
      "A UK-headquartered digital-first bank offering cross-border payments, remittances, and smart finance products.",
    image: bank23,
    alt: "WISE BANK UK",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MGC CASINO USA",
    description:
      "The U.S. arm of MGC’s entertainment and gaming brand, offering premium casino and online experiences.",
    image: casino2,
    alt: "MGC CASINO USA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MG GROUP NGO UK , USA",
    description:
      "International NGO chapters in the UK and USA focused on health, education, and community upliftment.",
    image: ngo2,
    alt: "MG GROUP NGO UK , USA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP FINANCE UK , USA",
    description:
      "Regional finance operations serving UK and U.S. clients with lending, treasury, and investment products.",
    image: bank24,
    alt: "MODEL GROUP FINANCE UK , USA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP INTERNATIONAL (PVT) LTD , SRI LANKA",
    description:
      "Sri Lankan private limited entity managing Model Group’s South Asian investments and project portfolios.",
    image: bank31,
    alt: "MODEL GROUP INTERNATIONAL (PVT) LTD , SRI LANKA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP OF COMPANIES LLC, USA",
    description:
      "U.S.-registered holding for the Model Group overseeing finance, real estate, and trading ventures.",
    image: bank25,
    alt: "MODEL GROUP OF COMPANIES LLC, USA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP OF COMPANIES LLC, CANADA",
    description:
      "Canadian subsidiary coordinating North American operations, compliance, and financial services.",
    image: bank26,
    alt: "MODEL GROUP OF COMPANIES LLC, CANADA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP OF COMPANIES LTD , UK",
    description:
      "UK-registered limited company facilitating European investments, banking, and technology projects.",
    image: bank27,
    alt: "MODEL GROUP OF COMPANIES LTD , UK",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL USED AUTOMOBILE TRADING FOR EXPORT L.L.C , DUBAI",
    description:
      "Dubai-based trading arm specializing in sourcing and exporting used automobiles to global markets.",
    image: vehicle,
    alt: "MODEL USED AUTOMOBILE TRADING FOR EXPORT L.L.C , DUBAI",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP COMPANIES LLC,GERMANY",
    description:
      "German-registered entity overseeing EU-focused finance, logistics, and industrial partnerships.",
    image: bank29,
    alt: "MODEL GROUP COMPANIES LLC,GERMANY",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP COMPANIES PVT,AUSTRALIA",
    description:
      "Australian private company handling regional investment, property, and trade operations.",
    image: bank30,
    alt: "MODEL GROUP COMPANIES PVT,AUSTRALIA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP COMPANIES LLC, FINLAND",
    description:
      "Nordic branch focused on sustainable finance, green energy projects, and tech-sector collaborations.",
    image: bank28,
    alt: "MODEL GROUP COMPANIES LLC, FINLAND",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP COMPANIES LLC,SPAIN",
    description:
      "Spanish subsidiary supporting EU and Mediterranean business development and hospitality ventures.",
    image: bank32,
    alt: "MODEL GROUP COMPANIES LLC,SPAIN",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP COMPANIES LLC,MIDDLE EAST",
    description:
      "Regional coordination office for Middle East investments, infrastructure, and public-private partnerships.",
    image: bank33,
    alt: "MODEL GROUP COMPANIES LLC,MIDDLE EAST",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP COMPANIES LTD,KENYA",
    description:
      "East African subsidiary driving finance, agriculture, and community development projects in Kenya.",
    image: bank34,
    alt: "MODEL GROUP COMPANIES LTD,KENYA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP KOKSAI,JAPAN",
    description:
      "Japan-based international business arm (KOKSAI) enabling trade, technology exchange, and financial services.",
    image: bank35,
    alt: "MODEL GROUP KOKSAI,JAPAN",
    link: "https://modelgroupof.com/",
  },
];

const AUTO_INTERVAL_MS = 2800; // auto move every 2.8s (faster progress bar and slide advance)

const imgEasing = [0.4, 0, 0.2, 1];
const imgOutEasing = [0.4, 0, 0.2, 1];

const textParent = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: imgEasing,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const textChild = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: imgEasing },
  },
};

const HeroOne = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartXRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goTo = (i) => setIndex(i % slides.length);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    const t = e.changedTouches && e.changedTouches[0];
    touchStartXRef.current = t ? t.clientX : null;
  };

  const handleTouchEnd = (e) => {
    const t = e.changedTouches && e.changedTouches[0];
    const endX = t ? t.clientX : null;

    if (touchStartXRef.current !== null && endX !== null) {
      const deltaX = endX - touchStartXRef.current;
      if (Math.abs(deltaX) > 40) {
        if (deltaX < 0) {
          next();
        } else {
          prev();
        }
      }
    }
    setIsPaused(false);
    touchStartXRef.current = null;
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prev();
    } else if (e.key === "ArrowRight") {
      next();
    }
  };

  const slide = slides[index];

  return (
    <section
      className="w-full flex justify-center items-center py-10 md:py-8"
      aria-roledescription="carousel"
      aria-label="Company highlights carousel"
    >
      <div className="max-w-[1300px] w-full px-4 md:px-10">
        {/* Carousel frame */}
        <motion.div
          className="relative overflow-hidden bg-white"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
        >
          {/* Content grid: image left, text right */}
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-[220px] sm:h-[280px] md:h-[500px] md:order-2 overflow-hidden">
              {/* We only render the active image */}
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 h-full w-full object-cover object-center"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{
                  opacity: 1,
                  scale: 1.06,
                  transition: {
                    opacity: { duration: 0.6, ease: imgEasing },
                    scale: {
                      duration: AUTO_INTERVAL_MS / 1000,
                      ease: "linear",
                    },
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 1.0,
                  transition: { duration: 0.4, ease: imgOutEasing },
                }}
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/10 md:bg-black/10" />
              {/* Stronger, wider edge blends */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-linear-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-linear-to-l from-white to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 md:h-24 bg-linear-to-b from-white to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 md:h-24 bg-linear-to-t from-white to-transparent" />
              {/* Corner radial blends for seamless edges */}
              <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 md:h-36 md:w-36 bg-[radial-gradient(circle_at_top_left,white,transparent_65%)]" />
              <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 md:h-36 md:w-36 bg-[radial-gradient(circle_at_top_right,white,transparent_65%)]" />
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 md:h-36 md:w-36 bg-[radial-gradient(circle_at_bottom_left,white,transparent_65%)]" />
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 md:h-36 md:w-36 bg-[radial-gradient(circle_at_bottom_right,white,transparent_65%)]" />
            </div>

            {/* Text (right side) */}
            <div className="bg-white md:order-1">
              <motion.div
                key={index}
                variants={textParent}
                initial="hidden"
                animate="show"
                className="flex flex-col h-full justify-center gap-4 p-5 sm:p-6 md:p-10 text-left"
              >
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-900/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-neutral-700 ring-1 ring-inset ring-neutral-900/10 backdrop-blur">
                  Featured
                </div>
                <motion.h2
                  variants={textChild}
                  className="text-3xl/[90%] md:text-6xl/[90%] text-neutral-900 font-extrabold leading-tight"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  variants={textChild}
                  className="text-neutral-700 text-base/[100%] md:text-lg/[100%] max-w-lg"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  variants={textChild}
                  className="mt-2 flex flex-wrap items-center justify-start gap-3"
                >
                  <a
                    href={slide.link ?? "#about"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-black text-white hover:bg-gray-900  px-4 py-2 text-sm font-medium shadow-sm "
                  >
                    Visit Site
                  </a>
                </motion.div>

                {/* Dots */}
                <div className="ml-2 mt-2 flex flex-wrap items-center gap-2 max-w-[300px]">
                  {slides.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2.5 w-2.5 rounded-full ${
                        index === i
                          ? "bg-neutral-900 ring-1 ring-inset ring-neutral-900/60 shadow"
                          : "bg-neutral-300 hover:bg-neutral-400"
                      }`}
                      animate={{ scale: index === i ? 1.25 : 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      whileHover={{ scale: index === i ? 1.3 : 1.15 }}
                    />
                  ))}
                </div>

                {/* Controls */}
                <div className="mt-2 flex items-center gap-3">
                  <motion.button
                    onClick={prev}
                    aria-label="Previous slide"
                    className="group h-12 w-12 rounded-full bg-white border border-neutral-200 shadow-sm hover:bg-neutral-50 active:scale-95 transition"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ y: -1 }}
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-8 w-8 mx-auto text-neutral-700"
                    >
                      <path
                        d="M15 6l-6 6 6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                  <motion.button
                    onClick={next}
                    aria-label="Next slide"
                    className="group h-12 w-12 rounded-full bg-white border border-neutral-200 shadow-sm hover:bg-neutral-50 active:scale-95 transition"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ y: -1 }}
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-8 w-8 mx-auto text-neutral-700"
                    >
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* Progress bar (auto move indicator) */}
        <div className="mt-3 md:mt-8 h-0.5 md:h-1 bg-neutral-200 rounded-full">
          <div
            key={index}
            className="h-full bg-linear-to-r from-black/75 to-black/25"
            style={{
              width: "0%",
              animation: `progress ${AUTO_INTERVAL_MS}ms linear 1 forwards`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
            onAnimationEnd={() => {
              if (!isPaused) next();
            }}
          />
        </div>
      </div>

      {/* Inline keyframes for progress bar */}
      <style>{`
        @keyframes progress { from { width: 0% } to { width: 100% } }
      `}</style>
    </section>
  );
};

export default HeroOne;
