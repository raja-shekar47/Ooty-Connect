const GallerySidebar = () => {
  const Elements = [
    { id: 1, type: "image", content: "https://via.placeholder.com/80" },
    { id: 1, type: "button", content: "submit" },
    { id: 1, type: "image", content: "https://via.placeholder.com/80" },
    { id: 1, type: "button", content: "click here" },
  ];

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
  };

  return (
    <div className="gallery-sidebar">
      <h3>Sidebar Elements</h3>
      {Elements.map((el) => (
        <div
          id={el.id}
          className="sidebar-item"
          draggable
          onDragStart={(e) => handleDragStart(e, el)}
        >
          {el.type === "image" ? (
            <img
              width="100px"
              src="https://www.weddingcarsforhire.com/wp-content/uploads/2024/03/Rolls_Royce_White.png"
              alt="drop text"
            />
          ) : (
            <button>{el.content}</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default GallerySidebar;
