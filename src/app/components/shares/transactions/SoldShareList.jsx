import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import getRequest from "../../services/GetRequest";

function SoldShareList() {
  const [soldShare, setSoldShare] = useState([]);

  const { REACT_APP_URL } = process.env;

  useEffect(() => {
    getListSoldShare();
  }, []);

  function getListSoldShare() {
    const url = `${REACT_APP_URL}/sellShare`;
    getRequest(url).then((results) => {
      results.json().then((resp) => {
        setSoldShare(resp);
      });
    });
  }

  return (
    <div className="sold__share-table">
      <h4>Sold Share</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Company</td>
            <td>Quantity</td>
            <td>Amount</td>
            <td>Date and Time</td>
            <td>Total Amount</td>
          </tr>
        </thead>
        <tbody>
          {soldShare.map(
            ({ id, company, quantity, amount, displayDateTime }) => {
              return (

                  <tr key={id}>
                    <td>{company}</td>
                    <td>{quantity}</td>
                    <td>Rs: {amount}</td>
                    <td>{displayDateTime}</td>
                    <td>Rs: {(quantity*amount).toLocaleString('en-US')}</td>
                  </tr>
              );
            }
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default SoldShareList;
