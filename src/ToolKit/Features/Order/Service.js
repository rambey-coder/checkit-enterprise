import {
  CreateOrderApi,
  getOrderApi,
  editOrderApi,
  getOrderDetailApi,
} from "../../ApiRequest/Api/Order";
import { setCreateOrder, setOrders, setEditOrder, setOrderDetails } from "./OrderSlice";
import { toast } from "react-toastify";
import Errorhandler from "../../ApiRequest/Errorhandler";
import { dispatch } from "../../Store";
import { setLoading } from "../../utils/UtilSlice";

export const createOrder = (data, setTrackRes, trackRes) => async () => {
  try {
    const res = await CreateOrderApi(data);

    if (res) {
      toast.success("Login Sucessful!");
      setCreateOrder(res?.data);
      if (res.status === 200) setTrackRes(!trackRes);
    }
    return res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    Errorhandler(error);
  }
};

export const getOrder = (pageNo, pageSize) => async () => {
  dispatch(setLoading(true))
  try {
    const res = await getOrderApi(pageNo, pageSize);
    dispatch(setOrders(res?.data));
    dispatch(setLoading(false));
    return res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    dispatch(setLoading(false));
    Errorhandler(error);
  }
};

export const getOrderDetail = (id) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await getOrderDetailApi(id)
    dispatch(setOrderDetails(res?.data))
    dispatch(setLoading(false))
  } catch (error) {
    dispatch(setLoading(false))
    Errorhandler(error)
  }
}

export const editOrder = (id, data, pageNo, pageSize) => async () => {
  try {
    const res = await editOrderApi(id, data);
    toast.success(res?.data?.message);
    dispatch(setEditOrder(res?.data));
    dispatch(getOrder(pageNo, pageSize));
  } catch (error) {
    Errorhandler(error);
  }
};
