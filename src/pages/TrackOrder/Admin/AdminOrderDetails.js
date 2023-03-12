import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Admin.module.css";

import { getOrderDetail } from "../../../ToolKit/Features/Admin/Service";
import { ShortenTextLength } from "../../../components/Functions/ShortTextLength";
import { deleteOrder } from "../../../ToolKit/Features/Admin/Service";

import trash from "../assets/trash.svg";
import edit from "../assets/edit.svg";
import date from "./assets/calendar.svg";

const AdminOrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const orderDetail = useSelector((state) => state?.adminOrder?.orderDetails);

  useEffect(() => {
    dispatch(getOrderDetail(id));
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deleteOrder(id));
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.head}>
          <h2>Order Details</h2>

          <div>
            <img src={date} alt="date" />
            <p>{orderDetail?.created}</p>
          </div>
        </div>
        <div className={styles.details}>
          <div>
            <p className={styles.name_id}>Order Link:</p>
            <p>{ShortenTextLength(orderDetail?.links)}</p>
          </div>
          <div>
            <p className={styles.name_id}>Order ID:</p>
            <p>{orderDetail?.id}</p>
          </div>
          <div>
            <p className={styles.name_id}>Order charge:</p>
            {orderDetail?.chargeRequest === null ? (
              <p className={styles.pending}>Pending</p>
            ) : (
              <p className={styles.update}>{orderDetail?.chargeRequest}</p>
            )}
          </div>
          <div>
            <p className={styles.name_id}>Delivery Address:</p>
            <p>{ShortenTextLength(orderDetail?.deliveryAddress)}</p>
          </div>
          <div>
            <p className={styles.name_id}>Order Price:</p>
            {orderDetail?.orderPrice === null ? (
              <p className={styles.pending}>pending</p>
            ) : (
              <p className={styles.update}>{orderDetail?.orderPrice}</p>
            )}
          </div>
          <div>
            <p className={styles.name_id}>Order status:</p>
            {orderDetail?.orderStatus === null ? (
              <p className={styles.pending}>pending</p>
            ) : (
              <p className={styles.update}>{orderDetail?.orderStatus}</p>
            )}
          </div>
          <div>
            <p className={styles.name_id}>Payment status:</p>
            {orderDetail?.pay === null ? (
              <p className={styles.pending}>pending</p>
            ) : (
              <p className={styles.update}>{orderDetail?.pay}</p>
            )}
          </div>
        </div>
        <div className={styles.action}>
          <button onClick={handleDelete}>
            <img src={trash} alt="trash" />
            <p>Delete</p>
          </button>
          <button>
            <img src={edit} alt="trash" />
            <p>Edit</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails;
