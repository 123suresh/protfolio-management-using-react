import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Admin from "../pages/admin/Admin";
import BuySellShare from "../shares/buy-sell/BuySellShare";
import TransactionList from "../shares/transactions/TransactionList";
import Error from "../pages/PageNotFound";
import ShareTotal from "../context/profit-loss/ShareTotal";
import PrivateRoute from "../pages/private-route/PrivateRoute";
import Authentication from "../context/auth-context/Authentication";

function Routers() {
  return (
    <BrowserRouter>
      <Authentication>
        <ShareTotal>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route element={<PrivateRoute />}>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/transaction" element={<BuySellShare />} />
              <Route path="/trasactionlist" element={<TransactionList />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </ShareTotal>
      </Authentication>
    </BrowserRouter>
  );
}

export default Routers;
