type SubmitButtonProps = {
  text: string;
  extraClasses?: string;
};

export default function SubmitButton(props: SubmitButtonProps) {
  const { text, extraClasses } = props;

  return (
    <button className={`text-base md:text-2xl font-bold p-3 md:p-5 rounded-md ${extraClasses}`}>
      {text}
    </button>
  );
}
