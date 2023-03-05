import React from 'react'
import style from "./Modal.module.css"

import success from "./assets/tick.gif"

const Modal = () => {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={success} alt="" />
      </div>
      <div className={style.content}>
        <p>Order Created Successfully</p>
        <button>Track Order</button>
      </div>
    </div>
  )
}

export default Modal