import React from "react";
import { Button } from "react-bootstrap";

function CommonButton({ btnName, variant, onClicked, disabled }) {
  return (
    <div>
      <Button variant={variant} disabled={disabled} onClick={onClicked}>
        {btnName}
      </Button>
    </div>
  );
}

export default CommonButton;
