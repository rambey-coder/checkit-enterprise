import React from "react";
import styles from "./CreateOrder.module.css";
import { useAppContext } from "../../context/Context";

import Modal from "./SuccessModal/Modal";

const CreateOrder = () => {
  const {
    orderLink,
    orderAddress,
    handleCreateOrder,
    setOrderAddress,
    setOrderLink,
    trackRes,
  } = useAppContext();

  const handleLink = (e) => {
    setOrderLink(e.target.value);
  };
  const handleAddress = (e) => {
    setOrderAddress(e.target.value);
  };

  return (
      <div className={styles.general}>
        {trackRes ? (
          <>
            <Modal />
          </>
        ) : (
          <>
            <div className={styles.content_container}>
              <div className={styles.content}>
                <h3>Create an Order</h3>
                <form onSubmit={handleCreateOrder}>
                  <div>
                    <label htmlFor="link">Order Link</label>
                    <input
                      type="text"
                      onChange={handleLink}
                      value={orderLink}
                    />
                  </div>
                  <div>
                    <label htmlFor="add">Delivery Address</label>
                    <input
                      type="text"
                      onChange={handleAddress}
                      value={orderAddress}
                    />
                  </div>
                  <button>Create Order</button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
  );
};

export default CreateOrder;
