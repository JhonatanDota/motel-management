import axios, { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";

export function handleErrors(error: AxiosError | unknown): void {
  if (axios.isAxiosError(error)) {
    const response: AxiosResponse | undefined = error.response;

    try {
      if (response) {
        const errors: string[] = extractErrorsFromResponse(response);

        errors.forEach((error: string) => {
          toast.error(error);
        });
      } else {
        toast.error("Ocorreu um erro por parte do servidor.");
      }
    } catch (error) {
      toast.error("Ocorreu um erro");
    }
  }
}

function extractErrorsFromResponse(response: AxiosResponse): string[] {
  const responseData: [] = response.data;
  const errorsList: string[] = Object.values(responseData).flat();

  return errorsList;
}
