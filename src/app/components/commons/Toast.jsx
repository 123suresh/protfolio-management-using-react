import React from "react";
import { Row, Col, Toast, ToastContainer } from "react-bootstrap";

function CommonToast({ showToast, setShowToast, sell_buy }) {
  const position = 'top-end';
  return (
    <ToastContainer position={position}>
    <Row>
      <Col xs={12}>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          position={position}
        >
          <Toast.Header>
            <img
              //   src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Form Submitted</strong>
          </Toast.Header>
          <Toast.Body className="bg-dark text-white">Share is successfully {sell_buy}</Toast.Body>
        </Toast>
      </Col>
      {/* <Col xs={6}>
        <Button onClick={() => setShowToast(true)}>Show Toast</Button>
      </Col> */}
    </Row>
    </ToastContainer>
  );
}

export default CommonToast;
