import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Quests from "../pages/Quests";
import Shop from "../pages/Shop";
import Login from "../pages/Login/Login";
import Management from "../pages/Management";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/quests" element={<Quests />} />
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/management" element={<Management />} />
    </Routes>
  );
}

export default AppRoutes;
