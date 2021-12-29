import React from "react";
import { Navigate } from "react-router-dom";
import NavigationContext from "../../context/navbar/NavigationContext";
import "./Admin.scss";
import CommonCard from "../../commons/Card";
import OpenShare from "./OpenShare";

function Admin() {
  const token = localStorage.getItem("token");

  let loggedIn = true;

  if (token == null) {
    loggedIn = false;
  }

  if (loggedIn === false) {
    return <Navigate form="/Admin" to="/" />;
  }

  return (
    <>
      <div className="admin">
        <NavigationContext />
        <div className="admin__container">
          <div className="openShare__table">
            <OpenShare />
          </div>

          <div className="card__main">
            <div className="card">
              <CommonCard
                header="Bought Share"
                totalPrice="Total Price  Rs: 11200"
                bgColor="bg-success"
              />
            </div>
            <div className="card__second">
              <CommonCard
                header="Sold Share"
                totalPrice="Total Price  Rs: 98470"
                bgColor="bg-danger"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
