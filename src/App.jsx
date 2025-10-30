import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import PrivacyPolicy from "./screens/PrivacyPolicy";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
