import React from "react";
import styles from "./TrackOrder.module.css";
import { ShortenTextLength } from "../../components/Functions/ShortTextLength";
import { Link } from "react-router-dom";

import close from "./assets/x.svg";

const OrderDetail = ({ click, setClick, orderIdData }) => {
  const handleClose = () => {
    setClick(!click);
  };
  return (
    <div className={styles.track_container}>
      <div className={styles.detail_cont}>
        <div>
          <h2>Order Detail</h2>
          <img src={close} alt="" onClick={handleClose} />
        </div>
        <hr />
        <div className={styles.details}>
          <div className={styles.order_detail_cont}>
            <p>Order ID:</p>
            <p>{orderIdData.id}</p>
          </div>
          {/* <hr /> */}
          <div className={styles.order_detail_cont}>
            <p>Order Link:</p>
            <Link to={orderIdData.links}>
              {ShortenTextLength(orderIdData.links)}
            </Link>
          </div>
          {/* <hr /> */}
          <div className={styles.order_detail_cont}>
            <p>Order Price:</p>
            <p>${orderIdData?.orderPrice}</p>
          </div>
          {/* <hr /> */}
          <div className={styles.order_status}>
            <p>Order status:</p>
            {orderIdData?.orderStatus === null ? (
              <p className={styles.pending}>Pending</p>
            ) : (
              <p className={styles.updated_status}>
                {orderIdData?.orderStatus}
              </p>
            )}
          </div>
          {/* <hr /> */}
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
