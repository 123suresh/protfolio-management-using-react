import React from "react";
import { Button } from "react-bootstrap";

function CommonButton({ btnName, variant, onClick, disabled }) {
  return (
    <div>
      <Button variant={variant} disabled={disabled} onClick={onClick}>
        {btnName}
      </Button>
    </div>
  );
}

export default CommonButton;
