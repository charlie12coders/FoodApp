import React from "react";
import { Route, Routes } from "react-router-dom";
import ComponentRouters from "./ComponentRouters";
const Routers = () => {
  return (
    <Routes>
      <Route path="/*" element={<ComponentRouters />} />
    </Routes>
  );
};

export default Routers;
