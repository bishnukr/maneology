import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserImg from "../../images/product7.jpg";
import { AiOutlineUser, AiOutlineHeart, AiOutlineWallet } from "react-icons/ai";
import { BsArrowLeftRight, BsCardChecklist } from "react-icons/bs";
import Profile from "./Profile";
import Orders from "./Orders";
import WishlistPage from "./WishlistPage";
import CancelOrder from "../CancelOrder";
import Wallet from "../Wallet";
import Address from "../Address";

const UserProfile = (props) => {
  const navigate = useNavigate();
  const [isProfile, setIsProfile] = useState(true);
  const [isOrder, setIsOrder] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);
  const [isWallet, setIsWallet] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  const [isCancelOrder, setIsCancelOrder] = useState(false);

  const handleProfile = (event) => {
    setIsProfile(true);
    setIsWishlist(false);
    setIsOrder(false);
    setIsCancelOrder(false);
    setIsWallet(false);
    setIsAddress(false);
  };
  const handleOrder = (event) => {
    setIsOrder(true);
    setIsProfile(false);
    setIsWishlist(false);
    setIsCancelOrder(false);
    setIsWallet(false);
    setIsAddress(false);
  };
  const handleWishlist = (event) => {
    setIsWishlist(true);
    setIsOrder(false);
    setIsProfile(false);
    setIsCancelOrder(false);
    setIsWallet(false);
    setIsAddress(false);
  };
  const handleWallet = (event) => {
    setIsWallet(true);
    setIsWishlist(false);
    setIsOrder(false);
    setIsProfile(false);
    setIsCancelOrder(false);
    setIsAddress(false);
  };
  const handleAddress = () => {
    setIsAddress(true);
    setIsWallet(false);
    setIsWishlist(false);
    setIsOrder(false);
    setIsProfile(false);
    setIsCancelOrder(false);
  };
  const handleCancelOrder = (event) => {
    setIsCancelOrder(true);
    setIsOrder(false);
    setIsProfile(false);
    setIsWishlist(false);
    setIsWallet(false);
    setIsAddress(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sx-12 col-md-12 col-lg-3 col-xl-3">
          <div className="row">
            <div className="col-12 col-sx-12 col-md-12 col-lg-12 col-xl-12">
              <div className="userprofile">
                <img src={UserImg} alt="" style={{ width: "30%" }} />
                <p className="title">Bishnu Kumar</p>
                <p style={{ paddingBottom: "15px" }}>bishnukr44@gmail.com</p>
              </div>
            </div>
            <div className="col-12 col-sx-12 col-md-12 col-lg-12 col-xl-12">
              <div onClick={handleProfile}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: "#000",
                  }}
                >
                  <AiOutlineUser style={{ fontSize: "25px", color: "#000" }} />{" "}
                  Profile{" "}
                </p>
              </div>
              <div onClick={handleOrder}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <BsCardChecklist style={{ fontSize: "25px" }} /> Orders
                </p>
              </div>
              <div onClick={handleWishlist}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineHeart style={{ fontSize: "25px" }} /> Wishlist
                </p>
              </div>
              <div onClick={handleWallet}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineWallet style={{ fontSize: "25px" }} /> Wallet
                </p>
              </div>
              <div onClick={handleAddress}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineWallet style={{ fontSize: "25px" }} /> Address
                </p>
              </div>
              <div onClick={handleCancelOrder}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  <BsArrowLeftRight style={{ fontSize: "25px" }} /> Cancel order
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sx-12 col-md-12 col-lg-9 col-xl-9">
          {isOrder ? <Orders /> : null}
          {isProfile ? <Profile /> : null}
          {isWishlist ? <WishlistPage /> : null}
          {isWallet ? <Wallet /> : null}
          {isAddress ? <Address /> : null}
          {isCancelOrder ? <CancelOrder /> : null}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
