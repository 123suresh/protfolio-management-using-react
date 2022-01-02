import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import getRequest from "../../services/GetRequest";
import "./Admin.scss";

function OpenShare() {
  const [openShareData, setOpenShareData] = useState([]);

  const { REACT_APP_URL } = process.env;

  useEffect(() => {
    getList();
  }, []);

  function getList() {
    const url = `${REACT_APP_URL}/openCompanies`;
    getRequest(url).then((result) => {
      result.json().then((resp) => {
        setOpenShareData(resp);
      });
    });

  }

  return (
    <>
      <div className="openShare-table">
        <h5>Open companies</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Company</th>
              <th>Low</th>
              <th>High</th>
              <th>Avg. Price</th>
              <th>Price Close</th>
            </tr>
          </thead>
          <tbody>
            {openShareData.map(
              ({ id, company, low, high, avgPrice, priceClose }) => (
                <tr key={id}>
                  <td>{company}</td>
                  <td>Rs: {low}</td>
                  <td>Rs: {high}</td>
                  <td>Rs: {avgPrice}</td>
                  <td>RS: {priceClose}</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default OpenShare;
