import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./PricingStyles.scss";

const Pricing = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to navigate to the Loan page with the selected months
  const handleCardClick = (months) => {
    navigate("/loan", { state: { loanTerm: months } });
  };

  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card" onClick={() => handleCardClick(6)}>
          <h3> 6 Months Warranty </h3>
          <button className="btn">Book</button>
        </div>
        <div className="card" onClick={() => handleCardClick(12)}>
          <h3> 12 Months Warranty</h3>
          <button className="btn">Book</button>
        </div>
        <div className="card" onClick={() => handleCardClick(18)}>
          <h3> 18 Months Warranty</h3>
          <button className="btn">Book</button>
        </div>
        <div className="card" onClick={() => handleCardClick(24)}>
          <h3> 24 Months Warranty</h3>
          <button className="btn">Book</button>
        </div>
        <div className="card" onClick={() => handleCardClick(36)}>
          <h3> 36 Months Warranty</h3>
          <button className="btn">Book</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
