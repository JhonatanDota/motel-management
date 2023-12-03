import { ReactNode } from "react";

type ConfirmActionButtonProps = {
  content: string | ReactNode;
  classes: string;
  onClick: () => void;
  disabled: boolean;
};

export default function ConfirmActionButton(props: ConfirmActionButtonProps) {
  const { content, classes, onClick, disabled } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${classes} disabled:animate-pulse`}
    >
      {content}
    </button>
  );
}
