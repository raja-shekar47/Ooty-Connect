import { useState } from "react";
import GallerySidebar from "./GallerySidebar";
import GalleryMainSection from "./GalleryMainSection";

import "./Gallery.css";

const Gallery = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    setDroppedItems((prev) => [...prev, item]);
  };

  const handleDelete = (index) => {
    setDroppedItems((prev) => prev.filter((item, i) => i !== index));
  };

  return (
    <div className="Gallery-outer">
      <GallerySidebar />
      <GalleryMainSection
        droppedItems={droppedItems}
        onDropItem={handleDrop}
        onDeleteItem={handleDelete}
      />
    </div>
  );
};

export default Gallery;
