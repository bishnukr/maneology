import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Cardsdata from "./CardsData";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { DISPLAY } from "../redux/actions/action";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { Box, Typography, styled, Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
// import Countdown from "react-countdown";
// import Img from "../../images/Clipinbangs1.png";
import { productsData } from "../Constants/ProductsData";
import "react-multi-carousel/lib/styles.css";
import { NavLink, useParams } from "react-router-dom";
// import clock from "../../clock.png";
// import { Link } from "react-router-dom";

const Component = styled(Box)`
  margin-top: 10px;
  background: #fff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;
// const Timer = styled(Box)`
//   display: flex;
//   margin-left: 10px;
//   align-items: center;
//   color: #fff;
//   background: #ff6900;
//   padding: 2px 10px;
//   border-radius: 2px;
//   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
//   margin-left: 5px;
// `;
const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;

  line-height: 40px;
  text-align: center;
`;
// const ViewAllButton = styled(Button)`
//   background-color: #ff6900;
//   border-radius: 50px;
//   font-size: 13px;
//   width: 10%;
//   height: 40px;
//   font-weight: 600;
//   margin-left: 840px;
// `;
// const Text = styled(Typography)`
//   font-size: 14px;
//   margin-top: 10px;
//   top: 15px;
//   align-items: "center";
//   text-align: "center";
//   width: "100%";
// `;
const Text = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  marginTop: "10px",
  top: "15px",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    textAlign: "center",
    fontSize: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    textAlign: "center",
    fontSize: "20px",
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// const Image = styled("img")({
//   width: "120%",
//   position: "relative",
//   display: "flex",
//   paddingLeft: "20px",
//   paddingRight: "20px",
// });
const Image = styled("img")(({ theme }) => ({
  width: "120%",
  objectFit: "cover",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 320,
    width: "120%",
  },
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    height: "70%",
    width: "120%",
    color: "#ff6900",
  },
}));
const Saaa = styled(Box)(({ theme }) => ({
  // width: "120%",
  // position: "relative",
  // display: "flex",
  paddingLeft: "20px",
  paddingRight: "20px",
  margin: "0px 30px",
  [theme.breakpoints.down("sm")]: {
    height: "500px",
    width: "100%",
    margin: "0px 10px",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  [theme.breakpoints.down("md")]: {
    height: "auto",
    width: "100%",
    margin: "0px 10px",
  },
}));
const Cards = () => {
  const [data, setData] = useState(productsData);
  const { id } = useParams();
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(DISPLAY(e));
  };

  const getdata = useSelector((state) => state.cartreducer.display);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <h2 className="text-center"> </h2>
        <div className="row d-flex justify-content-center align-items-center">
          <Component>
            <Deal>
              <DealText>
                <h2
                  style={{
                    width: 240,
                    fontWeight: 600,
                    textAlign: "center",
                    color: "#ff6900",
                  }}
                  className="multiproduct-text"
                >
                  Our Best Products
                </h2>
              </DealText>

              {/* <ViewAllButton
                variant="contained"
                sx={{
                  ":hover": {
                    bgcolor: "#000",
                    color: "white",
                  },
                }}
              >
                View All
              </ViewAllButton> */}
            </Deal>
            <Divider />
            <Carousel
              responsive={responsive}
              swipeable={true}
              draggable={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              centerMode={true}
              showDots={false}
              arrows={true}
              dotListClass="custom-dot-list-style"
              itemClass="custom-carousel-item"
              containerClass="custom-carousel-container"
            >
              {data.map((data, id) => {
                return (
                  <div class="hover-wishlist">
                    <Saaa
                      key={id}
                      // className="cardOverlay"
                    >
                      <div className="hide">
                        <AiFillHeart
                          style={{ fontSize: "25px", color: "#ff6900" }}
                        />
                        <AiOutlineHeart style={{ fontSize: "25px" }} />
                      </div>

                      <NavLink to={`/cart/${data.id}`}>
                        <Image
                          src={data.Img}
                          alt="product"
                          onClick={() => send(data)}
                          className="cardImage"
                          style={{ cursor: "pointer" }}
                          // style={{
                          //   width: 320,
                          //   justifyContent: "space-between",
                          //   display: "flex",
                          // }}
                        />
                      </NavLink>
                      {/* <div className="overlay">ADD TO CART</div> */}
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#212121",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => send(data)}
                      >
                        {data.title}
                      </Text>
                      <Text style={{ color: "#ff6900", textAlign: "center" }}>
                        ₹ {data.price} /-
                      </Text>
                      {/* <Text style={{ color: "#212121", opacity: ".6" }}>
                      {data.desc}
                    </Text> */}
                    </Saaa>
                  </div>
                );
              })}
            </Carousel>
          </Component>
        </div>
      </div>
    </>
  );
};

export default Cards;
