import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import UploadImage from "../UploadImage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [items, setItems] = useState([" "]);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [userDetails, setUserDetails] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  function handleEdit() {
    navigate("/customer/account/profile/edit");
  }

  const handleUpdate = () => {
    if (name !== "" && email !== "" && mobile !== "") {
      const newItem = { name, email, mobile };
      setItems([items, newItem]);
      setName("");
      setMobile("");
      setEmail("");
    }
  };
  // useEffect(() => {
  //   const temp_data = localStorage.getItem("token");
  //   const redata = JSON.parse(atob(temp_data.split(".")[1])).userExits;

  //   const data = {
  //     name: redata.first_name + " " + redata.last_name,
  //     email: redata.email,
  //     mobile: redata.phone,
  //   };
  //   setUserDetails(data);
  // }, []);

  // console.log(items);

  return (
    <>
      <div className="container py-4">
        <div className="row">
          {/* <div className="col-12 col-sx-12 col-md-12 col-lg-3 col-xl-3">
            <div className="row">
              <div className="col-12 col-sx-12 col-md-12 col-lg-12 col-xl-12">
                <div className="userprofile">
                  <img src={UserImg} alt="" style={{ width: "30%" }} />
                  <p className="title">Bishnu Kumar</p>
                  <p>bishnukr44@gmail.com</p>
                </div>
              </div>
              <div className="col-12 col-sx-12 col-md-12 col-lg-12 col-xl-12">
                <Link
                  to="/customer/account/profile/edit"
                  style={{ textDecoration: "none" }}
                >
                  <AiOutlineUser style={{ fontSize: "25px", color: "#000" }} />
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      cursor: "pointer",
                      color: "#000",
                    }}
                  >
                    Profile
                  </p>
                </Link>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  <BsCardChecklist style={{ fontSize: "25px" }} />
                  Orders
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineHeart style={{ fontSize: "25px" }} />
                  Wishlist
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineWallet style={{ fontSize: "25px" }} />
                  Wallet
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineWallet style={{ fontSize: "25px" }} />
                  Address
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  <BsArrowLeftRight style={{ fontSize: "25px" }} />
                  Cancel order
                </p>
              </div>
            </div>
          </div> */}

          <div className="col-12 col-sx-12 col-md-12 col-lg-9 col-xl-9">
            <h3>Profile</h3>

            <Table style={{ border: "1px solid #000" }}>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Name</td>
                  <td style={{ border: "1px solid #000" }}>
                    {userDetails?.name}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Gender</td>
                  <td style={{ border: "1px solid #000" }}>Male</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Date Of Birth</td>
                  <td style={{ border: "1px solid #000" }}>19-09-1997</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Mobile No.</td>
                  <td style={{ border: "1px solid #000" }}>
                    {userDetails?.mobile}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Email</td>
                  <td style={{ border: "1px solid #000" }}>
                    {userDetails?.email}
                  </td>
                </tr>
              </tbody>
            </Table>
            <div>
              <Button
                variant="dark"
                style={{ width: "90px", height: "45px" }}
                className="userprofile_button"
                onClick={handleEdit}
                // Profile={Profile}
              >
                Edit
              </Button>
              <Button
                variant="dark"
                style={{ width: "90px", height: "45px", margin: "20px" }}
                className="userprofile_button"
                onClick={() => navigate("/login")}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
        <div className="row mx-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 checkout-contact">
            <h5>Profile</h5>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Select>
              <option>Select Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </Form.Select>

            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
            />

            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <p>Upload Image</p>
            <UploadImage />

            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
            <Button
              variant="dark"
              style={{ width: "90px", height: "45px" }}
              className="userprofile_button"
              onClick={handleUpdate}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
