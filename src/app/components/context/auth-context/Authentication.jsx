import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

function Authentication({ children }) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    localStorage.getItem("token") ? setAuth(true) : setAuth(false);
  }, []);

  const { REACT_APP_TOKEN } = process.env;

  const isAuthenticated = (state) => {
    state
      ? localStorage.setItem("token", `${REACT_APP_TOKEN}`)
      : localStorage.removeItem("token");
    setAuth(state);
  };

  return (
    <AuthContext.Provider value={{ auth, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Authentication;
