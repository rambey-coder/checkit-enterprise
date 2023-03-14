import React from "react";
import styles from "./EditUserOrder.module.css";

import close from "../../assets/x.svg";

const EditUserOrder = ({ editOrderMode, setEditOrderMode }) => {
  const handleEditOrder = (e) => {
    e.preventDefault();
    };
    
    const handleClose = () => {
        setEditOrderMode(!editOrderMode)
    }

  return (
    <div className={styles.content}>
      <div>
        <div className={styles.header}>
          <h3>Edit your Order</h3>
          <img
            src={close}
            alt="close"
              onClick={handleClose}
          />
        </div>
        <form onSubmit={handleEditOrder}>
          <div>
            <label htmlFor="link">Order Charge</label>
            <input
              type="text"
              //   onChange={handleEditLink}
              //   defaultValue={editOrderMode ? editOrderData?.links : ""}
            />
          </div>
          <div>
            <label htmlFor="add">Order Price</label>
            <input
              type="text"
              //   onChange={handleEditAddress}
              //   defaultValue={editOrderMode ? editOrderData?.deliveryAddress : ""}
            />
          </div>

          <div>
            <label htmlFor="add">Order Status</label>
            <select name="status">
              <option value=""></option>
              <option value="Successful">Successful</option>
              <option value="Failed">Failed</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>

          <div>
            <label htmlFor="add">Payment Status</label>
            <select name="status">
              <option value=""></option>
              <option value="Successful">Successful</option>
              <option value="Failed">Failed</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
          <button>Update Order Details</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserOrder;
