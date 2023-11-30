import { ReactNode } from "react";

type EditProps = {
  children: ReactNode;
};

export default function EditContainer(props: EditProps) {
  const { children } = props;

  return <div className="flex flex-col gap-3 w-full">{children}</div>;
}
