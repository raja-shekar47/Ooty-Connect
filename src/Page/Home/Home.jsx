import React from "react";
import { useState, useEffect } from "react";

import Sidebar from "../../Components/Sidebar";
import AddPost from "./Posts/addPost";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("postsss", posts)


  return (
    <div className="main-page">
      <Sidebar />
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
