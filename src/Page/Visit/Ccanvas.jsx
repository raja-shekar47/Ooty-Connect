import React, { useState } from "react";
import { useDrop } from "react-dnd";

const Canvas = () => {
  const [items, setItems] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => addElement(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addElement = (item) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <div
      ref={drop}
      style={{
        flex: 1,
        padding: "10px",
        background: isOver ? "#e0ffe0" : "#fafafa",
        minHeight: "100vh",
      }}
    >
      <h3>Canvas</h3>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "8px",
            margin: "4px",
            border: "1px solid #ccc",
            background: "#fff",
          }}
        >
          {item.type === "button" && <button>Button</button>}
          {item.type === "label" && <span>Label</span>}
          {item.type === "card" && (
            <div style={{ border: "1px solid black", padding: "8px" }}>
              Card Content
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
