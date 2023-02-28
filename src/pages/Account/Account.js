import React from 'react'
import { getCurrentUser } from '../../services/auth'
import { useAppContext } from '../../context/Context'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from "./Account.module.css"

const Account = () => {
     const { handleLogout } = useAppContext();
     const currentUser = getCurrentUser();

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.container_content}>
        <div className={styles.user_details}>
          <div></div>
        </div>
        <h1>Username: {currentUser?.username}</h1>
        <p>email {currentUser?.email}</p>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
}

export default Account