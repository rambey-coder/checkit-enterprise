import api from "../axiosRequest";
export const SignUpApi = async (data) => {
  return api.post("auth/signup", data);
};

export const SignInApi = async (data) => {
  return api.post("auth/signin", data);
};
