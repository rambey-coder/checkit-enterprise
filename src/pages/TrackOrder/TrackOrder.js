import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./TrackOrder.module.css";

const TrackOrder = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.order}>
          <div className={styles.head}>
            <h2>Orders</h2>
            <button>Create Order</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
