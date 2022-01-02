import React,{useState} from "react";
import BoughtShareList from "./BoughtShareList";
import SoldShareList from "./SoldShareList";
import "./TransactionList.scss";
import { Dropdown } from "react-bootstrap";
import NavigationContext from "../../context/navbar/NavigationContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function TransactionList() {
  const[dropDown, setDropDown] = useState(false);
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
              <Dropdown.Item href="#">
              <Link to='' onClick={() => setDropDown(false)} className="dropdown__link">Bought Share</Link>
              </Dropdown.Item>
              <Dropdown.Item href="#">
              <Link to='' onClick={() => setDropDown(true)} className="dropdown__link">Sold Share</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          {dropDown?<SoldShareList />:<BoughtShareList />}
          
        </div>
      </div>
    </>
  );
}

export default TransactionList;
