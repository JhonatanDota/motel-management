import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  extraClasses?: string;
};

export default function PageContainer(props: PageContainerProps) {
  const { children, extraClasses } = props;

  return (
    <div className={`flex flex-col gap-4 items-center ${extraClasses ?? ""}`}>
      {children}
    </div>
  );
}
