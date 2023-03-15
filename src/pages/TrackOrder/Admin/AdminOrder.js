import { React, useEffect } from "react";
import styles from "../TrackOrder.module.css";
import { useDispatch } from "react-redux";

import { getOrderList } from "../../../ToolKit/Features/Admin/Service";
import { useAppContext } from "../../../context/Context";
import AdminOrderList from "./AdminOrderList";

const AdminOrder = () => {
  const dispatch = useDispatch();
  const { setPageNo, pageNo, pageSize } = useAppContext();

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
          <AdminOrderList />
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
