import React from "react";
import style from "./Modal.module.css";
import { Link } from "react-router-dom";

import { useAppContext } from "../../../context/Context";
import close from "./assets/x.svg";

import success from "./assets/tick.gif";

const Modal = () => {
  const { setTrackRes, trackRes } = useAppContext();

  const handleClose = () => {
    setTrackRes(!trackRes);
  };

  return (
    <div className={style.container}>
      <img src={close} alt="" onClick={handleClose} className={style.close} />
      <div className={style.img}>
        <img src={success} alt="" />
      </div>
      <div className={style.content}>
        <p>Order Created Successfully</p>
        <Link to="/track-order">Track Order</Link>
      </div>
    </div>
  );
};

export default Modal;
