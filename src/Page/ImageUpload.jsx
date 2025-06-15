import { useState } from "react";
import Button from "../Components/Button/Button";

const ImageUpload = ({ onSubmit }) => {
  const [postData, setPostData] = useState({ title: "", imageData: null });
  const [error, setError] = useState("");

  // const handleTitleChange = (e) => {
  //   const newObj = {
  //     ...postData,
  //     title: e.target.value,
  //   };
  //   setPostData(newObj);
  // };

  const handleTitleChange = (e) => {
    const title = e.target.value;

    setPostData({
      ...postData,
      title: title,
    });

    const pattern = /^.{4,}$/;
    if (pattern.test(title)) {
      setError("");
    } else {
      setError("Minimum 4 characters required");
    }
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
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Post</h2>
      <span style={{color: "red"}}>{error}</span>
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
      <Button label="submit" onClick={handleSubmit} />
    </div>
  );
};

export default ImageUpload;
