import { React, useState } from "react";
import styles from "./EditOrder.module.css";
import { useDispatch } from "react-redux";
import { editOrder } from "../../../../ToolKit/Features/Order/Service";

import close from "../../assets/x.svg"

const EditOrder = ({ editOrderData, editOrderMode, setEditOrderMode }) => {
  const [editLink, setEditLink] = useState("");
  const [editAddress, setEditAddress] = useState("");

  const dispatch = useDispatch();

  const handleEditOrder = (e) => {
    e.preventDefault();
    let id = editOrderData.id;
    const data = {
      links: editLink,
      deliveryAddress: editAddress,
    };
    dispatch(editOrder(id, data));
  };

  const handleEditLink = (e) => {
    setEditLink(e.target.value);
  };

  const handleEditAddress = (e) => {
    setEditAddress(e.target.value);
  };

  const handleClose = () => {
    setEditOrderMode(!editOrderMode)
  };

  return (
    <div className={styles.content}>
      <div>
        <div className={styles.header}>
          <h3>Edit your Order</h3>
          <img src={close} alt="close" onClick={handleClose} />
        </div>
        <form onSubmit={handleEditOrder}>
          <div>
            <label htmlFor="link">Order Link</label>
            <input
              type="text"
              onChange={handleEditLink}
              defaultValue={editOrderMode ? editOrderData.links : ""}
            />
          </div>
          <div>
            <label htmlFor="add">Delivery Address</label>
            <input
              type="text"
              onChange={handleEditAddress}
              defaultValue={editOrderMode ? editOrderData.deliveryAddress : ""}
            />
          </div>
          <button>Update Order Details</button>
        </form>
      </div>
    </div>
  );
};

export default EditOrder;