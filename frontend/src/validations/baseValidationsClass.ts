import toast from "react-hot-toast";

export default class BaseValidationClasses {
  showErrorToast(message: string) {
    toast.error(message);
  }
}
