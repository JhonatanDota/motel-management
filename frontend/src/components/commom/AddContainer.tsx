import { ReactNode } from "react";

type AddProps = {
  children: ReactNode;
};

export default function AddContainer(props: AddProps) {
  const { children } = props;
  return (
    <div className="flex flex-col bg-white gap-3 md:gap-5 p-4 md:p-8 rounded-md">
      {children}
    </div>
  );
}
