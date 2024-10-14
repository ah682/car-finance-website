import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./LoanStyles.scss";

const Loan = () => {
  // State to hold user input values
  const [userValues, setUserValues] = useState({
    amount: "",
    interest: "",
    months: "",
  });

  // State to hold the results
  const [results, setResults] = useState({
    monthlyPayment: "",
    totalPayment: "",
    totalInterest: "",
    isResult: false,
  });

  // State to hold any error messages
  const [error, setError] = useState("");

  // Access the navigation state to get both amount (from Video page) and loan term (from Pricing page)
  const location = useLocation();

  useEffect(() => {
    // Check if either amount or loanTerm is passed in the location state and update the corresponding values
    if (location.state) {
      if (location.state.amount) {
        setUserValues((prevValues) => ({
          ...prevValues,
          amount: location.state.amount, // Pre-fill amount from the Video page
        }));
      }
      if (location.state.loanTerm) {
        setUserValues((prevValues) => ({
          ...prevValues,
          months: location.state.loanTerm, // Pre-fill months from the Pricing page
        }));
      }
    }
  }, [location.state]);

  // Handle input change and update state
  const handleInputChange = (event) =>
    setUserValues({ ...userValues, [event.target.name]: event.target.value });

  // Validate the input values
  const isValid = () => {
    const { amount, interest, months } = userValues;
    let actualError = "";
    // Check if all fields have values
    if (!amount || !interest || !months) {
      actualError = "All fields are required";
    }
    // Check if values are numbers
    else if (isNaN(amount) || isNaN(interest) || isNaN(months)) {
      actualError = "All fields must be valid numbers";
    }
    // Check if values are positive numbers
    else if (
      Number(amount) <= 0 ||
      Number(interest) <= 0 ||
      Number(months) <= 0
    ) {
      actualError = "All fields must be positive numbers";
    }

    if (actualError) {
      setError(actualError);
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmitValues = (e) => {
    e.preventDefault();
    if (isValid()) {
      setError("");
      calculateResults(userValues);
    }
  };

  // Calculate the loan repayment details
  const calculateResults = ({ amount, interest, months }) => {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(months);

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        userAmount
      ).toFixed(2);

      // Set the results to the state to display to the user
      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isResult: true,
      });
    } else {
      setError("An error occurred. Please check your numbers and try again.");
    }
  };

  // Clear input fields and results
  const clearFields = () => {
    setUserValues({
      amount: "",
      interest: "",
      months: "",
    });

    setResults({
      monthlyPayment: "",
      totalPayment: "",
      totalInterest: "",
      isResult: false,
    });

    setError("");
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmitValues} className="form">
        {!results.isResult ? (
          <>
            <div className="form-items">
              <label htmlFor="amount">Amount:</label>
              <input
                type="text"
                name="amount"
                placeholder="Loan amount"
                value={userValues.amount}
                onChange={handleInputChange}
                disabled={!!location.state?.amount}
              />
            </div>
            <div className="form-items">
              <label htmlFor="interest">Interest Rate (%):</label>
              <input
                type="text"
                name="interest"
                placeholder="Interest rate"
                value={userValues.interest}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-items">
              <label htmlFor="months">Months to Repay:</label>
              <input
                type="text"
                name="months"
                placeholder="Loan Term Months"
                value={userValues.months}
                disabled
              />
            </div>
            <input type="submit" className="btn" value="Calculate" />
          </>
        ) : (
          <>
            <h4>
              Loan Amount: £{userValues.amount} <br />
              Interest Rate: {userValues.interest}% <br />
              Months to Repay: {userValues.months}
            </h4>
            <div className="form-items">
              <label>Monthly Payment:</label>
              <input
                type="text"
                value={`£${results.monthlyPayment}`}
                disabled
              />
            </div>
            <div className="form-items">
              <label>Total Payment:</label>
              <input type="text" value={`£${results.totalPayment}`} disabled />
            </div>
            <div className="form-items">
              <label>Total Interest:</label>
              <input type="text" value={`£${results.totalInterest}`} disabled />
            </div>
            <input
              type="button"
              className="button"
              value="Calculate Again"
              onClick={clearFields}
            />
          </>
        )}
      </form>

      {/* Display error message here just below the form */}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Loan;
