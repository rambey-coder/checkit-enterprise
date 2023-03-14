import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

import dashboard from "./assets/dashboard.svg";
import create from "./assets/create.svg";
import track from "./assets/track.svg";
import calc from "./assets/calculate.svg";
import user from "./assets/user.svg";
import order from "./assets/order.png";

import { useAppContext } from "../../context/Context";

const Sidebar = ({ children }) => {
  const { adminAccount } = useAppContext();

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.container}>
          <div className={styles.head}>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : `${styles.link} `
              }
            >
              <img src={dashboard} alt="dashboard" />
              <p>Dashboard</p>
            </NavLink>

            <NavLink
              to="/create-order"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : `${styles.link} `
              }
            >
              <img src={create} alt="create" />
              <p>Create Order</p>
            </NavLink>

            <NavLink
              to="/track-order"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : `${styles.link} `
              }
            >
              <img src={track} alt="dashboard" />
              <p>Track Order</p>
            </NavLink>

            {adminAccount && (
              <NavLink
                to="/admin-order"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link} `
                }
              >
                <img src={order} alt="dashboard" />
                <p>Orders</p>
              </NavLink>
            )}

            <div>
              <img src={calc} alt="dashboard" />
              <p>Cost Calculator</p>
            </div>

            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : `${styles.link} `
              }
            >
              <img src={user} alt="dashboard" />
              <p>Account</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className={styles.app_container}>{children}</div>
    </>
  );
};

export default Sidebar;
