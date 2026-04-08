import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const handleNavigate =()=>{
    navigate(`/posts/${id}`)
  }
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
      <button onClick={handleNavigate}>Details of No. {id}</button>
    </div>
  );
};

export default Post;
