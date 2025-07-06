import React from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CSidebar from './Csidebar';
import Canvas from './Ccanvas';

const Visit = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", height: "100vh" }}>
        <CSidebar />
        <Canvas/>
      </div>
    </DndProvider>
  );
}

export default Visit