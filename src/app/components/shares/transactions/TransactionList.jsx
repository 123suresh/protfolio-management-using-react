import React,{useState} from "react";
import Navigation from "../../pages/admin/Navigation";
import BoughtShareList from "./BoughtShareList";
import SoldShareList from "./SoldShareList";
import "./TransactionList.scss";
import { Dropdown } from "react-bootstrap";

function TransactionList() {

  return (
    <>
      <Navigation />
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
