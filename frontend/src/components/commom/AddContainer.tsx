import { ReactNode } from "react";

type AddProps = {
  children: ReactNode;
};

export default function AddContainer(props: AddProps) {
  const { children } = props;
  return (
    <div className="flex flex-col gap-3 bg-white p-4 rounded-md">
      {children}
    </div>
  );
}
