import React from "react";

const PostCards = ({ imageUrl, title }) => {
  return (
    <div
      className="post-card"
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
      }}
    >
      <h3>{title}</h3>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      )}
    </div>
  );
};

export default PostCards;
