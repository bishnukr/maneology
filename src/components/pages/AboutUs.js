import React from "react";
import Marquees from "./Marquees";
import aboutImg from "../../images/hairbelt4.JPG";
import BigImages1 from "../../images/bigimages1.jpg";
import BigImages2 from "../../images/bigimages2.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row py-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
              <h1
                style={{
                  marginTop: "40px",
                  fontWeight: "600",
                  fontSize: "44px",
                }}
              >
                About Us
              </h1>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
              <p style={{ marginTop: "50px" }}>ＯＵＲ ＳＴＯＲＹ</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-2  d-flex align-items-center justify-content-center">
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "32px",
                }}
                className="about-heading"
              >
                Maneology is a product of love. A love for beauty, quality and
                strength. A love for hair weaves and a love for all those who
                wear them.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-2  d-flex align-items-center justify-content-center">
              <p style={{ textAlign: "center" }}>
                We believe that to truly love a piece of hair extension means to
                utilize every inch of it, to empower those who spend on it{" "}
                <br /> and to honour those who craft it.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 py-2">
            <img
              src={aboutImg}
              alt="aboutus"
              style={{ height: "500px", width: "100%" }}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 py-4 ">
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "600",
                marginTop: "30px",
                margin: "30px 20px",
              }}
            >
              THE STORY OF MANEOLOGY
            </h3>
            <p style={{ marginTop: "10px", margin: "30px 20px" }}>
              Maneology, founded in 2023, emerged from a deep passionand love
              for hair. We recognized the unmet demand for high-quality human
              hairextensions beyond the boundaries of the fashion and beauty
              industry. Ourmission was clear: to provide accessibility and
              versatility to everyone,especially women, seeking beauty,
              confidence, and a stunning appearance.
            </p>
            <p style={{ marginTop: "5px", margin: "25px 20px" }}>
              We became pioneers in India, introducing DIY hairextensions,
              including clip-in hair toppers. Starting with a small team and
              ahandful of clients, we have grown into a global community,
              serving womenworldwide from diverse backgrounds and
              lifestyles.Hair loss, thinning, and damaged hair can have a
              profoundimpact on self-esteem and overall well-being. Sadly, many
              suffer in silence. At Maneology Hair, we understand the
              seriousness of these concerns. Whether you desirelonger locks,
              struggle with hair growth, or simply want to look incredible fora
              special occasion, we believe that everyone deserves the hair of
              their dreams.It's about more than just your appearance—it's about
              self-esteem,relationships, career, and the ability to live an
              active life.
            </p>
          </div>
        </div>

        <div className="row " style={{ marginTop: "40px" }}>
          <div className="col-12 col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 aboutpara2">
            <h3 style={{ margin: "20px 20px", fontWeight: "600" }}>
              We started Maneology Hair with one GOAL
            </h3>
            <p style={{ margin: "20px 20px" }}>
              To empower you with love, confidence, and dream-worthy hair,
              turning your aspirations into stunning realities.
            </p>
            <h4 style={{ margin: "20px 20px", fontWeight: "600" }}>
              Our customers are at the core of everything we do.{" "}
            </h4>
            <p style={{ margin: "20px 20px" }}>
              We are devoted to providing excellence in every aspect. Offering a
              diverse range of 100% human hair extensions, along with premium
              accessories, we ensure you find the perfect style, texture, and
              size for your dream hair. Our curated collection includes wigs,
              hair toppers, extensions, colorful strands, and clip-in bangs,
              making us your ultimate destination. With expert advice and
              convenient delivery to your doorstep, we strive to be your trusted
              hair companion. As a growing team led by empowered women, we stand
              for gender equality, fostering open-mindedness, courage,
              compassion, and belief in our community's potential.
            </p>
            <button className="collectionBtn">SEE COLLECION</button>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 aboutus2">
            <img
              src={BigImages1}
              alt="about"
              style={{ marginTop: "30px", width: "100%" }}
            />
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <img
              src={BigImages2}
              alt="founder speaks"
              style={{ width: "100%" }}
            />
          </div>
          <div
            className="col-12 col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
            style={{ marginTop: "80px" }}
          >
            <span style={{ margin: "20px 20px" }}>FOUNDER SPEAK</span>

            <h4 style={{ margin: "20px 20px", fontWeight: "600" }}>
              Charlie DeWayne
            </h4>
            <p style={{ margin: "10px 20px" }}>
              It wasn't easy starting something on my own. Especially in a
              category that waseither seen as a mere fashion accessory or spoken
              about in hush voices to avoidgarnering attention. I remember
              struggling to simply build awareness about how‘normal’ it could be
              to use hair extensions. Most saw them as a taboo topic,
              anequivalent to wigs or simply shrugged off the idea in disgust.
              But I knew fromthe time I wore my first set of extensions that I
              loved them and could clearlysee in them the potential to help
              thousands. To me, hair extensions were a wayof spreading joy,
              building confidence and celebrating freedom in one of themost
              basic ways possible. I wear mine with a lot of pride and want to
              ensurethat all those who wear them do the same.
            </p>
          </div>
        </div>
        {/* <div className="row py-4">
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center"
            style={{ background: "#ff6900", height: "100px" }}
          >
            <Marquees style={{ width: "100%" }} />
          </div>
        </div> */}
        <div className="row py-4" style={{ marginTop: "20px" }}>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  ">
            <img
              src="https://i.pinimg.com/564x/61/f2/56/61f256cd65f3bd8593f7a69fc543a803.jpg"
              alt="mainImage"
              style={{ width: "100%" }}
            />
            <h3 style={{ margin: "20px 20px", fontWeight: "600" }}>
              Maneology Hair Extensions
            </h3>
            <p style={{ margin: "10px 20px" }}>
              While the Maneology Hair range has grown and expanded into
              creating all things hair, the heart and soul of the brand remains
              our range of premium quality human hair extensions.Each extension
              is made with 100% human hair, hand selected and stitched to
              perfection. We believe in practicing integrity, honesty and
              quality in all that we do, making sure that each process from
              sourcing to production is done in a clean, safe and ethical
              manner. Being passionate about hair and understanding the
              confidence it can instill, we have meticulously crafted each step
              to ensure the extensions you get are premium quality, soft and
              extremely long lasting.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            {/* <img
              src="https://nishhair.com/cdn/shop/files/Screenshot_2023-01-09_at_5.39.44_PM_814x_crop_center.png?v=1673266205"
              alt="workers"
              style={{ height: "560px", margin: "20px 20px" }}
            /> */}
            <br />
            <h3 style={{ margin: "20px 20px", fontWeight: "600" }}>
              Building The Maneology Hair Team
            </h3>
            <p style={{ margin: "20px 20px" }}>
              We are a brand made for women by women, and 90% of our team is
              women! We nurture a culture of inclusivity and respect, reward
              hard work and value open mindedness, courage, compassion and a
              belief in the limitless potential of all.What began as a dream of
              one and team of two with Parul and her mother stitching each piece
              of hair extensions themselves, has now grown into a high
              performing and dynamic family. Our core team works out of a small
              yet cozy office cum manufacturing space in Mumbai where creativity
              and hair always take centre stage. There is always something to do
              and what we love most is that we do it with flair.
            </p>
            <p style={{ margin: "20px 20px" }}>Get In Touch</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
