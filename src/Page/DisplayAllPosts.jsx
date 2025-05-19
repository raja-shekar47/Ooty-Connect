import React, { useEffect, useState } from "react";
import DisplayPost from "./DisplayPost";

const DisplayAllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {posts.map((post, index) => (
        <DisplayPost
          key={index}
          imageUrl={post.imageBase64} // use base64 so it's persistent
          title={post.title}
        />
      ))}
    </div>
  );
};

export default DisplayAllPosts;
