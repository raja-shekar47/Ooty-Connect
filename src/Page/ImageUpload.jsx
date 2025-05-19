import { useState } from "react";
import Button from "../Components/Button/Button";

const ImageUpload = ({onSubmit}) => {
  const [postData, setPostData] = useState({ title: "", imageData: null });
  
  const handleTitleChange = (e) => {
    const newObj = {
      ...postData,
      title: e.target.value,
    };
    setPostData(newObj);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedData = { ...postData, imageData: reader.result };
        setPostData(updatedData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSubmit(postData);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Post</h2>
      <input
        type="text"
        placeholder="Enter title"
        value={postData.title}
        onChange={handleTitleChange}
        style={{ padding: "8px", width: "300px" }}
      />
      <br />
      <br />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <br />
      <br />
      {postData.imageData && (
        <img
          src={postData.imageData}
          alt="Preview"
          style={{ width: "300px", borderRadius: "8px", marginTop: "16px" }}
        />
      )}
      <Button label="submit" onClick={handleSubmit}/>
    </div>
  );
};

export default ImageUpload;
