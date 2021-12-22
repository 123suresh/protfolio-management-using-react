import React,{useState} from 'react';
import {Switch} from 'antd';
import BuyShare from './buy-shares/BuyShare';
import SellShare from './sell-shares/SellShare';
import './BuySellShare.scss';
import Navigation from '../../pages/admin/Navigation';

function BuySellShare() {
    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        // toggle ? setToggle(false): setToggle(true);
        setToggle(!toggle)
    }
    return (<>
    <Navigation/>
        <div className='transaction'>
                <div className="transaction-toggle">
                <div className="switch">
                <Switch onClick={toggler}/>
                </div>
                {toggle?<SellShare mode={toggle ? "sell" : "buy"}/>:<BuyShare/>}
                </div>
        </div>
        </>
    )
}

export default BuySellShare



