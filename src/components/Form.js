import React from "react";
import "./FormStyles.scss";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Details</label>
        <textarea rows="6" placeholders="Type a short message" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
