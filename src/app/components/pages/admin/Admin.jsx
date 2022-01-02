import React,{useContext} from "react";
import { Navigate } from "react-router-dom";
import NavigationContext from "../../context/navbar/NavigationContext";
import "./Admin.scss";
import CommonCard from "../../commons/Card";
import OpenShare from "./OpenShare";
import NoteContext from "../../context/Context";

function Admin() {
  const token = localStorage.getItem("token");


  const {totalBoughtAmount} = useContext(NoteContext);
  const {totalSoldAmount} = useContext(NoteContext);

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
                totalPrice={totalBoughtAmount}
                bgColor="bg-success"
              />
            </div>
            <div className="card__second">
              <CommonCard
                header="Sold Share"
                totalPrice={totalSoldAmount}
                bgColor="bg-danger"
              />
            </div>
          </div>
        </div>

    {totalBoughtAmount>totalSoldAmount?<p>loss</p>:<p>profit</p>}
    {totalBoughtAmount>totalSoldAmount?
    <p>Rs: {(totalBoughtAmount-totalSoldAmount).toLocaleString('en-US')}</p>:
    <p>Rs: {(totalSoldAmount-totalBoughtAmount).toLocaleString('en-US')}</p>}
    </div>
    </>
  );
}

export default Admin;
