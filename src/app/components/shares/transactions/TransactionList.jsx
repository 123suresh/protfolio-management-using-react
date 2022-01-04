import React, { useState } from "react";
import BoughtShareList from "./BoughtShareList";
import SoldShareList from "./SoldShareList";
import "./TransactionList.scss";
import { Dropdown } from "react-bootstrap";
import NavigationContext from "../../context/navbar/NavigationContext";
import { Navigate } from "react-router-dom";

function TransactionList() {
  const [dropDown, setDropDown] = useState(false);
  const [dropdownTitle, setDropdownTitle] = useState("Bougth");
  const token = localStorage.getItem("token");

  let loggedIn = true;

  if (token == null) {
    loggedIn = false;
  }

  if (loggedIn === false) {
    return <Navigate form="/trasactionlist" to="/" />;
  }

  const handleBoughtDropdown = () => {
    setDropDown(false);
    setDropdownTitle("Bougth");
  };

  const handleSoldDropdown = () => {
    setDropDown(true);
    setDropdownTitle("Sold");
  };

  return (
    <>
      <NavigationContext />
      <div className="transaction__detail">
        <div className="dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {dropdownTitle}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#"
                // onClick={() => setDropDown(false)}
                onClick={handleBoughtDropdown}
                className="dropdown__link"
              >
                Bought Share
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                // onClick={() => setDropDown(true)}
                onClick={handleSoldDropdown}
                className="dropdown__link"
              >
                Sold Share
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>{dropDown ? <SoldShareList /> : <BoughtShareList />}</div>
      </div>
    </>
  );
}

export default TransactionList;
