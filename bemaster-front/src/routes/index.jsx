import React from 'react';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Login from '../components/container/Login';
import Register from '../components/container/Register';
import Acces from '../components/container/Acces';
import Details from '../components/component/Detail';
import UserOrAdmin from '../components/component/UserOrAdmin';



function Rutas() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/home/details/:id" element={<Details />} />
        <Route path="/home" element={<UserOrAdmin/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/acces" element={<Acces />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas;
