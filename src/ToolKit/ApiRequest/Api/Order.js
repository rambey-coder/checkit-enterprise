import api from "../request"

export const CreateOrderApi = async (data) => {
    return api.post("orders/send-links", data);
}