import { React, useEffect } from "react";
import styles from "../TrackOrder.module.css";
import { useDispatch, useSelector } from "react-redux";

import { getOrderList } from "../../../ToolKit/Features/Admin/Service";
import { useAppContext } from "../../../context/Context";

import AdminOrderList from "./AdminOrderList";
import Loader from "../../../components/Loader/Loader";

import data from "./assets/empty.svg"

const AdminOrder = () => {
  const dispatch = useDispatch();
  const { setPageNo, pageNo, pageSize } = useAppContext();

  const { isLoading } = useSelector((state) => state.util);
  const orderList = useSelector((state) => state.adminOrder.orderList);

  useEffect(() => {
    dispatch(getOrderList(pageNo, pageSize));
  }, [dispatch, pageNo, pageSize]);
  return (
    <div>
      <div className={styles.userlist_container}>
        <div className={styles.users}>
          <div className={styles.header_list}>
            <div>Order ID</div>
            <div>Order Link</div>
            <div>Date</div>
            <div>Price</div>
            <div>Order Status</div>
            <div>Action</div>
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {orderList?.length === 0 ? (
                <div className={styles.empty_container}>
                  <div>
                    <img src={data} alt="data" />
                  </div>
                  <p>No data available</p>
                </div>
              ) : (
                <AdminOrderList />
              )}
            </>
          )}
        </div>
        <div className={styles.pagination}>
          <button
            onClick={() => setPageNo(pageNo - 1)}
            disabled={pageNo < 1}
            className={
              pageNo < 1
                ? `${`${styles.disable} ${styles.prev}`}`
                : `${styles.prev}`
            }
          >
            Previous
          </button>
          <button
            onClick={() => setPageNo(pageNo + 1)}
            className={
              pageNo < 0
                ? `${`${styles.disable} ${styles.next}`}`
                : `${styles.next}`
            }
            disabled={pageNo < 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
