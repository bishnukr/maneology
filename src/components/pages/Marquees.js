import React from "react";
import Marquee from "react-fast-marquee";

const Marquees = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className=" fullmarquee col-12 col-md-12 col-lg-12 col-xl-12 py-4">
            <Marquee>
              <h1 className="marq1">100% HUMAN HAIR EXTENSION</h1>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h1 className="marq">
                HAIR MAKES ALL YOUR HAIR DREAMS COME TRUE
                .&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h1>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquees;
