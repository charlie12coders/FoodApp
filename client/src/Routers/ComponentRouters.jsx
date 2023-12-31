import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Restaurant from "../components/Restaurant/Restaurant";
import NavBar from "../components/Navbar/NavBar";
const ComponentRouters = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurant/:city/:title/:id" element={<Restaurant />} />
      </Routes>
    </div>
  );
};

export default ComponentRouters;
