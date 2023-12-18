type SubmitButtonProps = {
  text: string;
  extraClasses?: string;
};

export default function SubmitButton(props: SubmitButtonProps) {
  const { text, extraClasses } = props;

  return (
    <button className={`text-base font-bold p-3 rounded-md ${extraClasses}`}>
      {text}
    </button>
  );
}
