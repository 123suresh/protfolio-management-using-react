import React from "react";
import BoughtShareList from "./BoughtShareList";
import SoldShareList from "./SoldShareList";
import "./TransactionList.scss";
import { Dropdown } from "react-bootstrap";
import NavigationContext from "../../context/navbar/NavigationContext";
import { Navigate } from "react-router-dom";

function TransactionList() {
  const token = localStorage.getItem("token");

  let loggedIn = true;

  if (token == null) {
    loggedIn = false;
  }

  if (loggedIn === false) {
    return <Navigate form="/trasactionlist" to="/" />;
  }
  return (
    <>
      <NavigationContext />
      <div className="transaction__detail">
        <div className="dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              All Transaction
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">All Transaction</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Bought Share</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sold Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <BoughtShareList />
        </div>
        <div>
          <SoldShareList />
        </div>
      </div>
    </>
  );
}

export default TransactionList;
