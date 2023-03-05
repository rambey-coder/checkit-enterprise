import { toast } from "react-toastify";

const Errorhandler = (error) => {
  console.log(error);
  if (error.code === "ERR_NETWORK") {
    toast.error("Network Error");
  } else if (error.code === "ERR_BAD_REQUEST") {
    toast.error("Something Went wrong");
  }
};

export default Errorhandler;
