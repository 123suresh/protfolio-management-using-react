import React,{useState, useEffect} from 'react';
import {Table} from "react-bootstrap";

function SoldShareList() {

    const [soldShare, setSoldShare] = useState([]);

    useEffect(() => {
        getListSoldShare();
      }, []);
    
  function getListSoldShare() {
    fetch("http://localhost:3000/sellShare").then((results) => {
      results.json().then((resp) => {
        setSoldShare(resp);
      });
    });
  }

    return (
        <div>
          <h4>Sold Share</h4>
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
                        soldShare.map((item) => 
                        <tr key={item.id}>
                            <td>{item.company}</td>
                            <td>{item.quantity}</td>
                            <td>{item.amount}</td>
                        </tr>
                        )
                    }
                </tbody>
                </Table>
        </div>
    )
}

export default SoldShareList
