import api from "../axiosRequest";

export const CreateOrderApi = async (data) => {
  return api.post("orders/send-links", data);
};

export const CustomOrderApi = async (data) => {
  return api.post("customorders/send-customOrder", data);
};

export const LinkOrderApi = async (data) => {
  return api.post("linkorders/send-links", data);
};

export const PictureOrderApi = async (data) => {
  return api.post("pictureorders/send-picture", data);
};

export const ParcelOrderApi = async (data) => {
  return api.post("parcel/send-parcelOrder", data);
};

export const getOrderDetailApi = async (id) => {
  return api.get(`orders/${id}`);
};

export const deleteOrderApi = async (id) => {
  return api.delete(`orders/${id}`);
};

export const getOrderApi = (pageNo, pageSize) => {
  return api.get(`orders/list-orders?pageNo=${pageNo}&pageSize=${pageSize}`);
};

export const getParcelListOrderApi = (pageNo, pageSize) => {
  return api.get(
    `parcel/list-linkorders?pageNo=${pageNo}&pageSize=${pageSize}`
  );
};

export const getLinkListOrderApi = (pageNo, pageSize) => {
  return api.get(
    `linkorders/list-linkorders?pageNo=${pageNo}&pageSize=${pageSize}`
  );
};

export const getPictureListOrderApi = (pageNo, pageSize) => {
  return api.get(
    `pictureorders/list-pictureorders?pageNo=${pageNo}&pageSize=${pageSize}`
  );
};

export const getCustomListOrderApi = (pageNo, pageSize) => {
  return api.get(
    `customorders/list-linkorders?pageNo=${pageNo}&pageSize=${pageSize}`
  );
};

export const editOrderApi = async (id, data) => {
  return api.put(`orders/${id}`, data);
};
