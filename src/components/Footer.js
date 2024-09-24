import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
import Logo from "../images/mylogo.png";

const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="container-xxl">
          <div className="row">
            <div
              className="column col-12 col-md-6 col-lg-3 col-xl-4"
              style={{ top: "20px" }}
            >
              {/* <h5 className="text-white mb-4">ABOUT US</h5> */}
              <img
                src={Logo}
                alt="logo"
                style={{ marginBottom: "20px" }}
                className="footer-logo"
              />
              <div>
                {/* <p
                  className="text-white"
                  style={{ fontSize: 18, fontWeight: 600 }}
                >
                  Maneology
                </p> */}

                <p className="text-white footer-para">
                  Maneology understands the significance of giving you back a
                  Head full of human hairs in our State of The Art and Hi-Tech
                  Hair Replacement Studio / Clinic in highly comfortable
                  hygienic environment and the best team of hair expert
                  technicians who undertake the non-surgical hair replacement
                  procedures on both men and women.
                </p>
                <a
                  href="tel:+91 81460 82801"
                  className="mt-2 d-block mb-2 text-white"
                >
                  +91 81460 82801
                </a>
                <Link to="/" className="mt-2 d-block mb-2 text-white">
                  Know More
                </Link>
              </div>
            </div>
            <div className="column col-12 col-md-6 col-lg-3 col-xl-2 ">
              <h5 className="text-white mb-4 foot-1">RESOURCES</h5>
              <div className="footer-links d-flex flex-column">
                <Link className=" py-2 mb-1 footer-link" to="/">
                  Home
                </Link>

                <Link className=" py-2 mb-1 footer-link" to="/help-me">
                  Help Me Choose
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/about-us">
                  About Us
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/contact-us">
                  Contact Us
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/">
                  Reviews
                </Link>
              </div>
            </div>
            <div className="column col-12 col-md-6 col-lg-3 col-xl-2">
              <h5 className="text-white mb-4 foot-1">SOCIAL</h5>
              <div className="footer-links d-flex flex-column">
                <a
                  href="https://www.instagram.com/maneologyglobal/"
                  style={{ textDecoration: "none", color: "#fff" }}
                  className="py-2"
                >
                  <BsInstagram className="fs-4" /> Instagram
                </a>
                <a
                  href="https://www.facebook.com/maneology/"
                  style={{ textDecoration: "none", color: "#fff" }}
                  className="py-2"
                >
                  <BsFacebook className="fs-4" /> Facebook
                </a>
                <a
                  href="https://www.youtube.com/@maneology8911"
                  style={{ textDecoration: "none", color: "#fff" }}
                  className="py-2"
                >
                  <BsYoutube className="fs-4 " /> Youtube
                </a>
              </div>
            </div>
            <div className="column col-12 col-md-6 col-lg-3 col-xl-2">
              <h5 className="text-white mb-4 foot-1">POLICY</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="py-2 mb-1 footer-link" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link
                  className=" py-2 mb-1 footer-link"
                  to="/return-and-exchange-policy"
                >
                  Return and Exchange Policy
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/shipping-policy">
                  Shipping Policy
                </Link>
                <Link
                  className=" py-2 mb-1 footer-link"
                  to="/terms-of-services"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="column col-12 col-md-6 col-lg-3 col-xl-2">
              <h5 className="text-white mb-4 foot-1">SUPPORT</h5>
              <div className="footer-links d-flex flex-column">
                <Link className=" py-2 mb-1 footer-link" to="/why-maneology">
                  Why Maneology
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/contact-us">
                  How To Apply
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/before-and-after">
                  Before & After
                </Link>
                <Link
                  className=" py-2 mb-1 footer-link"
                  to="/customer/account/user-profile"
                >
                  Other Tracking
                </Link>
                <Link className="py-2 mb-1 footer-link" to="/faqs">
                  FAQ's
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                Maneology @{new Date().getFullYear()} All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
