import { React, useState } from "react";
import styles from "../CreateOrder.module.css";
import { useSelector, useDispatch } from "react-redux";
import { PuffLoader } from "react-spinners";
import { useAppContext } from "../../../context/Context";
import Modal from "../SuccessModal/Modal";
import { customOrder } from "../../../ToolKit/Features/Order/Service";
const CustomOrder = () => {
    const [orderLink, setOrderLink] = useState("");
    const { trackRes, setTrackRes } = useAppContext();
    const { isLoading } = useSelector((state) => state.util);
    const dispatch = useDispatch()

  const handleLink = (e) => {
    setOrderLink(e.target.value);
    };
    
    const handleCreateOrder = (e) => {
      e.preventDefault();
      const data = {
        links: orderLink,
      };

      const res = dispatch(customOrder(data, setTrackRes, trackRes));
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
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    onChange={handleLink}
                    value={orderLink}
                  ></textarea>
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

export default CustomOrder;
