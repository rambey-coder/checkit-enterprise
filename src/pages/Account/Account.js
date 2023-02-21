import React from 'react'
import { getCurrentUser } from '../../services/auth'
import { useAppContext } from '../../context/Context'

const Account = () => {
     const { handleLogout } = useAppContext();
     const currentUser = getCurrentUser();

  return (
    <div>
      <h1>Username: {currentUser?.username}</h1>
      <p>email {currentUser?.email}</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Account