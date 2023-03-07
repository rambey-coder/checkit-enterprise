import { CreateOrderApi, getOrderApi } from "../../ApiRequest/Api/Order";
import { setCreateOrder, setOrders } from "./OrderSlice";
import { toast } from "react-toastify";
import Errorhandler from "../../ApiRequest/Errorhandler";
import { dispatch } from "../../Store";

export const createOrder = (data, setTrackRes, trackRes) => async () => {
  try {
    const res = await CreateOrderApi(data);

    if (res) {
      toast.success(res?.data?.message);
      setCreateOrder(res?.data);
      if (res.status === 200) setTrackRes(!trackRes);
    }
    console.log(res);
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
