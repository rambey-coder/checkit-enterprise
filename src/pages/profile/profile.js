import React from "react";
import { getCurrentUser } from "../../services/auth";

const profile = () => {
  const currentUser = getCurrentUser();

  return (
    <div>
      <h1>Username: {currentUser?.username}</h1>
      <p>email {currentUser?.email}</p>
    </div>
  );
};

export default profile;
