import { SignInApi, SignUpApi } from "../../ApiRequest/Api/User";
import { toast } from "react-toastify";
import Errorhandler from "../../ApiRequest/Errorhandler";
import { setLoading } from "../../utils/UtilSlice";
import { dispatch } from "../../Store";

export const SignUp = (data) => async () => {
  dispatch(setLoading(true))
  try {
    const res = await SignUpApi(data);
    if (res) {
      toast.success(res?.data?.message);
      window.location.href = "/verify-signup";
      dispatch(setLoading(false))
    }
  } catch (error) {
    dispatch(setLoading(false))
    Errorhandler(error);
  }
};

export const SignIn = (data) => async () => {
  dispatch(setLoading(true));
  try {
    const res = await SignInApi(data);

    sessionStorage.setItem("user", JSON.stringify(res?.data));
    sessionStorage.setItem("checkitAccessToken", res?.data?.accessToken);
    dispatch(setLoading(false))
    if (res) {
      toast.success("Login Sucessfully!");
      window.location.href = "/profile";
    }
  } catch (error) {
    Errorhandler(error);
    dispatch(setLoading(false))
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
