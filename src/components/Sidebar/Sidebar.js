import { React, useState } from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { setToggleSidebar } from "../../ToolKit/utils/UtilSlice";
import { dispatch } from "../../ToolKit/Store";

import dashboard from "./assets/dashboard.svg";
import create from "./assets/create.svg";
import track from "./assets/track.svg";
import calc from "./assets/calculate.svg";
import user from "./assets/user.svg";
import order from "./assets/order.png";
import back from "./assets/back.svg";

import { useAppContext } from "../../context/Context";

const Sidebar = ({ children }) => {
  const { adminAccount } = useAppContext();

  const [sidebar, setSidebar] = useState(false);

  const { toggleSidebar } = useSelector((state) => state.util);

  const toggleSideBar = () => {
    setSidebar(!sidebar);
    dispatch(setToggleSidebar(sidebar));
  };

  return (
    <div className={styles.gen_sidebar}>
      <div className={styles.back} onClick={toggleSideBar}>
        <img src={back} alt="" />
      </div>
      <div
        className={`${styles.sidebar}
      } ${toggleSidebar ? styles.showSidebar : ""} `}
      >
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
    </div>
  );
};

export default Sidebar;
