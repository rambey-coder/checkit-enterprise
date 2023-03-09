import { React, useState , useRef} from "react";
import styles from "./EditOrder.module.css";

const EditOrder = ({ editOrderData, editOrderMode }) => {
  const editLinks = useRef()
  const editAddressRef = useRef();
  const [editLink, setEditLink] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const handleEditOrder = (e) => {
    e.preventDefault();
  };
console.log(editLink);
console.log(editAddress);
  const handleEditLink = (e) => {
    setEditLink(editLinks.current.value);
  };
  const handleEditAddress = (e) => {
    setEditAddress(editAddressRef.current.value);
  };
  return (
    <div className={styles.content}>
      <div>
        <h3>Edit your Order</h3>
        <form onSubmit={handleEditOrder}>
          <div>
            <label htmlFor="link">Order Link</label>
            <input
              type="text"
              onChange={handleEditLink}
              // value={editLink}
              ref={editLinks}
              defaultValue={editOrderMode ? editOrderData.links : ""}
            />
          </div>
          <div>
            <label htmlFor="add">Delivery Address</label>
            <input
              type="text"
              onChange={handleEditAddress}
              // value={editAddress}
              ref={editAddressRef}
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
