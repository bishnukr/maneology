import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { DLT, REMOVE } from "../redux/actions/action";

const FinalOrder = (props) => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const history = useNavigate();
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/cart-empty");
  };

  const remove = (item) => {
    dispatch(REMOVE(item));
  };

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
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {getdata.map((data) => {
            return (
              <>
                <div className="row">
                  <div className="col-12 col-sx-12 col-sm-12 col-lg-12 col-xl-12 d-flex">
                    <img
                      src={data.Img}
                      alt="final img"
                      style={{ width: "100px", height: "120px" }}
                    />
                    <div className="col-12 col-sx-12 col-sm-12 col-lg-12 col-xl-12 mx-2">
                      <h5>{data.title}</h5>
                      <p>Total Quantity : {data.qnty}</p>
                      <p>Color: {data.color}</p>
                      <p>Price : ₹{data.price}</p>
                    </div>
                  </div>
                  <hr className="solid" />
                </div>
              </>
            );
          })}
          <hr className="solid" style={{ borderTop: "10px solid #bbb" }} />
          <p style={{ fontSize: "20px", fontWeight: "600" }}>
            Total Price : ₹{price}
          </p>
          <p>
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
              Address :
            </span>{" "}
            <br />
            Name: - Bishnu Kumar <br /> Mobile No. -9123248063 <br /> Station
            road, Tupkadih, Bokaro, Jharkhand - 827010{" "}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={props.onHide}
            style={{
              background: "#ff6900",
              border: "1px solid #ff6900",
            }}
          >
            Cencel
          </Button>
          <Link to="/thankyou">
            {getdata.map((data) => {
              return (
                <Button
                  style={{
                    background: "#ff6900",
                    border: "1px solid #ff6900",
                  }}
                  onClick={() => dlt(data.id)}
                >
                  Checkout
                </Button>
              );
            })}
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FinalOrder;
