import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import blog1 from "../../images/blogs.jpg";
import blog2 from "../../images/blogs.jpg";
import blog3 from "../../images/blogs.jpg";

const News = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 col-sm-8 col-md-12 col-lg-12 py-2">
            <h3
              className="py-3 mx-3"
              style={{ fontWeight: "600", textAlign: "center" }}
            >
              <span style={{ color: "#ff6900" }}>Latest </span> News
            </h3>
          </div>
        </div>
        <div
          className="row newsBlog"
          style={{ marginLeft: "10%", marginRight: "10%" }}
        >
          <div className="col-8 col-sm-8 col-md-6 col-lg-4">
            <Card style={{ width: "18rem", height: "12rem" }} className="mx-3">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Title style={{ color: "#939393", textAlign: "start" }}>
                  Unusual FAQ's Nish Hair Edition
                </Card.Title>
                <Card.Text>
                  Curious about hair extensions? Uncover the truths
                  behindnpopular myths and get answers to your most eccentric
                  questions in our latest blog post.
                </Card.Text>
                <span className="" style={{ color: "#939393" }}>
                  Read More
                </span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-8 col-sm-8 col-md-6 col-lg-4">
            <Card style={{ width: "18rem", height: "100px" }} className="mx-3">
              <Card.Img variant="top" src={blog2} />
              <Card.Body>
                <Card.Title style={{ color: "#939393" }}>
                  Why Clip-ins & Halo Hair Extensions
                </Card.Title>
                <Card.Text>
                  Hair extensions have been around for ages, and have become an
                  essential part of the beauty routine for many women,
                  especially
                </Card.Text>
                <span className="" style={{ color: "#939393" }}>
                  Read More
                </span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-8 col-sm-8 col-md-6 col-lg-4">
            <Card style={{ width: "18rem", height: "100px" }} className="mx-3">
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title style={{ color: "#939393" }}>
                  What Are Halo Hair Extensions?
                </Card.Title>
                <Card.Text>
                  So many different hair extension types to choose from
                  nowadays. Halo hair extensions are a fairly newer type that
                  has taken the hairextension industry by storm.
                </Card.Text>
                <span className="" style={{ color: "#939393" }}>
                  Read More
                </span>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* <section className="home-wrapper-7 py-4 mx-4">
        <div className="container-xxl">
          <h3 className="home-text py-1 col-12 col-md-12 col-lg-12 col-xl-12 mx-2">
            Latest News
          </h3>
        </div>
        <div className="container-xxl mx-2  py-4  d-flex justify-content-center">
          <div className="row">
            <div className=" col-12 col-md-4 col-lg-4 col-xl-4">
              <div className="card mx-40">
                <img className="blog1" src={blog1} alt="blog1" id="img1" />

                <span className="py-2" style={{ color: "#939393" }}>
                  July 16 2023
                </span>
                <h5 className="py-2" style={{ color: "#939393" }}>
                  Unusual FAQ's Nish Hair Edition{" "}
                </h5>
                <p className="blog-para">
                  Curious about hair extensions? Uncover the truths behind
                  popular myths and get answers to your most eccentric questions
                  in our latest blog post. From airport security checks to a
                  swim...
                </p>
                <span className="" style={{ color: "#939393" }}>
                  Read More
                </span>
              </div>
            </div>
            <div className=" col-12 col-md-4 col-lg-4 col-xl-4">
              <div className="card mx-4">
                <img className="blog1" src={blog2} alt="blog2" />
                <span style={{ color: "#939393" }} className="py-2">
                  July 16 2023
                </span>
                <h5 className="py-2" style={{ color: "#939393" }}>
                  Hair Extension 101: Why Clip-ins and Halo Hair Extensions are
                  The Best!{" "}
                </h5>
                <p className="blog-para">
                  Hair extensions have been around for ages, and have become an
                  essential part of the beauty routine for many women,
                  especially those in the glam and entertainment industry. From
                  clip-ins,...
                </p>
                <span className="" style={{ color: "#939393" }}>
                  Read More
                </span>
              </div>
            </div>
            <div className=" col-12 col-md-4 col-lg-4 col-xl-4">
              <div className="card mx-4">
                <img className="blog1" src={blog3} alt="blog3" />
                <span className="py-2" style={{ color: "#939393" }}>
                  July 16 2023
                </span>
                <h5 className="py-2" style={{ color: "#939393" }}>
                  What Are Halo Hair Extensions And Why Do You Need Them In Your
                  Life{" "}
                </h5>
                <p className="blog-para">
                  so many different hair extension types to choose from
                  nowadays. Halo hair extensions are a fairly newer type that
                  has taken the hair extension industry by storm.
                </p>
                <span className="" style={{ color: "#939393" }}>
                  Read More
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default News;
