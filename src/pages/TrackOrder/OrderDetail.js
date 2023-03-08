import React from "react";
import styles from "./TrackOrder.module.css";
import { ShortenTextLength } from "../../components/Functions/ShortTextLength";

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
          <div>
            <p>Order ID:</p>
            <p>{orderIdData.id}</p>
          </div>
          <hr />
          {/* <div>
                            <p>Date Created:</p>
                            <p>{order.created} </p>
                          </div>
                          <hr /> */}
          <div>
            <p>Order Link:</p>
            <p>{ShortenTextLength(orderIdData.links)}</p>
          </div>
          <hr />
          <div>
            <p>Order Price:</p>
            <p>{orderIdData?.orderPrice}</p>
          </div>
          <hr />
          <div>
            <p>Order status:</p>
            <p>{orderIdData?.orderStatus}</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
