import React from "react";
import "./Comment.css";

const Comment = props => {
  console.log(`comment text is ${props.text}`);
  return (
    <div className="comment-text">
      <span className="user">{props.username}</span>
      {": "}
      <span className="comment">{props.commentText}</span>
    </div>
  );
};

export default Comment;
