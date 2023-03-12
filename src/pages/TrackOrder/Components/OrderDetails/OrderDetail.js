import React, { useEffect } from "react";
import styles from "./OrderDetail.module.css";
import { ShortenTextLength } from "../../../../components/Functions/ShortTextLength";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import close from "../../assets/x.svg";
import { getOrderDetail } from "../../../../ToolKit/Features/Order/Service";

const OrderDetail = ({ click, setClick, orderIdData }) => {
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.order.orderDetail);

  useEffect(() => {
    dispatch(getOrderDetail(orderIdData.id));
  }, [dispatch, orderIdData]);

  // console.log(orderDetails);

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
            <p>{orderDetails?.id}</p>
          </div>
          <div className={styles.order_detail_cont}>
            <p>Order Link:</p>
            <Link to={orderDetails?.links}>
              {ShortenTextLength(orderDetails?.links)}
            </Link>
          </div>
          <div className={styles.order_price}>
            <p>Order Price:</p>
            {orderDetails?.orderPrice === null ? (
              <p className={styles.pending}>Pending</p>
            ) : (
              <p className={styles.updated_price}>
                ${orderDetails?.orderPrice}
              </p>
            )}
          </div>
          <div className={styles.order_status}>
            <p>Order status:</p>
            {orderDetails?.orderStatus === null ? (
              <p className={styles.pending}>Pending</p>
            ) : (
              <p className={styles.updated_status}>
                {orderDetails?.orderStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
