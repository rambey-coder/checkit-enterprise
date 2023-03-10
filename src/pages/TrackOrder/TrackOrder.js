import { React, useEffect, useState } from "react";
import styles from "./TrackOrder.module.css";

import Orders from "./Orders";
import OrderDetail from "./Components/OrderDetails/OrderDetail";
import EditOrder from "./Components/EditOrder/EditOrder";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../../ToolKit/Features/Order/Service";

import add from "./assets/add.svg";
import search from "./assets/search.svg";

const TrackOrder = () => {
  const [orderData, setOrderData] = useState([]);
  const [orderIdData, setOrderIdData] = useState();
  const [click, setClick] = useState(false);
  const [editOrderMode, setEditOrderMode] = useState(false);
  const [editOrderData, setEditOrderData] = useState(null);

  const orders = useSelector((state) => state.order.orders);

  const editOrderHandle = (order) => {
    setEditOrderMode(true);
    setEditOrderData(order);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      setOrderData(orders);
    };
    getData();
  }, [orders]);

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  const handleTrackOrder = (order_data) => {
    setOrderIdData(order_data);
    setClick(!click);
  };

  return (
    <>
      {editOrderMode && (
        <EditOrder
          editOrderData={editOrderData}
          editOrderMode={editOrderMode}
        />
      )}
      <div className={styles.content}>
        <div className={styles.order}>
          <div className={styles.head}>
            <h2>Orders</h2>
          </div>
          <div className={styles.cont}>
            <div className={styles.filter}>
              <div>
                <input type="text" />
                <img src={search} alt="search" />
              </div>
              <select name="" id="">
                <option value="">Filter</option>
                <option value="">All</option>
                <option value="">Pending</option>
                <option value="">Successful</option>
                <option value="">Cancelled</option>
              </select>
            </div>

            <Link to="/create-order">
              <img src={add} alt="add" />
              Create Order
            </Link>
          </div>
        </div>

        <div className={styles.history}>
          <h5>Order History</h5>

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
          </div>
        </div>
        {orders?.map((order) => {
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
        })}
      </div>
    </>
  );
};

export default TrackOrder;
