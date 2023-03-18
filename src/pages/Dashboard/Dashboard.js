import { React, useState, useEffect } from "react";
import { getCurrentUser } from "../../services/auth";
import styles from "./Dashboard.module.css";

import { useAppContext } from "../../context/Context";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../../ToolKit/Features/Order/Service";

import Loader from "../../components/Loader/Loader";

import order from "./assets/booking.png";
import data from "./assets/empty.svg";

const Dashboard = () => {
  const currentUser = getCurrentUser();
  console.log(currentUser);
  const [orderData, setOrderData] = useState([]);
  const orders = useSelector((state) => state?.userOrder?.orders);
  const { isLoading } = useSelector((state) => state.util);
  const { setPageNo, pageNo, pageSize } = useAppContext((state) => state.util);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      setOrderData(orders);
    };
    getData();
  }, [orders]);

  useEffect(() => {
    dispatch(getOrder(pageNo, pageSize));
  }, [dispatch, pageNo, pageSize, setPageNo]);

  console.log(orderData);

  return (
    <div className={styles.general}>
      <h1>Analytics Overview</h1>
      <div className={styles.container_content}>
        <div className={styles.user_details}>
          <p>70</p>
          <h4>Orders</h4>
        </div>
        <div className={styles.user_details}>
          <p>70</p>
          <h4>Canceled Orders</h4>
        </div>
        <div className={styles.user_details}>
          <p>70</p>
          <h4>Orders Deliverd</h4>
        </div>
        <div className={styles.user_details}>
          <p>70</p>
          <h4>Pending Orders</h4>
        </div>
      </div>
      <div className={styles.history}>
        <h1>Order Overview</h1>

        <div className={styles.order_overview}>
          <div className={styles.overview}>
            <div>
              <img src={order} alt="" />
            </div>
            <h4>15 Orders this month</h4>
          </div>

          <div className={styles.orders}>
            <div className={styles.order_heading}>
              <p>Order ID</p>
              <p>Date</p>
              <p>Last Updated</p>
              <p>Status</p>
            </div>
            <hr />
            <div className={styles.order_detail}>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {orderData?.length === 0 ? (
                    <div className={styles.empty_container}>
                      <div>
                        <img src={data} alt="data" />
                      </div>
                      <p>No data available</p>
                    </div>
                  ) : (
                    <>
                      {orderData?.map((order) => {
                        return (
                          <div className={styles.order_list}>
                            <h5>{order?.id}</h5>
                            <p>{order.created}</p>
                            <div className={styles.updates}>
                              {order?.lastUpdated === null ? (
                                <p className={styles.no_update}>No update</p>
                              ) : (
                                <p>{order?.lastUpdated}</p>
                              )}
                            </div>
                            <div className={styles.status}>
                              {order?.orderStatus === null ? (
                                <p className={styles.pending}>Pending</p>
                              ) : (
                                <p className={styles.order_status}>
                                  {order?.orderStatus}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
