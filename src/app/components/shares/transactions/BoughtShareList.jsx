import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import "./TransactionList.scss";
import { BsFillPencilFill } from "react-icons/bs";
import CommonForm from "../../commons/Form";
import CommonButton from "../../commons/Button";
import getDate from "../../utils/Date";
import getTime from "../../utils/Time";

const { REACT_APP_URL } = process.env;

function BoughtShareList() {
  const [boughtShareData, setBoughtShareData] = useState([]);
  const [show, setShow] = useState(false);
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [emptyAmt, setEmptyAmt] = useState(false);
  const [emptyQty, setEmptyQty] = useState(false);

  useEffect(() => {
    getListBoughtShare();
  }, []);

  function getListBoughtShare() {
    fetch(`${REACT_APP_URL}/boughtShare`).then((results) => {
      results.json().then((resp) => {
        setBoughtShareData(resp);
        setCompany(resp[0].company);
        setQuantity(resp[0].quantity);
        setAmount(resp[0].amount);
        setCompanyId(resp[0].id);
      });
    });
  }

  function updateCall(id) {
    setShow(true);
    setCompany(boughtShareData[id - 1].company);
    setQuantity(boughtShareData[id - 1].quantity);
    setAmount(boughtShareData[id - 1].amount);
    setCompanyId(boughtShareData[id - 1].id);
  }

  function updateShare() {
    if (amount !== "" && quantity !== "") {
      const displayDate= getDate();
      const displayTime = getTime();
      const item = {
        company,
        quantity,
        amount,
        companyId,
        displayDate,
        displayTime,
      };
      fetch(`${REACT_APP_URL}/boughtShare/${companyId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }).then((result) => {
        result.json().then((resp) => {
          getListBoughtShare();
        });
      });
      setShow(false);
    } else {
      setEmptyAmt(true);
      setEmptyQty(true);
    }
  }

  return (
    <div className="bought__share-table">
      <h4>Bought Share</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Company</td>
            <td>Quantity</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Time</td>
            <td>Total Amount</td>
            <td>Edit</td>
          </tr>
        </thead>
        <tbody>
          {boughtShareData.map(
            ({ company, quantity, amount, displayDate, displayTime, id }) => (
              <tr key={id}>
                <td>{company}</td>
                <td>{quantity}</td>
                <td>Rs: {amount}</td>
                <td>{displayDate}</td>
                <td>{displayTime}</td>
                <td>Rs: {quantity * amount}</td>
                <td>
                  <span className="update__icon" onClick={() => updateCall(id)}>
                    <BsFillPencilFill />
                  </span>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>

      <div>
        <form>
          <Modal
            show={show}
            onHide={() => {
              setShow(false);
            }}
          >
            <Modal.Header closeButton> Edit Share </Modal.Header>
            <Modal.Body>
              <CommonForm label="Company" value={company} />
              <CommonForm
                label="Quantity"
                value={quantity}
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <p className="emptyValue">{emptyAmt ? "Enter Quantity" : ""}</p>
              <CommonForm
                label="Amount"
                value={amount}
                type="number"
                onChange={(e) => setAmount(e.target.value)}
              />
              <p className="emptyValue">{emptyQty ? "Enter Amount" : ""}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='btn btn-danger'
                onClick={() => {
                  setShow(false);
                }}
              >
                Cancel
              </Button>
              <CommonButton btnName="Confirm" 
              variant='btn btn-success'
              Onclicked={updateShare} 
              disabled={!amount || !quantity || !company || amount<0 || quantity<0}
              />
            </Modal.Footer>
          </Modal>
        </form>
      </div>
    </div>
  );
}

export default BoughtShareList;
