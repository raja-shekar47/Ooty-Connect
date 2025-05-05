const ImageUpload = ({
  setImageUrl,
  setImageFile,
  setTitle,
  title,
  handleImageChange,
  handleTitleChange,
}) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Post</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={handleTitleChange}
        style={{ padding: "8px", width: "300px" }}
      />
      <br />
      <br />
    </div>
  );
};

export default ImageUpload;
