import React from "react";
import { Card } from "react-bootstrap";

function CommonCard({ header, cardTitle, totalPrice, bgColor }) {
  return (
    <div>
      <Card className={bgColor} text="white" style={{ width: "12rem" }}>
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Title> {cardTitle} </Card.Title>
          <Card.Text>Total Price Rs:{totalPrice.toLocaleString('en-US')}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CommonCard;
