import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getOrderDetail } from "../../../ToolKit/Features/Admin/Service";
import { ShortenTextLength } from "../../../components/Functions/ShortTextLength";

import trash from "../assets/trash.svg";
import edit from "../assets/edit.svg";

const AdminOrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const orderDetail = useSelector((state) => state?.adminOrder?.orderDetails);
  console.log(orderDetail);

  useEffect(() => {
    dispatch(getOrderDetail(id));
  }, [dispatch, id]);
  return (
    <div>
      <div>
        <h2>Order Details</h2>

        {/* <div>
          <div>
            <img src={trash} alt="trash" />
            <p>Delete</p>
          </div>
          <div>
            <img src={edit} alt="trash" />
            <p>Edit</p>
          </div>
        </div> */}
        <p>{orderDetail?.created}</p>
      </div>
      <div>
        <div>
          <p>Order Link</p>
          <p>{ShortenTextLength(orderDetail?.links)}</p>
        </div>
        <div>
          <p>Order ID</p>
          <p>{orderDetail?.id}</p>
        </div>
        <div>
          <p>Order charge</p>
          <p>{orderDetail?.chargeRequest}</p>
        </div>
        <div>
          <p>Delivery Address</p>
          <p>{ShortenTextLength(orderDetail?.deliveryAddress)}</p>
        </div>
        <div>
          <p>Order Price</p>
          <p>{orderDetail?.orderPrice}</p>
        </div>
        <div>
          <p>Order status</p>
          <p>{orderDetail?.orderStatus}</p>
        </div>
        <div>
          <p>Payment status</p>
          <p>{orderDetail?.pay}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails;
