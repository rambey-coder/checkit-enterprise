import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../TrackOrder.module.css";

import Orders from "../Orders";
import OrderDetail from "../Components/OrderDetails/OrderDetail";

import { getOrder } from "../../../ToolKit/Features/Order/Service";

const UserOrder = ({
  handleTrackOrder,
  editOrderHandle,
  click,
  orderIdData,
  setClick,
}) => {
  const [orderData, setOrderData] = useState([]);
  const orders = useSelector((state) => state?.userOrder?.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      setOrderData(orders);
    };
    getData();
  }, [orders]);
  // console.log(orderData);

  useEffect(() => {
    dispatch(getOrder());
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
          </div>
          {orderData?.map((order) => {
            return (
              <Orders
                order={order}
                order_data={order}
                handleTrackOrder={handleTrackOrder}
                key={order.id}
                editOrderHandle={editOrderHandle}
              />
            );
          })}
        </div>
        {orders?.map((order) => {
          return (
            <>
              {click && (
                <OrderDetail
                  orderIdData={orderIdData}
                  click={click}
                  setClick={setClick}
                  key={orders?.id}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default UserOrder;
