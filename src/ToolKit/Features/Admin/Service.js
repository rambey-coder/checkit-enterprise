import {
  getOrderDetailsApi,
  editOrderApi,
  deleteOrderApi,
  getOrderListApi,
} from "../../ApiRequest/Api/Admin";

import { setOrderList, setEditOrder, setOrderDetails } from "./AdminSlice";
// import { toast } from "react-toastify";
import { dispatch } from "../../Store";
import Errorhandler from "../../ApiRequest/Errorhandler";

export const getOrderList = () => async () => {
  try {
      const res = await getOrderListApi();
      dispatch(setOrderList(res?.data))
      console.log(res);
  } catch (error) {
      Errorhandler(error)
  }
};

export const getOrderDetail = (id) => async () => {
  try {
    const res = await getOrderDetailsApi(id)
    console.log(res);
  } catch (error) {
    
  }
}
