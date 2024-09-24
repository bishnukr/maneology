import React from "react";
import Card from "react-bootstrap/Card";

const Address = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-4 col-xl-4">
            <h2>Address</h2>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Subtitle className="mb-2">Bishnu Kumar</Card.Subtitle>
                <Card.Text>
                  Baruwatand, Station Road, Tupkadih, Bokaro, Jharkhand, India,
                  827010
                </Card.Text>
                <Card.Link
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#ff6900",
                    fontWeight: 600,
                  }}
                >
                  Edit
                </Card.Link>
                <Card.Link
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#ff6900",
                    fontWeight: 600,
                  }}
                >
                  Delete
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h4>Change Address</h4>
          </div>
        </div>
        <div className="row checkout-contact">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <input type="text" placeholder="First name" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <input type="text" placeholder="Last name" />
          </div>
        </div>
        <div className="row checkout-contact">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <input type="text" placeholder="Apartment, suit, etc." />
          </div>
        </div>
        <div className="row checkout-contact">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <input type="text" placeholder="City " />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <input type="text" placeholder="Pin Code " />
          </div>
        </div>
        <div className="row checkout-contact">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <input type="text" placeholder="State " />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <input type="text" placeholder="Country " />
          </div>
        </div>
        <div className="row">
          <div>
            <button
              style={{
                color: "#ff6900",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
                border: "1px solid #ff6900",
                borderRadius: "25px",
                background: "#ff6900",
                color: "#fff",
                width: "150px",
                height: "50px",
                marginTop: "10px",
              }}
            >
              Save Address
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
