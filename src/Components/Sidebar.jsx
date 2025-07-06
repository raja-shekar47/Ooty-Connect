import React from "react";
import "./Sidebar.css";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/Register");
  };

  return (
    <div className="sidebar">
      <h2>Ooty Connect 🌄</h2>
      <a href="#">🏠 Home</a>
      <a href="#">📸 Add Post</a>
      <a href="#">🧍 Profile</a>
      <a href="#">❤️ Liked Posts</a>
      <a href="#">🔗 Shared</a>
      <a href="#" onClick={handleSignOut}>📍 Places to Visit</a>
      <a href="#">📝 About</a>

      <br />
      <br />
      <br />
      <Button label={"Sign Out"} onClick={handleSignOut} />
    </div>
  );
};

export default Sidebar;
