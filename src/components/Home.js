import React, { useState } from "react";
import Cards from "./Cards";
import Banner from "./Banner";
import MidSection from "./pages/Midsection";
import ScrollBanner1 from "./pages/ScrollBanner1";
import HairTransformation from "./pages/HairTransformation";
import ShopByBrand from "./pages/ShopByBrand";
import { AiOutlineClose } from "react-icons/ai";
import Marquees from "./pages/Marquees";
import WhyManeology from "./pages/WhyManeology";
import men from "../images/menproblem.jpg";
import women from "../images/womrnproblem.jpg";
const Home = () => {
  const [isPopupOpen, setPopupOpen] = useState(true);

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <>
      <div className="container-fluid">
        {isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <div className="d-flex justify-content-end">
                <AiOutlineClose className="closebutton" onClick={closePopup} />
              </div>

              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
                  <h4
                    style={{
                      fontWeight: "600",
                      fontSize: "24px",
                    }}
                  >
                    Select your Gender
                  </h4>
                </div>
              </div>
              <div className="row py-4">
                <div className="col-12 col-sm-12 col-lg-6 col-xl-6 main-male">
                  <div className="malediv">
                    <img
                      src={men}
                      alt="men"
                      style={{ width: "100%", height: "auto" }}
                    />

                    <button className="malebtn">Male</button>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-6 col-xl-6 main-female">
                  <div className="femalediv">
                    <img
                      src={women}
                      alt="women"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <button
                      className="femalebtn"
                      // style={{
                      //   background: "red",
                      //   color: "#000",
                      //   border: "1px solid #fff",
                      //   borderRadius: "25px",
                      //   fontSize: "24px",
                      //   fontWeight: "600",
                      //   height: "40px",
                      //   width: "90px",
                      // }}
                    >
                      Female
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <Banner />
      </div>
      <div className="py-4">
        <ScrollBanner1 />
      </div>
      <div className="py-4">
        <Marquees />
      </div>
      <div className="py-4">
        <MidSection />
      </div>
      <div>
        <Cards />
      </div>
      <div className="py-4">
        <HairTransformation />
      </div>
      <div className="py-4">
        <ShopByBrand />
      </div>
      {/* <div className="py-4">
        <Review />
      </div> */}
      {/* <div className="py-4">
        <News />
      </div> */}
      <div className="py-4">
        <WhyManeology />
      </div>
    </>
  );
};

export default Home;
