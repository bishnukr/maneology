import React, { useState, useEffect, useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FinalOrder from "../FinalOrder";
import Login from "../Login";
import { DataContext } from "../../context/authContext";
import Empty from "./Empty";

const Checkout = () => {
  const [empty, setEmpty] = useState();
  const [modalShow, setModalShow] = useState(false);
  const getdata = useSelector((state) => state.cartreducer.carts);
  const [price, setPrice] = useState(0);
  const [logindata, setLoginData] = useState([]);
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const { accountStatus } = useContext(DataContext);

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Purchase = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };

  // const userlogout = ()=>{
  //     localStorage.removeItem("user_login")
  //     history("/");
  // }

  useEffect(() => {
    Purchase();
  }, []);

  const total = () => {
    let price = 0;
    getdata.map((ele) => {
      price = ele.price * ele.qnty + price;
      console.log(price);
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      {!accountStatus ? (
        <Login />
      ) : (
        <>
          <div className="container-fluid">
            <div className="row py-2 mx-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-7 checkout-contact">
                <h5>Contact</h5>
                <input type="text" placeholder="Email or Phone Mobile Number" />
                <p>plese</p>
                <h5>Shipping Address</h5>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <input type="text" placeholder="First name" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <input type="text" placeholder="Last name" />
                  </div>
                </div>
                <input type="text" placeholder="Apartment, suit, etc." />
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <input type="text" placeholder="City " />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <input type="text" placeholder="Pin Code " />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <input type="text" placeholder="State " />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <input type="text" placeholder="Country " />
                  </div>
                </div>

                <div className="row py-4">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <p
                        className="checkoutReturn"
                        style={{
                          color: "#ff6900",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        <AiOutlineArrowLeft />
                        Return to Cart
                      </p>
                    </Link>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
                    <button
                      // style={{
                      //   background: "#ff6900",
                      //   border: "1px solid #ff6900",
                      //   borderRadius: "50px",
                      //   width: "180px",
                      //   height: "50px",
                      //   color: "#fff",
                      //   fontSize: "16px",
                      //   fontWeight: "600",
                      // }}
                      className="checkoutBtn"
                      onClick={() => setModalShow(true)}
                    >
                      Continue to Shipping
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5"
                style={{ background: "#ff6900" }}
              >
                <div className="row">
                  {getdata.map((data) => {
                    return (
                      <>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 py-2">
                          <img
                            src={data.Img}
                            alt="checkout img"
                            style={{ width: "90px", height: "80px" }}
                          />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 py-3">
                          <p>{data.title}</p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 py-3">
                          <span>Rs. {data.price * data.qnty}</span>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="row py-4">
                  <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 ">
                    <input
                      type="text"
                      placeholder="  Gift Card or Discount Code"
                      className="discountField"
                      style={{
                        width: "280px",
                        height: "40px",
                        border: "1px solid #fff",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <button
                      className="applyCodeBtn"
                      style={{
                        background: "#C0C0C0",
                        border: "1px solid #ff6900",
                        borderRadius: "5px",
                        width: "85px",
                        height: "40px",
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className="row">
                    <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                      <p>Subtotal</p>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                      <p style={{ fontWeight: 600, fontSize: "18px" }}>
                        ₹ {price}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                      <p>Shipping</p>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                      <p>Free</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                      <p style={{ fontWeight: 600, fontSize: "18px" }}>Total</p>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                      <p
                        className=""
                        style={{ fontWeight: 600, fontSize: "18px" }}
                      >
                        ₹ {price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row py-4">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <p
                      className="checkoutReturn2"
                      style={{
                        color: "#ff6900",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      <AiOutlineArrowLeft />
                      Return to Cart
                    </p>
                  </Link>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
                  <button
                    style={{
                      background: "#ff6900",
                      border: "1px solid #ff6900",
                      borderRadius: "50px",
                      width: "180px",
                      height: "50px",
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    className="checkoutBtn2"
                    onClick={() => setModalShow(true)}
                  >
                    Continue
                  </button>

                  <FinalOrder
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Checkout;
