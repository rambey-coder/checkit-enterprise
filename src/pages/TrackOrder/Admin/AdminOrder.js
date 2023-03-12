import { React, useEffect, useState } from "react";
import styles from "../TrackOrder.module.css";
import { useDispatch, useSelector } from "react-redux";

// import Orders from "../Orders";
// import OrderDetail from "../Components/OrderDetails/OrderDetail";

import { getOrderList } from "../../../ToolKit/Features/Admin/Service";
import AdminOrderList from "./AdminOrderList";

const AdminOrder = ({
  handleTrackOrder,
  editOrderHandle,
  click,
  orderIdData,
  setClick,
}) => {
//   const [orderData, setOrderData] = useState([]);
//   const adminOrder = useSelector((state) => state?.adminOrder?.orderList);
  const dispatch = useDispatch();

//   useEffect(() => {
//     const getData = () => {
//       setOrderData(adminOrder);
//     };
//     getData();
//   }, [adminOrder]);

  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);
  return (
    <div>
      <div className={styles.userlist_container}>
        <div className={styles.users}>
          <div className={styles.header_list}>
            <div>Order ID</div>
            <div>Date</div>
            <div>Price</div>
            <div>Order Status</div>
            <div>Action</div>
            <div>Edit</div>
            <div>Delete</div>
          </div>
          <AdminOrderList />
        </div>
        {/* {adminOrder?.map((order) => {
          return (
            <>
              {click && (
                <OrderDetail
                  orderIdData={orderIdData}
                  click={click}
                  setClick={setClick}
                  key={order?.id}
                />
              )}
            </>
          );
        })} */}
      </div>
    </div>
  );
};

export default AdminOrder;
