import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();

  const {userID} = useParams();
  console.log(userID);

  const navigate  = useNavigate();

  console.log("this is from user details", user);
  const { name, website } = user;
  return (
    <div>
      <h2>User Details</h2>
      <h2>Name:{name}</h2>
      <p>Web: {website}</p>
      <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  );
};

export default UserDetails;
