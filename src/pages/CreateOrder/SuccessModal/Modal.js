import React from 'react'
import style from "./Modal.module.css"
import { Link } from 'react-router-dom'

import success from "./assets/tick.gif"

const Modal = () => {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={success} alt="" />
      </div>
      <div className={style.content}>
        <p>Order Created Successfully</p>
        <Link to="/track-order">Track Order</Link>
      </div>
    </div>
  )
}

export default Modal