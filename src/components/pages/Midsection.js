import { Grid, styled, Typography, Link } from "@mui/material";
import React from "react";
import { imageURL } from "../../Constants/Data";
import SingleBanner from "../../images/SingleBanner.jpg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Grid)`
  margin-top: 10px;
  justify-content: space-between;
`;
const Image = styled("img")(({ theme }) => ({
  marginTop: 10,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    height: 120,
  },
}));

// const Grid = styled("img")(({ theme }) => ({
//   width: "100%",
//   display: "flex",
//   justifyContent: "space-between",
//   [theme.breakpoints.down("md")]: {
//     objectFit: "cover",
//   },
// }));

const MidSection = () => {
  const navigate = useNavigate();
  // const url =
  //   "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Image src={SingleBanner} alt="covid" width="100%" />
      <h3 style={{ textAlign: "center", fontWeight: 600, marginTop: "30px" }}>
        <span style={{ color: "#ff6900" }}>Our </span>Collection
      </h3>
      <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {imageURL?.map((ele, index) => (
          <Grid
            item
            lg={3}
            md={3}
            sm={12}
            xs={12}
            key={index}
            onClick={() => navigate(`/collection/${ele.url}`)}
          >
            <img
              src={ele.Img}
              alt="mid"
              style={{
                width: "90%",
                height: "auto",
                margin: "0 auto",
                cursor: "pointer",
                display: "block",
                marginTop: "20px",
              }}
            />
            <Typography
              style={{
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              <span
                style={{
                  color: "#808080",
                  cursor: "pointer",
                  textDecoration: "none",
                  margin: "0 0 20px 0",
                  marginTop: "20px",
                }}
              >
                {ele.Text}
              </span>
            </Typography>
          </Grid>
        ))}
      </Wrapper>
    </>
  );
};

export default MidSection;
