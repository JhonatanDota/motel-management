type FormInputProps = {
  label: string;
  value: string | undefined;
  setValue: (value: string) => void;
};

export default function FormTextInput(props: FormInputProps) {
  const { label, value, setValue } = props;

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <label className="text-lg md:text-2xl font-bold text-[#111827]">{label}</label>
      <input
        className="text-base md:text-2xl rounded-md border-4 border-[#111827] focus:border-[#F64E2B] text-black p-3 md:p-5 font-bold outline-none transition-colors duration-300"
        type="text"
        autoComplete="off"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
