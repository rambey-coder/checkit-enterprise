import { React, useState } from "react";
import LinkOrder from "./OrderType/LinkOrder";
import CustomOrder from "./OrderType/CustomOrder";
import PictureOrder from "./OrderType/PictureOrder";
import style from "./CreateOrdersPage.module.css";

const CreateOrdersPage = () => {
  const [toggleMode, setToggleMode] = useState();

  const handleMode = (e) => {
    setToggleMode(e);
  };
  return (
    <div className={style.container}>
      <h1>Create Order</h1>
      {/* <p>Different Ways to create order</p> */}

      <div className={style.controller}>
        <div onClick={() => handleMode(0)}>Custom Order</div>
        <div onClick={() => handleMode(1)}>Link Order</div>
        <div onClick={() => handleMode(2)}>Picture Order</div>
      </div>

      <div className={style.order_type}>
        {toggleMode === 0 && <CustomOrder />}
        {toggleMode === 1 && <LinkOrder />}
        {toggleMode === 2 && <PictureOrder />}
      </div>
    </div>
  );
};

export default CreateOrdersPage;
