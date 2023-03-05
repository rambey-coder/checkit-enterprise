import { CreateOrderApi } from "../../ApiRequest/Api/Order";
import { setCreateOrder } from "./OrderSlice";
import { toast } from "react-toastify";
import Errorhandler from "../../ApiRequest/Errorhandler";

export const createOrder = (data, setTrackRes, trackRes) => async () => {
  try {
    const res = await CreateOrderApi(data);

    if (res) {
      toast.success(res?.data?.message);
      setCreateOrder(res?.data);
       if (res.status === 200) setTrackRes(!trackRes);
    }
    return res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    Errorhandler(error);
  }
};
