import React, { useState, useEffect } from "react";
import { Form, Table, Modal, Button } from "react-bootstrap";
import CommonButton from "../../commons/Button";
import Buttons from "../../commons/Button";
import CommonForm from "../../commons/Form";
import Toasts from "../../commons/Toast";
import getDate from "../../utils/Date";
import getTime from "../../utils/Time";
import "./BuySellShare.scss";

function BuySell({
  heading,
  urlSelect,
  shareTable,
  urlBuySell,
  toastText,
  headingClass,
  bodyClass,
  shareForm,
  btnName,
  Submit
}) {
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [company, setCompany] = useState("");
  const [secondData, setsecondData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showTable, setShowTable] = useState(false);

  function SaveUser() {
    if (amount !== "" && quantity !== "") {
      const displayDate= getDate();
      const displayTime = getTime();
      const data = { amount, quantity, company, displayDate, displayTime };
      fetch(`${urlBuySell}`, {
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
    fetch(`${urlSelect}`).then((result) => {
      result.json().then((resp) => {
        setsecondData(resp);
      });
    });
  }

  console.log({ urlSelect });

  function GetIndividualDatas(event) {
    const filtered = secondData.filter((el) => el.id == event.target.value);
    setSelectedData(filtered[0]);
    setCompany(filtered[0].company);
    setShowTable(true);
  }

  useEffect(() => {
    GetDatas();
  }, [urlSelect]);

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
            <Modal.Header closeButton> Submitted Share </Modal.Header>
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
              variant = "btn btn-danger"
                onClick={() => {
                  setShow(false);
                }}
              >
                Cancel
              </Button>
              <CommonButton btnName={btnName} 
              variant = "btn btn-success"
              Onclicked={SaveUser} />
            </Modal.Footer>
          </Modal>
        </form>
      </div>

      <div className="form__main">
        <div className={shareForm}>
          <div className={headingClass}>
            <p>{heading}</p>
          </div>
          <div className={bodyClass}>
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
              <CommonForm
                label="Amount"
                type="number"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                name="amount"
              />
              <div className="quantity">
                <CommonForm
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
            <div className="submit__button">
            <Button
              variant="btn btn-success"
              onClick={() => {
                setShow(true);
              }}
              disabled={!amount || !quantity || !company || amount<0 || quantity<0}
            >
              {Submit}
            </Button>
            </div>
          </div>
        </div>
      </div>

      {showTable ? (
        <div className="buyshare__table">
          <Table striped bordered hover>
            <thead>
              <tr>
                {shareTable ? (
                  <>
                    <th>Company</th>
                    <th>amount</th>
                    <th>quanatity</th>
                  </>
                ) : (
                  <>
                    <th>Low</th>
                    <th>High</th>
                    <th>Company</th>
                    <th>avgPrice</th>
                    <th>priceClose</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {shareTable ? (
                <>
                  <tr>
                    <td>{selectedData.company}</td>
                    <td>Rs: {selectedData.amount}</td>
                    <td>{selectedData.quantity}</td>
                  </tr>
                </>
              ) : (
                <>
                  <tr>
                    <td>Rs: {selectedData.low}</td>
                    <td>Rs: {selectedData.high}</td>
                    <td>{selectedData.company}</td>
                    <td>Rs: {selectedData.avgPrice}</td>
                    <td>Rs: {selectedData.priceClose}</td>
                  </tr>
                </>
              )}
            </tbody>
          </Table>
        </div>
      ) : (
        ""
      )}
      <Toasts
        showToast={showToast}
        setShowToast={setShowToast}
        sell_buy={toastText}
      />
    </div>
  );
}

export default BuySell;
