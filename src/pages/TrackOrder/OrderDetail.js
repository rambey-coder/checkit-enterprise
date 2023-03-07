import React from "react";
import styles from "./TrackOrder.module.css"

import close from "./assets/x.svg"

const OrderDetail = ({ orderId, click, setClick }) => {
    const handleClose = () => {
      setClick(!click)
  };
  return (
    <div className={styles.track_container}>
      <div className={styles.detail_cont}>
        <div>
          <h2>Order Detail</h2>
          <img src={close} alt="" onClick={handleClose} />
        </div>
        <hr />
        <div>
          <div>
            <p>Order ID</p>
            {orderId}
            <hr />
          </div>
          <div>
            <p>Date Created</p>
            {orderId}
            <hr />
          </div>
          <div>
            <p>Order Link</p>
            {orderId}
            <hr />
          </div>
          <div>
            <p>Order Price</p>
            {orderId}
            <hr />
          </div>
          <div>
            <p>Order status</p>
            {orderId}
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
