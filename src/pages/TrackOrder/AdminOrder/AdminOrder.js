import { React, useState } from "react";
import styles from "../TrackOrder.module.css"
import { Link } from "react-router-dom";

import EditOrder from "../Components/EditOrder/EditOrder";
import UserOrder from "../User/UserOrder";
// import Pic

import add from "../assets/add.svg";
import search from "../assets/search.svg";

const AdminOrder = () => {
  const [orderIdData, setOrderIdData] = useState();
  const [click, setClick] = useState(false);
  const [editOrderMode, setEditOrderMode] = useState(false);
  const [editOrderData, setEditOrderData] = useState(null);

  const editOrderHandle = (order) => {
    setEditOrderMode(true);
    setEditOrderData(order);
  };

  const handleTrackOrder = (order_data) => {
    setOrderIdData(order_data);
    setClick(!click);
  };
  return (
    <div>
      {editOrderMode && (
        <EditOrder
          editOrderData={editOrderData}
          editOrderMode={editOrderMode}
          setEditOrderMode={setEditOrderMode}
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
      </div>
      <div className={styles.history}>
        <h5>Order History</h5>
        <Link>Picture Order</Link>
        <UserOrder
          editOrderHandle={editOrderHandle}
          handleTrackOrder={handleTrackOrder}
          orderIdData={orderIdData}
          click={click}
          setClick={setClick}
        />
      </div>
    </div>
  );
};

export default AdminOrder;
