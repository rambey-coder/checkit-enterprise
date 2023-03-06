import { React, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./TrackOrder.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../../ToolKit/Features/Order/Service";

import add from "./assets/add.svg";
import search from "./assets/search.svg";

const TrackOrder = () => {
  const [orderData, setOrderData] = useState([])

  const orders = useSelector((state) => state.order.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      setOrderData(orders)
    }
    getData()
  }, [orders])

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  console.log(orderData);
  return (
    <div className={styles.container}>
      <Sidebar />
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
                <div>Price</div>
                <div>Delivery Status</div>
                {/* <div>Transcriptions</div> */}
                <div>Action</div>
              </div>
              {/* <hr /> */}
              <div className={styles.user_list}>
                <div className={styles.agent_name}>
                  <p>00011</p>
                </div>
                <div className={styles.company_name}>
                  <p>$30</p>
                </div>
                <div className={styles.status}>
                  <div>Pending</div>
                </div>
                {/* <div className={styles.transcriptions}>40</div> */}
                <div className={styles.date}>
                  <button>Track</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
