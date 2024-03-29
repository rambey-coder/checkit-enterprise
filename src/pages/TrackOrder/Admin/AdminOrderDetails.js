import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";

import { getOrderDetail } from "../../../ToolKit/Features/Admin/Service";
import { ShortenTextLength } from "../../../components/Functions/ShortTextLength";
import { deleteOrder } from "../../../ToolKit/Features/Admin/Service";
// import EditOrder from "./EditOrder/EditOrder";
import EditUserOrder from "./EditUserOrder/EditUserOrder";
// import EditOrder from "../Components/EditOrder/EditOrder";

import trash from "../assets/trash.svg";
import edit from "../assets/edit.svg";
import date from "./assets/calendar.svg";
import back from "./assets/back.svg";
import download from "./assets/download.svg";

const AdminOrderDetails = () => {
  const [editOrderMode, setEditOrderMode] = useState(false);
  // const [editOrderData, setEditOrderData] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const orderDetail = useSelector((state) => state?.adminOrder?.orderDetails);

  const navigate = useNavigate();

  const handlePrev = () => {
    navigate(-1)
  }

  useEffect(() => {
    dispatch(getOrderDetail(id));
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deleteOrder(id));
  };

  const handleEdit = () => {
    setEditOrderMode(!editOrderMode);
    // setEditOrderData(orderDetail);
  };

  return (
    <>
      {/* <EditUserOrder /> */}
      {editOrderMode && (
        <EditUserOrder
          editOrderMode={editOrderMode}
          setEditOrderMode={setEditOrderMode}
          id={id}
          // editOrderData={editOrderData}
        />
      )}
      <div className={styles.nav}>
        <div onClick={handlePrev}>
          <img src={back} alt="back" />
        </div>

        <button>
          <img src={download} alt="download" />
          Download
        </button>
      </div>
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
            <button onClick={handleEdit}>
              <img src={edit} alt="trash" />
              <p>Edit</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrderDetails;
