import api from "../request";

export const SignUpApi = async (data) => {
  return api.post("auth/signup", data);
};

export const SignInApi = (data) => {
  return api.post("auth/signin", data);
};
