import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  console.log("this is from user details", user);
  const { name, website } = user;
  return (
    <div>
      <h2>User Details</h2>
      <h2>Name:{name}</h2>
      <p>Web: {website}</p>
    </div>
  );
};

export default UserDetails;
