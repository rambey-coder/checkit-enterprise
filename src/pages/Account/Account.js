import React from "react";
import { getCurrentUser } from "../../services/auth";
import { ShortenTextLength } from "../../components/Functions/ShortTextLength";
import { useAppContext } from "../../context/Context";
import styles from "./Account.module.css";

import user from "./assets/user.svg";

const Account = () => {
  const { handleLogout, adminAccount } = useAppContext();
  const currentUser = getCurrentUser();

  return (
    <div className={styles.general}>
      <div className={styles.container_content}>
        <div className={styles.user_details}>
          <div className={styles.user_bg}>
            <img src={user} alt="user" />
          </div>

          <div className={styles.details}>
            <div>
              <p>
                Username: &nbsp;
                <span>{currentUser?.username}</span>
              </p>
              <p></p>
            </div>

            <div>
              <p>
                Email Address: &nbsp;
                <span>{currentUser?.email}</span>
              </p>
            </div>

            <div>
              <p>
                User ID: &nbsp;
                <span>{currentUser?.id}</span>
              </p>
            </div>
            <div>
              <p>
                account type: &nbsp;
              </p>
                {adminAccount ? <p>Admin</p> : <p>user</p>}
            </div>
            <div>
              <p>
                Token: &nbsp;
                <span>{ShortenTextLength(currentUser?.accessToken)}</span>
              </p>
            </div>
          </div>
        </div>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Account;
