import api from "../axiosRequest";

export const getOrderDetailsApi = async (id) => {
    return api.get(`admin/orders/${id}`);
};

export const editOrderApi = async (id) => {
  return api.put(`admin/orders/${id}`);
};

export const deleteOrderApi = async (id) => {
  return api.delete(`admin/orders/${id}`);
};

export const getOrderListApi = async (id) => {
  return api.get(`admin/orders/list-orders`);
};