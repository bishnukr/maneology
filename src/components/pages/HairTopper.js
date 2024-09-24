import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { CollectionData1 } from "../../Constants/CollectionData1";
// import { RangeSlider } from "rsuite";
import { imageURL } from "../../Constants/Data";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DISPLAY } from "../../redux/actions/action";

const HairTopper = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [progress, setProgress] = useState(100);
  const [price, setPrice] = useState();
  const [data, setData] = useState(CollectionData1);
  const { id } = useParams();
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(DISPLAY(e));
  };

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === "min") {
      setPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  const filterProducts = (product) => {
    if (minPrice !== "" && product.price < parseFloat(minPrice)) {
      return false;
    }
    if (maxPrice !== "" && product.price > parseFloat(maxPrice)) {
      return false;
    }
    return true;
  };

  const filteredProducts = CollectionData1.filter(filterProducts);

  const handleProgressChange = (product) => {
    const newProgress = parseInt(product.target.value);
    setProgress(newProgress);
    setMaxPrice(100 + (newProgress - 50) * 2);
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-4">
            <h3 style={{ textAlign: "center" }}>Hair Toppers</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <h4
              style={{ fontSize: "24px", fontWeight: 600, marginLeft: "15px" }}
            >
              Price
            </h4>
            <p style={{ marginLeft: "15px" }}>
              The highest price is Rs. 7.000.00
            </p>
            {/* <div>
              <label
                htmlFor="minPrice"
                style={{ marginLeft: "5px", fontWeight: 600, fontSize: "15px" }}
              >
                Min Price:
              </label>
              <input
                type="number"
                id="minPrice"
                name="min"
                value={minPrice}
                onChange={handleFilterChange}
                style={{
                  marginLeft: "15px",
                  border: "1px solid #ff6900",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
              />
            </div> */}

            <div
              className="progress-bar"
              style={{ background: "#fff", height: "40px", width: "220px" }}
            >
              <input
                type="range"
                min="500"
                max="2000"
                value={progress}
                onChange={handleProgressChange}
                style={{ backgroundColor: "#ff6900", width: "100%" }}
              />
            </div>

            <div>
              <label
                htmlFor="maxPrice"
                style={{ marginLeft: "5px", fontWeight: 600, fontSize: "15px" }}
              >
                Price:
              </label>
              <input
                type="number"
                id="maxPrice"
                name="max"
                value={maxPrice}
                onChange={handleFilterChange}
                style={{
                  marginLeft: "12px",
                  border: "1px solid #ff6900",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="collectionPageData">
              <h4
                style={{
                  marginTop: "25px",
                  marginLeft: "15px",
                  fontWeight: 600,
                }}
              >
                Our Collection
              </h4>
              {imageURL.map((coll) => {
                return (
                  <>
                    <ul>
                      <li
                        onClick={() => navigate(`/collection/${coll.url}`)}
                        className="collectionPageList"
                      >
                        {coll.Text}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
            <section className="main-card--container">
              {filteredProducts.map((product) => {
                return (
                  <>
                    <div className="card-container">
                      <Card className="card">
                        <div className="card-body">
                          <NavLink
                            to={`/cart/${product.id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <img
                              src={product.Img}
                              alt="images"
                              className="card-media"
                              onClick={() => send(product)}
                            />
                            <h4
                              className="card-title"
                              onClick={() => send(product)}
                            >
                              {product.title}
                            </h4>
                          </NavLink>
                          <span className="card-rating">{product.rating}</span>
                          <div className="card-price">{product.price}</div>
                        </div>
                      </Card>
                    </div>
                  </>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HairTopper;
