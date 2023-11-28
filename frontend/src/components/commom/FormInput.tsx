type FormInputProps = {
  label: string;
  name: string;
};

export default function FormInput(props: FormInputProps) {
  const { label, name } = props;

  return (
    <div className="flex flex-col gap-3">
      <label className="font-bold">{label}</label>
      <input
        className="rounded-md bg-gray-200 text-black p-4"
        type="text"
        name={name}
        autoComplete="off"
      />
    </div>
  );
}
