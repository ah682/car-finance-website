import React from "react";
import "./FooterStyles.scss";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>123 Oxford Road.</p>
              <h4>Manchester, United Kingdom</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              1-800-123-1234
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              enquiries@yourfinance.com
            </h4>
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <h4>About the company</h4>
          <p>
            Your Finance is a trusted financial services provider offering
            tailored solutions for both individuals and businesses. We
            specialize in helping clients manage their finances, from personal
            loans to investment strategies, with a focus on reliability and
            transparency.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
