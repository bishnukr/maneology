import React from "react";
import BA1 from "../../images/ba1.png";
import BA2 from "../../images/ba2.png";
import BA3 from "../../images/ba3.png";
import BA4 from "../../images/ba4.png";
import BA5 from "../../images/ba5.png";
import BA6 from "../../images/ba6.png";

const BeforeAfter = () => {
  return (
    <>
      <div className="container-fluid">
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
                Before & After
              </h1>
              <p
                style={{ textAlign: "center", justifyContent: "center" }}
                className="py-2"
              >
                {" "}
                If you’re looking for a big hair change, going for a cut seems
                like the most obvious option (even if it means no more messy
                buns). But there is another hair transformation that could be
                even more dramatic: NishHair hair extensions. They offer extra
                length, volume, and color in an instant, and they can be
                literally life-changing.
              </p>
            </div>
          </div>
        </div>

        <div className="row py-2">
          <div className="col-12 col-sm-4 ">
            <img src={BA1} alt="BeforeAfter1 " className="img-fluid" />
          </div>
          <div className="col-12 col-sm-4 ">
            <img src={BA2} alt="BeforeAfter2 " className="img-fluid" />
          </div>
          <div className="col-12 col-sm-4">
            <img src={BA3} alt="BeforeAfter2 " className="img-fluid" />
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-4  ">
            <img src={BA4} alt="BeforeAfter3 " className="img-fluid" />
          </div>
          <div className="col-12 col-sm-4  ">
            <img src={BA5} alt="BeforeAfter4 " className="img-fluid" />
          </div>
          <div className="col-12 col-sm-4 ">
            <img src={BA6} alt="BeforeAfter4 " className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeAfter;
