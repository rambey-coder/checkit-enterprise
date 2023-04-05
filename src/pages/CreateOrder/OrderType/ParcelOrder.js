import React, { useState } from "react";
import styles from "../CreateOrder.module.css";
import Modal from "../SuccessModal/Modal";
import { PuffLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import { useAppContext } from "../../../context/Context";
import { parcelOrder } from "../../../ToolKit/Features/Order/Service";

const ParcelOrder = () => {
  const { isLoading } = useSelector((state) => state.util);
  const { trackRes, setTrackRes } = useAppContext();
  const [parcelNo, setParcelNo] = useState(undefined);
  const [qty, setQty] = useState(undefined);
  const [inspect, setInspect] = useState(false);
  const [info, setInfo] = useState("");
  const dispatch = useDispatch();

  const handleParcel = (e) => {
    setParcelNo(e.target.value);
  };

  const handleQuantity = (e) => {
    setQty(e.target.value);
  };

  const handleInfo = (e) => {
    setInfo(e.target.value);
  };

  const handleInspect = (e) => {
    setInspect(e.target.checked);
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();

    const data = {
      parcelNumber: parcelNo,
      quantity: qty,
      requestInspection: inspect,
      otherInformation: info,
    };

    dispatch(parcelOrder(data, trackRes, setTrackRes));
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
                  <label htmlFor="link">Parcel Number</label>
                  <input onChange={handleParcel} value={parcelNo} type="number"/>
                </div>
                <div>
                  <label htmlFor="quantity">Quantity</label>
                  <input onChange={handleQuantity} value={qty} type="number" />
                </div>
                <div>
                  <label htmlFor="add">Additional Information</label>
                  <textarea type="text" onChange={handleInfo} value={info} />
                </div>

                <div className={styles.check_inspect}>
                  <label htmlFor="inspect">Request Inspection</label>
                  <input
                    type="checkbox"
                    checked={inspect}
                    onChange={handleInspect}
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

export default ParcelOrder;
