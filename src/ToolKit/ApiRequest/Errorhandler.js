import { toast } from "react-toastify";

const Errorhandler = (error) => {
  console.log(error);
  if (error.message === "Network Error") {
    toast.error("Network Error");
  } else if (error.code === "ERR_BAD_REQUEST" || error.code === "ERR_BAD_RESPONSE") {
    toast.error("Something Went wrong");
  }
};

export default Errorhandler;
