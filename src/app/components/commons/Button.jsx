import React from 'react';
import {Button} from "react-bootstrap";

function Buttons({btnName, variant, Onclicked, disabled}) {
    return (
        <div>
            <Button variant={variant} disabled={disabled} onClick={Onclicked}>{btnName}</Button>
        </div>
    )
}

export default Buttons;
