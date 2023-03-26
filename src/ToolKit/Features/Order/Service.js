import {
  CreateOrderApi,
  getOrderApi,
  editOrderApi,
  getOrderDetailApi,
  CustomOrderApi,
  LinkOrderApi,
  PictureOrderApi,
  ParcelOrderApi,
  getParcelListOrderApi,
  getLinkListOrderApi,
  getPictureListOrderApi,
  getCustomListOrderApi,
} from "../../ApiRequest/Api/Order";
import {
  setCreateOrder,
  setOrders,
  setEditOrder,
  setOrderDetails,
  setCustomOrder,
} from "./OrderSlice";
import { toast } from "react-toastify";
import Errorhandler from "../../ApiRequest/Errorhandler";
import { dispatch } from "../../Store";
import { setLoading } from "../../utils/UtilSlice";

export const createOrder = (data, setTrackRes, trackRes) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await CreateOrderApi(data);

    if (res) {
      toast.success(res?.data?.message);
      setCreateOrder(res?.data);
      if (res.status === 200) setTrackRes(!trackRes);
    }
    dispatch(setLoading(false));
    return res;
  } catch (error) {
    // toast.error(error?.response?.data?.message);
    Errorhandler(error);
    dispatch(setLoading(false));
  }
};

export const customOrder = (data, setTrackRes, trackRes) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await CustomOrderApi(data);

    if (res) {
      toast.success(res?.data?.message);
      setCustomOrder(res?.data);
      if (res.status === 200) setTrackRes(!trackRes);
    }
    dispatch(setLoading(false));
    return res;
  } catch (error) {
    Errorhandler(error);
    dispatch(setLoading(false));
  }
};

export const linkOrder = (data, setTrackRes, trackRes) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await LinkOrderApi(data);

    if (res) {
      toast.success(res?.data?.message);
      setCreateOrder(res?.data);
      if (res.status === 200) setTrackRes(!trackRes);
    }
    dispatch(setLoading(false));
    return res;
  } catch (error) {
    Errorhandler(error);
    dispatch(setLoading(false));
  }
};

export const pictureOrder = (data, setTrackRes, trackRes) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await PictureOrderApi(data);

    if (res) {
      toast.success(res?.data?.message);
      setCreateOrder(res?.data);
      if (res.status === 200) setTrackRes(!trackRes);
    }
    dispatch(setLoading(false));
    return res;
  } catch (error) {
    Errorhandler(error);
    dispatch(setLoading(false));
  }
};

export const parcelOrder = (data, setTrackRes, trackRes) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await ParcelOrderApi(data);

    if (res) {
      toast.success(res?.data?.message);
      setCreateOrder(res?.data);
      if (res.status === 200) setTrackRes(!trackRes);
    }
    dispatch(setLoading(false));
    return res;
  } catch (error) {
    Errorhandler(error);
    dispatch(setLoading(false));
  }
};

export const getOrder = (pageNo, pageSize) => async () => {
  dispatch(setLoading(true));
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

export const getParcelListOrder = (pageNo, pageSize) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await getParcelListOrderApi(pageNo, pageSize);
    dispatch(setOrders(res?.data));
    dispatch(setLoading(false));
    return res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    dispatch(setLoading(false));
    Errorhandler(error);
  }
};

export const getLinkListOrder = (pageNo, pageSize) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await getLinkListOrderApi(pageNo, pageSize);
    dispatch(setOrders(res?.data));
    dispatch(setLoading(false));
    return res;
  } catch (error) {
    // toast.error(error?.response?.data?.message);
    dispatch(setLoading(false));
    Errorhandler(error);
  }
};

export const getPictureListOrder = (pageNo, pageSize) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await getPictureListOrderApi(pageNo, pageSize);
    dispatch(setOrders(res?.data));
    dispatch(setLoading(false));
    return res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    dispatch(setLoading(false));
    Errorhandler(error);
  }
};

export const getCustomListOrder = (pageNo, pageSize) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await getCustomListOrderApi(pageNo, pageSize);
    console.log(res);
    dispatch(setCustomOrder(res?.data));
    dispatch(setLoading(false));
    return res;
  } catch (error) {
    // toast.error(error?.response?.data?.message);
    dispatch(setLoading(false));
    Errorhandler(error);
  }
};

export const getOrderDetail = (id) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await getOrderDetailApi(id);
    dispatch(setOrderDetails(res?.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    Errorhandler(error);
  }
};

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
