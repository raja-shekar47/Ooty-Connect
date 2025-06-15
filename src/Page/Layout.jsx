import React from "react";
import Button from "../Components/Button/Button";
import { Outlet, useNavigate } from "react-router-dom";


const Layout = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  return (
    <div className="main-page">
      <Button label="Sign Out" onClick={handleSignOut} />
      <Outlet />
    </div>
  );
};

export default Layout;
