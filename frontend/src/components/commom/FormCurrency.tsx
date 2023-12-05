import CurrencyInput from "react-currency-input-field";

type FormCurrencyProps = {
  label: string;
  value: number;
  setValue: (value: number) => void;
};

type CurrencyInputOnChangeValues = {
  float: number | null;
  formatted: string;
  value: string;
};

export default function FormCurrency(props: FormCurrencyProps) {
  const { label, value, setValue } = props;

  function handleValueChange(values: CurrencyInputOnChangeValues): void {
    const rawValue: number | null = values.float;
    rawValue ? setValue(rawValue) : setValue(0);
  }

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <label className="text-lg md:text-2xl font-bold">{label}</label>
      <CurrencyInput
        intlConfig={{ locale: "pt-BR", currency: "BRL" }}
        className="text-base md:text-2xl rounded-md bg-gray-200 text-black p-3 md:p-6 outline-none"
        defaultValue={value}
        onValueChange={(_, __, values) =>
          values != undefined ? handleValueChange(values) : null
        }
      />
    </div>
  );
}
