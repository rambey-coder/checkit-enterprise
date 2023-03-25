import { React, useState } from "react";
import styles from "../CreateOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pictureOrder } from "../../../ToolKit/Features/Order/Service";
import Modal from "../SuccessModal/Modal";
import { useAppContext } from "../../../context/Context";
import { PuffLoader } from "react-spinners";

const PictureOrder = () => {
  const [ordeSpec, setOrderSpec] = useState("");
  const [qty, setQty] = useState("");
  const [uploadFile, setUploadFile] = useState(null);

  const { trackRes, setTrackRes } = useAppContext();
  const { isLoading } = useSelector((state) => state.util);
  const dispatch = useDispatch();

  const handleSpec = (e) => {
    setOrderSpec(e.target.value);
  };

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      pictureUrl: uploadFile,
      specification: ordeSpec,
      quantity: qty,
    };
    dispatch(pictureOrder(data, setTrackRes, trackRes));
  };

  const handleSelectFile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUploadFile(reader.result);
    };
  };

  return (
    <div className={styles.general}>
      {isLoading && (
        <div className={styles.puff}>
          <PuffLoader />
        </div>
      )}

      {trackRes ? (
        <Modal />
      ) : (
        <>
          <div className={styles.pic_cont}>
            <div className={styles.picture_container}>
              <div className={styles.forms}>
                <h3>Create Picture Order</h3>
                <form action="post" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="link">Quantity</label>
                    <input onChange={handleQty} value={qty} />
                  </div>
                  <div>
                    <label htmlFor="link">Order Link</label>
                    <input onChange={handleSpec} value={ordeSpec} />
                  </div>
                  <div>
                    <input
                      type="file"
                      onChange={handleSelectFile}
                      className={styles.upload}
                    />
                  </div>
                  <button>Create Order</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PictureOrder;
