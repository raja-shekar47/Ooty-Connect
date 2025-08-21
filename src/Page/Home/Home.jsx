import React from "react";
import { useState } from "react";

import "../Page.css"

import AddPost from "./Posts/addPost";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("postsss", posts);

  return (
    <div className="main-page">
      <AddPost
        posts={posts}
        setPosts={setPosts}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Home;
