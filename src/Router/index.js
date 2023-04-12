import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Screens";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routers;
