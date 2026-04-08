import React, { Suspense, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "2px solid yellow",
    borderRadius: "10px",
    padding: "20px 10px",
    margin: "14px",
  };
  const [showInfo, setShowInfo] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const location = useLocation();
  console.log(location)

  if (isVisited) {
    return <Navigate to="/"></Navigate>;
  }

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  ).then((res) => res.json());
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Mobile: {phone}</p>
      <Link to={`/users/${id}`}>See Details</Link>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} info
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loading...</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}
      <button onClick={() => setIsVisited(true)}>Visit home</button>
    </div>
  );
};

export default User;
