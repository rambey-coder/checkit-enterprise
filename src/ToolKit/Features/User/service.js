import { SignInApi, SignUpApi } from "../../ApiRequest/Api/User";
import { toast } from "react-toastify";
import Errorhandler from "../../ApiRequest/Errorhandler";

export const SignUp = (data) => async () => {
  try {
    const res = await SignUpApi(data);
    if (res) {
      toast.success(res?.data?.message);
      window.location.href = "/verify-signup";
    }
  } catch (error) {
    Errorhandler(error);
    toast.error(error?.response?.data?.message);
  }
};

export const SignIn = (data) => async () => {
  try {
    const res = await SignInApi(data);

    sessionStorage.setItem("user", JSON.stringify(res?.data));
    sessionStorage.setItem("checkitAccessToken", res?.data?.accessToken);

    if (res) {
      toast.success(res?.data?.message);
      window.location.href = "/profile";
    }
  } catch (error) {
    Errorhandler(error);
    toast.error(error?.response?.data?.message);
  }
};

export const SignOut = () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("checkitAccessToken");
};
