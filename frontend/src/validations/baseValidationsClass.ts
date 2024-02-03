import toast from "react-hot-toast";

export default abstract class BaseValidationClasses {
  showErrorToast(message: string) {
    toast.error(message);
  }

  abstract validateData(): boolean;
}
