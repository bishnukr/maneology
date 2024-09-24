import React from "react";
import {
  BsFillTelephoneFill,
  BsGeoAltFill,
  BsEnvelopeOpenFill,
} from "react-icons/bs";

const ContactUs = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <h1
              style={{ marginTop: "40px", fontWeight: "600", fontSize: "44px" }}
            >
              Contact Us
            </h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h3>Fill this form to get in touch by our team</h3>
          </div>
        </div>
        <div className="row contact-us">
          <div className="row ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <input type="text" placeholder="First name" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
              <input type="number" placeholder="Apartment, suit, etc." />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <input type="textarea" placeholder="Your comments" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <button className="contact-send-message">Send Message</button>
            </div>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="contactCard">
              <div className="container py-4">
                <BsFillTelephoneFill
                  className="addressIcon"
                  style={{
                    color: "#ff6900",
                    fontSize: "28px",
                  }}
                />
                <h4 style={{ textAlign: "center" }} className="py-2">
                  <b>Mobile No.</b>
                </h4>
                <p style={{ textAlign: "center" }}>+91 81460 82801</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="contactCard">
              <div className="container py-4">
                <BsEnvelopeOpenFill
                  style={{
                    color: "#ff6900",
                    fontSize: "28px",
                  }}
                  className="addressIcon"
                />
                <h4 style={{ textAlign: "center" }} className="py-2">
                  <b>Email</b>
                </h4>
                <p style={{ textAlign: "center" }}> info@maneology.com</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="contactCard">
              <div className="container py-4">
                <BsGeoAltFill
                  style={{
                    color: "#ff6900",
                    fontSize: "28px",
                  }}
                  className="addressIcon"
                />
                <h4 style={{ textAlign: "center" }} className="py-2">
                  <b>Address</b>
                </h4>
                <p style={{ textAlign: "center" }}>
                  SCO 296, First Floor, Sector 35D, Chandigarh, 160022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13718.791270717367!2d76.74021565541993!3d30.726894500000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed12c5ef4623%3A0xb5bd0d4a12f8c5eb!2sManeology%20-%20Best%20Hair%20Transplant%20in%20Chandigarh!5e0!3m2!1sen!2sin!4v1691582757109!5m2!1sen!2sin"
              style={{
                border: "0",
                width: "100%",
                height: "450px",
                allowfullscreen: "",
                loading: "lazy",
                referrerpolicy: "no-referrer-when-downgrade",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
