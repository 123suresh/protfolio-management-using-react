import React from 'react';
import {Button} from "react-bootstrap";

function Submit({submitClicked, variant}) {
    return (
        <div>
         <Button variant={variant} type="submit" onClick={submitClicked}>
          Submit
        </Button>
        </div>
    )
}

export default Submit
