import Button from "../../Components/Button/Button";

const GalleryMainSection = ({ droppedItems, onDropItem, onDeleteItem }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const stringData = e.dataTransfer.getData("item");
    if (stringData) {
      const item = JSON.parse(stringData);
      onDropItem(item);
      console.log("item", item);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="main-section"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h3>Main Section</h3>
      <div className="drop-area">
        {droppedItems.map((el, index) => (
          <div key={index} className="dropped-item">
            {el.type === "image" ? (
              <img
                className="image-element"
                src="https://www.weddingcarsforhire.com/wp-content/uploads/2024/03/Rolls_Royce_White.png"
                alt="dropped"
              />
            ) : (
              <button>{el.content}</button>
            )}
            <div className="edit-btn-wrapper">
              <Button label="delete" onClick={() => onDeleteItem(index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryMainSection;
