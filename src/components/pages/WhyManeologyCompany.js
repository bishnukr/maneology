import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { whyManeologyData } from "../../Constants/FaqData";
import { FaShuttleVan, FaRecycle } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";

const WhyManeologyCompany = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 ol-sx-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  ">
            <h1
              style={{
                color: "#ff6900",
                textAlign: "center",
                marginTop: "80px",

                fontWeight: 600,
              }}
            >
              Why Maneology
            </h1>
            <p
              style={{ textAlign: "center", justifyContent: "center" }}
              className="py-2"
            >
              {" "}
              We decided to do it differently and NishHair was born – an
              ethical, premium and best quality hair extension brand. Made out
              of 100% authentic human hair, every piece of our hair extension
              collection is handcrafted ethically with love.Getting hair
              extensions can be an experience for you and can give you a
              much-needed confidence boost. We at NishHair thrive to make it the
              best one.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ol-sx-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  ">
            {whyManeologyData.map((elem, id) => {
              return (
                <>
                  <Accordion key={id} className="py-1">
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid #ff6900" }}
                    >
                      <Accordion.Header>{elem.title}</Accordion.Header>
                      <Accordion.Body>{elem.desc}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            })}
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <p style={{ marginTop: "50px" }}>ＯＵＲ ＳＯＲＹ</p>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <h1>YOU ARE OUR TOP PRIORITY.</h1>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <p>
              Need assistance? We’re always available to answer your questions
              or concerns day or night.
            </p>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <button className="whymaneologybtn">Learn More</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ol-sx-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  ">
            <div className="row py-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div className="contactCard">
                  <div className="container py-4">
                    <FaShuttleVan
                      className="addressIcon"
                      style={{
                        color: "#ff6900",
                        fontSize: "50px",
                      }}
                    />
                    <h5 style={{ textAlign: "center" }} className="py-2">
                      <b>Free Domestic Shipping</b>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div className="contactCard">
                  <div className="container py-4">
                    <FaRecycle
                      style={{
                        color: "#ff6900",
                        fontSize: "50px",
                      }}
                      className="addressIcon"
                    />
                    <h5 style={{ textAlign: "center" }} className="py-2">
                      <b>Ships within 2-3 days</b>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div className="contactCard">
                  <div className="container py-4">
                    <MdLocalOffer
                      style={{
                        color: "#ff6900",
                        fontSize: "50px",
                      }}
                      className="addressIcon"
                    />
                    <h5 style={{ textAlign: "center" }} className="py-2">
                      <b>Cash on Delivery Available</b>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div className="contactCard">
                  <div className="container py-4">
                    <BsFillGeoAltFill
                      style={{
                        color: "#ff6900",
                        fontSize: "50px",
                      }}
                      className="addressIcon"
                    />
                    <h5 style={{ textAlign: "center" }} className="py-2">
                      <b>Naional orders accepted</b>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyManeologyCompany;
