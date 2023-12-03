import { ReactNode } from "react";

type ConfirmActionButtonProps = {
  content: string | ReactNode;
  classes: string;
  onClick: () => void;
};

export default function ConfirmActionButton(props: ConfirmActionButtonProps) {
  const { content, classes, onClick } = props;
  return (
    <button onClick={onClick} className={`${classes}`}>
      {content}
    </button>
  );
}
