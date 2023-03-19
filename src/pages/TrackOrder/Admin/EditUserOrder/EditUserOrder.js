import { React, useState } from "react";
import styles from "./EditUserOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { PuffLoader } from "react-spinners";

import { useAppContext } from "../../../../context/Context";
import { editAdminOrder } from "../../../../ToolKit/Features/Admin/Service";

import close from "../../assets/x.svg";

const EditUserOrder = ({ editOrderMode, setEditOrderMode }) => {
  const { pageNo, pageSize } = useAppContext();
  const id = useSelector(state => state.adminOrder.orderDetails.id)
  const {isLoading} = useSelector(state => state.util)
  const [orderPrice, setOrderPrice] = useState(undefined);
  const [orderStatus, setOrderStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState();
  const dispatch = useDispatch()



  const handleEditOrder = (e) => {
    e.preventDefault();

    const data = {
      orderStatus: orderStatus,
      orderPrice: orderPrice,
      pay: paymentStatus
    };

    dispatch(editAdminOrder(id, data, pageNo, pageSize))
  };


  const handleClose = () => {
    setEditOrderMode(!editOrderMode);
  };

  const handlePaymentStatus = (e) => {
    const selected = e.target.value;
    setPaymentStatus(selected);
  };

  const handleOrderStatus = (e) => {
    const selected = e.target.value;
    setOrderStatus(selected);
  };

  const handlePrice = (e) => {
    setOrderPrice(e.target.value);
  };

  return (
    <div className={styles.edit_container}>
      {isLoading && (
        <div className={styles.puff}>
          <PuffLoader />
        </div>
      )}
      <div className={styles.content}>
        <div>
          <div className={styles.header}>
            <h3>Edit your Order</h3>
            <img src={close} alt="close" onClick={handleClose} />
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
                onChange={handlePrice}
                value={orderPrice}
                //   defaultValue={editOrderMode ? editOrderData?.deliveryAddress : ""}
              />
            </div>

            <div>
              <label htmlFor="add">Order Status</label>
              <select name="status" onChange={handleOrderStatus}>
                <option value=""></option>
                <option value="Successful">Successful</option>
                <option value="Failed">Failed</option>
                <option value="Canceled">Canceled</option>
              </select>
            </div>

            <div>
              <label htmlFor="add">Payment Status</label>
              <select name="status" onChange={handlePaymentStatus}>
                <option value="val"></option>
                <option value="Successful">Successful</option>
                <option value="Failed">Failed</option>
                <option value="Canceled">Canceled</option>
              </select>
            </div>
            <button>Update Order Details</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserOrder;
