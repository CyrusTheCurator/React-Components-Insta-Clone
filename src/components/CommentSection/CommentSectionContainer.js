// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const commentsArray = props.comments;
  console.log(commentsArray);
  return (
    <div>
      {commentsArray.map((comment, index) => {
        return (
          <Comment
            key={index}
            commentText={comment.text}
            username={comment.username}
          />
        );
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
