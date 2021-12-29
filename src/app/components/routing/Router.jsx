import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Admin from "../pages/admin/Admin";
import BuySellShare from "../shares/buy-sell/BuySellShare";
import TransactionList from "../shares/transactions/TransactionList";
import Error from "../pages/PageNotFound";

function Routers() {

    
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/transaction" element={<BuySellShare />} />
        <Route path="/trasactionlist" element={<TransactionList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default Routers;
