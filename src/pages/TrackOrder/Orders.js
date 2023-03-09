import React from 'react'
import styles from "./TrackOrder.module.css"

const Orders = ({ handleTrackOrder, order, order_data }) => {
  return (
    <div className={styles.user_list}>
      <div className={styles.agent_name}>
        <p>{order?.id}</p>
      </div>
      <div className={styles.order_price}>
        {order?.orderPrice === null ? (
          <p>Pending</p>
        ) : (
          <p className={styles.updated_price}>${order?.orderPrice}</p>
        )}
      </div>
      <div className={styles.status}>
        <div>
          {order?.orderStatus === null ? (
            <p>Pending</p>
          ) : (
            <p className={styles.updated_status}>{order?.orderStatus}</p>
          )}
        </div>
      </div>
      <div className={styles.date}>
        <button onClick={() => handleTrackOrder(order_data)}>Track</button>
      </div>
    </div>
  );
};

export default Orders