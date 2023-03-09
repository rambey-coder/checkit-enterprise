import { CreateOrderApi, getOrderApi } from "../../ApiRequest/Api/Order";
import { setCreateOrder, setOrders } from "./OrderSlice";
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
