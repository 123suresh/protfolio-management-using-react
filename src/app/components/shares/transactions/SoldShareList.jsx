import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function SoldShareList() {
  const [soldShare, setSoldShare] = useState([]);

  const { REACT_APP_URL } = process.env;

  useEffect(() => {
    getListSoldShare();
  }, []);

  function getListSoldShare() {
    fetch(`${REACT_APP_URL}/sellShare`).then((results) => {
      results.json().then((resp) => {
        setSoldShare(resp);
      });
    });
  }

  const getTotal = (quantity, amount) => quantity * amount;

  return (
    <div className="sold__share-table">
      <h4>Sold Share</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Company</td>
            <td>Quantity</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Time</td>
            <td>Total Amount</td>
          </tr>
        </thead>
        <tbody>
          {soldShare.map(
            ({ id, company, quantity, amount, displayDate, displayTime }) => {
              return (
                <>
                  <tr key={id}>
                    <td>{company}</td>
                    <td>{quantity}</td>
                    <td>Rs: {amount}</td>
                    <td>{displayDate}</td>
                    <td>{displayTime}</td>
                    <td>Rs: {getTotal(quantity, amount)}</td>
                  </tr>
                </>
              );
            }
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default SoldShareList;
