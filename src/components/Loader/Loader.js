import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div>
      <div className={styles.skeleton_loader}>
        {/* <div className="skeleton-loader__avatar skeleton-loader__animated" /> */}
        <div
          className={`${`${styles.skeleton_loader__name} ${styles.skeleton_loader__animated}`}`}
        />
        <div
          className={`${`${styles.skeleton_loader__name} ${styles.skeleton_loader__animated}`}`}
        />
        <div
          className={`${`${styles.skeleton_loader__name} ${styles.skeleton_loader__animated}`}`}
        />
        <div
          className={`${`${styles.skeleton_loader__name} ${styles.skeleton_loader__animated}`}`}
        />
        {/* <div className="skeleton-loader__button skeleton-loader__animated" /> */}
      </div>
    </div>
  );
};

export default Loader;
