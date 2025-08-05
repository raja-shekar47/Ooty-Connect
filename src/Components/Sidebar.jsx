import React from "react";
import "./Sidebar.css";
import Button from "./Button/Button";
import { useNavigate, Link } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/Register");
  };

  return (
    <div className="sidebar">
      <h2>Ooty Connect 🌄</h2>
      <div>
        <Link to="/">🏠 Home</Link>
        <Link to="/add-post">📸 Add Post</Link>
        <Link to="/profile">🧍 Profile</Link>
        <Link to="/liked">❤️ Liked Posts</Link>
        <Link to="/shared">🔗 Shared</Link>
        <Link to="/Gallery">🔗 Gallery</Link>
      </div>

      <br />
      <br />
      <br />
      <Button label={"Sign Out"} onClick={handleSignOut} />
    </div>
  );
};

export default Sidebar;
