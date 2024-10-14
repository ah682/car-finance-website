import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Loan from "../components/Loan";

const loan = () => {
  return (
    <div>
      <Navbar />
      <Loan />
      <Footer />
    </div>
  );
};

export default loan;
