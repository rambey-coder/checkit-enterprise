import api from "../axiosRequest";

export const getOrderDetailsApi = async (id) => {
    return api.get(`admin/orders/${id}`);
};

export const editOrderApi = async (id, data) => {
  return api.put(`admin/orders/${id}`, data);
};

export const deleteOrderApi = async (id) => {
  return api.delete(`admin/orders/${id}`);
};

export const getOrderListApi = async (pageSize, pageNo) => {
  return api.get(
    `admin/orders/list-orders?pageNo=${pageNo}&pageSize=${pageSize}`
  );
};