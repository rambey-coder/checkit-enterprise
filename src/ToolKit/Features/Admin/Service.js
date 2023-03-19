import {
  getOrderDetailsApi,
  editOrderApi,
  deleteOrderApi,
  getOrderListApi,
} from "../../ApiRequest/Api/Admin";
import { setLoading } from "../../utils/UtilSlice";

import { setOrderList, setEditOrder, setOrderDetails } from "./AdminSlice";
import { toast } from "react-toastify";
import { dispatch } from "../../Store";
import Errorhandler from "../../ApiRequest/Errorhandler";

export const getOrderList = (pageNo, pageSize) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await getOrderListApi(pageSize, pageNo);
    dispatch(setOrderList(res?.data));
     dispatch(setLoading(false))
    return res;
  } catch (error) {
     dispatch(setLoading(false))
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

export const editAdminOrder = (id, data, pageNo, pageSize) => async () => {
  dispatch(setLoading(true))
  try {
    const res = await editOrderApi(id, data);
    toast.success(res?.data?.message);
    dispatch(setEditOrder(res?.data));
    dispatch(getOrderList(pageNo, pageSize));
    dispatch(setLoading(false))
  } catch (error) {
    Errorhandler(error);
    dispatch(setLoading(false))
  }
};
