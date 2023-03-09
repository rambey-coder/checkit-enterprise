import { toast } from "react-toastify";

const Errorhandler = (error) => {
  console.log(error);

  if (error.message === "Network Error") {
    toast.error("Network Error");
  } else if (error.code === "ERR_BAD_RESPONSE") {
    toast.error("Something Went wrong");
  } else if (
    error.code === "ERR_BAD_REQUEST" ||
    error?.response?.data?.message !== ""
  ) {
    toast.error("Bad Request");
  } else {
    toast.error(error?.response?.data?.message);
  }

  // let err = error
  // switch (error) {
  //   case error.message === "Network Error":
  //     toast.error("Network Error");
  //     break;
  //   case error.code === "ERR_BAD_REQUEST":
  //     toast.error("Bad Request");
  //     console.log(error.status);
  //     break;
  //   case error.code === "ERR_BAD_RESPONSE":
  //     toast.error("Something Went wrong");
  //     break;

  //   default:
  //     break;
  // }
};

export default Errorhandler;
