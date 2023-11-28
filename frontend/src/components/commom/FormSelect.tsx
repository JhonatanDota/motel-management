import { ReactNode } from "react";

type FormSelectProps = {
  label: string;
  options: ReactNode;
};

export default function FormSelect(props: FormSelectProps) {
  const { label, options } = props;

  return (
    <div className="flex flex-col gap-3">
      <label className="font-bold">{label}</label>
      <select className="rounded-md bg-gray-200 text-black p-4">
        {options}
      </select>
    </div>
  );
}
