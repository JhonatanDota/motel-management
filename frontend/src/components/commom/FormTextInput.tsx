type FormTextInputProps = {
  label: string;
  value: string | undefined;
  setValue: (value: string) => void;
};

export default function FormTextInput(props: FormTextInputProps) {
  const { label, value, setValue } = props;

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <label className="label">{label}</label>
      <input
        className="input"
        type="text"
        autoComplete="off"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
