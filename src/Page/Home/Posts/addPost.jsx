import React from "react";
import { useEffect } from "react";
import Button from "../../../Components/Button/Button";
import Modal from "../../../Components/Modal/Modal";
import ImageUpload from "./imageUpload";
import PostCard from "./postCard";

import "../Home.css"

const AddPost = ({ posts, setPosts, isModalOpen, setIsModalOpen }) => {
  useEffect(() => {
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const filteredPosts = existingPosts.filter(
      (post) => post && post.imageData && post.title
    );
    setPosts(filteredPosts);
  }, [setPosts]);

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
    <div className="page-wrapper">
      <h1>Posts</h1>

      <Button label="Add Post" onClick={handleSubmit} />
      {posts.map((post, index) => (
        <PostCard key={index} imageUrl={post.imageData} title={post.title} />
      ))}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ImageUpload onSubmit={createPost} />
      </Modal>
    </div>
  );
};

export default AddPost;
