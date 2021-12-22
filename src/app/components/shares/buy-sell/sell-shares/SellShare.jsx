import React, { useState, useEffect } from "react";
import "./SellShare.scss";
import Forms from "../../../commons/Form";
import { Form, Table, Modal, Button } from "react-bootstrap";
import Buttons from "../../../commons/Button";
import Toasts from "../../../commons/Toast";

function SellShareTransaction() {
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [company, setCompany] = useState("");
  const [secondData, setsecondData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  function SaveUser() {
    if (amount !== "" && quantity !== "") {
      let data = { amount, quantity, company };
      fetch(`${process.env.REACT_APP_URL}/sellShare`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        console.warn("result", result);
        setShow(false);
        setAmount("");
        setQuantity("");
        setCompany("");
        setShowToast(true);
      });
    } else {
      alert("enter valid data");
    }
  }

  function GetDatas(data) {
    fetch(`${process.env.REACT_APP_URL}/boughtShare`).then((result) => {
      result.json().then((resp) => {
        setsecondData(resp);
      });
    });
  }

  function GetIndividualDatas(event) {
    const filtered = secondData.filter((el) => el.id == event.target.value);
    setSelectedData(filtered[0]);
    setCompany(filtered[0].company);
  }

  useEffect(() => {
    GetDatas();
  }, []);

  return (
    <div>
      <div>
        <form>
          <Modal
            show={show}
            onHide={() => {
              setShow(false);
            }}
          >
            <Modal.Header closeButton> Submitted Datas </Modal.Header>
            <Modal.Body>
              Company:{company}
              <br />
              Amount:{amount}
              <br />
              Quantity:{quantity}
              <br />
              {/* date:{date} */}
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => {
                  setShow(false);
                }}
              >
                Cancel
              </Button>
              <Buttons btnName="Sell" Onclicked={SaveUser} />
            </Modal.Footer>
          </Modal>
        </form>
      </div>

      <div>
        <div className="sellshare__form">
          <div className="sellshare__heading">
            <p>Sell Share</p>
          </div>
          <div className="sellshare__body">
            <label>
              <p>Select Company</p>
            </label>
            <Form.Select onChange={GetIndividualDatas} className="form__select">
              <option selected="true" disabled>
                select company
              </option>
              {secondData.map((el, i) => (
                <option key={el.id} value={el.id}>
                  {el.company}
                </option>
              ))}
            </Form.Select>
            <div className="amt__qty-main">
              <Forms
                label="Amount"
                type="number"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                name="amount"
              />
              <div className="quantity">
                <Forms
                  label="Quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  name="quantity"
                />
              </div>
            </div>
            <Button
              onClick={() => {
                setShow(true);
              }}
              disabled={!amount || !quantity}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>

      <div className="buyshare__table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Quantity</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedData.amount}</td>
              <td>{selectedData.quantity}</td>
              <td>{selectedData.company}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Toasts showToast={showToast} setShowToast={setShowToast} sell_buy="sold"/>
    </div>
  );
}

export default SellShareTransaction;
