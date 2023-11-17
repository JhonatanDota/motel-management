import { ReactNode } from "react";

type AddProps = {
  children: ReactNode;
};

export default function Add(props: AddProps) {
  const { children } = props;
  return <div className="bg-white p-4 rounded-md">{children}</div>;
}
