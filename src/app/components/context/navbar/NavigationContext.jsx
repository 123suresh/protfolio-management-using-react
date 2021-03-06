import React, { useEffect, useState, useContext } from "react";
import NoteContext from "../Context";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CommonButton from "../../commons/Button";
import "./NavigationContext.scss";
import img from "../../images/marketBull.png";
import profileImg from "../../images/profile.png";
import { AuthContext } from "../auth-context/Authentication";
import jwt_decode from "jwt-decode";

function NavigationContext() {
  const { isAuthenticated } = useContext(AuthContext);

  const tokens = localStorage.getItem("token");
  const decoded = jwt_decode(tokens);
  const adminName = decoded.name;

  function Logout() {
    // localStorage.removeItem("token");
    // localStorage.removeItem("name");
    // navigate("/");
    isAuthenticated(false);
  }

  return (
    <NoteContext.Provider value="">
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <img
              src={img}
              width="60px"
              className="bull__image"
              alt="navigation logo"
            />
            <Link
              to="/admin"
              className={
                window.location.pathname === "/admin"
                  ? "nav__link"
                  : "link__color"
              }
            >
              Portfolio
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link
                  to="/trasactionlist"
                  className={
                    window.location.pathname === "/trasactionlist"
                      ? "nav__link"
                      : "link__color"
                  }
                >
                  Transaction
                </Link>

                <Link
                  to="/transaction"
                  className={
                    window.location.pathname === "/transaction"
                      ? "nav__link"
                      : "link__color"
                  }
                >
                  Buy/Sell
                </Link>
              </Nav>

              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  {adminName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="username__profile">
                    <p>Username : {adminName}</p>
                    <Dropdown.Divider />
                    <CommonButton
                      btnName="logout"
                      variant="danger"
                      onClick={Logout}
                    />
                  </div>
                </Dropdown.Menu>
              </Dropdown>

              <img
                src={profileImg}
                width="30px"
                className="profile__image"
                alt="profilelog"
              />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </NoteContext.Provider>
  );
}

export default NavigationContext;
