import { ChangeEvent, useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { PERMITTED_EXTENSIONS } from "../../constants";

type FormImageProps = {
  image?: File | string;
  setImage: (file?: File) => void;
};

export default function FormImage(props: FormImageProps) {
  const { image, setImage } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  function extractExtension(rawExtension: string): string {
    const split = rawExtension.split("/");
    const extension: string = split.length > 1 ? split[1] : "";

    return extension.toLowerCase();
  }

  function checkHaveFile(files: FileList): boolean {
    return files.length > 0;
  }

  function checkExtensionIsValid(extension: string): boolean {
    return PERMITTED_EXTENSIONS.includes(extension.toLowerCase());
  }

  function removeImage(): void {
    setImage();
  }

  function handleChangeImage(event: ChangeEvent<HTMLInputElement>): void {
    const files: FileList | null = event.target.files;

    if (files != null && checkHaveFile(files)) { //TODO: ACCEPT SVG IMAGES
      const file: File = files[0];

      const extension: string = extractExtension(file.type);

      if (checkExtensionIsValid(extension) === false) {
        event.target.value = "";
        removeImage();
        return; //TODO: PUT TOAST
      }

      setImage(file);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {image && (
        <img
          className="w-full h-52 md:h-72 object-contain my-4"
          src={typeof image === "string" ? image : URL.createObjectURL(image)}
          alt="preview"
        />
      )}

      <div className="flex gap-y-4 justify-around">
        <input
          ref={inputRef}
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleChangeImage}
        />
        <label
          onClick={() => inputRef.current?.click()}
          className="text-base md:text-2xl cursor-pointer text-center rounded-md font-bold p-4 md:p-6 text-white bg-[#111827]"
        >
          {image ? "Trocar imagem" : "Selecionar Imagem"}
        </label>

        {image && (
          <button
            onClick={removeImage}
            className="text-2xl md:text-3xl bg-black p-3 md:px-9 rounded-md"
          >
            <FaTrashAlt fill="white" />
          </button>
        )}
      </div>
    </div>
  );
}
