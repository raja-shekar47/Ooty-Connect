import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: "8px",
        margin: "4px 0",
        border: "1px solid gray",
        cursor: "move",
        background: "#fff",
      }}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
