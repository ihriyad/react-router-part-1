import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div
      style={{
        border: "2px solid lightblue",
        padding: "20px",
        margin: "10px",
        maxWidth: "300px"
      }}
    >
      <p>{title}</p>
      <Link to={`/posts/${id}`}>
        <button>More Details</button>
      </Link>
    </div>
  );
};

export default Post;
