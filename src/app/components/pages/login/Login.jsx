import React, { useState, useContext } from "react";
import CommonForm from "../../commons/Form";
import Submit from "../../commons/Submit";
import "./Login.scss";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context/Authentication";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  const [userNameErr, setUserNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const { isAuthenticated, auth } = useContext(AuthContext);

  const loginName = "Suresh";
  const loginPassword = "admin123";

  const submitForm = (e) => {
    e.preventDefault();
    if (username === loginName && password === loginPassword) {
      // localStorage.setItem("token", `${REACT_APP_TOKEN}`);
      // localStorage.setItem("name", username);
      // setLoggedIn(true);
      isAuthenticated(true);
    } else {
      if (username !== loginName) {
        setUserNameErr(true);
      }
      if (password !== loginPassword) {
        setPasswordErr(true);
      }
      setUsername("");
      setPassword("");
    }
  };

  function passHandler(e) {
    const { value } = e.target;
    e.preventDefault();
    setPassword(value);
  }

  // if (loggedIn || localStorage.getItem("token")) {
  //   return <Navigate form="/" to="/admin" />;
  // } else {
  //   <Navigate to="/" />;
  // }

  if (auth) return <Navigate to="/admin" />;

  return (
    <div className="login__main">
      <div className="login__form-main">
        <div className="member__login">
          <p>MEMBER LOGIN</p>
        </div>
        <div className="login__form">
          <form onSubmit={submitForm}>
            <CommonForm
              label="Username"
              placeholder="Enter Username"
              type="text"
              name={username}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              formClassName="form__control"
            />
            <div className="wrong__validation">
              {userNameErr ? <p>Enter Valid Username</p> : ""}
            </div>
            <div className="password_field">
              <CommonForm
                label="Password"
                placeholder="Enter Password"
                type="password"
                name={password}
                value={password}
                onChange={passHandler}
                formClassName="form__control"
              />
            </div>
            <div className="wrong__validation">
              {passwordErr ? <p>Enter Valid Password</p> : ""}
            </div>
            <div className="login__submit">
              <Submit variant="warning" submitName="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
