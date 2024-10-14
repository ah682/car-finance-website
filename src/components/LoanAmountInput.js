import React from "react";
import "./LoanAmountInputsStyles.scss";

const LoanAmountInput = ({
  amount,
  setAmount,
  loanTerm,
  setLoanTerm,
  handleGetQuoteNow,
}) => {
  // Handle input change without applying immediate min/max constraints
  const handleAmountChange = (e) => {
    let value = e.target.value;

    // Ensure that only valid numeric input is allowed
    if (value === "" || (/^\d+$/.test(value) && Number(value) <= 20000)) {
      setAmount(value); // Allow typing up to 20000
    }
  };

  // Validate the amount before submitting
  const validateAndSubmit = () => {
    const numericAmount = Number(amount);
    if (numericAmount < 1000 || numericAmount > 20000) {
      alert("Please enter an amount between £1,000 and £20,000.");
      return;
    }
    handleGetQuoteNow(); // Proceed if valid
  };

  return (
    <div className="form-container">
      <div className="loan-amount-input">
        <input
          className="btn-large"
          type="number"
          placeholder="Enter your desired loan amount"
          value={amount}
          onChange={handleAmountChange} // Use updated change handler
          required
        />

        {/* Loan Term Selection */}
        <div className="loan-term-selection">
          <select
            className="btn"
            id="loan-term"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            required
          >
            <option value="">Select loan term</option>
            <option value="6">6 months</option>
            <option value="18">18 months</option>
            <option value="24">24 months</option>
            <option value="36">36 months</option>
          </select>
        </div>
      </div>

      <div>
        <button
          onClick={validateAndSubmit} // Validate before submission
          className="btn"
          disabled={amount === "" || loanTerm === ""}
        >
          Get quote now
        </button>
      </div>
    </div>
  );
};

export default LoanAmountInput;
