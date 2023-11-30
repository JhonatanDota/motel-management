type FormInputProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
};

export default function FormInput(props: FormInputProps) {
  const { label, value, setValue } = props;

  return (
    <div className="flex flex-col gap-3">
      <label className="font-bold">{label}</label>
      <input
        className="rounded-md bg-gray-200 text-black p-4 outline-none"
        type="text"
        autoComplete="off"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
