import { React, useEffect } from "react";
import styles from "../TrackOrder.module.css";
import { useDispatch } from "react-redux";

import { getOrderList } from "../../../ToolKit/Features/Admin/Service";
import AdminOrderList from "./AdminOrderList";

const AdminOrder = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);
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
            {/* <div>Edit</div>
            <div>Delete</div> */}
          </div>
          <AdminOrderList />
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
