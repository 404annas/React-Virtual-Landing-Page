import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Work from "./components/Work";
import PricePlan from "./components/PricePlan";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-6 px-6">
        <Hero />
        <Features />
        <Work />
        <PricePlan />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
