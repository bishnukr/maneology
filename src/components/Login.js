import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authenticatesLogin } from "../service/api";
import { useContext } from "react";
import { DataContext } from "../context/authContext";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
// import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Card, Image } from "react-bootstrap";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");
  const { setAccountStatus } = useContext(DataContext);
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  // const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    console.log(e.target.value);
    const { value, name } = e.target;
    console.log(value, name);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      setAccountStatus(true);
      authenticatesLogin({ username: email, password: password });

      history("/checkout");
    }
  };

  const responseFacebook = (response) => {
    setData(response);
    setPicture(response.picture.data.url);
    // if (response.accessToken) {
    //   setLogin(true);
    // } else {
    //   setLogin(false);
    // }
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <h4 style={{ textAlign: "center" }} className="py-4">
            CUSTOMER LOGIN
          </h4>
          <ToastContainer />
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Registered User</h3>
            <hr />
            <p style={{ textAlign: "center" }}>Sign In With</p>
            <div className="icon-container">
              <div className="icon-wrapper">
                <GoogleLogin
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                <FaGoogle style={{ fontSize: "28px" }} className="googleIcon" />
              </div>
              {!login && (
                <>
                  <div className="icon-wrapper">
                    <FaFacebook
                      style={{ fontSize: "28px" }}
                      appId="562118384400275"
                      autoLoad={true}
                      fields="name,email,picture"
                      scope="public_profile"
                      callback={responseFacebook}
                      className="fbIcon"
                    />
                  </div>
                </>
              )}
              {login && <Image src={picture} roundedCircle />}
            </div>
            <br />
            <hr />

            <p style={{ textAlign: "center" }}>Or Sign In With Email Id</p>

            <div className="form-group mt-3">
              <label>Email </label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={getdata}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={getdata}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn"
                style={{
                  background: "#ff6900",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
                onClick={addData}
              >
                Submit
              </button>
            </div>
            <div className="d-flex">
              <p className="forgot-password text-right mt-2">
                Forgot{" "}
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#ff6900" }}
                >
                  password?
                </Link>
              </p>
              <p className="signup-your-account mt-2">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "#ff6900" }}
                >
                  Signup Your Account
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
