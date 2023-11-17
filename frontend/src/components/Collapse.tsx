import { ReactNode, useState } from "react";

type CollapseProps = {
  title: string;
  children: ReactNode;
};

export default function Collapse(props: CollapseProps) {
  const { title, children } = props;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="flex flex-col gap-4 bg-[#111827] p-4"
    >
      <div className="flex justify-between">
        <p className="text-white font-bold">{title}</p>
      </div>
      {open && children}
    </div>
  );
}
