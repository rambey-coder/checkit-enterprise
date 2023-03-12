import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getOrderDetail } from "../../../ToolKit/Features/Admin/Service";

const AdminOrderDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const orderDetail = useSelector(state => state?.adminOrder?.orderDetails)
    console.log(orderDetail);

    useEffect(() => {
        dispatch(getOrderDetail(id))
    }, [dispatch, id])
  return <div>AdminOrderDetails</div>;
};

export default AdminOrderDetails;
