import React, { useState } from 'react';

const LikeCommentBar = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(23);
  const [commentCount, setCommentCount] = useState(5);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  const handleCommentClick = () => {
    setCommentCount(commentCount + 1);
  };

  return (
    <div className="like-comment-bar">
      <button className={`action-button ${liked ? 'liked' : ''}`} onClick={toggleLike}>
        👍 {liked ? 'Liked' : 'Like'} • {likeCount}
      </button>
      <button className="action-button" onClick={handleCommentClick}>
        💬 Comment • {commentCount}
      </button>
    </div>
  );
};

export default LikeCommentBar;
