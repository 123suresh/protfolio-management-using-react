import React from 'react';
import { Table } from 'react-bootstrap';
import Tables from '../../commons/Table';
import Navigation from './Navigation';
import {Navigate} from "react-router-dom";


function Admin() {

  const token = localStorage.getItem("token");

  let loggedIn = true;

  if (token == null) {
    loggedIn = false;
  }

  if (loggedIn === false) {
    return <Navigate form="/Admin" to="/" />;
  }


  return (
    <div className='admin'>
      <Navigation/>
    </div>
  )
}

export default Admin
