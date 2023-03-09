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
    console.log(res);
    if (res) {
      toast.success("Login Sucessfully!");
      window.location.href = "/profile";
    }
  } catch (error) {
    Errorhandler(error);
    // toast.error(error?.response?.data?.message);
  }
};

export const getCurrentUserToken = () => {
  // this is supposed to be access token
  return JSON.parse(sessionStorage.getItem("user")) || null;
};

export const SignOut = () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("checkitAccessToken");
};
