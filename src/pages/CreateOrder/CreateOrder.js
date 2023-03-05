import React from 'react'
import styles from "./CreateOrder.module.css"

import Sidebar from '../../components/Sidebar/Sidebar'


const CreateOrder = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.general}>
        <div className={styles.content_container}>
        <div className={styles.content}>
          <h3>Create an Order</h3>
          <form>
            <div>
              <label htmlFor="link">Order Link</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="add">Delivery Address</label>
              <input type="text" />
            </div>
            <button>Create Order</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder