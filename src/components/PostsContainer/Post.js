// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes

  const likeInitialState = props.post.likes;
  const [likes, setLikes] = useState(likeInitialState);
  const [didClick, toggleDidClick] = useState(false);
  const likeClick = () => {
    if (!didClick) {
      setLikes(likes + 1);
      toggleDidClick(true);
      setCurrentIcon(clickedHeart);
    } else {
      setLikes(likes - 1);
      toggleDidClick(false);
      setCurrentIcon(unclickedHeart);
    }
  };
  const unclickedHeart = "far fa-heart";
  const clickedHeart = "fas fa-heart";
  const [currentIcon, setCurrentIcon] = useState(unclickedHeart);

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection
        likes={likes}
        setLikes={setLikes}
        likeClick={likeClick}
        didClick={didClick}
        toggleDidClick={toggleDidClick}
        currentIcon={currentIcon}
        setCurrentIcon={setCurrentIcon}
        clickedHeart={clickedHeart}
        unclickedHeart={unclickedHeart}
      />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
