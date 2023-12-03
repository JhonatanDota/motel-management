type FormInputProps = {
  label: string;
  value: string | undefined;
  setValue: (value: string) => void;
};

export default function FormTextInput(props: FormInputProps) {
  const { label, value, setValue } = props;

  return (
    <div className="flex flex-col gap-3">
      <label className="text-lg font-bold">{label}</label>
      <input
        className="rounded-md bg-gray-200 text-black p-3 outline-none"
        type="text"
        autoComplete="off"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
