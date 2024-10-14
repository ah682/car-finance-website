import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoStyles.scss";
import carVideo from "../assets/car.mp4";
import LoanAmountInput from "./LoanAmountInput"; // Import the updated component

const Video = () => {
  const [amount, setAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const navigate = useNavigate();

  const handleGetQuoteNow = () => {
    // Navigate to the Loan component, passing the amount and loan term as state
    navigate("/loan", { state: { amount, loanTerm } });
  };

  return (
    <div className="hero">
      <video autoPlay loop muted id="background-video">
        <source src={carVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Your Car Finance.</h1>
        <p>Affordable financing options tailored just for you.</p>

        {/* Loan Amount Input Component */}
        <LoanAmountInput
          amount={amount}
          setAmount={setAmount}
          loanTerm={loanTerm}
          setLoanTerm={setLoanTerm}
          handleGetQuoteNow={handleGetQuoteNow}
        />
      </div>
    </div>
  );
};

export default Video;
