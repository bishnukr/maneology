import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { styled } from "@mui/material";

import { bannerData } from "../Constants/Data";

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  padding: 0,
  margin: 0,

  position: "inherit",

  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 260,
  },
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    height: 220,
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      slidesToSlide={1}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {bannerData?.map((data, index) => (
        <>
          <div key={index} style={{ position: "relative" }}>
            <Image
              src={data.url}
              alt="banner"
              style={{ display: "relative" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "150px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              <h1 style={{ color: "#fff", fontSize: "52px" }}>
                Get Longer Fuller Hair
              </h1>
              <p
                style={{ color: "#fff", fontSize: "22px", textAlign: "center" }}
              >
                Good Duplicate Hair{" "}
              </p>
            </div>
            <button
              className="bannerBtn"
              style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#000",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer",
              }}
            >
              Shop Now
            </button>
          </div>
        </>
      ))}
    </Carousel>
  );
};

export default Banner;
