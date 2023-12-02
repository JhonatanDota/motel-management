import { ReactNode } from "react";

type EditContentProps = {
  children: ReactNode;
};

export default function EditContent(props: EditContentProps) {
  const { children } = props;

  return <div className="bg-white p-3">{children}</div>;
}
