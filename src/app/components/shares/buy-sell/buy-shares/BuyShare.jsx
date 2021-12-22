import React, { useState, useEffect } from "react";
import { Form, Table, Modal, Button} from "react-bootstrap";
import Buttons from "../../../commons/Button";
import Forms from "../../../commons/Form";
import "./BuyShare.scss";
import Toasts from "../../../commons/Toast";

function BuyShareTransaction() {
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [company, setCompany] = useState("");
  const [secondData, setsecondData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [show, setShow] = useState(false);


  const [showToast, setShowToast] = useState(false);

  const {REACT_APP_URL} = process.env;
  
  function SaveUser() {
    if (amount !== "" && quantity !== "") {
      let data = { amount, quantity, company };
      fetch(`${REACT_APP_URL}/boughtShare`, {
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
    fetch(`${REACT_APP_URL}/openCompanies`).then((result) => {
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
              <Buttons btnName="Buy" Onclicked={SaveUser} />
            </Modal.Footer>
          </Modal>
        </form>
      </div>

      <div className="buyshare__form">
        <div className="buyshare__heading">
          <p>Buy Share</p>
        </div>
        <div className="buyshare__body">
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
          varient="secondary"
            onClick={() => {
              setShow(true);
            }}
            disabled={!amount || !quantity} 
          >
            Submit
          </Button>
        </div>
      </div>

      <div className="buyshare__table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Low</th>
              <th>High</th>
              <th>Company</th>
              <th>Avg Price</th>
              <th>Price close</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedData.low}</td> 
              <td>{selectedData.high}</td>
              <td>{selectedData.company}</td>
              <td>{selectedData.avgPrice}</td>
              <td>{selectedData.priceClose}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Toasts showToast={showToast} setShowToast={setShowToast} sell_buy="bought"/>
    </div>
  );
}

export default BuyShareTransaction;
