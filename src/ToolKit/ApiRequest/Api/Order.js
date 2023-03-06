import api from "../axiosRequest";

export const CreateOrderApi = async (data) => {
  return api.post("orders/send-links", data);
};

export const getOrderDetailApi = async (id) => {
  return api.get(`orders/${id}`);
};

export const deleteOrderApi = async (id) => {
  return api.delete(`orders/${id}`);
};

export const getOrderApi = () => {
  return api.get(`orders/list-orders`);
};
