import React from "react";
import {
  Button,
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate, useNavigate, Outlet, use } from "react-router-dom";
import Buttons from "../../commons/Button";

function Navigation() {


  const navigate = useNavigate();
  function Logout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">
              <Link to="/admin">Portfolio</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" >
              <Nav.Link href="#" className="demo">
                  <Link to="/trasactiondetails" className="nav__link">Transaction</Link>
                </Nav.Link>
                <Nav.Link href="#">
                  <Link to="/transaction" className="nav__link">Buy/Sell</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Welcome</Nav.Link>
                <Buttons btnName="logout" variant="danger" Onclicked={Logout} />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navigation;
