import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import PricingCards from "../components/Pricing";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PRICING." text="Choose Your Warranty Duration." />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Pricing;
