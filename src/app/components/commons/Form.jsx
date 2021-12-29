import React from "react";
import { Form } from "react-bootstrap";
import "./Form.scss";

function CommonForm({ label, placeholder, type, name, value, onChange }) {
  return (
    <div className="Form">
      <Form>
        <Form.Group className="" controlId="formBasicEmail">
          <Form.Label>
            <p>{label}</p>
          </Form.Label>
          <Form.Control
            className="form__control"
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default CommonForm;
