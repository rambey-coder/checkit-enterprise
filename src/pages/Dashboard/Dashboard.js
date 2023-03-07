import React from "react";
import { getCurrentUser } from "../../services/auth";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const currentUser = getCurrentUser();

  return (
      <div className={styles.general}>
        <div className={styles.container_content}>
          <div className={styles.user_details}>
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
        <div className={styles.history}>
          <h1>Transaction History</h1>
        </div>
      </div>
  );
};

export default Dashboard;
