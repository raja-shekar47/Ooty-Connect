import ImageUpload from "./ImageUpload";
import { useEffect, useState } from "react";
import Button from "../Components/Button/Button";
import Modal from "../Components/Modal/Modal";
import DisplayPost from "./DisplayPost";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  useEffect(() => {
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const filteredPosts = existingPosts.filter(
      (post) => post && post.imageData && post.title
    );
    setPosts(filteredPosts);
  });
  
  // open modal and post
  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  const createPost = (newPost) => {
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = [newPost, ...existingPosts];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    setIsModalOpen(false);
  };


  console.log("posts", posts);
  return (
    <div className="bg-white shadow-md rounded-xl p-4 m-2">
      <h1>Posts</h1>
      <Button label="Add Post" onClick={handleSubmit} />
      {posts.map((post, index) => (
        <DisplayPost key={index} imageUrl={post.imageData} title={post.title} />
      ))}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ImageUpload onSubmit={createPost} />
      </Modal>
    </div>
  );
};

export default AllPost;
