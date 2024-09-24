import React, { useEffect, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import Search from "./Search";
import Cart from "../cart.gif";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import Logo from "../images/mylogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { DLT, ADD, REMOVE } from "../redux/actions/action";
import ThemeChanger from "./ThemeChanger";

const Header = () => {
  const [price, setPrice] = useState(0);
  console.log(price);
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };
  const remove = (item) => {
    dispatch(REMOVE(item));
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
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
      <div className="container-fluid">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Link to="/" className="logo">
              <img
                src={Logo}
                alt=""
                style={{ width: "55px", height: "55px" }}
              />
            </Link>
            <Navbar.Brand>
              <Search />
            </Navbar.Brand>

            {/* <Navbar.Brand
              href="#home"
              style={{ color: "#ff6900", fontWeight: 600 }}
            >
              Member
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto menu-link">
                <NavDropdown
                  title="Shop"
                  id="basic-nav-dropdown"
                  style={{ color: "#ff6900", fontWeight: 600 }}
                  className="list"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/hair-toppers"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/hair-toppers"
                      style={{
                        textDecoration: "none",
                        color: "#ff6900",
                      }}
                    >
                      Hair Topper
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/all-things-hair"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/all-things-hair"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      {" "}
                      All Things Hair{" "}
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/strandouts"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/strandouts"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Strandouts
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/clip-in-bangs"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/clip-in-bangs"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Clip In Bangs
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/wigs"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/wigs"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Wigs
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/hair-extension"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/hair-extension"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Hair Extension
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/accessories"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/accessories"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Accessories
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/halo-hair"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/halo-hair"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Halo Hair
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Link
                  to="/help-me"
                  style={{
                    color: "#000",
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "10px",
                  }}
                >
                  Help Me
                </Link>
                <Link
                  to="/about-us"
                  style={{
                    color: "#000",
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "10px",
                  }}
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  style={{
                    color: "#000",
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "10px",
                  }}
                >
                  Contact Us
                </Link>

                <NavDropdown
                  title={<AiOutlineUserAdd />}
                  id="basic-nav-dropdown"
                  style={{ color: "#ff6900", fontWeight: 600 }}
                  className="list"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/login"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Login
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/logout"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/halo-hair"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Logout
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Link
                  to="/login"
                  style={{
                    color: "#000",
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "10px",
                  }}
                >
                  Login
                </Link> */}
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand to="/" className="cart">
              {" "}
              <Badge
                badgeContent={getdata.length}
                color="warning"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{ color: "#000" }}
              >
                <BsCartFill color="#ff6900" size="30px" />
              </Badge>
            </Navbar.Brand>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {getdata.length ? (
                <div
                  className="card_details"
                  style={{ width: "24rem", padding: 10 }}
                >
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Products</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink to={`/cart/${e.id}`}>
                                  <img
                                    src={e.Img}
                                    style={{ width: "7rem", height: "8rem" }}
                                    alt=""
                                  />
                                </NavLink>
                              </td>
                              <td>
                                <p>{e.title}</p>
                                <p>Price : {e.price}</p>
                                <p>Quantity {e.qnty}</p>

                                <div
                                  className="mt-5 d-flex justify-content-between align-items-center increaseProducts mx-2"
                                  style={{
                                    width: 100,
                                    cursor: "pointer",
                                    background: "#ddd",
                                    border: "1px solid #ff6900",
                                    borderRadius: "50px",
                                    color: "#111",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <span
                                    style={{ fontSize: 24, marginLeft: "10px" }}
                                    onClick={
                                      e.qnty <= 1
                                        ? () => dlt(e.id)
                                        : () => remove(e)
                                    }
                                  >
                                    -
                                  </span>
                                  <span style={{ fontSize: 24 }}>{e.qnty}</span>
                                  <span
                                    style={{
                                      fontSize: 24,
                                      marginRight: "10px",
                                    }}
                                    onClick={() => send(e)}
                                  >
                                    +
                                  </span>
                                </div>

                                <p
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                  onClick={() => dlt(e.id)}
                                >
                                  <i className="fas fa-trash smalltrash"></i>
                                </p>
                              </td>
                              <td
                                className="mt-5"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(e.id)}
                              >
                                <i className="fas fa-close largeclose"></i>
                              </td>
                            </tr>
                            <tr>
                              {/* <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  {" "}
                                  <NavLink to={`/cart/${e.id}`}>
                                    <Button
                                      style={{
                                        background: "#ff6900",
                                        color: "#fff",
                                        border: "1px solid #ff6900",

                                        width: "90px",
                                      }}
                                    >
                                      View Cart
                                    </Button>
                                  </NavLink>
                                </div>
                              </td> */}
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <NavLink to="/checkout">
                                    <Button
                                      style={{
                                        background: "#ff6900",
                                        color: "#fff",
                                        border: "1px solid #ff6900",
                                      }}
                                    >
                                      Checkout
                                    </Button>
                                  </NavLink>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                      <p className="text-center">Total : ₹ {price}</p>
                    </tbody>
                  </Table>
                </div>
              ) : (
                <div
                  className="card_details d-flex justify-content align-center"
                  style={{ width: "24rem", padding: 10, position: "relative" }}
                >
                  <AiOutlineClose
                    onClick={handleClose}
                    style={{
                      position: "absolute",
                      top: 2,
                      right: 20,
                      fontSize: 23,
                      cursor: "pointer",
                      className: "badgeClose",
                    }}
                  />
                  <p style={{ fontSize: 16 }}>Your Cart is Empty</p>
                  <img
                    src={Cart}
                    alt=""
                    className="emptycart_img"
                    style={{
                      width: "5rem",
                      padding: 10,
                      height: "80px",
                      marginLeft: 80,
                    }}
                  />
                </div>
              )}
            </Menu>
            <ThemeChanger />
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
