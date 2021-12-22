import React from 'react';
import { Row, Col, Toast } from "react-bootstrap";

function Toasts({showToast, setShowToast, sell_buy}) {
    return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <img
            //   src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Form Submitted</strong>
          </Toast.Header>
          <Toast.Body>Share is successfully {sell_buy}</Toast.Body>
        </Toast>
      </Col>
      {/* <Col xs={6}>
        <Button onClick={() => setShowToast(true)}>Show Toast</Button>
      </Col> */}
    </Row>
    )
}

export default Toasts;
