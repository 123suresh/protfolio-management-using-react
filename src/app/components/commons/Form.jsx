import React from "react";
import { Form } from "react-bootstrap";
import "./Form.scss";

function CommonForm({
  label,
  placeholder,
  type,
  name,
  value,
  defaultValue,
  onChange,
  readOnly,
  formClassName,
}) {
  return (
    <div className="common__form">
      <Form.Group>
        <Form.Label>
          <p>{label}</p>
        </Form.Label>
        <Form.Control
          className={formClassName}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          readOnly={readOnly}
        />
      </Form.Group>
    </div>
  );
}

export default CommonForm;
