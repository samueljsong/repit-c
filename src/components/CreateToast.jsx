//Toast
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const createToast = () => {
  const warningToast = (message = "Error: Warning has occurred") => {
    toast.warning(message, {
        position: "bottom-center",
        theme: "dark"
    })
  };
  
  const failToast = (message = "Error: Task has failed.") => {
    toast.error(message, {
        position: "bottom-center",
        theme: "dark"
    })
  };

  const successToast = (message = "Task successfully completed!") => {
    toast.success(message, {
        position: "bottom-center",
        theme: "dark"
    })
  };

  const infoToast = (message = "Information here") => {
    toast.info(message, {
        position: "bottom-center",
        theme: "dark"
    })
  };

  return {
    warningToast,
    failToast,
    successToast,
    infoToast,
  };
};

export default createToast;
