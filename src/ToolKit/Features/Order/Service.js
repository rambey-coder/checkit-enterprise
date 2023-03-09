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

export const createOrder = (data, setTrackRes, trackRes) => async () => {
  try {
    const res = await CreateOrderApi(data);

    if (res) {
      console.log(res);
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

export const getOrder = () => async () => {
  try {
    const res = await getOrderApi();
    dispatch(setOrders(res?.data));
    return res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    Errorhandler(error);
  }
};

export const getOrderDetail = (id) => async () => {
  try {
    const res = await getOrderDetailApi(id)
    dispatch(setOrderDetails(res?.data))
  } catch (error) {
    Errorhandler(error)
  }
}

export const editOrder = (id, data) => async () => {
  try {
    const res = await editOrderApi(id, data);
    console.log(res);
    dispatch(setEditOrder(res?.data))
  } catch (error) {
    console.log(error);
  }
};
