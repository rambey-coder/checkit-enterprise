import { toast } from "react-toastify";

const Errorhandler = (error) => {
  console.log(error);

  if (error.message === "Network Error") {
    toast.error("Network Error");
  } else if (error.code === "ERR_BAD_REQUEST") {
    toast.error("Something Went wrong");
  } else if (error.code === "ERR_BAD_RESPONSE") {
    toast.error("Something Went wrong");
  }


  // let err = error
  // switch (err) {
  //   case error.message === "Network Error":
  //     toast.error("Network Error");
  //     break;
  //   case err.code === "ERR_BAD_REQUEST":
  //     toast.error("Something Went wrong");
  //     break;
  //   case err.code === "ERR_BAD_RESPONSE":
  //     toast.error("Something Went wrong,");
  //     break;

  //   default:
  //     break;
  // }
};

export default Errorhandler;
