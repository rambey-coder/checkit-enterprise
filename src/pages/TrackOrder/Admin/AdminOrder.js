import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrderList } from "../../../ToolKit/Features/Admin/Service";

const AdminOrder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderList());
  });
  return <div>AdminOrder</div>;
};

export default AdminOrder;
