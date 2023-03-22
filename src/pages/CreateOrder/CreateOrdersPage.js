import { React, useState } from "react";
import LinkOrder from "./OrderType/LinkOrder";
import CustomOrder from "./OrderType/CustomOrder";
import PictureOrder from "./OrderType/PictureOrder";
import Home from "./OrderType/Home";
import style from "./CreateOrdersPage.module.css";

const CreateOrdersPage = () => {
  const [toggleMode, setToggleMode] = useState(0);

  const handleMode = (e) => {
    setToggleMode(e);
  };
  return (
    <div className={style.container}>
      <h1>Create Order</h1>
      {/* <p>Different Ways to create order</p> */}

      <div className={style.controller}>
        <div onClick={() => handleMode(0)}>Home</div>
        <div onClick={() => handleMode(1)}>Custom Order</div>
        <div onClick={() => handleMode(2)}>Link Order</div>
        <div onClick={() => handleMode(3)}>Picture Order</div>
      </div>

          <div className={style.order_type}>
              
        {toggleMode === 0 && <Home />}
        {toggleMode === 1 && <CustomOrder />}
        {toggleMode === 2 && <LinkOrder />}
        {toggleMode === 3 && <PictureOrder />}
      </div>
    </div>
  );
};

export default CreateOrdersPage;
