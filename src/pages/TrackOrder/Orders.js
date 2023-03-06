import React from 'react'
import styles from "./TrackOrder.module.css"

const Orders = ({handleTrackOrder, order, order_ID}) => {
  return (
    <div className={styles.user_list}>
      <div className={styles.agent_name}>
        <p>{order?.id}</p>
      </div>
      <div className={styles.order_price}>
        {order?.orderPrice === null ? (
          <p>Pending</p>
        ) : (
          <p>{order?.orderPrice}</p>
        )}
      </div>
      <div className={styles.status}>
        <div>
          {order?.orderStatus}
          {order?.orderStatus === null ? (
            <p>Pending</p>
          ) : (
            <p>{order?.orderStatus}</p>
          )}
        </div>
      </div>
      <div className={styles.date}>
        <button onClick={() => handleTrackOrder(order_ID)}>Track</button>
      </div>
    </div>
  );
}

export default Orders