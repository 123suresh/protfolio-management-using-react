import React from "react";
import { Button } from "react-bootstrap";

function CommonSubmit({ submitClicked, variant, submitName }) {
  return (
    <div>
      <Button variant={variant} type="submit" onClick={submitClicked}>
        {submitName}
      </Button>
    </div>
  );
}

export default CommonSubmit;
