import React, { useEffect, useState } from "react";
import NoteContext from "../Context";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import CommonButton from "../../commons/Button";
import "./NavigationContext.scss";

function NavigationContext() {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();
  function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/");
  }

  console.log(selected);

  useEffect(() => {
    setName(localStorage.getItem("name"));
  }, []);

  return (
    <NoteContext.Provider>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">
              <Link to="/admin" className="protfolio__color">
                Portfolio
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#" className="demo">
                  <Link 
                    to="/trasactionlist"
                    className={
                      window.location.pathname === "/trasactionlist"
                        ? "nav__link"
                        : "link__color"
                    }
                    onClick={(e) => {
                      setSelected(1);
                    }}
                  >
                    Transaction
                  </Link>
                </Nav.Link>
                <Nav.Link href="#">
                  <Link
                    to="/transaction"
                    className={
                      window.location.pathname === "/transaction"
                        ? "nav__link"
                        : "link__color"
                    }
                    onClick={() => {
                      setSelected(2);
                    }}
                  >
                    Buy/Sell
                  </Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">welcome {name}</Nav.Link>
                <CommonButton
                  btnName="logout"
                  variant="danger"
                  Onclicked={Logout}
                />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </NoteContext.Provider>
  );
}

export default NavigationContext;
