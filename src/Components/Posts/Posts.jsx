import React from "react";
import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  console.log("im from posts", posts);
  return (
    <div>
      <h3>Total posts: {posts.length}</h3>
      {posts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </div>
  );
};

export default Posts;
