
import PostCards from "./PostCards";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import Button from "../Components/Button/Button";
import Modal from "../Components/Modal/Modal";

const AllPost = ({ post }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImageUrl(imgUrl);
      setImageFile(file);

      // ✅ Logging file info to console
      console.log("🖼️ File Info:");
      console.log("Name:", file.name);
      console.log("Type:", file.type);
      console.log("Size (KB):", Math.round(file.size / 1024));
      console.log("Temporary URL:", imgUrl);
    }
  };

  const handleTitleChange = (e) => setTitle(e.target.value);

  // open modal and post 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = () => {
    setIsModalOpen(true)
  }


  return (
    <div className="bg-white shadow-md rounded-xl p-4 m-2">
      <h1>Posts</h1>
      <Button label="Add Post" onClick={handleSubmit} />
      <Modal isOpen={isModalOpen} />
      <PostCards imageUrl={imageUrl} imageFile={imageFile} title={title} />
      <ImageUpload
        setImageUrl={setImageUrl}
        setImageFile={setImageFile}
        setTitle={setTitle}
        title={title}
        handleImageChange={handleImageChange}
        handleTitleChange={handleTitleChange}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ImageUpload
          setImageUrl={setImageUrl}
          setImageFile={setImageFile}
          setTitle={setTitle}
          title={title}
          handleImageChange={handleImageChange}
          handleTitleChange={handleTitleChange}
        />

        <PostCards imageUrl={imageUrl} imageFile={imageFile} title={title} />
      </Modal>
    </div>
  );

};

export default AllPost;
