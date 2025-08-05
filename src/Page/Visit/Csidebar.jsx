import React from "react";
import DraggableItem from "./DraggableItem";

const CSidebar = () => {
  return (
    <div style={{ width: "200px", padding: "10px", background: "#f0f0f0" }}>
      <h3>Components</h3>
      <DraggableItem type="button">Button</DraggableItem>
      <DraggableItem type="label">Label</DraggableItem>
      <DraggableItem type="card">Card</DraggableItem>
    </div>
  );
};

export default CSidebar;
