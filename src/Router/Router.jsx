import React from "react";
import { Route, Routes } from "react-router";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Visit from "../Page/Visit/Visit";
import PageDashboard from "../Layout/PageDashboard";
import Home from "../Page/Home/Home";
import Gallery from "../Page/Gallery/Gallery";

const Router = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>

      {/* private routes */}
      <Route path="/" element={<PageDashboard />}>
        <Route index element={<Home />} /> {/* default page */}
        <Route path="/visit" element={<Visit />} />
        <Route path="Gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
};

export default Router;
