import { SignInApi, SignUpApi } from "../../ApiRequest/Api/Api";
import { toast } from "react-toastify";

export const SignUp = (data) => async () => {
    const res = await SignUpApi(data);
    console.log("out", res);
    try {
      console.log("in", res);
    sessionStorage.setItem("checkitAccessToken", res?.data?.accessToken);

    if (res) {
      toast.success(res?.data?.message);
      // window.location.href = "/verify-signup"; move to verify sigup
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
  return res;
};

export const SignIn = (data) => async () => {
  try {
    const res = await SignInApi(data);

    sessionStorage.setItem("user", JSON.stringify(res?.data));
    sessionStorage.setItem("checkitAccessToken", res?.data?.accessToken);

    if (res) {
      toast.success(res?.data?.message);
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

export const SignOut = () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("checkitAccessToken");
};
