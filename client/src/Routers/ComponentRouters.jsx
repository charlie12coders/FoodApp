import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Restaurant from "../components/Restaurant/Restaurant";
import Cart from "../pages/Cart/Cart";
const ComponentRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/restaurant/:city/:title/:id" element={<Restaurant />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default ComponentRouters;
