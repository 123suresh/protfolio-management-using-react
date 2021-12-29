import React, { useState } from "react";
import { Switch } from "antd";
import "./BuySellShare.scss";
import BuySell from "./BuySell";
import NavigationContext from "../../context/navbar/NavigationContext";

function BuySellShare() {
  const [toggle, setToggle] = useState(false);

  const { REACT_APP_URL } = process.env;

  const toggler = () => {
    // toggle ? setToggle(false): setToggle(true);
    setToggle(!toggle);
  };

  
  return (
    <>
      <NavigationContext />
      <div className="transaction">
        <div className="transaction__toggle">
          <div className="switch">
            <Switch onClick={toggler} />
          </div>
          {toggle ? (
            <BuySell
              heading="Sell Share"
              urlSelect={`${REACT_APP_URL}/boughtShare`}
              // mode={toggle ? "sell" : "buy"}
              shareTable
              urlBuySell={`${REACT_APP_URL}/sellShare`}
              toastText="sold"
              headingClass="soldshare__heading"
              bodyClass="soldshare__body"
              shareForm="soldshare__form"
              btnName="Confirm"
              Submit="Sell"
            />
          ) : (
            <BuySell
              heading="Buy Share"
              urlSelect={`${REACT_APP_URL}/openCompanies`}
              urlBuySell={`${REACT_APP_URL}/boughtShare`}
              toastText="bought"
              headingClass="buyshare__heading"
              bodyClass="buyshare__body"
              shareForm="buyshare__form"
              btnName="Confirm"
              Submit="Buy"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default BuySellShare;
