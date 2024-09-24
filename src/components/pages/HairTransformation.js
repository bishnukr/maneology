import React from "react";
import Image1 from "../../images/transform1.png";
import Image2 from "../../images/transform2.png";

const HairTransformation = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h3 className="py-3 text-center" style={{ fontWeight: 600 }}>
              <span style={{ color: "#ff6900" }}>Hair </span>Transformations
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img
              src={Image1}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img
              src={Image2}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HairTransformation;
