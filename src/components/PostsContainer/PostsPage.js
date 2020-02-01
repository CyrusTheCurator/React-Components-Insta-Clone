//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  //console.log({props.dummyData})

  //const postMapper = arr => {};

  const postMaker = props.dummyData.map(post => {
    return <Post post={post} />;
  });

  return <div className="posts-container-wrapper">{postMaker}</div>;
};
export default PostsPage;
