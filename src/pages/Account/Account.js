import React from "react";
import { getCurrentUser } from "../../services/auth";
import { useAppContext } from "../../context/Context";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Account.module.css";

// import user from "./assets/user.svg";
import add from "./assets/add.svg"

const Account = () => {
  const { handleLogout } = useAppContext();
  const currentUser = getCurrentUser();

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.general}>
        <div className={styles.container_content}>
          {/* <div className={styles.user_details}>
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
            </div>
          </div> */}

          <div className={styles.user_details}>
            <div className={styles.user_bg}>
              <img src={add} alt="add" />
            </div>

            <div className={styles.details}>
              <div>
                <p>
                  Delivery Address: &nbsp;
                  <span>{currentUser?.username}</span>
                </p>
                <p></p>
              </div>

              <div>
                <p>
                  China Address: &nbsp;
                  <span>{currentUser?.id}</span>
                </p>
              </div>

              <div>
                <p>
                  User ID: &nbsp;
                  <span>{currentUser?.id}</span>
                </p>
              </div>

            </div>
          </div>

          <div className={styles.user_details}>
            <div className={styles.user_bg}>
              <img src={add} alt="add" />
            </div>

            <div className={styles.details}>
              <div>
                <p>
                  Exchange rate: &nbsp;
                  <span>{currentUser?.username}</span>
                </p>
                <p></p>
              </div>

              <div>
                <p>
                  China Address: &nbsp;
                  <span>{currentUser?.id}</span>
                </p>
              </div>

              <div>
                <p>
                  Phone number: &nbsp;
                  <span>{currentUser?.id}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Account;
