import React from "react";
import { Link } from "react-router-dom";
import Why from "../../images/why.jpg";
// import Img from "../../images/Halohair1.png";

const WhyManeology = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <div className="whymaneologyImg">
              <img src={Why} alt="why manelogy" style={{ width: "420px" }} />
            </div>
          </div>

          <div className="col-12 col-sm-12  col-md-12 col-lg-6 col-xl-6 ">
            <div className="whymaneology">
              <h3>
                <span style={{ color: "#ff6900" }}>Maneology</span> Hair
                Promises
              </h3>
              <ul>
                <li>
                  What you get here is perfection, with premium quality 100%
                  human hair extensions
                </li>
                <li>
                  Huge inventory of hair extensions so you will definitely find
                  your perfect match
                </li>
                <li>
                  Your hair goals are now ours and we work very hard in making
                  hair dreams come true around the globe with the best hair
                  solutions for all
                </li>
                <li>
                  Helping you create incredible hairstyles for any occasion
                </li>
                <li>Our goal is to be your expert best friend</li>
              </ul>
              <Link to="/about-us">
                <button
                  style={{
                    background: "#ff6900",
                    color: "#fff",
                    borderRadius: "50px",
                    border: "1px solid #ff6900",
                    width: "160px",
                    height: "40px",
                  }}
                >
                  Why Maneology Hair
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyManeology;
