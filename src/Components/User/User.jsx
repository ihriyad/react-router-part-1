import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle ={
    border: "2px solid yellow",
    borderRadius: '10px',
    padding: "20px 10px",
    margin: "14px"
  }
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Mobile: {phone}</p>
      <Link to={`/users/${id}`}>See Details</Link>
    </div>
  );
};

export default User;
