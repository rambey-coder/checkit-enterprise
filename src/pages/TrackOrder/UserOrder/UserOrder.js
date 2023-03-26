import { React, useState } from "react";
import styles from "../TrackOrder.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import EditOrder from "../Components/EditOrder/EditOrder";
import PictureOrderList from "./OrderList/PictureOrderList";
import ParcelOrderList from "./OrderList/ParcelOrderList";
import LinkOrderList from "./OrderList/LinkOrderList";
import CustomOrderList from "./OrderList/CustomOrderList";

import search from "../assets/search.svg";
import add from "../assets/add.svg";

const UserOrder = () => {
  const [editOrderMode, setEditOrderMode] = useState(false);
  const [editOrderData, setEditOrderData] = useState(null);
  const [orderIdData, setOrderIdData] = useState();
  const [click, setClick] = useState(false);

  const editOrderHandle = (order) => {
    setEditOrderMode(true);
    setEditOrderData(order);
  };

  const handleTrackOrder = (order_data) => {
    setOrderIdData(order_data);
    setClick(!click);
  };

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const checkpoint = query.get("checkpoint");

  const componentsRender = () => {
    switch (checkpoint) {
      case "picture":
        return <PictureOrderList />;

      case "parcel":
        return <ParcelOrderList />;

      case "link":
        return <LinkOrderList />;

      case "custom":
        return <CustomOrderList />;

      default:
        return <CustomOrderList />;
    }
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
        <div className={styles.links_order}>
          <Link to="/user/order?checkpoint=picture">Picture Order</Link>
          <Link to="/user/order?checkpoint=link">Link Order</Link>
          <Link to="/user/order?checkpoint=custom">Custom Order</Link>
          <Link to="/user/order?checkpoint=parcel">Parcel Order</Link>
        </div>
      </div>
      <div>{componentsRender()}</div>
    </div>
  );
};

export default UserOrder;
