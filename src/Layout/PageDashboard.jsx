import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router";

import "./PageDashboard.css";

const PageDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-page-outer">
        <Outlet />
      </div>
    </div>
  );
};

export default PageDashboard;
