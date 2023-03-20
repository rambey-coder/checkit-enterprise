import React from "react";
import styles from "../TrackOrder.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShortenTextLength } from "../../../components/Functions/ShortTextLength";

const AdminOrderList = () => {
  const orderList = useSelector((state) => state.adminOrder.orderList);

  return (
    <>
      {orderList?.map((order) => {
        return (
          <div key={order.id}>
            <div className={styles.user_list}>
              <div className={styles.agent_name}>
                <p>{order?.id}</p>
              </div>
              <div className={styles.agent_name}>
                <p>{ShortenTextLength(order?.links)}</p>
              </div>
              <div className={styles.agent_name}>
                <p>{order?.created}</p>
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
                    <p className={styles.updated_status}>
                      {order?.orderStatus}
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.details_btn}>
                <Link to={`/order-detail/${order?.id}`} className={styles.btn}>
                  Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AdminOrderList;
