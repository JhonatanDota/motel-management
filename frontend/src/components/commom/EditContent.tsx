import { ReactNode } from "react";

type EditContentProps = {
  children: ReactNode;
};

export default function EditContent(props: EditContentProps) {
  const { children } = props;

  return (
    <div className="flex flex-col gap-3 bg-white p-3 md:p-6">{children}</div>
  );
}
