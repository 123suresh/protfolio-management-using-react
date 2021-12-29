import React from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../commons/Button";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>404 Error Page not found</h3>
      <CommonButton
      onClicked={() => navigate(-1)}
      btnName='Go Back'
      />
    </div>
  );
};

export default Error;
