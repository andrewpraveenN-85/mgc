import React from "react";
import HeroOne from "../components/HeroOne";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Leaders from "../components/Leaders";
import Directors from "../components/Directors";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div>
      <HeroOne />
      <Hero />
      <Leaders />
      <Brands />
      <Directors />
      <Footer />
    </div>
  );
};

export default Home;
