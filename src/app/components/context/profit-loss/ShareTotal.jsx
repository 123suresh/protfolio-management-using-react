import React,{useState, useEffect} from 'react'
import getRequest from '../../services/GetRequest';
import NoteContext from '../Context';

function ShareTotal({children}) {
    const [totalBoughtAmount, setTotalBoughtAmount] = useState(0);
    const [totalSoldAmount, setTotalSoldAmount] = useState(0);

    const { REACT_APP_URL } = process.env;

    useEffect(() => {
      boughtShareTotalProfit();
    },[])

    function boughtShareTotalProfit(){
      const url = `${REACT_APP_URL}/boughtShare`;
      getRequest(url).then((results) => {
        results.json().then((resp) => {
            boughtAmountMap(resp);
        });
      });

      const soldUrl = `${REACT_APP_URL}/sellShare`;
      getRequest(soldUrl).then((results) => {
        results.json().then((respSold) => {
          soldAmountMap(respSold);
        });
      });
    }
    
    const boughtAmountMap = (resp) => {
        const boughtTotalAmount = resp.reduce(
            (previousScore, {amount, quantity}) => +previousScore + +amount*quantity,
        0)
        setTotalBoughtAmount(boughtTotalAmount);
    }

    const soldAmountMap = (respSold) => {
      const soldTotalAmount = respSold.reduce(
          (previousScore, {amount, quantity}) => +previousScore + +amount*quantity,
      0)
      setTotalSoldAmount(soldTotalAmount);
  }


    return (
    <NoteContext.Provider value={{totalBoughtAmount, totalSoldAmount}}>
      {children}
    </NoteContext.Provider>
    );
    
}

export default ShareTotal;
