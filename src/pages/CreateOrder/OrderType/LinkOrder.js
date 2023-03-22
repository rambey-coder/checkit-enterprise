import { React, useState } from "react";
import styles from "../CreateOrder.module.css";
import { useSelector, useDispatch } from "react-redux";
import { PuffLoader } from "react-spinners";
import Modal from "../SuccessModal/Modal";
import { useAppContext } from "../../../context/Context";
import { linkOrder } from "../../../ToolKit/Features/Order/Service";

const LinkOrder = () => {
  const [orderLink, setOrderLink] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(undefined);
  const [orderSpec, setOrderSpec] = useState("");
  const { isLoading } = useSelector((state) => state.util);
  const { trackRes, setTrackRes } = useAppContext();
  const dispatch = useDispatch();

  const handleLink = (e) => {
    setOrderLink(e.target.value);
  };

  const handleQuantity = (e) => {
    setOrderQuantity(e.target.value);
  };

  const handleSpec = (e) => {
    setOrderSpec(e.target.value);
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    const data = {
      links: orderLink,
      quantity: orderQuantity,
      specification: orderSpec,
    };

    const res = dispatch(linkOrder(data, setTrackRes, trackRes));
    if (res) {
      setOrderLink("");
    }

    return res;
  };
  return (
    <div className={styles.general}>
      {isLoading && (
        <div className={styles.puff}>
          <PuffLoader />
        </div>
      )}
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
                  <input onChange={handleLink} value={orderLink} />
                </div>
                <div>
                  <label htmlFor="quantity">Quantity</label>
                  <input onChange={handleQuantity} value={orderQuantity} type="number"/>
                </div>
                <div>
                  <label htmlFor="add">Order Specification</label>
                  <input type="text" onChange={handleSpec} value={orderSpec} />
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

export default LinkOrder;
