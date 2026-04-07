import React, { use } from "react";

const Users2 = ({ userPromise }) => {
  const user2 = use(userPromise);
  console.log("this is user2", user2);
  return (
    <div>
      <h3>This is User2</h3>
    </div>
  );
};

export default Users2;
