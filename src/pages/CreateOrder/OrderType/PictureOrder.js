import { React, useState } from "react";
import styles from "../CreateOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pictureOrder } from "../../../ToolKit/Features/Order/Service";
import Modal from "../SuccessModal/Modal";
import { useAppContext } from "../../../context/Context";
import { PuffLoader } from "react-spinners";
import axiosInstance from "../../../ToolKit/ApiRequest/axiosRequest";

const PictureOrder = () => {
  const [ordeSpec, setOrderSpec] = useState("");
  const [qty, setQty] = useState("");
  const [image, setUploadFile] = useState(null);

  const { trackRes, setTrackRes } = useAppContext();
  const { isLoading } = useSelector((state) => state.util);
  const dispatch = useDispatch();

  const handleSpec = (e) => {
    setOrderSpec(e.target.value);
  };

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("quantity", qty);
    formdata.append("specification", ordeSpec);
    try {
      const res = await axiosInstance.post("pictureorders/send-picture", FormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    // dispatch(pictureOrder(data, setTrackRes, trackRes));
  };

  const handleSelectFile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUploadFile(reader.result);
    };
  };

  console.log(image);

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
                      name="image"
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
