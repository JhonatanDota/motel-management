import { extractNumbers } from "../../functions/parsers";

type FormNumberInputProps = {
  label: string;
  value: number | undefined;
  setValue: (value: number) => void;
};

export default function FormNumberInput(props: FormNumberInputProps) {
  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const value: string = event.currentTarget.value;
    const number: number = extractNumbers(value);

    setValue(number);
  }

  const { label, value, setValue } = props;

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <label className="label">{label}</label>
      <input
        className="input"
        type="text"
        autoComplete="off"
        value={value}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
}
