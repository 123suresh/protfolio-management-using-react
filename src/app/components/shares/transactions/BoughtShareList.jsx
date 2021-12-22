import React,{useState, useEffect} from 'react';
import {Table, Modal, Button} from "react-bootstrap";
import Buttons from '../../commons/Button';
import './TransactionList.scss';
import {GrDocumentUpdate} from "react-icons/gr";

const {REACT_APP_URL} = process.env;

function BoughtShareList() {

    const [boughtShareData, setBoughtShareData] = useState([]);
    const[show, setShow] = useState(false);
    const[company, setCompany] = useState('');
    const[quantity, setQuantity] = useState('');
    const[amount, setAmount] = useState('');
    const[companyId, setCompanyId] = useState('');


    useEffect(() => {
        getListBoughtShare();
      }, []);
    
  function getListBoughtShare() {
    fetch(`${REACT_APP_URL}/boughtShare`).then((results) => {
      results.json().then((resp) => {
        setBoughtShareData(resp);
        setCompany(resp[0].company)
        setQuantity(resp[0].quantity)
        setAmount(resp[0].amount)
        setCompanyId(resp[0].id)
      });
    });
  }

  function updateCall(id){
    setShow(true);
    setCompany(boughtShareData[id-1].company)
    setQuantity(boughtShareData[id-1].quantity)
    setAmount(boughtShareData[id-1].amount)
    setCompanyId(boughtShareData[id-1].id)
  }

  function updateShare(){
    const item = {company, quantity, amount,companyId}
    fetch(`${REACT_APP_URL}/boughtShare/${companyId}`,{
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        getListBoughtShare()
      })
    })
    setShow(false);
  }


    return (
        <div className='bought__share-table'>
            <h4>Bought Share</h4>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <td>Company</td>
                    <td>Quantity</td>
                    <td>Amount</td>
                </tr>
                </thead>
                <tbody>
                    {
                        boughtShareData.map(({company, quantity, amount, id}) => 
                        <tr key={id}>
                            <td>{company}</td>
                            <td>{quantity}</td>
                            <td>{amount}</td>
                            <td><button onClick={() =>updateCall(id)}><span className='update__icon'><GrDocumentUpdate/></span></button></td>
                        </tr>
                        )
                    }
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
            <Modal.Header closeButton> Update Datas </Modal.Header>
            <Modal.Body>
              <input type='text' value={company} onChange={(e) => setCompany(e.target.value)}/><br/>
              <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)}/><br/>
              <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => {
                  setShow(false);
                }}
              >
                Cancel
              </Button>
              {/* <Buttons btnName="Buy"/> */}
              <button onClick={updateShare}>update share</button>
            </Modal.Footer>
          </Modal>
        </form>
      </div>
        </div>
        
    )
}


export default BoughtShareList
