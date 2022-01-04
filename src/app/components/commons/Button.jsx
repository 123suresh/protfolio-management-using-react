import React from "react";
import { Button, Spinner } from "react-bootstrap";

function CommonButton({ btnName, variant, onClick, disabled, spinner }) {
  return (
    <div>
      <Button variant={variant} disabled={disabled} onClick={onClick}>
        {btnName}
        {spinner && (
          <Spinner animation="border" role="status" size="sm">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Button>
    </div>
  );
}

export default CommonButton;
