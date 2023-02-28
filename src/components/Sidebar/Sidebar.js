import React from "react";
import styles from "./Sidebar.module.css";
import dashboard from "./assets/dashboard.svg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <img src={dashboard} alt="dashboard" />
            <p>Dashboard</p>
          </div>

          <div>
            <img src={dashboard} alt="dashboard" />
            <p>Create Order</p>
                  </div>
                  
          <div>
            <img src={dashboard} alt="dashboard" />
            <p>Track Order</p>
                  </div>
                  
          <div>
            <img src={dashboard} alt="dashboard" />
            <p>Cost Calculator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
