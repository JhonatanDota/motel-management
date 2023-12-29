import { ReactNode } from "react";

type FormSelectProps = {
  label: string;
  children: ReactNode;
  value: string;
  setValue: (value: string) => void;
};

export default function FormSelect(props: FormSelectProps) {
  const { label, children, value, setValue } = props;

  function handleOnChange(event: React.FormEvent<HTMLSelectElement>) {
    const value: string = event.currentTarget.value;
    setValue(value);
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="label">{label}</label>
      <select
        className="appearance-none input"
        value={value}
        onChange={(event) => handleOnChange(event)}
      >
        <option value="">Selecione</option>
        {children}
      </select>
    </div>
  );
}
