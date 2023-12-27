import { ReactNode } from "react";

type FormSelectProps = {
  label: string;
  children: ReactNode;
};

export default function FormSelect(props: FormSelectProps) {
  const { label, children } = props;

  return (
    <div className="flex flex-col gap-3">
      <label className="label">{label}</label>
      <select className="input">
        {children}
      </select>
    </div>
  );
}
