import {
  getOrderDetailsApi,
  editOrderApi,
  deleteOrderApi,
  getOrderListApi,
} from "../../ApiRequest/Api/Admin";

import { setOrderList, setEditOrder, setOrderDetails } from "./AdminSlice";
import { toast } from "react-toastify";
import { dispatch } from "../../Store";
import Errorhandler from "../../ApiRequest/Errorhandler";

export const getOrderList = (pageNo, pageSize) => async () => {
  try {
    const res = await getOrderListApi(pageSize, pageNo);
    dispatch(setOrderList(res?.data));
  } catch (error) {
    Errorhandler(error);
  }
};

export const getOrderDetail = (id) => async () => {
  try {
    const res = await getOrderDetailsApi(id);
    dispatch(setOrderDetails(res?.data));
  } catch (error) {
    Errorhandler(error);
  }
};

export const deleteOrder = (id) => async () => {
  try {
    const res = await deleteOrderApi(id);
    if (res) {
      toast.success(res?.data?.message);
      window.location.href = "/track-order";
    }
  } catch (error) {
    Errorhandler(error);
  }
};

export const editAdminOrder = (id, data) => async () => {
  try {
    const res = await editOrderApi(id, data);
    toast.success(res?.data?.message);
    dispatch(setEditOrder(res?.data));
  } catch (error) {
    Errorhandler(error);
  }
};
