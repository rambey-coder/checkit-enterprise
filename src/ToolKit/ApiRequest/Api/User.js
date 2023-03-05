import api from "../Request"
export const SignUpApi = async (data) => {
  return api.post("auth/signup", data);
};

export const SignInApi = async (data) => {
  return api.post("auth/signin", data);
};
