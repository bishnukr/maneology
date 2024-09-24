import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import SuggestProducts from "./SuggestProducts";
import CustomerReview from "./CustomerReview";
import ProductColor from "./ProductColor";
import StepVideo from "./StepVideo";
import CustomerComments from "./CustomerComments";
const CardsDetails = () => {
  const [data, setData] = useState([]);
  const [changeImage, setChangeImage] = useState(null);

  //console.log(data)

  const { id } = useParams();

  // const history = useNavigate();

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };

  const { display, carts } = useSelector((state) => state.cartreducer);

  const compare = () => {
    let comparedata = carts.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  const handleChangeImage = (id) => {
    setChangeImage(id);
  };

  useEffect(() => {
    compare();
  });

  return (
    <>
      <div className="container-fluid mt-2">
        <section className="container mt-3">
          <div className="iteamsdetails">
            {display.map((ele) => {
              return (
                <>
                  <img
                    src={ele.Img1}
                    alt="images"
                    className="smallImage1"
                    onClick={() => handleChangeImage(ele.id)}
                  />
                  {/* <div>
                    <iframe
                      width="253"
                      height="180"
                      src="https://www.youtube.com/embed/j_pVvN98I3o?si=jKK2vNEuJCIwEquR"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div> */}
                  {changeImage === ele.id && (
                    <div className="items_img">
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "ourprod1",
                            isFluidWidth: true,
                            src: ele.Img1,
                          },
                          largeImage: {
                            src: ele.Img1,
                            width: 1200,
                            height: 1800,
                          },
                          lensStyle: {
                            width: 360,
                            height: 200,
                          },
                        }}
                      />
                    </div>
                  )}
                  <div className="details">
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                        <p
                          style={{
                            fontSize: "25px",
                            fontWeight: 600,
                            lineHeight: "22px",
                          }}
                          className="details_title"
                        >
                          {ele.title}
                        </p>

                        <div className="details_rating">
                          <p
                            style={{
                              color: "#FFA800",
                              padding: "2px 5px",
                              borderRadius: "5px",
                              fontSize: "22px",
                              top: "45px",
                              wordSpacing: "-5px",
                            }}
                            className="details_rating"
                          >
                            {"  "}
                            {ele.rating}{" "}
                            <span
                              style={{
                                color: "#000",
                                fontSize: "18px",
                                fontWeight: "300",
                                marginLeft: "10px",
                              }}
                            >
                              <span>3</span>
                              <span style={{ marginLeft: "5px" }}>Reviews</span>
                            </span>
                          </p>
                        </div>

                        <p
                          style={{
                            color: "#ff6900",
                            fontSize: "25px",
                            fontWeight: "600",
                            top: "30px",
                          }}
                          className="details_price"
                        >
                          <strong>Price : </strong>₹ {ele.price}
                        </p>
                        <div className="details_desc">
                          <p>{ele.desc}</p>
                          <p>{ele.desc}</p>
                          <p>{ele.desc}</p>
                        </div>
                        <div className="d-flex">
                          <p style={{ fontWeight: "600" }}>Choose Density : </p>

                          <div class="form-check form-check-inline mx-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="option1"
                            />
                            <label class="form-check-label" for="inlineRadio1">
                              Low
                            </label>
                          </div>
                          <div className="form-check form-check-inline mx-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio2"
                            >
                              Medium
                            </label>
                          </div>
                          <div className="form-check form-check-inline mx-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio3"
                              value="option3"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio3"
                            >
                              High
                            </label>
                          </div>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600" }}>Size : 12x14 Inch</p>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600" }}>
                            Choose Color: <ProductColor />
                          </p>
                        </div>

                        <button
                          style={{
                            width: "230px",
                            height: "50px",
                            background: "#ff6900",
                            color: "#fff",
                            border: "1px solid #ff6900",
                            borderRadius: "50px",
                          }}
                          className="addtocart"
                          onClick={() => send(ele)}
                        >
                          {" "}
                          ADD TO CART{" "}
                        </button>
                        <NavLink to={"/checkout"}>
                          <button
                            style={{
                              width: "230px",
                              height: "50px",
                              background: "#ff6900",
                              color: "#fff",
                              border: "1px solid #ff6900",
                              borderRadius: "50px",
                              marginLeft: "5px",
                            }}
                            className="buyitnow"
                          >
                            {" "}
                            BUY IT NOW{" "}
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        <br />
        <StepVideo />
        <SuggestProducts />
        <CustomerReview />
        <CustomerComments />
      </div>
    </>
  );
};

export default CardsDetails;
