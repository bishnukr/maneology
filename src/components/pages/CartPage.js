import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { DLT, ADD, REMOVE } from "../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

const CartPage = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const history = useNavigate();

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };
  const dlt = (id) => {
    dispatch(DLT(id));
    history("/cart-empty");
  };
  //remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };
  return (
    <>
      <div className="container py-4">
        <div className="row">
          {getdata.map((data) => {
            return (
              <>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <p style={{ textAlign: "center" }}>Product</p>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                      <img
                        src={data.Img}
                        alt="body image"
                        style={{ width: "100px", marginLeft: "30px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                      <p style={{ fontSize: "18px", fontWeight: "600" }}>
                        {data.title}
                      </p>
                      <p>Color</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
                  <p>Quantity</p>

                  <div
                    className="mt-5 d-flex justify-content-between align-items-center mx-2 cartIncrease"
                    style={{
                      width: 100,
                      cursor: "pointer",
                      background: "#ddd",
                      border: "1px solid #ff6900",
                      borderRadius: "50px",
                      color: "#111",
                      marginBottom: "20px",
                      marginRight: "10px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{ fontSize: 24, marginLeft: "10px" }}
                      onClick={
                        data.qnty <= 1 ? () => dlt(data.id) : () => remove(data)
                      }
                    >
                      -
                    </span>
                    <span style={{ fontSize: 24 }}>{data.qnty}</span>
                    <span
                      style={{ fontSize: 24, marginRight: "10px" }}
                      onClick={() => send(data)}
                    >
                      +
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <p>Total</p>
                  <p
                    style={{ fontSize: "18px", fontWeight: "600" }}
                    className="cartTotal"
                  >
                    ₹ {data.price * data.qnty}
                  </p>
                </div>
              </>
            );
          })}
          <div className="row py-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex py-2 align-items-center justify-content-center">
              {getdata.map((data) => {
                return (
                  <button
                    style={{
                      background: "#ff6900",
                      border: "1px solid #ff6900",
                      borderRadius: "50px",
                      width: "160px",
                      height: "40px",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                    onClick={() => dlt(data.id)}
                  >
                    Remove
                  </button>
                );
              })}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex py-2 align-items-center justify-content-center">
              <Link to="/checkout">
                <button
                  style={{
                    background: "#ff6900",
                    border: "1px solid #ff6900",
                    borderRadius: "50px",
                    width: "160px",
                    height: "40px",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
